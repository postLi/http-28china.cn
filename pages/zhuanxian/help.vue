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
        class="form_help"
        name="zxaddform"
        method="post"
        action="">
        <input
          name="a7"
          type="hidden"
          value="0">
        <input
          type="hidden"
          name="mid"
          value="19">
        <input
          type="hidden"
          name="dopost"
          value="search">
        <div
          id="wlLineFrom1"
          class="fl list_input"
          style="position:relative;">
          <input
            name="cfd"
            style="height: 100%;"
            type="text"
            data-toggle="city-picker"
            data-level="district"
            placeholder="请输入出发地">
        </div>
        <div
          id="wlLineTo1"
          class="fl list_input"
          style="position:relative;">
          <input
            name="ddd"
            style="height: 100%;"
            data-toggle="city-picker"
            data-level="district"
            type="text"
            placeholder="请输入到达地">
        </div>
   
      </form>
      <div
        class=""
        style="">
        <button
          class=""
          style="width: 290px;margin-left: 110px;;padding: 10px 0;background: rgb(50,170,86);border: none;color:#fff"
          @click="onTIJ">提交</button>
        <!-- <p
          style="margin-left: 110px;;height: 30px;
    line-height: 30px;font-size:16px;padding-top:25px">提交成功后客服将在一个工作日内与您取得联系</p> -->
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
  head: {
    link: [
      // { rel: 'stylesheet', href: '/css/article_huoyuan.css' },
      // { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ],
    script: [
      { src: '../vendor/layer/layer.js' }
      // { src: '../js/jquery.pagination.min.js' },
      // { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
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
    // seajs.use(['/js/city-pic kerdyu.js'ghgh   ])
    $('#wlLineFrom1 input').citypicker()
    $('#wlLineTo1 input').citypicker()
    // $('#addressTo input').on('mouseenter', () => {
    //   // alert('')
    //   // this.setMap()
    // })
    // $('#addressTo input').val(this.$route.query.address || '')
  },
  methods: {
    setMap() {
      // this.searchDo()
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
      let isFalse = false
      if (this.form.name === '') {
        this.ismobile = true
        this.falseMsg = '请输入园区名称'
        isFalse = false
        // alert('this.form.name', this.form.name)
        return false
      } else {
        isFalse = true
      }
      this.form.address = $('.address').attr('thepcd')
      if (this.form.address === '') {
        this.ismobile = true
        this.falseMsg = '请输入园区地址'

        // alert('this.form.address', this.form.address)
        return false
      } else {
        isFalse = true
        if ($('.address').attr('thepos')) {
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
        }
      }

      // console.log(this.form, 'this.form')
      if ((isFalse = true)) {
        // console.log(this.form, 'this.form2 ')
        this.form.mobile = this.info

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
      }
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
.form_help {
  padding-bottom: 20px;
  margin-bottom: 10px;
  .city-picker-span {
    padding-top: 7px;
  }
  .city-picker-span .arrow {
    background: url('../../static/images/index/01xx.png');
    top: 80%;
  }
  .list_input {
    width: 161px;
    height: 32px;
    border-radius: 2px;
    border: solid 1px #e5e5e5;
    background: none;
    color: #333;
    font-size: 13px;
    padding-left: 9px;
  }
  #wlLineFrom {
    width: 280px;
    background: #fff;
    padding-right: 20px;
    margin-bottom: 10px;
  }
  #wlLineTo {
    width: 280px;
    background: #fff;
    padding-right: 20px;
    margin-bottom: 10px;
    .list_input {
      width: 161px;
      height: 32px;
      border-radius: 2px;
      border: solid 1px #e5e5e5;
      background: none;
      color: #333;
      font-size: 13px;
      padding-left: 9px;
    }
  }
  .textare {
    width: 282px;
    height: 64px;
    padding: 10px 12px 10px 12px;
    border: solid 1px #e5e5e5;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .textinput {
    width: 180px;
    height: 34px;
    border: solid 1px #e5e5e5;
    line-height: 34px;
    padding-left: 13px;
  }
  .phone-btn {
    width: 100px;
    height: 34px;
    background-color: #589def;
    border: none;
    margin-left: 3px;
    color: #ffffff;
    cursor: pointer;
  }
  .phone-btn:hover {
    background-color: #2577ff;
  }
  /*.list-box-r-top {*/
  /*background: rgba(255, 255, 255, 0.1);*/
  /*padding-top: 0 !important;*/
  /*margin-bottom: 0px !important;*/
  /*}*/

  /*.phone-btn {*/
  /*font-size: 14px;*/
  /*padding: 7px 18px;*/
  /*margin-left: 10px;*/
  /*background-color: #589def;*/
  /*color: #ffffff;*/
  /*border-style: none;*/
  /*}*/
  /*.phone-btn:hover {*/
  /*background-color: #2577ff;*/
  /*}*/
}
</style>
