<template>
  <div class="detail_list">
    <div class="list_none">
      <span>暂时没有找到您要查询的信息，可以看看其他线路哦</span>
      <img src="../static/gongsi/images/none_pic.png">
    </div>
    <div>
      <ul
        v-for="(item , index) in lineLists"
        :key="index"
        class="wlzx_list">
        <li id="wlzx_list_0">
        <!--<div class="sc_num"><img src="/line/images/ll_num.png"><span><i><em id="nr1001"/>{{ item.browseNumber?item.browseNumber:'0' }}人浏览</i></span></div>-->

        <!--<div class="view_num"><img src="/line/images/pj_num.png"><span><i><em id="nr1002"/>{{ item.assessNumber?item.assessNumber:'0' }}条评论</i></span></div>-->
        </li>
        <li class="wlzx_list_1">
          <a
            id="nr_a21"
            :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
            target="_blank"
            class="nr_a21_img">
            <img
              v-if="item.rangeLogo==''"
              :src="require('../../static/images/pic/bg' + item.num + '.png')"
              width="180"
              height="180">
            <img
              v-else
              :src="item.rangeLogo"
              class="scrollLoading"
              width="180"
              height="180">
        </a></li>
        <li class="wlzx_list_2">
          <p class="p1">
            <a
              id="nr02"
              :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
              class="list-title-a"
              target="_blank">
              <span class="list-icon lines-sprite-icons icon-start"/>
              <em>{{ (item.startCity+item.startArea).length>7? (item.startCity+item.startArea).substring(0,7)+'..': item.startCity+item.startArea }}</em>
              <!--<em >{{ item.startCity }}</em><em>{{ item.startArea }}</em>-->
              <span class="list-icon lines-sprite-icons icon-through"/>
              <span class="list-icon lines-sprite-icons icon-end"/>
              <em>{{ (item.endCity+item.endArea).length>7? (item.endCity+item.endArea).substring(0,7)+'..': item.endCity+item.endArea }}</em>
              <!--<em>{{ item.endCity.length>7?item.endCity.substring(0,7)+'..': item.endCity }}</em><em >{{ item.endArea.length>7?item.endArea.substring(0,7)+'..': item.endArea }}</em>-->
            </a>
          </P>
          <p class="p2">
            <!--<img src="/line/images/04gongsi.png">-->
            <a
              id="nr03"
              :href="'/member/'+item.publishId"
              target="_blank"><font
            class="">{{ item.companyName }}</font></a>
            <a
              id="nr11"
              target="_blank"
              href="http://wpa.qq.com/msgrd?v=596803544&uin=&site=qq&menu=yes"><img
                id="qq"
                src="../../static/gongsi/images/15qq.gif"></a>
                <!--<img-->
                <!--id="tj_icon_1"-->
                <!--src="/line/images/wtjzx.gif">-->
          </p>
          <!--<p class="p5">-->
          <!--<img-->
          <!--id="list_shiming"-->
          <!--src="/line/images/10shiming.png">-->
          <!--<img-->
          <!--id="list_xinyong"-->
          <!--src="/line/images/11xinyong.png">-->
          <!--<img-->
          <!--id="list_danbao"-->
          <!--src="/line/images/12danbao.png">-->
          <!--</p>-->
          <p
            class="p21"
            style="padding-top: 5px;">
            <img
              id="tj_shiming"
              src="/line/images/shiming.png">
            <img
              id="tj_xinyong"
              src="/line/images/xinyong.png">
            <img
              id="tj_danbao"
              src="/line/images/danbao.png">
          </p>
          <p class="p3">
          <i>说明：</i><font>{{ item.transportRemark?item.transportRemark.substring(0,10):'暂无' }}</font></p>
          <p class="p4"><i>地址：</i><font
            id="nr06"
            class="">{{ item.address.length>20?item.address.substring(0,20)+'..':item.address }}</font></p>
        </li>
        <li class="wlzx_list_3">
          <p class="p0_0">
            <img src="/line/images/ll_num.png"><span>{{ item.browseNumber?item.browseNumber:'0' }}人浏览</span>
            <img
              style="padding-left: 30px"
              src="/line/images/pj_num.png"><span>{{ item.assessNumber?item.assessNumber:'0' }}条评论</span>
          </p>
          <p class="p1"><i
            class="zhuo"
            style="color: #666">重货：<span style="color: #ff4747">{{ parseFloat(item.weightPrice).toFixed(1) }}</span></i><span style="color: #333">元/公斤</span></P>
          <p class="p2"><i
            class="zhuo"
            style="color: #666">轻货：</i><span style="color: #ff4747">{{ parseFloat(item.lightPrice).toFixed(1) }}</span><span style="color: #333">元/m³</span></p>
          <p class="p3"><i>时效：</i><span>{{ item.transportAging?item.transportAging:'' }}{{ item.transportAging?item.transportAgingUnit:'暂无' }}</span></p>
          <p class="p4"><i>频率：</i><span>{{ item.departureHzData?item.departureHzData+'天':'' }}</span><span>{{ item.departureHzData?item.departureHzTime+'次':'暂无' }}</span></p>
        </li>
        <li class="wlzx_list_6">
          <p class="p1"><a
            id="nr_order"
            :href="'/create/line?id='+ item.id+'&publishId='+ item.publishId+'&uid='+ item.account"
            target="_blank"><input
              readonly=""
              value="下单"

          ></a>
          </p>
          <!--/:href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"-->
          <!--onclick="'/create/line?id='+ item.id+'?uid='+ item.account+'&publishId='+item.publishId'"-->
          <p class="p2"><a
            id="nr_a22"
            :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
            target="_blank"><input
              readonly=""
              value="查看"
              style="color: #3f94ee"></a>
          </p>
        <p class="p3"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    lineLists: {
      type: [Object, Array],
      default: () => {}
    }
  },
  watch: {
    lineLists(n, o) {
      console.log(n, 'nnnnnnnn')
    }
  },
  mounted: {},
  methods() {}
}
</script>

