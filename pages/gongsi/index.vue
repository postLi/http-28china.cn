<template>
  <div class="lll-gongsi">
    <div class="wlgs_bg center"><img src="../../static/gongsi/images/banner_wlgs.png" ></div>
    <div class="list_box" >
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流公司</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;margin-bottom: 20px;">
          <div class="zx_sx"><span class="biaozhi"/><span>物流公司筛选</span>
            <a
              class="toggle-btn show-collapse"
              href="#">
              <span class="expand">
                <span style="color: #999">显示筛选</span><span class="arrow icon-btn-arrow-down-2"/>
              </span>
              <span class="collapse">
                <span style="color: #999">收起筛选</span><span class="arrow icon-btn-arrow-up-2"/>
              </span>
            </a>
          </div>
          <div class="select_con">
            <dl>
              <dt>所在地&nbsp;：</dt>
              <dd><form
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
                  id="address"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    name="cfd"
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请选择所在地 省-市-区" >
                </div>
                <span>&nbsp;公司名称&nbsp;：</span>
                <input
                  id="companyName"
                  name="ddd"
                  type="text"
                  class="list_input"
                  placeholder="请输入公司名称" >
                <input
                  id="search_wlgs"
                  name="Submit2"
                  value=" 搜索 "
                  readonly=""
                  class="list_button">
                <input
                  id="flush"
                  name="Submit2"
                  readonly=""
                  value="重置 " >
              </form>
              </dd>


              <dt>品牌&nbsp;:</dt>

              <dd id="tjcx_02" >
                <a
                  class="now all"
                  href="/plus/list.php?tid=80"
                  style="float: left;margin-bottom: 40px; ">不限</a>
              </dd>
              <dt class="otherdt">其他&nbsp;:</dt>
              <dd
                id="tjcx_03"
                class="otherdd">
                <a
                  class="now all"
                  href="/plus/list.php?tid=80" >不限</a>
                <a class="shiming" >实名认证</a>
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036" >

          <div class="zx_sx"><span class="biaozhi"/><span>物流公司列表</span></div>


          <div class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他物流公司哦</span>
            <img src="{dede:global.cfg_templets_skin/}/images/none_pic.png">
          </div>



          <ul
            class="wlzx_list"
            style="display: none;" >
            <li class="wlzx_list_1"><a
              id="nr_a21"
              target="_blank"><img
                id="nr01"
                class="scrollLoading"
                width="150"
                height="98"
            ></a></li>
            <li class="wlzx_list_2">
              <p class="p1"><a
                id="nr02"
                href="#"
              >广州运力集团</a>

                <img
                  class="xy_zuan"
                  src="/templets/default/images/article_wlzx/blue.gif">
                <img
                  class="xy_zuan"
                  src="/templets/default/images/article_wlzx/blue.gif">
                <img
                  class="xy_zuan"
                  src="/templets/default/images/article_wlzx/blue.gif">
                <img
                  class="xy_zuan"
                  src="/templets/default/images/article_wlzx/blue.gif">
                <img
                  class="xy_zuan"
                  src="/templets/default/images/article_wlzx/blue.gif">

                <img
                  class="xy_guan"
                  src="/templets/default/images/article_wlzx/34huanguan.gif">
                <img
                  class="xy_guan"
                  src="/templets/default/images/article_wlzx/34huanguan.gif">
                <img
                  class="xy_guan"
                  src="/templets/default/images/article_wlzx/34huanguan.gif">
                <img
                  class="xy_guan"
                  src="/templets/default/images/article_wlzx/34huanguan.gif">
                <img
                  class="xy_guan"
                  src="/templets/default/images/article_wlzx/34huanguan.gif">



                <img
                  class="wlgs_shiming"
                  src="/templets/default/images/list_wlzx/wlgs_shiming.png">
                <img
                  class="wlgs_xinyong"
                  src="/templets/default/images/list_wlzx/wlgs_xinyong.png">
                <img
                  class="wlgs_danbao"
                  src="/templets/default/images/list_wlzx/wlgs_danbao.png">



              </P>
              <p class="p2"><i>联系人：</i><font id="nr04">张总</font><a
                id="nr11"
                target="_blank"
                href="http://wpa.qq.com/msgrd?v=596803544&uin=&site=qq&menu=yes"><img src="{dede:global.cfg_templets_skin/}/images/article_wlzx/15qq.gif"></a></p>
              <p class="p3"><i>电话：</i><font id="nr05">0731-88818882  17707316111</font></p>
              <p class="p4"><i>地址：</i><font
                id="nr06"
                class="">北京大兴区魏永路博洋仓储物流园</font></p>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><i>经营范围：</i><span id="nr07">整车 零担 特大货物运输</span></P>
              <p class="p2"><i>增值服务：</i><span id="nr08">送货上门 保价 到付 代收货款</span></p>
            </li>
            <li class="wlzx_list_6">
              <p class="p1"><a
                id="nr_order"
                target="_blank"><input
                  id="fahuo"
                  readonly=""
                  value="下单"></a>
              </p><p class="p2"><a
                id="nr_a22"
                target="_blank"><input
                  id="wlzx_list_view"
                  readonly=""
                  value="查看官网"></a>
            </p><p class="p3"/></li>
          </ul>




        </div>


        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 170px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>
        <!--分页-->


      </div>

      <div
        id="js007"
        class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>物流公司推荐</span></div>
        <div class="tj_none">
          <span>没有相关物流公司推荐</span>
        </div>
        <div
          class="tj_list"
          style="display: none;">
          <p class="p1"><a
            id="tj010"
            target="_blank"><span id="tj_01">北京华远物流有限公司</span></a></p>
          <p class="p2">

            <img
              class="xy_zuan"
              src="/templets/default/images/article_wlzx/blue.gif">
            <img
              class="xy_zuan"
              src="/templets/default/images/article_wlzx/blue.gif">
            <img
              class="xy_zuan"
              src="/templets/default/images/article_wlzx/blue.gif">
            <img
              class="xy_zuan"
              src="/templets/default/images/article_wlzx/blue.gif">
            <img
              class="xy_zuan"
              src="/templets/default/images/article_wlzx/blue.gif">

            <img
              class="xy_guan"
              src="/templets/default/images/article_wlzx/34huanguan.gif">
            <img
              class="xy_guan"
              src="/templets/default/images/article_wlzx/34huanguan.gif">
            <img
              class="xy_guan"
              src="/templets/default/images/article_wlzx/34huanguan.gif">
            <img
              class="xy_guan"
              src="/templets/default/images/article_wlzx/34huanguan.gif">
            <img
              class="xy_guan"
              src="/templets/default/images/article_wlzx/34huanguan.gif">

          </p>
          <p class="p3"><i>联系人：</i><font id="tj_02">张总</font></p>
          <p class="p4"><i>电话：</i><font id="tj_03">0731-88818882  17707316111</font></p>
          <p class="p5"><i>地址：</i><font
            id="tj_04"
            class="">北京大兴区魏永路博洋仓储物流园</font></p>
          <p class="p6">
            <a
              id="tj_05"
              target="_blank"><span>查看&nbsp;&gt;</span></a>
          </p>
        </div>



      </div>

    </div>


    <div class="h70"/>
  </div>
</template>
<script>
export default {
  name: `index`,
  head: {
    link: [
      { rel: 'stylesheet', href: '/gongsi/css/list_wlgs.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ]
    // script: [
    //   { src: '../js/jquery.pagination.min.js' },
    //   { src: '../js/WTMap.min.js' },
    //   { src: './js/city-picker.data.js' },
    //   { src: './js/city-picker.js' },
    //   { src: '../../static/gongsi/js/list_wlgs.js' }
    // ]
  }
  // layout: 'subLayout',
  // mounted() {
  //   seajs.use(['../js/city.js'], function() {
  //     seajs.use(['../gongsi/js/list_wlgs.js'], function() {
  //       seajs.use(['../js/collection.js'], function() {
  //         seajs.use(['../js/gaodemap2.js'], function() {})
  //       })
  //     })
  //   })
  // }
}
</script>
<style lang="scss">
</style>
