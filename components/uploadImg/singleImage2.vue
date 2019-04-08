<template>
  <div class="upload_img" >
    <input 
      type="file"
      multiple="multiple"
      @change="beforeUpload" 
    >
    <div class="upload_img_list">
      <ul>
        <li 
          v-for="(item,index) in imgUrlList2" 
          :key="index">
          {{ item }}
          <a @click="deleteImg(index)">删除图片</a>
          <img :src="item">>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let api = {
  postInfo: function(url) {
    let p = new Promise(function(resolve, reject) {
      $.ajax({
        url: '/api' + url,
        type: 'GET',
        dataType: 'json',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          resolve(res)
        },
        error: function(err) {
          reject(err)
        }
      })
    })
    return p
  },
  uploadImg: function(url, form) {
    let p = new Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        type: 'POST',
        // dataType: 'json',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,
        // headers: { 'Content-Type': 'multipart/form-data' },
        data: form,
        success: function(res) {
          // var url = $(res)
          //   .find('Location')
          //   .text()
          // console.log('图片url:', url)
          resolve(res)
        },
        error: function(err) {
          reject(err)
          console.log()
        }
      })
    })
    return p
  }
}

export default {
  name: 'SingleImageUpload',
  props: {},
  data() {
    return {
      dir: '',
      policy: '',
      OSSAccessKeyId: '',
      signature: '',
      success_action_status: '',
      url: '',
      filelist: [],
      imgUrlList: [],
      imgUrlList2: []
    }
  },
  watch: {
    imgUrlList: function(newVal, oldVal) {
      this.imgUrlList2 = newVal
    }
  },
  mounted() {},
  methods: {
    init() {
      var _this = this

      var url =
        '/anfacommonservice/common/oss/v1/policy?access_token=' +
        $.cookie('access_token')
      return api.postInfo(url).then(
        function(res) {
          _this.dir = res.data.dir
          _this.policy = res.data.policy
          _this.OSSAccessKeyId = res.data.accessid
          _this.signature = res.data.signature
          _this.success_action_status = '201'
          _this.url = res.data.host
          console.log('1', res)
          console.log('zid', _this.dir)
          console.log('----------')
          console.log('_this.handleUpload', _this.handleUpload)
          _this.handleUpload(_this.fileList)
        },
        function() {
          layer.msg('请求失败!')
          return false
        }
      )
    },
    // 保存上传
    handleUpload(file) {
      let _this = this
      return new Promise((resolve, reject) => {
        // options.file
        // 只处理jpg图片

        var name = file.name
        name = !name ? Math.random() + '.jpg' : name
        // 表单域 file 必须为最后一个表单域；
        var type = name.match(/([^\.]+)$/)
        type = type ? '.' + type[1] : ''

        console.log('haha')

        let fn = files => {
          const form = new FormData()
          const url = _this.url

          let strsss =
            _this.dir +
            'uploadfile/' +
            (/(jpe?g|png|bmp|gif)/i.test(type) ? +new Date() + type : name)
          form.append('key', strsss)
          // form.append('key', _this.key)
          form.append('success_action_status', '201')
          form.append('OSSAccessKeyId', _this.OSSAccessKeyId)
          form.append('policy', _this.policy)
          form.append('signature', _this.signature)
          form.append('file', files)

          console.log('key1', _this.key, _this.dir)
          console.log('OSSAccessKeyId2', _this.OSSAccessKeyId)
          console.log('policy3', _this.policy)
          console.log('signature4', _this.signature)
          console.log('file5', files)
          console.log('form', form)
          // return false
          // fetch
          //   .post(url, form, {
          //     headers: { 'Content-Type': 'multipart/form-data' }
          //   })
          //   .then(xml => {
          //     resolve(xml)
          //   })
          //   .catch(err => {
          //     reject(err)
          //     this._handlerCatchMsg(err, '上传失败:')
          //   })
          console.log('上传图片')
          _this.postUploadImg(form)
        }

        if (/\.jpe?g/.test(type)) {
          lrz(options.file, {
            width: 1024
          })
            .then(rst => {
              console.log('rst', rst)
              fn(rst.file)
            })
            .catch(err => {
              reject(err)
              // this._handlerCatchMsg(err, '上传失败：')
            })
        } else {
          fn(file)
        }
      })
    },
    postUploadImg(form) {
      let _this = this
      console.log('提交表单', form)
      // 上传接口
      console.log('阿里云地址1')
      console.log('URL', this.url)
      api.uploadImg(this.url, form).then(
        res => {
          console.log('阿里云图片的地址', res)
          let url = $(res)
            .find('Location')
            .text()
          console.log('打印图片url:', url)
          _this.imgUrlList.push(url)
          this.$emit('imgData', _this.imgUrlList2)
        },
        err => {
          layer.msg('上传图片失败！')
        }
      )
    },

    beforeUpload(_file) {
      let _this = this
      //上传图片之前

      let options = _file.target.files || _file.dataTransfer.files
      let len = options.length
      if (options.length > 3) {
        layer.msg('不能上传超过三张图片！')
        return false
      }
      for (let i = 0; i < len; i++) {
        console.log(_this)
        _this.filesFn(options[i])
      }
    },
    //处理压缩图片
    filesFn(files) {
      let _this = this
      let file = files
      // if (!files.length) return
      console.log('file', file.name, file)

      const isJPG =
        /image\/\w+/.test(file.type) && /(jpe?g|png)/i.test(file.type)
      const isLt5M = file.size / 1024 / 1024 < 5
      let type = file.name.match(/([^\.]+)$/)
      type = type ? '.' + type[1] : ''

      return new Promise((resolve, reject) => {
        if (!isJPG) {
          layer.msg('上传头像图片只能是 JPG/PNG 格式!')
          reject(false)
        } else if (!isLt5M) {
          layer.msg('上传头像图片大小不能超过 5MB!')
          reject(false)
        } else {
          // 上传前统一取一下凭证
          _this.fileList = file
          this.init()
            .then(res => {
              // 设置文件名

              // setTimeout(() => {
              resolve(true)
              // }, 10 * 1000)
            })
            .catch(err => {
              // this._handlerCatchMsg(err)
              resolve(false)
            })
        }
      })
    },
    //删除图片
    deleteImg(i) {
      this.imgUrlList.splice(i, 1)
      this.$emit('imgData', this.imgUrlList2)
      console.log(this.imgUrlList)
    }
  }
}
</script>
<style lang="scss">
</style>
