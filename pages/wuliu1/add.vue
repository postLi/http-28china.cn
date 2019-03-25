<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"
    :title="popTitle">

    <div slot="header">园区免费入驻</div>
    <div
      class="dialog_publish_main"
      slot="main">
      <form
        class="layui-form"
        action=""
        style="width: 400px;">
        <div
         
        class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>园区名称:</label>
          <div class="layui-input-block">
            <input
              maxlength="50"
              type="text"
              placeholder="请输入园区名称"
              class="layui-input"
              v-model="form.name">
          </div>
         
        </div>
    
        <div 
         
          style="margin-left: 40px;border-color: #fff;margin-bottom:30px"
          class="select_con"
          id="addMap"
        >
          <dl>
            
            <dt style="height:32px;line-height:32px;font-size:14px;"><i style="color: red">*</i>园区地址：</dt>
            <dd>
              <form
                name="zxaddform"
                method="post"
                action=""
                style="float:left;"
              >

                <div
                  id="addressTo"
                  class="fl list_input"
                  style="position:relative; width: 275px;" >
                  <input
                    name="ddd"
                    style="height: 100%;width:100%;border: none;outline: none;font-size:14px;"
                    wtmap="detail"
                    type="text"
                    placeholder=" 请选择园区地址

" 
                    class="address">
                </div>

              </form>
              <br>
            </dd>


          </dl>
        </div>

        <div
          style="margin-bottom:30px"
          class="layui-form-item">
          <label class="layui-form-label">联系人:</label>
          <div class="layui-input-block">
            <input
              maxlength="20"
              type="text"
              placeholder="请输入联系人姓名"
              class="layui-input"
              v-model="form.contact">
            <p
              v-if="ismobile"
              style="color: red;text-align: center;padding-top:10px">{{ falseMsg }}</p>
          </div>

        </div>


      </form>
      <div
        class=""
        style="">
        <button
          class=""
          style="width: 290px;margin-left: 110px;;padding: 10px 0;background: rgb(50,170,86);border: none;color:#fff"
          @click="onTIJ">提交</button>
        <p
          style="margin-left: 110px;;height: 30px;
    line-height: 30px;font-size:16px;padding-top:25px">提交成功后客服将在一个工作日内与您取得联系</p>
        <p style="margin-left: 110px;;height: 30px;line-height: 30px;font-size:20px;color:rgb(50,170,86);padding:20px 0 20px 20px">免费咨询  400-999-2828

        </p>
      </div>

    </div>
    <div slot="footer"/>
  </LllDialog>
</template>
<script>
import LllDialog from '../../components/lllDialog'
export default {
  name: 'Add',
  components: {
    LllDialog
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    types: {
      type: Number,
      default: 1
    },
    info: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // isShow: this.show,
      popTitle: '提货派车单',
      falseMsg: '',
      form: {
        contact: '',
        address: '',
        // msg: '',
        name: ''
      },
      isCompanyName: false,
      isContactsName: false,
      ismobile: false,
      startProvince: '',
      startCity: '',
      startArea: '',
      endProvince: '',
      endCity: '',
      endArea: ''
    }
  },

  computed: {
    showDiv(n, o) {
      return this.show
    }
  },
  watch: {
    types(n, o) {},
    info(n, o) {},
    showDiv(n, o) {
      if (n == true) {
      } else {
        this.info = ''
        this.$emit('fromAdd', this.info)
      }
    }
  },
  mounted() {
    seajs.use(['/js/gaodemap2.js'])
    $('#addressTo input').on('mouseenter', () => {
      // alert('')
      this.setMap()
    })
    $('#addressTo input').val(this.$route.query.address || '')
  },
  methods: {
    setMap() {
      this.searchDo()
      $('#addressTo input').attr(
        'wtmapinit',
        this.startProvince + this.startCity + this.startArea
      )
      // console.log(this.startProvince, this.startCity, this.startArea)
    },
    searchDo() {
      let list1 = [],
        list2 = []
      // $('#addressFrom .select-item').each(function(i, e) {
      //   list1.push($(this).text())
      //   console.log(list1, 'list1')
      // })
      // this.startProvince = list1[0] ? list1[0] : ''
      // this.startCity = list1[1] ? list1[1] : ''
      // this.startArea = list1[2] ? list1[2] : ''

      $('#addressTo .select-item').each(function(i, e) {
        list2.push($(this).text())
        console.log(list2, 'list2list2')
      })
      this.endProvince = list2[0] ? list2[0] : ''
      this.endCity = list2[1] ? list2[1] : ''
      this.endArea = list2[2] ? list2[2] : ''
    },
    onTIJ() {
      let aurl = ''

      if (this.form.name === 0) {
        this.ismobile = true
        this.falseMsg = '请输入园区名称'
        return false
      }
      this.form.address = $('.address').attr('thepcd')
      if (this.form.address === 0) {
        this.ismobile = true
        this.falseMsg = '请输入园区地址'
        return false
      }
      this.form.mobile = this.info
      let thepos = []
      thepos = $('.address')
        .attr('thepos')
        .split(',')
      this.form.longitude = thepos[0]
      this.form.latitude = thepos[1]

      this.form.province = $('.address').attr('theprovince')
      this.form.city = $('.address').attr('thecity')
      this.form.area = $('.address').attr('thearea')
      if (this.form.province === '北京市') {
        this.form.city = '北京市'
        // console.log(this.form.city, 'this.this.form.city')
      } else if (this.form.province === '天津市') {
        this.form.city = '天津市'
      } else if (this.form.province === '上海市') {
        this.form.city = '上海市'
      }
      console.log(this.form, 'this.form')
      this.$axios
        .post(aurl + '/28-web/logisticsPark/entering/apply/', this.form)
        .then(res => {
          // console.log(res, 'ressss')
          if (res.data.status == 200) {
            layer.msg('提交成功')
            this.$emit('close')
            this.form = {}
            this.info = ''
            this.$emit('fromAdd', this.info)
          } else {
            layer.msg(res.data.errorInfo ? res.data.errorInfo : res.data.text)
          }
        })
    },
    // 留言类型（type  ） 1-入驻 2-推荐
    closeDialog() {
      this.$emit('close')
      this.form = {}
      this.ismobile = false
      // this.$emit('update:show', false)

      //把绑定的弹窗数组 设为false即可关闭弹窗
    }
  }
}
</script>

<style lang="scss">
</style>