<style lang="scss">
.detail_list {
  .list_none {
    display: none;
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

  .wlzx_list {
    width: 1000px;
    height: 210px;
    border: solid 1px #dfdfdf;
    border-left: 0;
    border-right: 0;
    margin-top: -1px;
    background-color: #fff;
    transition: all 0.4s;
    padding-bottom: 16px;
  }

  .wlzx_list:hover {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    transform: translate3d(0, -2px, 0);
  }

  .wlzx_list li {
    float: left;
    /*overflow: hidden;*/
  }

  .wlzx_list img {
    transition: 0.7s;
  }

  .wlzx_list img:hover {
    transform: scale(1.05);
  }

  .wlzx_list_1 {
    width: 180px;
    margin-left: 30px;
  }

  .wlzx_list_2 {
    width: 400px;
    margin-left: 30px;
  }

  .wlzx_list_3 {
    width: 250px;
    /*margin-left: 25px;*/
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
    /*margin-left: 110px;*/
  }

  .wlzx_list_2 p {
    height: 30px;
    line-height: 30px;
  }

  .wlzx_list_2 .p1 {
    margin-bottom: 3px;
  }

  .wlzx_list_2 .p1 a {
    color: #333;
    font-size: 18px;
    font-weight: normal;
  }

  .wlzx_list_2 .p1 a:hover em {
    color: #f85050;
  }

  .wlzx_list_2 .p1 font {
    color: #666666;
    font-size: 12px;
    padding-left: 5px;
  }

  .wlzx_list_2 .p2 font {
    color: #333;
    font-size: 14px;
  }

  .wlzx_list_2 .p21 {
    /*padding-bottom: 18px;*/
    margin-left: -5px;
  }

  .wlzx_list_2 .p3 font,
  .wlzx_list_2 .p4 font {
    color: #333;
    font-size: 14px;
  }

  .wlzx_list_2 .p3 i,
  .wlzx_list_2 .p4 i {
    color: #666;
    font-size: 14px;
  }

  .wlzx_list_2 .p3 img,
  .wlzx_list_2 .p4 img {
    float: left;
    margin-top: 6px;
  }

  .wlzx_list_3 p {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }

  .wlzx_list_3 .p1 {
    /*margin-top: 30px;*/
  }

  /*.lll-zhuangXian wlzx_list_3 p i{ color: #666;}*/
  .lll-zhuangXian .wlzx_list_3 p i.zhuo {
    color: #666 !important;
  }

  .wlzx_list_3 p span {
    color: #333;
  }

  .wlzx_list_3 p font {
    color: #f85050;
  }

  .wlzx_list_3 p span#nr10 {
    color: #333;
  }

  .wlzx_list_4 p {
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }

  .wlzx_list_4 img {
    margin-top: 5px;
  }

  .wlzx_list_5 p {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  .wlzx_list_5 p:nth-child(1) {
    display: none;
  }

  .wlzx_list_5 p i {
    color: #999;
  }

  .wlzx_list_6 p input {
    display: block;
    width: 80px;
    height: 26px;
    line-height: 26px;
    border-radius: 3px;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
    border: solid 1px #8dadd8;
  }

  .wlzx_list_6 .p1 {
    margin-top: 40px;
  }

  .wlzx_list_6 .p1,
  .wlzx_list_6 .p2 {
    margin-bottom: 24px;
  }

  .wlzx_list_6 .p1 input {
    background-color: #3f94ee;
    color: #fff;
    border: 0px;
    height: 28px;
  }

  .wlzx_list_6 .p1 input:hover {
    background-color: #2577ff;
  }

  #wlzx_list_0 {
    width: 100%;
    height: 26px;
    float: left;
  }

  .view_num {
    float: right;
    height: 26px;
    width: 120px;
    font-size: 12px;
    line-height: 26px;
  }

  .sc_num {
    float: right;
    height: 26px;
    width: 104px;
    font-size: 12px;
    line-height: 26px;
  }

  #wlzx_list_0 {
    overflow: visible;
  }

  #wlzx_list_0 img {
    margin-top: 15px;
    float: left;
    margin-right: 7px;
  }

  #wlzx_list_0 span {
    float: left;
    margin-top: 13px;
  }

  .arc_main5 .wlzx_list:first-of-type {
    border-top: solid 1px #fff;
    margin-top: 3px;
  }
}
</style>
