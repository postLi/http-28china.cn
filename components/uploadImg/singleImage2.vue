<template>
  <div class="upload" >
    <div class="upload_file_box">
      <i class="iconfont iconziyuan"/>
      上传图片
      <input 
        id="upload_img"
        class="upload_file_box_input"
        type="file"
        multiple="multiple"
        @change="beforeUpload" 
      >
    </div>
    <!-- 上传的按钮 -->
    <div class="upload_img">
      <ul class="img_list">
        <li 
          v-for="(item,index) in imgUrlList" 
          :key="index">
          <a 
            @click="enlargeFn(item)" 
            class="icon_fangda"><i class="iconfont iconfangda"/>
          </a>
          <a 
            @click="deleteImgFn(index)" 
            class="iconf_delete"><i class="iconfont icondelete"/>
          </a>
          <img :src="item">
        </li>
      </ul>
    </div>
    <!-- 上传图片的列表 -->
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
          resolve(res)
        },
        error: function(err) {
          reject(err)
        }
      })
    })
    return p
  }
}

export default {
  name: 'SingleImageUpload',
  props: {
    istoken: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      dir: '',
      policy: '',
      OSSAccessKeyId: '',
      signature: '',
      success_action_status: '',
      url: '',
      fileList: [],
      curFile: {},
      imgUrlList: []
    }
  },
  // watch: {
  //   imgUrlList: function(newVal, oldVal) {
  //     this.imgUrlList2 = newVal
  //   }
  // },
  mounted() {},
  methods: {
    init(curFile) {
      var _this = this
      console.log('上传图片列表', _this.fileList, _this.curFile)
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

          _this.handleUpload(curFile)
        },
        function() {
          layer.msg('您还没有登录,请求失败!')
          return false
        }
      )
    },
    // 保存上传
    handleUpload(file) {
      console.log('3保持图片上传列表', file)
      let _this = this
      // return new Promise((resolve, reject) => {
      // options.file
      // 只处理jpg图片
      let name = file.name
      name = !name ? Math.random() + '.jpg' : name
      // 表单域 file 必须为最后一个表单域；
      var type = name.match(/([^\.]+)$/)
      type = type ? '.' + type[1] : ''

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

        _this.postUploadImg(form)
      }
      if (/\.jpe?g/.test(type)) {
        lrz(file, {
          width: 1024,
          quality: 0.7
        })
          .then(rst => {
            fn(rst.file)
          })
          .catch(err => {
            reject(err)
          })
      } else {
        fn(file)
      }
    },
    postUploadImg(form) {
      let _this = this
      // 上传接口
      api.uploadImg(this.url, form).then(
        res => {
          let url = $(res)
            .find('Location')
            .text()
          _this.imgUrlList.push(url)
          console.log('打印图片url:', _this.imgUrlList)
          console.warn('emit')
          this.$emit('imgData', _this.imgUrlList)
        },
        err => {
          layer.msg('上传图片失败！')
        }
      )
    },

    beforeUpload(_file) {
      if (!$.cookie('access_token') && this.istoken) {
        this.istokenFn()
        return false
      }
      let _this = this
      //上传图片之前

      let options = _file.target.files || _file.dataTransfer.files
      let len = options.length
      console.log('options', options)
      this.fileList = options
      if (options.length > this.limit) {
        layer.msg('不能上传超过三张图片！')
        return false
      }
      for (let i = 0; i < len; i++) {
        _this.filesFn(this.fileList[i])
      }
    },
    //处理压缩图片
    filesFn(files) {
      console.log('files', files)
      let _this = this
      let file = files
      // if (!files.length) return

      const isJPG =
        /image\/\w+/.test(file.type) && /(jpe?g|png)/i.test(file.type)
      const isLt5M = file.size / 1024 / 1024 < 5
      let type = file.name.match(/([^\.]+)$/)
      type = type ? '.' + type[1] : ''

      // return new Promise((resolve, reject) => {
      if (!isJPG) {
        layer.msg('上传头像图片只能是 JPG/PNG 格式!')
        reject(false)
      } else if (!isLt5M) {
        layer.msg('上传头像图片大小不能超过 5MB!')
        reject(false)
      } else {
        // 上传前统一取一下凭证
        _this.curFile = file
        console.log('_this.curFile', _this.curFile)
        this.init(_this.curFile)
        // .then(res => {
        //   // 设置文件名
        //   // setTimeout(() => {
        //   // resolve(true)
        //   // }, 10 * 1000)
        // })
        // .catch(err => {
        //   // this._handlerCatchMsg(err)
        //   // resolve(false)
        // })
      }
      // })
    },
    //删除图片
    deleteImgFn(num) {
      this.imgUrlList = this.imgUrlList.filter((val, index, arr) => {
        return num !== index
      })

      // this.imgUrlList = this.imgUrlList.splice(i, 1)
      this.$emit('imgData', this.imgUrlList)
    },
    //清空图片数组数据
    clearimgFn() {
      document.getElementById('upload_img').value = ''
      this.imgUrlList = []
    },
    //登录验证
    istokenFn() {
      if (this.$parent.loginFn) {
        this.$parent.loginFn()
      }
    },
    //点击放大图片
    enlargeFn(src) {
      let imgHtml = `<img src="${src}" />`
      layer.open({
        type: 1,
        title: '图片查看',
        area: ['60%', '80%'],
        shadeClose: true, //点击遮罩关闭
        content: imgHtml
      })
    }
  }
}
</script>
<style lang="scss"  scoped>
/*上传图标的按钮*/
.upload_file_box {
  position: relative;
  width: 120px;
  height: 36px;
  margin: 0;
  padding: 0;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #0e91e9;
  color: #fff;
  border-radius: 5px;
  .iconfont {
    padding-right: 5px;
  }
  .upload_file_box_input {
    position: absolute;
    width: 100%;
    height: 36px;
    left: 0;
    top: 0;
    z-index: 1;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -webkit-opacity: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
  }
}
/*上传图片的列表*/
.upload_img {
  margin-top: 20px;
  .img_list {
    overflow: hidden;
    li {
      position: relative;
      float: left;
      margin-right: 30px;
      > a {
        .iconfont {
          font-size: 14px;
        }
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25ppx;
        line-height: 25px;
        text-align: center;
        background: red;
        color: white;
        border-radius: 50%;
        cursor: pointer;
        &.icon_fangda {
          right: 50px;
        }
      }
      > img {
        width: 100%;
        height: 100%;
        max-width: 150px;
        max-height: 150px;
      }
    }
  }
}
</style>
