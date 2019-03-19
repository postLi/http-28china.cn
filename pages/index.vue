<template>
  <section class="index_container">
    <div class="w1400 center clear">

      <div class="main1">
        <div class="main1_1">
          <div class="main1_1_l">
            <div
              id="m1_01_1"
              class="m1_01 m1_01_01  m1_on_01">发物流 </div>
            <div
              id="m1_01_2"
              class="m1_01 m1_01_02">找大货车</div>
            <div
              id="m1_01_3"
              class="m1_01 m1_01_03">找小货车</div>


          </div>
          <div class="title">
            <img
              src="/images/index/10tb.png"
              class="imgtj">
            <p id="desc_01">推荐物流承运商，提供免费上门接货和送货到家服务，发货省心又省钱</p>
            <p id="desc_02">整车运输，车辆不放空，门到门、代签回单、无挤压、无破损、速度快</p>
            <p id="desc_03">同城货运价格低，上门快，更安全</p>
          </div>
          <div
            id="main1_1_m1"
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input
              id="zhidaFrom"
              wtmap="detail"
              type="text"
              placeholder="您的货物在哪里？"
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input
              id="zhidaTo"
              wtmap="detail"
              type="text"
              placeholder="把货运到哪里？"
              readonly=""></div>
            <div class="m1_02_search center">
              <input
                id="order_01"
                type="button"
                value="快速下单"
                onclick="javascript:void(0)">
              <input
                id="order_02"
                type="button"
                value="快速下单"
                onclick="javascript:void(0)">
              <input
                id="order_03"
                type="button"
                value="快速下单"
                onclick="javascript:void(0)">
            </div>
          </div>
          <div
            id="main1_1_m2"
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input
              id="peisongFrom"
              wtmap="detail"
              type="text"
              placeholder="您的货物在哪里？"
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input
              id="peisongTo"
              wtmap="detail"
              type="text"
              placeholder="把货运到哪里？"
              readonly=""></div>
            <div class="m1_02_search center">
              <input
                type="button"
                value="快速下单2"
                onclick="window.location.href='/zhuanxian/list'">
            </div>
          </div>
          <div
            id="main1_1_m3"
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input
              id="zhengcheFrom"
              wtmap="detail"
              type="text"
              placeholder="您的货物在哪里？"
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input
              id="zhengcheTo"
              wtmap="detail"
              type="text"
              placeholder="把货运到哪里？"
              readonly=""></div>
            <div class="m1_02_search center">
              <input
                type="button"
                value="快速下单3"
                onclick="window.location.href='/zhuanxian/list'">
            </div>
          </div>
          <div
            id="main1_1_m4"
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input
              id="baocheFrom"
              wtmap="detail"
              type="text"
              placeholder="您的货物在哪里？"
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input
              id="baocheTo"
              wtmap="detail"
              type="text"
              placeholder="把货运到哪里？"
              readonly=""></div>
            <div class="m1_02_search center">
              <input
                type="button"
                value="快速下单4"
                onclick="window.location.href='/zhuanxian/list'">
            </div>
          </div>
          <div class="main1_1_xx"/>



        </div>
        <div class="main1_2">
          <ul class="yd_box">
            <li class="yd_1">
              <img src="/images/index/12kd.png">
            </li>
            <li class="yd_2"><input
              id="yd_nr"
              rows="3"
              cols="20"
              placeholder="请输入运单号，例如：">
              <input
                id="yd_cx"
                type="button">
              <div class="ydh">
                <span>1809260061</span>
              </div>
            </li>
            <li class="yd_4">
              <ul>
                <li class="yd_item">
                  <img src="/images/yd_huo.png"><a 
                    target="_blank" 
                    href="/huoyuan"><span>当前货物</span>
                    <i id="data001">{{ dailyData.goodsCount }}</i>
                  </a>
                </li>
                <li class="yd_item">
                  <img src="/images/yd_zx.png"><a 
                    target="_blank"
                    href="/zhuanxian/list"><span>物流专线</span>
                    <i id="data002">{{ dailyData.transportRangeCount }}</i>
                  </a>
                </li>
                <li class="yd_item">
                  <img src="/images/yd_che.png"><a 
                    target="_blank"
                    href="/cheyuan"><span>车源信息</span>
                    <i id="data003">{{ dailyData.carInfoCount }}</i>
                  </a>
                </li>
              </ul>

            </li>
            <li class="yd_5"><img src="/images/yd_jt.png">
              <span>今日新增:</span><a 
                target="_blank" 
                href="/huoyuan"><span>货源</span><i id="data004">{{ dailyData.toDayGoodsCount }}</i></a><a 
                  target="_blank"
                  href="/zhuanxian/list"><span>专线</span><i id="data005">{{ dailyData.toDayTransportRangeCount }}</i></a><a 
                    target="_blank"
                    href="/cheyuan"><span>车源</span><i id="data006">{{ dailyData.toDayCarInfoCount }}</i></a>
            </li>

          </ul>

        </div>
        <div class="main1_3">
          <div class="main1_3_1">
            <div
              class="order_list"
              onclick="window.open('/create/line')">发布专线</div>
            <div
              class="order_list"
              onclick="window.open('/create/huoyuan')">发布货源</div>
            <div
              class="order_list"
              onclick="window.open('create/cheyuan')">发布车源</div>
          </div>
          <div class="main1_3_2">
            <div
              id="_userlogin2"
              class="userLogin"
              v-if="!islogin"
            >
              <div class="yhimg"><img src="/images/index/19stx.png"></div>
              <div class="userHeader">
                <div class="img_"/>
                <span id="ts">您好，欢迎来到28快运！</span>
              </div>
              <div class="operation">
                <div class="loginBtn"><a href="/login">登录</a></div>
                <div class="regBtn"><a href="/regisiter">注册</a></div>
              </div>
            </div>
            <div
              v-if="islogin"
              id="_userlogin2_2"
              class="userLogin"
            >
              <div class="userHeader">
                <div class="yhimg"><img src="/images/index/19stx.png"></div>
                <span>您好，<span id="login_name2">{{ username }}</span>&nbsp;</span>
                <span style="cursor: pointer"> <a
                  class="exit_anfa"
                  href="/exit">【安全退出】</a> </span>
              </div>
              <div class="operation">
                <div class="loginBtn"><a
                  target="_blank"
                  href="/hyzx">会员中心</a></div>
                <div 
                  v-if="$cookies.get('login_type') === 'aflc-5'"
                  class="regBtn"> <a
                    id="my_website"
                    target="_blank"
                    :href="'/member/' + $cookies.get('login_userId', {parseJSON: false})">我的网站</a></div>
              </div>
            </div>

            <div class="main1_c">
              <ul>
                <li class="kefu_index">
                  <a
                    href="/zixun"
                    onmouseout="kefu_none();">咨讯</a>
                  <a
                    href="/help/ggp/index.jhtml"
                    onmouseout="kefu_none();">帮助</a>
                  <a onmouseover="kefu_block();">客服</a>

                  <a
                    target="_blank"
                    href="/help/tsjy/index.jhtml"
                    onmouseout="kefu_none();">建议</a>
                </li>
                <li
                  :key="index"
                  v-for="(item, index) in $store.state.news.index_wlzx.slice(0,3)"
                >
                  <a 
                    target="_blank" 
                    :href="item.url" >{{ item.title }}</a>
                </li>
                <!-- <li><a
                  target="_blank"
                  href="/wlzx/xingyezixun/2018/0629/320.html">中国重汽不停车服务入驻凯立德物流地图生态</a></li> -->


              </ul>
            </div>
            <div
              class="kefu_box"
              onmouseover="kefu_block();"
              onmouseout="kefu_none();">
              <div class="kefu_box_1"><img src="/images/kefu_weixin.png"> </div>
              <div class="kefu_box_2"/>
              <div class="kefu_box_3">
                <ul
                  style="cursor: pointer;"
                  onclick="window.open('http://wpa.qq.com/msgrd?v=3&amp;uin=596803544&amp;site=qq&amp;menu=yes')"><li><img src="/images/kefu_qq.png"></li><li class="kefu_box_3_1">QQ交谈</li></ul>
                <ul><li><img
                  class="kefu_box_3_phone"
                  src="/images/kefu_phone.png"></li><li class="kefu_box_3_2">客服电话：<br>400-9992828</li></ul>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div class="banner h62">
        <div class="echart_scroll">
          <div class="fl echart_scroll_sm">全国专线价</div>
          <div class="fl echart_scroll_nr">
            <div class="fl echart_scroll_nr800">
              <ul class="echart_scroll_nr1">
                <li><a
                  href="javascript:void(0)"
                  target="_blank"><span>广州发武汉</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a
                  href="javascript:void(0)"
                  target="_blank"><span>广州发合肥</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a
                  href="javascript:void(0)"
                  target="_blank"><span>广州发重庆</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a
                  href="javascript:void(0)"
                  target="_blank"><span>广州发南昌</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a
                  href="javascript:void(0)"
                  target="_blank"><span>广州发郑州</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
              </ul>
              <ul class="echart_scroll_nr2"/>
            </div>
          </div>
        </div>
      </div>

      <!--找物流专线 S-->
      <div
        id="rf01"
        class="main3 center ">
        <div class="main3_12">


          <div class="hy main3_99 clear">
            <div class="main3_1_1">
              <div class="xt_bottom"/>
              <div class="floatl">
                <b>找物流专线</b>

                <div class="index_search floatl">
                  <div
                    id="wlLineFrom"
                    class="fl index_search_input"
                    style="position:relative;">
                    <input
                      style="height: 100%;"
                      data-toggle="city-picker"
                      data-level="district"
                      type="text"
                      name=""
                      class=""
                      placeholder="请选择出发地"
                      readonly="">
                  </div>
                  <em>→</em>
                  <div
                    id="wlLineTo"
                    class="fl index_search_input"
                    style="position:relative;">
                    <input
                      style="height: 100%;"
                      data-toggle="city-picker"
                      data-level="district"
                      type="text"
                      name=""
                      class=""
                      placeholder="请选择到达地"
                      readonly="">
                  </div>

                </div>
                <input
                  id="search_wlLine"
                  type="button"
                  class="search_hy"
                  value=""></div>



              <div class="more floatr"><a
                href="/zhuanxian/list"
                target="_blank">更多&gt;</a></div>
            </div>
            <dl class="hy_d">
              <dd class="d001">出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</dd>
              <dd class="d002">到达地</dd>
              <dd class="d003">重货价格</dd>
              <dd class="d004">轻货价格</dd>
              <dd class="d005">时效</dd>
              <dd class="d006">物流公司</dd>
              <dd class="d007">操作</dd>
            </dl>
            <div
              v-if="$store.state.line.index_list.length === 0"
              class="none_zx"><span>暂无专线信息</span>
            </div>

            <div
              v-else
              class="clear scroll_nr2 ">
              <ul
                id="js001"
                class="hy_nr "
                style="margin-top: 0px;">

                <template v-for="(item, index) in $store.state.line.index_list" >

                  <li :key="index">
                    <a
                      id="nr_a01"
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.publishId"
                      target="_blank"><span
                        id="nr001"
                        class="t001">{{ item.startCity + item.startArea }}</span></a>
                    <a
                      id="nr_a01"
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.publishId"
                      target="_blank"><span
                        id="nr001_2"
                        class="t002">{{ item.endCity + item.endArea }}</span></a>
                    <a
                      id="nr_a02"
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.publishId"
                      target="_blank"
                    ><span class="t003"><font
                      id="nr002"
                      style="color:#f00">{{ item.weightDiscountPrice || item.weightPrice }}</font>元/公斤</span></a>
                    <a
                      id="nr_a03"
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.publishId"
                      target="_blank"><span class="t004"><font
                        id="nr003"
                        style="color:#f00">{{ item.lightDiscountPrice || item.lightPrice }}</font>元/方</span> </a>
                    <a
                      id="nr_a04"
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.publishId"
                      target="_blank"><span
                        id="nr004"
                        class="t005">{{ item.transportAging + (item.transportAgingUnit || '').replace('多', '') }}</span></a>
                    <a
                      id="nr005"
                      :href="'/member/' + item.companyId"
                      target="_blank"><span
                        id="nr006"
                        class="t006">{{ item.companyName }}</span></a>
                    <a
                      id="nr_a05"
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.publishId"
                      target="_blank"><span
                        id="t006"
                        class="t007">详情</span></a>
                  </li>
                </template>


              </ul>



            </div>

          </div>

        </div>
        <div class="right_box">
          <div class="right_price_bt1">
            <div class="xt_bottom w102"/>
            <div class="floatl">
              <b>价格指数</b>
            </div>

          </div>
          <!--echart图表 S-->
          <div class="linelist">
            <div class="line-list-ul">
              <ul>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">武汉</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">重庆</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">南昌</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">长沙</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">郑州</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">合肥</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>

              </ul>
            </div>
            <div class="line-list-echart">
              <div class="echartbox"/>
              <div class="line-list-links">
                <a
                  id="echart_order"
                  target="_blank"
                  href="/create/order">闪电下单</a>
                <a
                  id="echart_price"
                  href="#">即刻比价</a>
                <a
                  target="_blank"
                  href="/ydcx">一键查单</a>
                <a
                  id="echart_sx"
                  href="/shixiao">时效查询</a>
              </div>
            </div>
          </div>


          <!--echart图表 E-->
        </div>

      </div>

    </div>
    <div class="banner"><img src="/images/index/23banner.png"></div>
    <div
      id="rf01"
      class="main3 main_cy_hy center ">
      <div class="main3_12">



        <div
          id="rf02"
          class="main3_11">
          <div class="main3_1_1">
            <div class="xt_bottom"/>
            <div class="floatl">
              <b>找车源信息</b>
              <div class="index_search floatl">
                <div
                  id="carLineFrom"
                  class="fl index_search_input"
                  style="position:relative;">
                  <input
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    name=""
                    class=""
                    placeholder="请选择出发地"
                    readonly="">
                </div>
                <em>→</em>
                <div
                  id="carLineTo"
                  class="fl index_search_input"
                  style="position:relative;">
                  <input
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    name=""
                    class=""
                    placeholder="请选择到达地"
                    readonly="">
                </div>

              </div>
              <input
                id="search_cheyuan"
                type="button"
                class="search_hy"
                value=""></div>
            <div class="more floatr"><a
              href="/cheyuan?"
              target="_blank">更多&gt;</a></div>
          </div>

          <div class="hy clear">
            <dl class="hy_d">
              <dd class="d1">出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</dd>
              <dd class="d2">到达地</dd>
              <dd class="d3">车牌号</dd>
              <dd class="d4">车型</dd>
              <dd class="d5">车长</dd>
              <dd class="d6">载重</dd>
              <dd class="d7">运输价格</dd>
              <dd class="d8">操作</dd>
            </dl>
            <div
              v-if="$store.state.cheyuan.index_list.length === 0"
              class="none_cy"><span>暂无车源信息</span>
            </div>

            <div
              v-else
              class="clear scroll_nr3">
              <ul
                id="js003"
                class="hy_nr"
                style="margin-top: 0px;">
                <template v-for="(item, index) in $store.state.cheyuan.index_list" >

                  <li :key="index">
                    <a
                      id="nr_a11"
                      :href="'/cheyuan/detail?id='+item.id"
                      :title="item.strartAddress"><span
                        id="nr021"
                        class="t1">{{ item.strartAddress }}</span></a>
                    <a
                      id="nr_a11"
                      :href="'/cheyuan/detail?id='+item.id"
                      :title="item.endAddress"><span
                        id="nr021_2"
                        class="t2">{{ item.endAddress }}</span></a>
                    <a
                      id="nr_a12"
                      :href="'/cheyuan/detail?id='+item.id"
                      target="_blank"><span
                        id="nr022"
                        class="t3">{{ (item.carNum || '').replace(/^(..).*(..)$/, '$1***$2') }}</span></a>
                    <a
                      id="nr_a13"
                      :href="'/cheyuan/detail?id='+item.id"
                      target="_blank"><span
                        id="nr023"
                        class="t4">{{ item.carTypeName }}</span></a>
                    <a
                      id="nr_a14"
                      :href="'/cheyuan/detail?id='+item.id"
                      target="_blank"><span class="t5"><font
                        id="nr024"
                        style="color: #f00;">{{ item.carLength }}</font>米</span></a>
                    <a
                      id="nr_a15"
                      :href="'/cheyuan/detail?id='+item.id"
                      target="_blank"><span class="t6"><font
                        id="nr025"
                        style="color: #f00;">{{ item.carLoad }}</font>吨</span></a>
                    <a
                      id="nr_a16"
                      :href="'/cheyuan/detail?id='+item.id"
                      target="_blank"><span class="t7"><font
                        id="nr026"
                        style="color: #f00;">{{ item.expectPrice }}</font></span></a>
                    <a
                      id="nr_a17"
                      :href="'/cheyuan/detail?id='+item.id"
                      target="_blank"><span
                        id="t7"
                        class="t8">查看</span></a>
                  </li>
                </template>

              </ul>


            </div>

          </div>

        </div>
        <div class="h30 w970 bg_f7"/>
        <div
          id="rf03"
          class="main3_1">
          <div class="main3_1_1">
            <div class="xt_bottom"/>
            <div class="floatl">
              <b>找货源信息</b>
              <div class="index_search floatl">
                <div
                  id="HuoyuanFrom"
                  class="fl index_search_input"
                  style="position:relative;">
                  <input
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    name=""
                    class=""
                    placeholder="请选择出发地"
                    readonly="">
                </div>
                <em>→</em>
                <div
                  id="HuoyuanTo"
                  class="fl index_search_input"
                  style="position:relative;">
                  <input
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    name=""
                    class=""
                    placeholder="请选择到达地"
                    readonly="">
                </div>
              </div>
              <input
                id="search_huoyuan"
                type="button"
                class="search_hy"
                value=""></div>
            <div class="more floatr"><a
              href="/huoyuan"
              target="_blank">更多&gt;</a></div>
          </div>

          <div class="hy clear">
            <dl class="hy_d">
              <dd class="d1">出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</dd>
              <dd class="d2">到达地</dd>
              <dd class="d3">货物名称</dd>
              <dd class="d4">重量</dd>
              <dd class="d5">体积</dd>
              <dd class="d6">运输类型</dd>
              <dd class="d7">发布时间</dd>
              <dd class="d8">操作</dd>
            </dl>
            <div
              v-if="$store.state.huoyuan.index_list.length === 0"
              class="none_hy"><span>暂无货源信息</span>
            </div>


            <div
              v-else
              class="clear scroll_nr1">



              <ul
                id="js004"
                class="hy_nr "
                style="margin-top: 0px;">

                <template v-for="(item, index) in $store.state.huoyuan.index_list" >

                  <li :key="index">
                    <a
                      id="nr_a31"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                      :title="item.startProvinceCityArea"><span
                        id="nr031"
                        class="t1">{{ item.startProvinceCityArea }}</span></a>
                    <a
                      id="nr_a31"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                      :title="item.endProvinceCityArea"><span
                        id="nr031_2"
                        class="t2">{{ item.endProvinceCityArea }}</span></a>
                    <a
                      id="nr_a33"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                    ><span
                      id="nr033"
                      class="t3">{{ item.goodsTypeName }}</span></a>
                    <a
                      id="nr_a34"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"><span class="t4"><font
                        id="nr034"
                        style="color: #f00;">{{ item.goodsWeight }}公斤</font></span></a>
                    <a
                      id="nr_a35"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"><span class="t5"><font
                        id="nr035"
                        style="color: #f00;">{{ item.goodsVolume }}方</font></span></a>
                    <a
                      id="nr_a36"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"><span
                        id="nr036"
                        class="t6">{{ item.orderType }}</span></a>
                    <a
                      id="nr_a37"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                      :title="item.createTime"><span
                        id="nr037"
                        class="t7">{{ (item.createTime || '').replace(/^.*-(\d{2}-\d{2}).*/, '$1') }}</span></a>
                    <a
                      id="nr_a38"
                      :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                      target="_blank"><span
                        id="t8"
                        class="t8">查看</span></a>
                  </li>
                </template>

              </ul>

            </div>

          </div>

        </div>

      </div>
      <div class="right_box">
        <!--echart图表 S-->
        <div class="right_price_bt1">
          <div class="xt_bottom w102"/>
          <div class="floatl">
            <b>价格指数</b>
          </div>

        </div>

        <div class="linelist linelist2">
          <div class="line-list-ul2">
            <ul>
              <li class="current">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">武汉</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">南昌</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">重庆</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">长沙</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">郑州</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">合肥</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">贵阳</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>



            </ul>
            <div class="echartbox2">
              <strong>本周价格：</strong>
              <div class="zhong-info"><span class="zhong-info-price">重货 ：<i>0.45</i>元/公斤</span><i class="zhong-info-tong">↑5%</i>，环比<em class="zhong-info-huan">-6%</em></div>
              <div class="qing-info">  <span class="qing-info-price">轻货：  <i>200</i>元/方</span><i class="qing-info-tong">↑5%</i>，环比<em class="qing-info-huan">-6%</em></div>
              <div class="echartwrapper"/>
            </div>
          </div>

          <div class="hq-news-from">
            <form style="position: relative;">
              <div
                id="cx_start"
                class="fl from-input noieclear"
                style="position:relative;">
                <input
                  style="height: 100%;"
                  data-toggle="city-picker"
                  data-level="district"
                  type="text"
                  autocomplete="off"
                  placeholder="出发地">
              </div>

              <img
                class="fl"
                src="/index_files/search_jiantou.png">
              <div
                id="cx_end"
                class="fl from-input noieclear"
                style="position:relative;">
                <input
                  style="height: 100%;"
                  data-toggle="city-picker"
                  data-level="district"
                  type="text"
                  autocomplete="off"
                  placeholder="目的地">
              </div>
              <a
                id="hqzx_btn1"
                href="javascript:void(0)"
                onclick="line_cx()"
                class="hq-a-text">查询其他专线</a>
            </form>
          </div>


        </div>

        <!--echart图表 E-->
      </div>

    </div>
    <div class="banner">
      <img src="/images/index/24banners2.png">
    </div>
    <div
      id="rf04"
      class="main4 center ">
      <div class="main4_1">
        <div class="main4_1_1">
          <div class="xt_bottom"/>
          <div class="floatl">
            <b>找物流公司</b>
          </div>
          <div class="more2 floatr"><a
            href="/gongsi?"
            target="_blank">更多&gt;</a></div>
        </div>
        <div class="hy clear">



          <dl class="wlyq_d">
            <dd class="d0001">公司名称</dd>
            <dd class="d0002">公司所在地</dd>
            <dd class="d0003">经营范围</dd>
            <dd class="d0004">操作</dd>

          </dl>

          <div
            v-if="$store.state.company.index_list.length === 0"
            class="none_wlgs"><span>暂无物流公司信息</span>
          </div>
          <div
            v-else
            class="clear scroll_nr4">

            <ul
              id="js_wlgs"
              class="wlyq_nr">

              <template v-for="(item, index) in $store.state.company.index_list" >

                <li :key="index">
                  <a
                    id="wlgs_a1"
                    :href="'/member/' + item.id + ''"
                    :title="item.companyName"
                    target="_blank"
                    style="color: #fff;"><span
                      id="wlgs_name"

                      class="t0001">{{ item.companyName }}</span></a>
                  <a
                    id="wlgs_a2"
                    :href="'/member/' + item.id + ''"
                    target="_blank"
                    style="color: #fff;"><span
                      id="wlgs_postion"
                      class="t0002">{{ item.belongCityName }}</span></a>
                  <a
                    id="wlgs_a3"
                    :href="'/member/' + item.id + ''"
                    target="_blank"
                    style="color: #fff;"><span
                      id="wlgs_jyfw"
                      :title="(item.productService || '').replace(/(\[|\])/g, '')"
                      class="t0003">{{ (item.productService || '').replace(/(\[|\]|")/g, '') }}</span></a>
                  <span
                    id="t77"
                    class="t0004"><a
                      id="wlgs_a"
                      :href="'/member/' + item.id + ''"
                      target="_blank">查看</a></span>
                </li>
              </template>

            </ul>
          </div>

        </div>
      </div>
      <div class="main4_2">
        <div class="main4_2_1">
          <div class="xt_bottom"/>
          <div class="floatl">
            <b>找物流园区</b>
          </div>
          <div class="more2 floatr"><a
            href="/wuliu?"
            target="_blank"><span>更多&gt;</span></a></div>
        </div>
        <div class="h10"/>
        <div class="hy clear">
          <dl class="wlyq_d">
            <dd class="d01">物流园名称</dd>
            <dd class="d02">所在地</dd>
            <dd class="d03">专线数量</dd>
            <dd class="d04">操作</dd>

          </dl>
          <div class="clear ">
            <ul
              id="js_wlyq"
              class="wlyq_nr">

              <template v-for="(item, index) in $store.state.wuliu.index_list" >

                <li :key="index">
                  <a
                    id="wlyq_a1"
                    :title="item.parkName"
                    :href="'/wuliu/detail?id='+item.id"
                    target="_blank"
                    style="color: #fff;"><span
                      id="wlyq_name"
                      class="t01">{{ item.parkName }}</span></a>
                  <a
                    id="wlyq_a2"
                    :title="item.parkAddress"
                    :href="'/wuliu/detail?id='+item.id"
                    target="_blank"
                    style="color: #fff;"><span
                      id="wlyq_postion"
                      class="t02">{{ item.parkAddress }}</span></a>
                  <a
                    id="wlyq_a3"
                    :href="'/wuliu/detail?id='+item.id"
                    target="_blank"
                    style="color: #fff;"><span
                      id="wlyq_num"
                      class="t03">{{ item.transportNumber }}</span></a>
                  <span
                    id="t77"
                    class="t04"><a
                      id="wlyq_a4"
                      :href="'/wuliu/detail?id='+item.id"
                      target="_blank">查看</a></span>
                </li>
              </template>






            </ul>
          </div>
        </div>


      </div>
    </div>
    <div
      id="rf06"
      class="main3 center ">

      <div class="tyxbox"><div class="tyxboxWrap">
        <div class="tyxleft tyxleft1">
          <div class="sHeadern">
            <div class="xt_bottom"/>
            <b>物流商务信息</b>
            <!--
    	<em>	<a href="#" title="合作信息">合作</a><a href="#" title="求购信息">求购</a> <a href="#" title="供应信息">供应</a><a href="#" title="招商信息">招商</a> <a href="#" title="代理信息">代理</a>
    	</em>
    	-->
            <span><a
              href="/zixun/wlswxx/index.jhtml"
              title="更多物流商务信息">更多&gt;</a></span></div>
          <ul class="swlist fls">
            <li
              v-for="(item, index) in $store.state.news.index_wlswxx"
              :key="index"
              :class="index%2 ? 'extra' : ''"
              class="nods"
            >
              <a
                :href="item.url"
                class="cur">代理</a><a
                  :href="item.url"
                  class="tag">其他</a><a
                    :href="item.url"
                    :title="item.title">{{ item.title }}</a><span><a
                      :href="item.url"
                      class="cur">详情</a></span>
            </li>
          </ul>


        </div>
        <div class="tyxright tyxright1">

          <div class="sHeadern ">
            <div class="xt_bottom"/>
            <b>物流公司推荐</b>
          </div>
          <ul id="wlgs_tj">
            <template v-for="(item, index) in $store.state.company.recommend" >
              <li
                :key="index"
                :class="index > 2 ? 'arank2' : ''"
                class="arank">
                <div
                  :class="index > 2 ? 'avatar2' : ''"
                  class="avatar">
                  <a
                    :href="'/member/' + item.id + ''"
                    :title="item.companyName"
                    target="_blank"><span>{{ index + 1 }}</span></a>
                </div>
                <div class="info">
                  <div
                    v-if="index < 3"
                    class="wlgs_pic"><img
                      :src="'/images/index/wlgs_tj_0'+(index )+'.png'"
                      class="scrollLoading"
                      alt=""></div>
                  <div class="company"><a
                    :href="'/member/' + item.id + ''"
                    :title="item.companyName"
                    target="_blank"
                    class="yh">{{ item.companyName }}</a></div>
                </div>
              </li>
            </template>


          </ul>

        </div>
      </div>
      </div>



      <!--仓库出租/物流设备采购 E-->
      <div class="banner">
        <img src="/images/index/26banners3.png">
      </div>

      <!--物流资讯/物流前沿/网点加盟招商 S-->
      <div
        id="rf07"
        class="main5 center">
        <div class="main5_1 jtabwrap">
          <div id="main5_1_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_1"><a
              class="zx_a1 jtabtit"
            >物流资讯</a></div>
            <div id="bt2_5_1"><a
              class="zx_a1 jtabtit"
            >理政资讯</a></div>
            <div
              id="more1_5_1"
              class="morelink"><a
                href="/zixun/xyzx/index.jhtml"
                target="_blank">更多&gt;</a></div>
            <div
              id="more2_5_1"
              class="morelink"><a
                href="/zixun/lzzx/index.jhtml"
                target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <NewsList
            id="main5_1_nr1"
            :list="$store.state.news.index_wlzx" />

          <NewsList
            id="main5_1_nr2"
            :list="$store.state.news.index_lzzx" />

        </div>
        <div class="main5_2 jtabwrap">
          <div id="main5_2_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_2"><a
              class="zx_a2 jtabtit"
            >物流前沿</a></div>
            <div id="bt2_5_2"><a
              class="zx_a2 jtabtit"
            >物流行业分析</a></div>
            <div
              id="more1_5_2"
              class="morelink"><a
                href="/zixun/wlqy/index.jhtml"
                target="_blank">更多&gt;</a></div>
            <div
              id="more2_5_2"
              class="morelink"><a
                href="/zixun/wlxyfx/index.jhtml"
                target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <NewsList
            id="main5_2_nr1"
            :list="$store.state.news.index_wlqy" />

          <NewsList
            id="main5_2_nr2"
            :list="$store.state.news.index_wlxyfx" />

        </div>


        <div class="main5_3 jtabwrap">
          <div id="main5_3_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_2"><a
              class="zx_a3 jtabtit"
            >采购资讯</a></div>
            <div id="bt2_5_2"><a
              class="zx_a3 jtabtit"
            >仓储与配送</a></div>
            <div
              id="more1_5_2"
              class="morelink"><a
                href="/zixun/cgzx/index.jhtml"
                target="_blank">更多&gt;</a></div>
            <div
              id="more2_5_2"
              class="morelink"><a
                href="/zixun/ccyps/index.jhtml"
                target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <NewsList
            id="main5_3_nr1"
            :list="$store.state.news.index_cgzx" />

          <NewsList
            id="main5_3_nr2"
            :list="$store.state.news.index_ccyps" />

        </div>
      </div>

      <!--物流资讯/物流前沿/网点加盟招商 E-->

      <!--会员量/客户案例/常用实用工具 S-->
      <div class="main5 center">
        <div class="main5_1">
          <div id="main6_1_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_1"><a>会员量</a></div>
          </div>
          <div class="clear"/>
          <div id="main6_1_hy">
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q211145A2U6.png"
                width="60px"
                height="60px">
              <span>工厂</span>
              <i>852</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q21114563U54.png"
                width="60px"
                height="60px">
              <span>商贸</span>
              <i>2078</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q211145620612.png"
                width="60px"
                height="60px">
              <span>物流公司</span>
              <i>2018</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q21114552W24.png"
                width="60px"
                height="60px">
              <span>三方物流</span>
              <i>2046</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q211145501230.png"
                width="60px"
                height="60px">
              <span>信息部</span>
              <i>3012</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q211145442243.png"
                width="60px"
                height="60px">
              <span>快递公司</span>
              <i>886</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q2111454245S.png"
                width="60px"
                height="60px">
              <span>车主</span>
              <i>2088</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img
                src="/uploads/181211/1-1Q21114540QZ.png"
                width="60px"
                height="60px">
              <span>其他类型</span>
              <i>1122</i>
            </div>
            <!--会员量 E-->




          </div>
        </div>
        <div class="main5_2">
          <div id="main5_2_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_2">
            <a >客户案例</a></div>
            <div id="more1_5_2"><a
              href="/help/khal/index.jhtml"
              target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <div id="main6_2_nr1">
            <div
              v-for="(item, index) in $store.state.news.index_khal"
              :key="index"
              class="anli">
              <div class="floatl"><a
                :href="item.url"
                :title="item.title"
                target="_blank"><img
                  :src="item.typeImg"
                  :alt="item.title"
                  width="90px"
                  height="68px"></a>	</div>
              <div class="anlixq">
                <span>{{ item.title }}</span><br>
                <a
                  :href="item.url"
                  target="_blank">{{ (item. description || '').substr(0,28) + '...' }}</a>
              </div>
            </div>

          </div>


        </div>
        <div class="main5_3">
          <div id="main6_3_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_6_3">
            <a>常用工具</a></div>
          </div>
          <div class="clear"/>
          <div id="tools">
            <div class="t"><a
              target="_blank"
              href="http://www.chajiaotong.com/jiashizheng/#guangdong"><em>•</em>驾驶证查询</a></div>
            <div class="t bold"><a
              target="_blank"
              href="http://www.chajiaotong.com/jiashizheng/#guangdong"><em>•</em>行驶证查询</a></div>
            <div class="t bold"><a
              target="_blank"
              href="https://www.kuaidi100.com/"><em>•</em>快递查询</a></div>
            <div class="t"><a
              target="_blank"
              href="http://www.weizhang8.cn/"><em>•</em>交通违章查询</a></div>
            <div class="t"><a
              target="_blank"
              href="http://tianqi.2345.com/"><em>•</em>天气预报</a></div>
            <div class="t"><a
              target="_blank"
              href="https://shenfenzheng.51240.com/"><em>•</em>身份证查询</a></div>
            <div class="t"><a
              target="_blank"
              href="https://shouji.51240.com/"><em>•</em>手机号码归属地</a></div>
            <div class="t bold"><a
              target="_blank"
              href="https://wannianrili.51240.com/"><em>•</em>万年历</a></div>
            <div class="t"><a
              target="_blank"
              href="http://www.chinacar.com.cn/vin_index.html"><em>•</em>车辆代码查询</a></div>
            <div class="t"><a
              target="_blank"
              href="https://youbian.51240.com/"><em>•</em>邮政编号查询</a></div>
            <div class="t bold"><a
              target="_blank"
              href="http://map.baidu.com/fwmap/zt/traffic/"><em>•</em>全国路况信息查询</a></div>
            <div class="t bold"><a
              target="_blank"
              href="https://www.icauto.com.cn/gonglu/"><em>•</em>全国高速公路查询</a></div>
            <div class="t"><a
              target="_blank"
              href="http://www.zou114.com/highwaycode/"><em>•</em>国家干线公路查询</a></div>
            <div class="t"><a
              target="_blank"
              href="http://cal.apple886.com/"><em>•</em>在线计算器</a></div>

          </div>


        </div>
      </div>
      <!--会员量/客户案例/常用实用工具  E-->
      <!--合作伙伴 S-->
      <div class="partner center w1400">
        <div class="bt"><span>28快运可以为您提供什么服务保障？</span></div>
        <div class="bt2"><span>集结众多货运能力，提供真实可靠的物流服务</span></div>
        <div style="width:1400px;height:322px;">
          <div class="partner_item">
            <p><img src="/images/index/partner_1.png"></p>
            <p class="item_txt1">海量运力</p>
            <p class="item_txt2">链接上千家快运物流公司，产品囊括小票、大票零担，网络线路覆盖千万级，实现一点发全国。</p>
          </div>
          <div class="partner_item">
            <p><img src="/images/index/partner_2.png"></p>
            <p class="item_txt1">独享低价</p>
            <p class="item_txt2">大量批发货主合伙人，独享物流费用议价能力，实现全网线上比价，在线下单可统一管理物流订单。</p>
          </div>
          <div class="partner_item">
            <p><img src="/images/index/partner_3.png"></p>
            <p class="item_txt1">物流跟踪</p>
            <p class="item_txt2">物流节点及时更新，货物物流跟踪全程可视，让发货方和收货方的交易因物流而变得更信任。</p>
          </div>
          <div class="partner_item">
            <p><img src="/images/index/partner_4.png"></p>
            <p class="item_txt1">发货保障</p>
            <p class="item_txt2">28快运在线发货，服务有保障，若有异议可在线投诉，客服及时介入处理，让您发货无忧。</p>
          </div>


        </div>
      </div>


    </div>
    <!--右侧悬浮 S-->
    <div class="floatNavBar">

      <div class="nav-bd">
        <div class="rightKfCon"><a class="rightKf"/></div>
        <div class="rightBarHidden">
          <div class="item">
            <i class="kfImg"/>
            <div class="kfTop">
              <h3>在线客服</h3>
              <p>周一至周五 9:00-18:00</p>
            </div>
            <div class="kfCenter">
              <a
                class="keFu1"
                onclick="javascript:window.open('tencent://message/?uin=596803544&amp;Site=&amp;menu=yes');">
              <img src="/images/kefu1.png"></a>
              <a onclick="javascript:window.open('tencent://message/?uin=596803544&amp;Site=&amp;menu=yes');">
              <img src="/images/kefu2.png"></a>
            </div>
            <div class="kfRight">
              <span>客服电话</span><br>
              <span class="phone">400-9992828</span>
            </div>
          </div>
        </div>

        <ul class="nav-flo">
          <li class=""><a
            href="#rf01"
            title="找专线">找专线</a></li>
          <li class=""><a
            href="#rf02"
            title="找车源">找车源</a></li>
          <li class=""><a
            href="#rf03"
            title="找货源">找货源</a></li>
          <li class=""><a
            href="#rf04"
            title="找园区">找园区</a></li>
          <li>
            <a
              href="#rf00"
              title="回顶部"
              class="last">回顶部<br>
            <i class="whiteArw"/></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import NewsList from '@/components/index/newsList.vue'

export default {
  name: 'HomePage',
  components: {
    NewsList
  },

  data() {
    return {
      title: '首页',
      lists: [],
      ip: '',
      islogin: false,
      username: ''
    }
  },
  computed: {
    dailyData() {
      return this.$store.state.dailyData
    }
  },
  async fetch({ store, params, $axios, error, app }) {
    // console.log(
    //   'before fetch cookie1111111: ',
    //   app.$cookies.get('currentProvince')
    // )

    let cookie = app.$cookies

    let areaData = {
      currentArea: cookie.get('currentArea'),
      currentAreaFullName: cookie.get('currentAreaFullName'),
      currentAreaName: cookie.get('currentAreaName'),
      currentProvince: cookie.get('currentProvince'),
      currentProvinceFullName: cookie.get('currentProvinceFullName'),
      currentProvinceName: cookie.get('currentProvinceName')
    }

    if (!areaData.currentProvince) {
      areaData = store.state.area
    }
    let paramArea = {
      startProvince: areaData.currentProvinceFullName,
      startCity: areaData.currentAreaFullName,
      startArea: ''
    }
    // console.log('before fetch cookie2222: ', areaData.currentAreaName)

    // 多个栏目的参数配置
    let paramsObj = {
      index_khal: {
        channelIds: '118',
        count: 3,
        // checked: 'true',
        // recommend: '1',
        orderBy: 9,
        channelOption: 0
      },
      index_wlzx: {
        channelIds: '94',
        count: 4,
        orderBy: 9,
        channelOption: 0
      },
      index_lzzx: {
        channelIds: '97',
        count: 4,
        orderBy: 9,
        channelOption: 0
      },
      index_wlqy: {
        channelIds: '105',
        count: 4,
        orderBy: 9,
        channelOption: 0
      },
      index_wlxyfx: {
        channelIds: '107',
        count: 4,
        orderBy: 9,
        channelOption: 0
      },
      index_cgzx: {
        channelIds: '100',
        count: 4,
        orderBy: 9,
        channelOption: 0
      },
      index_ccyps: {
        channelIds: '101',
        count: 4,
        orderBy: 9,
        channelOption: 0
      },
      index_wlswxx: {
        channelIds: '119',
        count: 16,
        orderBy: 9,
        channelOption: 0
      }
    }
    let theparams = Object.values(paramsObj).map(el => JSON.stringify(el))
    let names = Object.keys(paramsObj)

    await Promise.all([
      store.dispatch('news/GETMULTYNEWSINFO', {
        params: '{' + theparams.join(';') + '}',
        names: names,
        preFn: data => {
          return data.map((els, index) => {
            return els.map(el => {
              el.url = el.url.replace(
                'http://192.168.1.79/anfacms',
                index === 0 ? '/help' : '/zixun'
              )
              // console.log('el typemg', el.typeImg)
              return el
            })
          })
        }
      }),
      // 获取推荐物流公司
      store.dispatch('company/GETRECOMMEND', {
        data: Object.assign({ pageSize: 8 }, paramArea)
      }),
      // 获取物流公司列表
      store.dispatch('company/GETCOMPANYLIST', {
        data: Object.assign({ pageSize: 27 }, paramArea),
        name: 'index_list'
      }),
      // 获取物流园区列表
      store.dispatch('wuliu/GETLIST', {
        data: Object.assign({ pageSize: 9 }, paramArea),
        name: 'index_list'
      }),
      // 获取专线列表
      store.dispatch('line/GETLIST', {
        data: Object.assign({ pageSize: 27 }, paramArea),
        name: 'index_list'
      }),
      // 获取货源列表
      store.dispatch('huoyuan/GETLIST', {
        data: Object.assign({ pageSize: 27 }, paramArea),
        name: 'index_list'
      }),
      // 获取车源列表
      store.dispatch('cheyuan/GETLIST', {
        data: Object.assign({ pageSize: 27 }, paramArea),
        name: 'index_list'
      }),
      // 获取统计数据
      store.dispatch('getDailydata', {})
    ])
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/index/css/echarts.css' }]
  },
  mounted() {
    if (process.client) {
      let cookies = this.$cookies
      let acct = cookies.get('access_token')
      if (acct) {
        this.islogin = true
        this.username = cookies.get('login_mobile')
      }
      seajs.use(
        [
          '/index/js/pic_scroll.js',
          '/index/js/gaodemap2.js',
          '/index/js/index.js',
          '/index/js/floatBar.min.js',
          '/index/js/map/echarts.min.js'
        ],
        function() {
          seajs.use(['/index/js/echart/index.js'])
          $(function() {
            $('a[_for]').mouseover(function() {
              $(this)
                .parents()
                .children('a[_for]')
                .removeClass('thisclass')
                .parents()
                .children('dd')
                .hide()
              $(this)
                .addClass('thisclass')
                .blur()
              $('#' + $(this).attr('_for')).show()
            })
            $('a[_for=uc_member]').mouseover()
            $('a[_for=flink_1]').mouseover()
          })

          // <!-- 客服点击弹出效果-->
          function kefu_block() {
            //alert("1");
            $('.kefu_box').css('display', 'block')
          }
          function kefu_none() {
            //alert("1");
            $('.kefu_box').css('display', 'none')
          }
          // $('.nods:nth-child(even)').addClass('extra')
          //header车源搜索 S
          $('#search_cheyuan0').click(function() {
            var list1 = [],
              list2 = []
            $('#carLineFrom0 .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#carLineTo0 .select-item').each(function(i, e) {
              list2.push($(this).text())
            })
            var endp = list2[0]
            var endc = list2[1]
            var enda = list2[2]

            if (!startp) {
              startp = ''
            }
            if (!startc) {
              startc = ''
            }
            if (!starta) {
              starta = ''
            }
            if (!endp) {
              endp = ''
            }
            if (!endc) {
              endc = ''
            }
            if (!enda) {
              enda = ''
            }
            startp = encodeURI(startp)
            startc = encodeURI(startc)
            starta = encodeURI(starta)
            endp = encodeURI(endp)
            endc = encodeURI(endc)
            enda = encodeURI(enda)
            window.location =
              '/cheyuan?startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta +
              '&endp=' +
              endp +
              '&endc=' +
              endc +
              '&enda=' +
              enda
          })
          //header车源搜索 E

          //header货源搜索 S
          $('#search_huoyuan0').click(function() {
            var list1 = [],
              list2 = []
            $('#HuoyuanFrom0 .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#HuoyuanTo0 .select-item').each(function(i, e) {
              list2.push($(this).text())
            })
            var endp = list2[0]
            var endc = list2[1]
            var enda = list2[2]

            if (!startp) {
              startp = ''
            }
            if (!startc) {
              startc = ''
            }
            if (!starta) {
              starta = ''
            }
            if (!endp) {
              endp = ''
            }
            if (!endc) {
              endc = ''
            }
            if (!enda) {
              enda = ''
            }
            startp = encodeURI(startp)
            startc = encodeURI(startc)
            starta = encodeURI(starta)
            endp = encodeURI(endp)
            endc = encodeURI(endc)
            enda = encodeURI(enda)
            window.location =
              '/huoyuan?startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta +
              '&endp=' +
              endp +
              '&endc=' +
              endc +
              '&enda=' +
              enda
          })
          //header货源搜索 E

          //header专线搜索 S
          $('#search_wlLine0').click(function() {
            var list1 = [],
              list2 = []
            $('#wlLineFrom0 .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#wlLineTo0 .select-item').each(function(i, e) {
              list2.push($(this).text())
            })
            var endp = list2[0]
            var endc = list2[1]
            var enda = list2[2]

            if (!startp) {
              startp = ''
            }
            if (!startc) {
              startc = ''
            }
            if (!starta) {
              starta = ''
            }
            if (!endp) {
              endp = ''
            }
            if (!endc) {
              endc = ''
            }
            if (!enda) {
              enda = ''
            }
            startp = encodeURI(startp)
            startc = encodeURI(startc)
            starta = encodeURI(starta)
            endp = encodeURI(endp)
            endc = encodeURI(endc)
            enda = encodeURI(enda)
            window.location =
              '/zhuanxian/list?startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta +
              '&endp=' +
              endp +
              '&endc=' +
              endc +
              '&enda=' +
              enda
          })
          //header专线搜索 E

          /*滚动效果*/

          var $this1 = $('.scroll_nr1')
          var scrollTimer1
          //alert(1);
          $this1
            .hover(
              function() {
                clearInterval(scrollTimer1)
              },
              function() {
                scrollTimer1 = setInterval(function() {
                  scrollNews($this1)
                }, 10000)
              }
            )
            .trigger('mouseout')

          var $this2 = $('.scroll_nr2')
          var scrollTimer2
          //alert(1);
          $this2
            .hover(
              function() {
                clearInterval(scrollTimer2)
              },
              function() {
                scrollTimer2 = setInterval(function() {
                  scrollNews($this2)
                }, 10000)
              }
            )
            .trigger('mouseout')

          var $this3 = $('.scroll_nr3')
          var scrollTimer3
          //alert(1);
          $this3
            .hover(
              function() {
                clearInterval(scrollTimer3)
              },
              function() {
                scrollTimer3 = setInterval(function() {
                  scrollNews($this3)
                }, 10000)
              }
            )
            .trigger('mouseout')

          var $this4 = $('.scroll_nr4')
          var scrollTimer4
          //alert(1);
          $this4
            .hover(
              function() {
                clearInterval(scrollTimer4)
              },
              function() {
                scrollTimer4 = setInterval(function() {
                  scrollNews4($this4)
                }, 10000)
              }
            )
            .trigger('mouseout')

          function scrollNews(obj) {
            //alert(1);
            var $self = obj.find('ul:first')
            var lineHeight = $self.find('li:first').height()
            $self.animate(
              { 'margin-top': -8 * lineHeight + 'px' },
              2000,
              function() {
                $self.css({ 'margin-top': '0px' })
                obj
                  .find('ul:first li')
                  .slice(0, 8)
                  .appendTo($self)
              }
            )
          }
          function scrollNews4(obj) {
            //alert(1);
            var $self = obj.find('ul:first')
            var lineHeight = $self.find('li:first').height()
            $self.animate(
              { 'margin-top': -9 * lineHeight + 'px' },
              2000,
              function() {
                $self.css({ 'margin-top': '0px' })
                obj
                  .find('ul:first li')
                  .slice(0, 9)
                  .appendTo($self)
              }
            )
          }
          //echart滚动脚本
          var speed = 30 //数字越大速度越慢
          var tab = $('.echart_scroll_nr')
          var tab1 = $('.echart_scroll_nr1')
          var tab2 = $('.echart_scroll_nr2')
          tab2.html(tab1.html())
          console.log('tab2:' + tab2.html())
          function Marquee() {
            if (tab2[0].offsetWidth - tab[0].scrollLeft <= 0) {
              tab[0].scrollLeft -= tab1[0].offsetWidth
              //console.log('tab1[0].offsetWidth:'+tab1[0].offsetWidth)
            } else {
              tab[0].scrollLeft++
              //console.log('tab[0].scrollLeft:'+tab1[0].scrollLeft)
            }
          }
          var MyMar = setInterval(Marquee, speed)
          tab.mouseover(function() {
            clearInterval(MyMar)
          })
          tab.mouseout(function() {
            MyMar = setInterval(Marquee, speed)
          })
          // 资讯切换
          $('.jtabtit').on('click', function() {
            var par = $(this).closest('.jtabwrap')
            var jtits = par.find('.jtabtit')
            var jcons = par.find('.jtabcon')
            var links = par.find('.morelink')
            var inx = jtits.index($(this))
            jtits
              .css('color', '#333')
              .eq(inx)
              .css('color', '#2577e3')
            jcons
              .hide()
              .eq(inx)
              .show()
            links
              .hide()
              .eq(inx)
              .show()
            return false
          })
        }
      )
    }
  }
}
</script>
