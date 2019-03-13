<template>
  <div class="detail_list">
    <div
      id="js002"
      class="w1036" >
      <!-- 
      <div class="zx_sx"><span class="biaozhi"/><span>物流公司列表</span></div>


      <div
        v-if="!info.length"
        class="list_none">
        <span>暂时没有找到您要查询的信息，可以看看其他物流公司哦</span>
        <img src="../static/gongsi/images/none_pic.png">
      </div> -->



      <div>
        <ul
          v-for="(item, index) in info"
          :key="index"
          class="wlzx_list">
          <li
            class="wlzx_list_1"
            style="position: relative"
          ><a
            id="nr_a21"
            :href="'/member/'+ item.id"
            target="_blank">
            <img
              v-if="item.companyFacadeFile == '' || item.companyFacadeFile == null"
              :src="require('../static/images/pic/bg' + item.num + '.png')"
              class="scrollLoading"
              width="165"
              height="125"
            >
            <!--:src="require('../static/images/pic/bg' + item.num + '.png')"-->
            <img
              v-else
              :data-code="item.num"
              :src="item.companyFacadeFile"
              class="scrollLoading"
              width="165"
              height="125"
            >
          </a></li>
          <li class="wlzx_list_2">
            <p class="p1">
              <a
                id="nr02"
                href="#"
              ><span>{{ item.companyName }}</span>
                <span v-if="item.isEq">
                  <img
                    v-for="(item, index) in item.eq1"
                    :key="index"
                    class="xy_zuan"
                    src="../static/gongsi/images/blue.gif">
                </span>
                <span v-if="item.isHZhuan">
                  <img
                    v-for="(item, index) in item.hZhuan"
                    :key="index"
                    class="xy_zuan"
                    src="../static/gongsi/images/34huanguan.gif">
                </span>
                <span v-if="item.isHZhuan">
                  <img
                    v-for="(item, index) in item.hZhuan"
                    :key="index"
                    class="xy_zuan"
                    src="../static/gongsi/images/34huanguan.gif">
                </span>
              </a>
              <!--<i style="">信誉:</i>-->

              <!--<img-->
              <!--class="xy_zuan"-->
              <!--src="require('../static/gongsi/images/blue.gif')">-->
              <!--<img-->
              <!--class="xy_zuan"-->
              <!--src="../../static/gongsi/images/blue.gif">-->
              <!--<img-->
              <!--class="xy_zuan"-->
              <!--src="../../static/gongsi/images/blue.gif">-->
              <!--<img-->
              <!--class="xy_zuan"-->
              <!--src="../../static/gongsi/images/blue.gif">-->
              <!--<img-->
              <!--class="xy_zuan"-->
              <!--src="../../static/gongsi/images/blue.gif">-->
              <!--<img-->
              <!--v-for="(item,i) in 5"-->
              <!--:key="i"-->
              <!--class="xy_guan"-->
              <!--src="../static/gongsi/images/34huanguan.gif">-->
              <!--<img-->
              <!--class="wlgs_shiming"-->
              <!--src="../static/gongsi/images/wlgs_shiming.png">-->
              <!--<img-->
              <!--class="wlgs_xinyong"-->
              <!--src="../static/gongsi/images/xinyong.png">-->
              <!--<img-->
              <!--class="wlgs_danbao"-->
              <!--src="../static/gongsi/images/wlgs_danbao.png">-->

            </P>
            <p class="p2"><i>联系人：</i><font id="nr04">{{ item.contactsName }}</font><a
              style="padding-left: 5px"
              :href="'http://wpa.qq.com/msgrd?v=3&uin='+item.qq+'&site=qq&menu=yes'"
              target="_blank"><img
                src="../static/gongsi/images/15qq.gif"
                alt=""></a></p>
            <p class="p3"><i>电话：</i><font id="nr05">{{ (item.contactsTel?item.contactsTel:'') + (item.mobile?','+item.mobile:'') }}</font></p>
            <p class="p4"><i>地址：</i><font
            class="">{{ item.address.length>18?item.address.substring(0,17)+'..' :item.address }}</font></p>
          </li>
          <li class="wlzx_list_3">
            <p class="p1"><i>经营范围：</i><span
              v-for="(item,index) in item.productServiceNameList.slice(0,3)"
              :key="index"
              style="padding-right: 5px">{{ item }}</span>..</P>
            <p class="p2"><i>增值服务：</i><span
              v-for="(item,index) in item.allServiceNameList.slice(0,3)"
              :key="index"
              style="padding-right: 5px"
            >{{ item }}</span>..</p>

          </li>
          <li class="wlzx_list_6">
            <p class="p1"><a
              :href="'/member/'+item.id+'-order'+'?publishId='+item.id"
              target="_blank"><input
                readonly=""
                value="下单"></a>
            </p><p class="p2"><a
              :href="'/member/'+item.id"
              target="_blank"><input
                readonly=""
                value="查看官网"></a>
          </p><p class="p3"/></li>
        </ul>
      </div>

    </div>




  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    info: {
      type: [Object, Array],
      default: () => {}
    }
  },

  watch: {
    info: {
      handler(n, o) {
        console.log(n, 'nnn')
      },
      deep: true
    }
  },
  mounted() {
    // console.log(this.info, 'infofdf')
    // this.info.forEach(item => {
    //   // item.num = Math.ceil(Math.random() * 30)
    // })
  },
  methods: {
    openqq() {
      window.open('http://wpa.qq.com/msgrd?v=3&uin=4009992828&site=qq&menu=yes')
    }
  }
}
</script>

