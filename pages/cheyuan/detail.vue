<template>
  <div class="arc_main">
    <!--<div class="arc_nav">-->
    <!--<a href="/">物流首页</a>&gt;<a -->
    <!--id="arc_nav_a1" -->
    <!--href="">车源信息</a>&gt;<a -->
    <!--id="arc_nav_a2" -->
    <!--href="">车源信息</a>-->
    <!--</div>-->
    <div class="arc_top1">
      <div class="arc_top1_1"><span id="nr060"/></div>

      <div class="arc_top1_3"><input 
        class="arc_input3" 
        value="搜全网"> </div>
      <div class="arc_top1_2">
        <select id="search_type"><option name="zx">找专线</option><option name="che">找车源</option><option name="huo">找货源</option></select>
        <input 
          class="arc_input1" 
          wtmap="" 
          placeholder="出发地">
        <span>&rarr;</span>
        <input 
          class="arc_input2" 
          wtmap="" 
          placeholder="到达地">

      </div>



    </div>
    <div class="arc_top2">
      <div class="arc_top2_1"><a href="/"><span>首页</span></a></div>
      <div 
        id="arc_city" 
        class="arc_top2_2"/>
      <div 
        class="arc_top2_3" 
        onmouseover="city_block();"><a href="javascript:void(0)"><span>更多+</span></a></div>

      <!--更多城市-->
      <div 
        id="city_box" 
        class="city_box" 
        onmouseover="city_block();" 
        onmouseout="city_none();" />

    </div>
    <div class="arc_main1">
      <div class="arc_left">
        <div class="arc_left_1"><img id="nr0631" ></div>
        <div class="arc_left_2">
          <a href="javascript:void(0)"><img id="nr0632" ></a>
          <a href="javascript:void(0)"><img id="nr0633" ></a>
          <a href="javascript:void(0)"><img id="nr0634" ></a>
        </div>
        <div class="arc_left_3"><a href="javascript:void(0)"><img src="../../static/images/article_wlzx/17shoucang.png">&nbsp;<span class="collection_cz">收藏车源</span><i>&nbsp;(&nbsp;<em class="my_cz_num"/>人气&nbsp;)</i></a></div>
      </div>
      <div class="arc_middle">
        <div class="collection_zx">
          <div 
            class="bt_close" 
            onclick="$('.collection_zx').hide()" ><img src="../../static/images/article_wlzx/xxx.png"></div>
          <div class="collection_zx_nr">
            <img src="../../static/images/article_wlzx/yes.png">
            <span>成功加入</span><a 
              id="collection_url" 
              target="_blank" 
              href="#">收藏夹</a>
          </div>
        </div>
        <div class="arc_middle1"><span id="nr061"/></div>
        <div class="arc_middle2">
          <div class="arc_middle2_1">
            <p class="p1"><i>运价：</i><font 
              id="nr062" 
              class="font1">&yen;&nbsp;</font></p>
            <p class="p2"><i>车源类型：</i><span id="nr063" /></p>
          </div>
          <div class="arc_middle2_2">
            <div class="num1"><span id="nr0699"/></div><div class="num2"><a href="javascript:void(0)"><span class="my_cz_num"/></a></div>
            <div class="num3"><span>浏览量</span></div><div class="num4"><a href="javascript:void(0)"><span>收藏量</span></a></div>
          </div>

        </div>
        <div class="arc_middle3">
          <div class="arc_m3"><i>车辆类型：</i><span id="nr064"/><span id="nr0641"/></div>
          <div class="arc_m3"><i>车辆载重：</i><span id="nr065"/></div>
          <div class="arc_m3_2"><i>车长：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i><span id="nr066"/></div>
          <div class="arc_m3_2"><i>途径点：&nbsp;&nbsp;&nbsp;</i><span id="nr067"/></div>
          <div class="arc_m3_2"><i>发车时间：&nbsp;</i><span id="nr068"/></div>
        </div>
        <div class="arc_middle4">
          <div class="arc_m3"><i>联系人：</i><span id="nr069"/></div>
          <div class="arc_m3"><i>电话：</i><span><font 
            id="nr0610" 
            style="color: #eb434d;"/></span></div>
          <div class="arc_m3_2"><i>说明：</i><span id="nr0611"/></div>



        </div>

        <div class="arc_middle5">
          <div class="arc_m5_1"><span>联系我时，请说明是从28快运上看到此信息，谢谢！</span></div>

        </div>

      </div>
      <div class="arc_right">
        <p class="arc_right01"><img src="../../static/images/article_wlzx/04gongsi.png"><span>车辆档案</span></p>
        <p class="arc_right04">
          <span class="arc_right04_1"><i>车牌号：</i><font id="nr0612"/></span>
          <span><i>常驻地：</i><font id="nr0613"/></span>
          <span><i>车长：</i><font id="nr0614"/></span>
          <span><i>车辆类型：</i><font id="nr0615"/></span>
          <span><i>车辆载重：</i><font id="nr0616"/></span>
          <span><i>联系人：</i><font id="nr0617"/></span>
          <span><i>手机号：</i><font id="nr0618"/></span>
          <span><a 
            id="nr0619" 
            target="_blank"><i>Q&nbsp;Q：</i><input 
              id="qq" 
              value="QQ交谈" ></a></span>
        </p>
        <p style="clear: both;"/>
        <p class="arc_right05" >

          <input 
            class="collection_cz" 
            style="cursor: pointer;" 
            readonly 
            value="收藏">
        </p>
        <p class="arc_right06" >
          <span>相关认证</span>
        </p>
        <p class="arc_right07">
          <!--<img id="right_xinyong" src="/templets/default/images/article_wlzx/11xinyong.png"/>-->
          <img 
            id="right_shiming" 
            src="../../static/images/article_wlzx/10shiming.png">
            <!--<img src="/templets/default/images/article_wlzx/25baozhengjin.png"/>-->
        </p>

      </div>

    </div>
    <div class="arc_main2">
      <div class="arc_left2">
        <div class="arc_left2_bt" >
          <span>车主简介</span>
        </div>

        <div 
          id="nr0629" 
          class="arc_left2_nr"/>
      </div>
      <div class="arc_right2">
        <div class="arc_right2_bt">
          <div class="arc_bt1"><span>车主其他求货信息</span></div>
          <div class="arc_bt2"><i><a href="javascript:void(0)"><em style="font-size: 14px;color: #ccc;">&lt;&nbsp;</em></a><em style="color: #eb434d;">1</em>/100<a href="javascript:void(0)"><em style="font-size: 16px;color: #999;">&nbsp;&gt;</em></a></i></div>

        </div>
        <div 
          id="js012" 
          class="arc_right2_nr ">
          <div id="tag794ea6b32b816edf75b50086cb4c8562">
            <div 
              class="arc_list_item" 
              style="display: none;">
              <div 
                id="nr1001" 
                class="arc_list_item_bt" ><a 
                  id="nr1000" 
                  target="_blank"/> </div>
              <div class="arc_list_item_nr">
                <div class="arc_list_item_nr1">
                  <i>车辆：</i><span id="nr1002">泸D***19  </span><em/><span id="nr1003">高栏车 </span><em/><span id="nr1004">长6.8米   </span><em/><span> <span id="nr1005">载重100吨  </span><em/><span id="nr1006"> 回程长</span>
                </span></div>
                <div class="arc_list_item_nr2">
                  <i>发车时间：</i><span id="nr1007">2018-07-27</span>

                </div>
                <div class="arc_list_item_nr3">
                  <a 
                    id="nr1008" 
                    href="#"><input value="查看"></a>
                </div>

              </div>
            </div>
          </div>





        </div>
        <!--分页-->
        <div 
          class="box" 
          style="float: right;margin-right: 200px;">
          <div 
            id="pagination1" 
            class="page fl"/>
          <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>


      </div>
    </div>

    <div 
      id="js008" 
      class="arc_bottom">
      <div class="zx_sx"><span class="biaozhi"/><span>此路线其他车源</span><a href="/plus/list.php?tid=3"><span class="arc_bottom_more">更多+</span></a></div>

      <div 
        class="tj_list" 
        style="display: none;">
        <p class="p01"><span id="nr0620">广东-东莞</span><i>&rarr;</i><span id="nr0621">广东-深圳</span></p>
        <p class="p02">
          <span class="p_span1"><i>车辆载重：</i><font id="nr0622"/></span>  <span class="p_span2"><i>车长：</i><font id="nr0623"/></span>
        </p>
        <p class="p02">
          <span class="p_span1"><i>车源类型：</i><font id="nr0624"/></span>  <span class="p_span2"><i>车辆类型：</i><font id="nr0625"/></span>
        </p>
        <p class="p03">
          <i>常驻地：</i><span id="nr0626"/>

        </p>
        <p class="p04">
          <i>发车时间：</i><span id="nr0627"/>
        </p>
        <p class="p05">
          <img 
            id="tj_shiming" 
            src="../../static/images/list_wlzx/10shiming.png" >
        </p>
        <p class="p06">
          <a 
            id="nr0628" 
            href=""><span>查看&nbsp;&gt;</span></a>
        </p>
      </div>





    </div>

  </div>
</template>

<script>
export default {
  name: 'Detail',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/article_cheyuan.css' }],
    script: [{ src: '../js/jquery.pagination.min.js' }]
  },
  layout: 'subLayout',
  mounted() {
    seajs.use(['../js/city.js'], function() {
      seajs.use(['../js/arc_cheyuan.js'], function() {
        seajs.use(['../js/collection.js'], function() {})
      })
    })
  }
}
</script>

<style scoped>
</style>
