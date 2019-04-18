<template>
  <LLLDialog
    v-if="showDiv"
    @close="closeDialog"
  >
    <!-- <div 
      slot="header"
    >bt</div> -->
    <div slot="content">
      <dd class="searchform">
        <form
          name="zxaddform"
          method="post"
          action="" >
          <input
            name="a7"
            type="hidden"
            value="0">
          <input
            type="hidden"
            name="mid"
            value="19" >
          <input
            type="hidden"
            name="dopost"
            value="search" >
          <div
            class="fl list_input"
            style="position:relative;" >
            <input
              name="cfd"
              style="height: 100%;"
              data-toggle="city-picker"
              data-level="district"
              type="text"
              placeholder="请输入出发地" >
          </div>
          <img
            class="fl list_img"
            src="/images/list_wlzx/02jiantou.png">
          <div
            class="fl list_input"
            style="position:relative" >
            <input
              name="ddd"
              style="height: 100%;"
              data-toggle="city-picker"
              data-level="district"
              type="text"
              placeholder="请输入到达地" >
          </div>
          <input
            id="search_huoyuan"
            readonly
            name="Submit2"
            value=" 搜索 "
            class="list_button"
            @click="search()">
          <input
            id="flush"
            name="Submit2"
            readonly
            value="重置 "
            class="list_button"
            @click="reload()">
        </form>
      </dd>
    </div>
    <!-- <div slot="footer"/> -->
  </LLLDialog>
</template>

<script>
import LLLDialog from '@/components/popDialog'
export default {
  name: 'Map',
  components: {
    LLLDialog
  },

  props: {
    showMap: {
      type: Boolean,
      default: false
    }
  },
  head: {
    link: [
      // { rel: 'stylesheet', href: '/css/basic.css' },
      // { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      // { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' }
      // { src: '/js/gaodemap2.js' },

      // { src: '/layer/layer.js' },
      // { src: '/js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      llltitle: 'drewrw'
    }
  },

  computed: {
    showDiv(n, o) {
      return this.showMap
    }
  },
  watch: {
    showMap(n, o) {}
  },
  mounted() {
    // $('#wlyqline input').citypicker({
    //   province: this.vo1.locationProvince,
    //   city: this.vo1.locationCity,
    //   district: this.vo1.locationArea
    // })
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
// .form_findme {
//   padding-bottom: 20px;
//   margin-bottom: 10px;
//   .city-picker-span {
//     padding-top: 7px;
//   }
//   .city-picker-span .arrow {
//     background: url('../../static/images/index/01xx.png');
//     top: 80%;
//   }
//   #wlyqline {
//     width: 280px;
//     background: #fff;
//     padding-right: 20px;
//     margin-bottom: 10px;
//   }
//   #wlLineTo {
//     width: 280px;
//     background: #fff;
//     padding-right: 20px;
//     margin-bottom: 10px;
//     .list_input {
//       width: 161px;
//       height: 32px;
//       border-radius: 2px;
//       border: solid 1px #e5e5e5;
//       background: none;
//       color: #333;
//       font-size: 13px;
//       padding-left: 9px;
//     }
//   }
//   .textare {
//     width: 282px;
//     height: 64px;
//     padding: 10px 12px 10px 12px;
//     border: solid 1px #e5e5e5;
//     border-radius: 3px;
//     margin-bottom: 10px;
//   }
//   .textinput {
//     width: 180px;
//     height: 34px;
//     border: solid 1px #e5e5e5;
//     line-height: 34px;
//     padding-left: 13px;
//   }
//   .phone-btn {
//     width: 100px;
//     height: 34px;
//     background-color: #589def;
//     border: none;
//     margin-left: 3px;
//     color: #ffffff;
//     cursor: pointer;
//   }
//   .phone-btn:hover {
//     background-color: #2577ff;
//   }
//   /*.list-box-r-top {*/
//   /*background: rgba(255, 255, 255, 0.1);*/
//   /*padding-top: 0 !important;*/
//   /*margin-bottom: 0px !important;*/
//   /*}*/

//   /*.phone-btn {*/
//   /*font-size: 14px;*/
//   /*padding: 7px 18px;*/
//   /*margin-left: 10px;*/
//   /*background-color: #589def;*/
//   /*color: #ffffff;*/
//   /*border-style: none;*/
//   /*}*/
//   /*.phone-btn:hover {*/
//   /*background-color: #2577ff;*/
//   /*}*/
// }
</style>