<style lang="scss">
.detail_list {
  .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:before {
    content: '';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .w1036 {
    width: 1036px;
    /*OVERFLOW: hidden;*/
    border: 1px solid #eee;
    border-bottom: 0;
    border-bottom: 2px solid #2577e3;
    margin-bottom: 1px;
  }
  .wlzx_list {
    border: 0px;
    width: 1034px;
    height: 150px;
    padding-top: 30px;
    overflow: hidden;
    margin-bottom: 1px;
    border-bottom: #e4e4e4 1px solid;
    transition: all 0.4s;
    li {
      height: 140px;
      float: left;
      overflow: hidden;
      a {
        img {
          transition: 0.7s;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
    .wlzx_list_1 {
      width: 150px;
      margin-left: 30px;
      img:hover {
        transform: scale(1.05);
      }
    }
    .wlzx_list_2 {
      margin-left: 30px;
      width: 295px;
      margin-left: 20px;
    }
    .wlzx_list_3 {
      width: 310px;
      margin-left: 15px;
    }
    .wlzx_list_4 {
      width: 90px;
      margin-left: 70px;
    }
    .wlzx_list_5 {
      width: 75px;
      margin-left: 65px;
    }
    .wlzx_list_6 {
      width: 110px;
      margin-left: 50px;
      p input {
        display: block;
        width: 102px;
        height: 26px;
        line-height: 26px;
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        border: solid 1px #dedede;
      }
      .p1,
      .p2 {
        margin-bottom: 12px;
      }
      .p1 input {
        background-color: #2577e3;
        color: #fff;
        border: 0px;
        height: 28px;
      }
      .p1 input:hover {
        background-color: #2577ff;
      }

      .p3 input {
        background: no-repeat url(../static/gongsi/images/15qq.gif) 12px 3px;
        /*background: no-repeat url(../images/article_wlzx/15qq.gif) 12px 3px;*/

        padding-left: 15px;
        width: 87px;
      }
    }
  }
  .list_none {
    /*display: none;*/
    span {
      float: left;
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      margin-top: 40px;
    }
    img {
      float: left;
      width: 300px;
      height: 160px;
      margin: 20px 0 20px 400px;
    }
  }
  .wlzx_list_2 {
    p {
      line-height: 25px;
    }
    .p1 {
      /*margin-bottom: 10px;*/
      a {
        font-weight: bold;
        padding-right: 5px;
      }
      a:hover {
        color: #fa5000;
      }
      img {
        /*display: none;*/
      }
      i {
        color: #666;
        padding-left: 0px;
        font-size: 14px;
      }
      font {
        color: #333;
        font-size: 14px;
      }
    }
    .p2 {
      position: relative;
      img {
        position: absolute;
        left: 105px;
        top: 3px;
      }
    }
  }
  .wlzx_list_2 p {
    line-height: 25px;
  }
  .wlzx_list_2 .p1 {
    /*margin-bottom: 10px;*/
  }
  .wlzx_list_2 .p1 a {
    font-weight: bold;
    padding-right: 5px;
  }
  .wlzx_list_2 .p1 a:hover {
    color: #fa5000;
  }
  .wlzx_list_2 .p1 img {
    /*display: none;*/
  }
  .wlzx_list_3 p {
    line-height: 30px;
  }
  .wlzx_list_3 .p1 {
    /*margin-top: 35px;*/
  }
  .wlzx_list_3 p i {
    color: #666;
  }
  .wlzx_list_6 .p1 {
    margin-top: 20px;
    margin-bottom: 22px;
  }
}
</style>
