<template>
  <div class="arc_main">
    <!--<div class="arc_nav">-->
    <!--<a href="/">物流首页</a>&gt;<a -->
    <!--id="arc_nav_a1" -->
    <!--href="">货源信息</a>&gt;<a -->
    <!--id="arc_nav_a2" -->
    <!--href="">货源信息</a>-->
    <!--</div>-->
    <div class="arc_top1">
      <div class="arc_top1_1"><span>{{ hyDetail.startProvinceCityArea + '	&rarr;' + hyDetail.endProvinceCityArea }}</span></div>

      <div class="arc_top1_3"><a 
        id="search_huo" 
        target="_blank"><input 
          class="arc_input3" 
          value="搜全网"> </a></div>
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
      <div class="arc_top2_2">
        <a
          v-for="(item,index) in zxList"
          v-if="index < 14"
          :key="index"><span>{{ index === 0 ? '直达' + item.name.substring(0, 2) : item.name.substring(0, 2) }}</span>
        </a>
      </div>
      <div
        v-if="zxList.length >14"
        class="arc_top2_3"
        style="display: block"
        onmouseover="$('.city_box').css('display','block');"><a href="javascript:void(0)"><span>更多+</span></a></div>
      <!--更多城市-->
      <div 
        id="city_box" 
        class="city_box" 
        onmouseover="$('.city_box').css('display','block');"
        onmouseout="$('.city_box').css('display','none');">
        <a
          v-for="(item,index) in zxList"
          v-if="index >= 14"
          :key="index"><span>{{ item.name.substring(0, 2) }}</span>
        </a>
      </div>

    </div>
    <div class="arc_main1">
      <div class="arc_left">
        <div class="arc_left_1">
          <div class="top_left">
            <ul 
            class="top_left_ul" >
              <li 
                v-for="(item,index) in newList" 
                :key="index" 
                class="top_left_ul_li" >
                <span>用户<em style="color: #2577e3;">{{ item.creater }}</em></span>
                <span><em style="color: #2577e3;">{{ item.startCity }}</em>到</span>
                <span><em style="color: #2577e3;">{{ item.endCity }}</em>货源</span>
                <span>{{ item.time }}3分钟前</span>
              </li>
            </ul>
          </div>
          <p class="arc_p1"><span>{{ hyDetail.startProvinceCityArea + '	&rarr;' + hyDetail.endProvinceCityArea }}</span>
            <span class="arc_p2"><img 
              class="imgarc_p2"
              src="/images/list_wlzx/ll_num.png"><i>浏览量：<em>{{ hyDetail.browseNumber }}</em></i>
            </span>
          </p>
          <div class="arc_middle1-2"><span><img
            class="img1"
            src="/images/list_wlzx/hy_item6.png"></span><span style="margin-right:50px;">发布日期：{{ hyDetail.createTime }}</span><span><img
              class="img2"
              src="/images/list_wlzx/sc_num.png"></span><span>收藏量：{{ hyDetail.collectNumber }}<i class="my_cz_num"/></span></div>
        </div>
        <div class="arc_left_2">
          <div class="arc_left_2_1">
            <div class="arc_left_2_1_1"><span>货源信息</span></div>
            <div class="arc_left_2_1_2"><table>
              <tr><td class="arc_td1">名称：</td><td class="arc_td2"><font>{{ hyDetail.goodsName }}</font></td></tr>
              <tr><td class="arc_td1">数量：</td><td class="arc_td2">{{ hyDetail.goodsNum ? hyDetail.goodsNum + '件': '' }}</td></tr>
              <tr><td class="arc_td1">重量：</td><td
              class="arc_td2">{{ hyDetail.goodsWeight }}公斤</td></tr>
              <tr><td class="arc_td1">体积：</td><td class="arc_td2">{{ hyDetail.goodsVolume }}立方米</td></tr>
              <tr><td class="arc_td1">有效期：</td><td
              class="arc_td2">{{ hyDetail.orderClass }}</td></tr>
              <tr><td class="arc_td1">其他：</td><td
              class="arc_td2">{{ hyDetail.extraName }}</td></tr>
              <tr><td class="arc_td1">备注：</td><td
              class="arc_td2">{{ hyDetail.remark }}</td></tr>
            </table>
            </div>
          </div>
          
          <div class="arc_left_2_2">
            <div class="collection_zx">
              <div 
                class="bt_close" 
                onclick="$('.collection_zx').hide()" ><img src="/images/article_wlzx/xxx.png"></div>
              <div class="collection_zx_nr">
                <img src="/images/article_wlzx/yes.png">
                <span>成功加入</span><a 
                  id="collection_url" 
                  target="_blank" 
                  href="#">收藏夹</a>
              </div>
            </div>
            <div class="arc_left_2_1_1"><span>线路信息</span></div>
            <div class="arc_left_2_1_2"><table>
              <tr><td class="arc_td1">出发地：</td><td class="arc_td2"><font>{{ hyDetail.startProvinceCityArea }}</font></td></tr>
              <tr><td class="arc_td1">到达地：</td><td class="arc_td2"><font>{{ hyDetail.endProvinceCityArea }}</font></td></tr>
              <tr><td class="arc_td1">联系人：</td><td class="arc_td2">{{ hyDetail.consignor }}</td></tr>
              <tr><td class="arc_td1">联系电话：</td><td class="arc_td2">{{ hyDetail.consignorPhone }}</td></tr>
              <tr><td class="arc_td1">装货时间：</td><td class="arc_td2">{{ hyDetail.createTime }}</td></tr>
              <tr><td class="arc_td1">里程：</td><td class="arc_td2">{{ hyDetail.distance }}</td></tr>
              <tr><td class="arc_td1">期望运价：</td><td class="arc_td2">{{ hyDetail.totalAmount }}</td></tr>
            </table>
            </div>
          </div>
          <div class="arc_bottom">
            <div class="arc_left_3">
              <div>
                <img
                  src="/images/28fast_download.png"
                  width="72"
                  height="72">
              </div>
              <div>
                下载<span>【28快运APP】</span>，您可查看更多<span>广州</span>到<span>东莞</span>的货源，并可实时接 收28快运为您推荐的精品货源提醒!
              </div>

            </div>
            <div class="arc_middle5">
              <div class="arc_m5_1">
                <span>小贴士：对此货源有意向可点击“抢单”，货主即可看到您的联系信息，提高成交率！</span>
                <div style="margin-top: 15px">
                  <a 
                    href="" 
                    class="button1">立即下单</a>
                  <a 
                    href="javascript:;" 
                    class="button2" 
                    @click="openAdd()"
                  ><img 
                    src="/images/cy/03u41008 2.gif" 
                  >此线路上新货源提醒我</a>
                  <span style="margin-left: 47px">
                    <img src="/images/cy/14fresh.png">
                    <span
                      class="arc_middle5-right"
                      @click="findAnother()">换一个</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      <div 
        v-if="archival.shipperType === 'AF00107'" 
        class="arc_right">
        <p class="arc_right01"><img src="/images/article_wlzx/04gongsi.png"><span>{{ archival.companyName }}</span></p>
        <p
          v-if="archival.credit >= 0 && archival.credit <= 150"
          class="arc_right02" ><i>信誉：</i>
          <img
            v-for="(item1,index1) in hyDetail.starS"
            :key="index1"
            class="xy_zuan"
            src="/images/article_wlzx/gold.png"
            style="display: inline">
        </p>
        <p
          v-if="archival.isEnable >= 151"
          class="arc_right02" ><i>信誉：</i>
          <img
            v-for="(item1,index1) in hyDetail.starB"
            :key="index1"
            class="xy_zuan"
            src="/images/article_wlzx/yellowguan.png"
            style="display: inline">
        </p>
        <p class="arc_right03">
          <span>质量</span><span>时效</span><span>价格</span><br >
          <font>{{ archival.serverQualityScore }}</font><font>{{ archival.transportAgingScore }}</font><font>{{ archival.serverPriceScore }}</font>
        </p>
        <p class="arc_right04">
          <span class="arc_right04_1"><i>联系人：</i><font>{{ archival.contactsName }}</font></span>
          <span><i>手机：</i><font>{{ archival.mobile }}</font></span>
          <span><i>Q&nbsp;Q：</i><a
            v-if="archival.qq"
            :href="'http://wpa.qq.com/msgrd?v=3&uin=' + archival.qq + '&site=qq&menu=yes'" 
            target="_blank"><input value="QQ交谈"></a></span>
          <span><i>地址：</i><font v-if="archival.consignorAddress">{{ archival.consignorAddress.substring(0, 10) }}</font></span>
        </p>
        <p class="arc_right05">
          <a 
            href="#" 
            class="website">进入官网</a>
          <input 
            class="collection_hz" 
            style="cursor: pointer;" 
            readonly 
            value="收藏">
        </p>
        <p class="arc_right06">
          <span>相关认证</span>
        </p>
        <p class="arc_right07">
          <img
            v-if="hyDetail.isVip"
            src="/images/article_wlzx/11xinyong.png">
          <img
            v-if="hyDetail.authStatus === 'AF0010403'"
            src="/images/article_wlzx/10shiming.png">
          <span v-if="hyDetail.authStatus !== 'AF0010403' && (!hyDetail.isVip || hyDetail.isVip === 0)">暂无认证信息</span>
        </p>

      </div>
      <div 
        
      class="arc_right1">
        <div class="arc_top_title">
          <h4 v-if="archival.shipperType === 'AF0010101'" >货主档案</h4>
          <h4 else="archival.shipperType === 'AF0010102'" >{{ archival.companyName }}</h4>
        </div>
        <div 
          v-if="archival.shipperType === 'AF0010101'" 
          class="arc_top_img">
          <img src="/images/cy/gold.png">
        </div>
        <div class="arc_middle">
          <img src="/images/cy/09sj.png">
          <p style="color: #fa9925;">{{ archival.shipperTypeName }}</p>
          <p><img src="/images/article_wlzx/10shiming.png"></p>
          <p><img src="/images/cy/13hot.png">活跃度：<i style="color: #fa9925;">{{ archival.liveness }}</i></p>
        </div>
        <ul class="bottom_ul">
          <li>联系人：{{ archival.contacts }}</li>
          <li>手机：
            <a 
              v-show="checkMoblie"
              style="color: #3f94ee;border-bottom: 1px solid #3f94ee" 
              @click="showMoblieFn(showMoblie)">查看电话</a>
            <a 
              v-show="showMoblie"
              style="color: #333" 
              @click="showMoblieFn(showMoblie)">{{ archival.mobile }}</a></li>
          <li>已加入：{{ archival.registerDays }}天</li>
          <li>好评数：{{ archival.evaGoodCount }}</li>
        </ul>
      </div>
    </div>
    <div class="arc_main3">
     
      <div class="right">
        <div class="zx_sx">
          <span class="biaozhi"/><span>货主综合力评估</span>
        </div>
        <div class="content">
          <div class="content-left">
            <div class="img">
              <img
                src="/images/cy/09sj.png"
                width="82"
                height="82">
            </div>
            <div class="name">{{ huoComprehensive.shipperTypeName }}</div>
            <div class="name">
              <img 
                v-if="huoComprehensive.accountStatus === 'AF0010403'" 
                src="/images/article_wlzx/10shiming.png">
            </div>
          </div>
          <div class="content-right">
            <img src="/images/cy/gold.png">
            <div class="content-right-row"><img
              class="img"
              src="/images/cy/13hot.png">活跃度：<i>{{ huoComprehensive.liveness }}</i></div>
            <div class="content-right-row">最近三个月发布货源 <i>{{ huoComprehensive.lastThreeMonthSupplyNum }}</i> 次</div>
            <div class="content-right-row">共成交 <i>{{ huoComprehensive.orderNumber }}</i> 笔订单，收到好评 <i>{{ huoComprehensive.evaGoodCount }}</i> 次</div>
            <div class="content-right-row">大家对他的印象:</div>
            <div 
              v-for="(item,index) in huoComprehensive.labels" 
              :key="index" 
              class="content-right-row">
              <span 
              >{{ item.name }}（{{ item.count }}）</span>
            </div>
            <div
              class="content-right-row"
              style="clear: both">
              <a
                href="javascript:;"
                class="button2"><img src="/images/cy/03u41008 2.gif">帮我选择优质货源</a>
            </div>
          </div>
        </div>

      </div>
      <div class="left">
        <div class="zx_sx">
          <span class="biaozhi"/><span>货主最近货源信息</span>
        </div>
        <div class="list_new_box">
          <ul class="zx_sx_new">
            <li 
              v-for="(item,index) in newestHuoyuanRe"
              :key="index" 
              class="manage_box" >
              <span>{{ item.startProvinceCityArea }}</span>
              <span>{{ item.endProvinceCityArea }}</span>
              <span>{{ item.goodsName }}</span>
              <span><em style="color: #f14747;">{{ item.goodsWeight }}</em>公斤</span>
              <span><em style="color: #f14747;">{{ item.goodsVolume }}</em>方</span>
              <span>{{ item.createTime }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="arc_main4">
      <!-- 货源列表start -->
      <div 
      class="w1036 list_hy">
        <div class="listInfo1">
          <div class="main3_1_1">
            <div class="floatl">
              <b class="b_title">更多从{{ hyDetail.startCity }}出发的货源</b>
        
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
                value="" 
                @click="search()"></div>                        
            <div class="more floatr"><a 
              href="/huoyuan" 
              target="_blank">更多&gt;</a></div>		 
          </div>
          <div 
            v-if="huoInfoList.length === 0" 
            class="list_none" 
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他货源哦</span>
            <img src="/images/none_pic.png">
          </div>
          <ul 
            v-for="(item,index) in huoInfoList"
            :key="index"
            class="wlzx_list">
            <li id="wlzx_list_0">
              <a
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                class="list-title-a"
                target="_blank" >
                <div class="position">

                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em>{{ item.startCity }}</em>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em>{{ item.endCity }}</em>

                </div>
              </a>
              <div class="distance_total">[全程<em>{{ item.distance }}</em>公里]</div>
              <div class="sc_num"><img src="/images/list_wlzx/ll_num.png"><span><i>浏览量:<em>{{ item.browseNumber?item.browseNumber:0 }}</em></i></span></div>
              <div class="view_num"><img src="/images/list_wlzx/sc_num.png"><span><i>收藏量:<em>{{ item.collectNum?item.collectNum:0 }}</em></i></span></div>
            </li>
          
            <li class="wlzx_list_1">
              <p class="p1"/>
              <p class="p2"><img src="/images/list_wlzx/hy_item1.png"><i>货物：</i><font>{{ item.goodsName }} </font></p>
              <p class="p3"><img src="/images/list_wlzx/hy_item2.png"><i>规格：</i>
                <span>{{ item.goodsNum }}<font id="nr0420" >件&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsWeight }}<font >公斤&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsVolume }}<font >立方米</font></span>
              </p>
            </li>
            <li class="wlzx_list_2">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item3.png"><span>发布者：</span><i>{{ item.companyName }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item4.png"><span>联系人：</span><i>{{ item.shipperName }}</i></P>
            </li>
            <li class="wlzx_list_4">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item5.png"><span>货源类型：</span><i>{{ item.orderClass === 0 ? '单次急发货源' : '长期稳定货源' }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item6.png"><span>发布时间：</span><i>{{ item.createTime.substring(0, 16) }}</i></P>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><img
                v-if="item.authStatus === 'AF0010403'"
                src="/images/list_wlzx/10shiming.png"></P>
              <p class="p2"><img
                v-if="item.isVip && item.isVip === '1'"
                src="/images/list_wlzx/11xinyong.png"></P>
            </li>

            <li class="wlzx_list_6">
              <p class="p1"><a
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                target="_blank"><input
                  readonly
                  value="查看"></a>
              </p>
              <p class="p2"><a
                v-if="item.qq"
                :href="'http://wpa.qq.com/msgrd?v=3&uin='+item.qq+'&site=qq&menu=yes'"
                target="_blank">
              <input value="QQ交谈"></a>
              </p>
            </li>
          </ul>
        </div>
        
        <div class="middle-ad">
          <img
            src="/images/cy/10banner.png"
            alt="广告">
        </div>
       
        <div class="listInfo2">
          <div class="zx_sx"><span class="biaozhi"/><span>更多从{{ hyDetail.endCity }}出发的货源</span>
            <i 
              style="cursor: pointer;float: right;font-size: 14px;"
              @click="goToCy()">更多></i>
          </div>
          <div 
            v-if="huoInfoList.length === 0" 
            class="list_none" 
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他货源哦</span>
            <img src="/images/none_pic.png">
          </div>
          <ul 
            v-for="(item,index) in huoInfoList"
            :key="index"
            class="wlzx_list">
            <li id="wlzx_list_0">
              <a
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                class="list-title-a"
                target="_blank" >
                <div class="position">

                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em>{{ item.startCity }}</em>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em>{{ item.endCity }}</em>

                </div>
              </a>
              <div class="distance_total">[全程<em>{{ item.distance }}</em>公里]</div>
              <div class="sc_num"><img src="/images/list_wlzx/ll_num.png"><span><i>浏览量:<em>{{ item.browseNumber?item.browseNumber:0 }}</em></i></span></div>
              <div class="view_num"><img src="/images/list_wlzx/sc_num.png"><span><i>收藏量:<em>{{ item.collectNum?item.collectNum:0 }}</em></i></span></div>
            </li>
          
            <li class="wlzx_list_1">
              <p class="p1"/>
              <p class="p2"><img src="/images/list_wlzx/hy_item1.png"><i>货物：</i><font>{{ item.goodsName }} </font></p>
              <p class="p3"><img src="/images/list_wlzx/hy_item2.png"><i>规格：</i>
                <span>{{ item.goodsNum }}<font id="nr0420" >件&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsWeight }}<font >公斤&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsVolume }}<font >立方米</font></span>
              </p>
            </li>
            <li class="wlzx_list_2">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item3.png"><span>发布者：</span><i>{{ item.companyName }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item4.png"><span>联系人：</span><i>{{ item.shipperName }}</i></P>
            </li>
            <li class="wlzx_list_4">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item5.png"><span>货源类型：</span><i>{{ item.orderClass === 0 ? '单次急发货源' : '长期稳定货源' }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item6.png"><span>发布时间：</span><i>{{ item.createTime.substring(0, 16) }}</i></P>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><img
                v-if="item.authStatus === 'AF0010403'"
                src="/images/list_wlzx/10shiming.png"></P>
              <p class="p2"><img
                v-if="item.isVip && item.isVip === '1'"
                src="/images/list_wlzx/11xinyong.png"></P>
            </li>

            <li class="wlzx_list_6">
              <p class="p1"><a
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                target="_blank"><input
                  readonly
                  value="查看"></a>
              </p>
              <p class="p2"><a
                v-if="item.qq"
                :href="'http://wpa.qq.com/msgrd?v=3&uin='+item.qq+'&site=qq&menu=yes'"
                target="_blank">
              <input value="QQ交谈"></a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 货源列表end -->
      <div class="right4">
        <div class="arc_main4-content">
          <div class="zx_sx">
            <span class="biaozhi"/><span>28快运平台功能导航源</span>
          </div>
          <a
            v-for="(item,index) in gldhList"
            :key="index"
            :href="item.url"
            class="gldh_list"
            target="_blank"
          >
            <div class="img"><img :src="item.img"></div>
            <div>
              <p>{{ item.title }}</p>
              <p>{{ item.subTitle }}</p>
            </div>
          </a>
        </div>

        <div class="arc_main4-content">
          <img
            class="ad"
            src="/images/cy/09banner.png"
            alt="广告">
        </div>

        <div class="arc_main4-content">
          <div class="zx_sx">
            <span class="biaozhi"/><span>热门搜索</span>
          </div>
          <div style="padding: 10px">
            <a
              v-for="(item,index) in hotSearchList"
              :key="index"
              :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
              class="rmsx_list"
              target="_blank">
              {{ item.title }}
            </a>
          </div>
        </div>
        <div
          class="arc_main4-content"
          style="margin-top: 20px">
          <div class="zx_sx"><span class="biaozhi"/><span>企业月人气榜</span></div>
          <div 
            v-for="(item,index) in popularity" 
            :key="index" 
            class="rc_list">
            <a :href="'/member/'+item.id">
              <div class="left">
                <p :class="{'oneColor':index == 0,'twoColor':index== 1 , 'trihColor':index==2}">{{ index+1 }}</p>
              </div>
              <div 
                v-if="index < 3" 
                class="img">
                <img :src="item.companyFile" >
              </div>
              <div class="right">
                <span>{{ item.companyName }}</span>
                <span style="float: right">人气值：<i style="color: red">{{ item.popularity }}</i></span>
              </div>
            </a>
          </div>
        </div>

        <div class="arc_main4-content">
          <img
            class="ad"
            src="/images/cy/09banner.png"
            alt="广告">
        </div>

        <div class="arc_main4-content">
          <img
            class="ad"
            src="/images/cy/09banner.png"
            alt="广告">
        </div>

        <div class="arc_main4-content">
          <img
            class="ad"
            src="/images/cy/09banner.png"
            alt="广告">
        </div>

        <div class="arc_main4-content">
          <img
            class="ad"
            src="/images/cy/09banner.png"
            alt="广告">
        </div>

        <div class="arc_main4-content">
          <ul
            class="ps-list"
            style="padding-left: 30px;list-style: square">
            <li>
              <div class="btn_span">
                <span>代理</span>
                <span>其他</span>
              </div>
              <a href="">货运全国，一站式服务！</a>
            </li>
            <li>
              <div class="btn_span">
                <span>供应</span>
                <span>报关行</span>
              </div>
              <a href="">长期供应香港进出口拖车报关！</a>
            </li>
            <li>
              <div class="btn_span">
                <span>合作</span>
                <span>其他</span>
              </div>
              <a href="">货运全国，一站式服务！</a>
            </li>
            <li>
              <div class="btn_span">
                <span>代理</span>
                <span>其他</span>
              </div>
              <a href="">货运全国，一站式服务！</a>
            </li>
          </ul>
        </div>

      </div>

    </div>
    
    <div class="arc_main4">
      <div class="zx_sx1">
        <span class="biaozhi1"/><span>更多从广州出发的{{ huoLabel }}</span>
      </div>
      <ul class="hot-cities">
        <li 
          v-for="(item,index) in huoLink" 
          :key="index" 
          class="hot-cities-li" >
          <a
            :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
            class="hot-cities-a">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="arc_main4">
      <div class="zx_sx1">
        <span class="biaozhi1"/><span>{{ interesLabel }}</span>
      </div>
      <ul class="hot-cities">
        <li 
          v-for="(item,index) in interestOrder" 
          :key="index" 
          class="hot-cities-li" >
          <a
            :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
            class="hot-cities-a">{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <div 
      id="js011" 
      class="arc_bottom"
      style="display: none">
      <div class="zx_sx"><span class="biaozhi"/><span>此路线其他货源</span><a href="/plus/list.php?tid=2"><span class="arc_bottom_more">更多+</span></a></div>

      <div 
        class="tj_list" 
        style="display: none;">
        <p class="p01"><a 
          id="nr0910" 
          target="_blank"><span id="nr0911">广东-东莞</span><i>&rarr;</i><span id="nr0912">广东-深圳</span></a></p>
        <p class="p03">
          <img src="[field:global.cfg_templets_skin/]/images/04gongsi.png" >&nbsp;<span><a 
            id="nr0913" 
            href="/member/index.php?uid=ybyb120">广州明科物流有限公司</a></span>

        </p>
        <p class="p03">
          <i>货物名称：</i><span id="nr0914">电子电器</span>

        </p>
        <p class="p02">
          <span><i>重量：</i><font id="nr0915">15吨</font></span>  <span><i>体积：</i><font id="nr0916">30立方米</font></span>
        </p>

        <p class="p04">
          <i>数量：</i><span id="nr0917"/>
        </p>
        <p class="p05">
          <img src="[field:global.cfg_templets_skin/]/images/11xinyong.png" >
        </p>
        <p class="p06">
          <a 
            id="nr0918" 
            href="Javascript:void(0)" 
            style="cursor: pointer;"><span>查看&nbsp;&gt;</span></a>
        </p>
      </div>

    </div>
    <Add 
      :is-show-add.sync="isShowAdd" 
      :data-info="dataInfo"/>
  </div>
</template>
<script>
import Add from './add'
import $axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Add
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/article_huoyuan.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ],
    script: [
      { src: '/js/city-picker.data.js' },
      { src: '/js/city-picker.js' },
      { src: '../vendor/layer/layer.js' },
      { src: '../js/jquery.pagination.min.js' },
      { src: '../js/WTMap.min.js' },
      { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
  },
  layout: 'subLayout',
  data() {
    return {
      showMoblie: false,
      checkMoblie: true,
      isShowAdd: false,
      zxList: [],
      inTerVar: null,
      inTerVar1: null,
      otherInfoList: [],
      hyDetail: [],
      pages: 0,
      currentPage: 1,
      startProvince: '',
      startCity: '',
      startArea: '',
      endProvince: '',
      endCity: '',
      endArea: '',
      dataInfo: {},
      gldhList: [
        {
          title: '注册28快运会员',
          subTitle: '免费发布车源货源专线信息，轻松一键搞定',
          url: '/regisiter',
          img: '/images/cy/04zc.png'
        },
        {
          title: '快速下单',
          subTitle: '下单立即响应，甄选优质运力，发货有保障',
          url: '/',
          img: '/images/cy/05xd.png'
        },
        {
          title: '发布车源',
          subTitle: '让客户主动找我，让平台为我撮合',
          url: '/create/cheyuan',
          img: '/images/cy/06cy.png'
        },
        {
          title: '发布货源',
          subTitle: '精准匹配合适物流，方便快捷省钱',
          url: '/create/huoyuan',
          img: '/images/cy/07hy.png'
        },
        {
          title: '发布专线',
          subTitle: '平台智能推荐货源，实施提醒撮合交易',
          url: '/create/line',
          img: '/images/cy/08zx.png'
        }
      ]
    }
  },
  async asyncData({ $axios, app, query }) {
    let zxList
    let hyDetail = await $axios
      .get('/28-web/lclOrder/detail/' + query.id)
      .catch(err => {
        // console.log('huoComprehensives2:', err)
      })
    let parm = {
      currentPage: 1,
      pageSize: 10,
      startProvince: hyDetail.data.data.startProvince,
      startCity: hyDetail.data.data.startCity
    }
    let parm1 = {
      endArea: hyDetail.data.data.endArea,
      endCity: hyDetail.data.data.endCity,
      endProvince: hyDetail.data.data.endProvince,
      startArea: hyDetail.data.data.startArea,
      startCity: hyDetail.data.data.startCity,
      startProvince: hyDetail.data.data.startProvince
    }
    //货主档案
    let archivals = await $axios.post(
      '/28-web/shipper/archival?shipperId=' + query.shipperId
    )
    console.log(archivals.data.data, 'item province:')
    //顶部轮播
    let newLists = await $axios.get('/28-web/lclOrder/newList')
    //货源列表
    let huoInfoLists = await $axios
      .post('/28-web/lclOrder/list', parm)
      .catch(err => {
        // console.log('huoComprehensives4:', err)
      })
    //最新货源信息
    let newestHuoyuanRes = await $axios
      .post('/28-web/lclOrder/shipper/lastList', { shipperId: query.shipperId })
      .catch(err => {
        // console.log('newestHuoyuanRes:', err)
      })
    // 货主综合力评估
    let huoComprehensives = await $axios
      .get('/28-web/shipper/comprehensive?shipperId=' + query.shipperId)
      .catch(err => {
        // console.log('huoComprehensives:', err)
      })
    //货源热门搜索
    let hotSearchs = await $axios.get('/28-web/hotSearch/supply/detail/links')
    //企业人气榜
    let popularitys = await $axios.get('/28-web/logisticsCompany/popularity')
    //底部推荐

    let huoLinks = await $axios.post(
      '/28-web/lclOrder/detail/related/links',
      parm1
    )
    let footLink = item => {
      switch (item.startProvince) {
        case null:
          item.startProvince = ''
      }
      switch (item.startCity) {
        case null:
          item.startCity = ''
      }
      switch (item.startArea) {
        case null:
          item.startArea = ''
      }
      switch (item.endProvince) {
        case null:
          item.endProvince = ''
      }
      switch (item.endCity) {
        case null:
          item.endCity = ''
      }
      switch (item.endArea) {
        case null:
          item.endArea = ''
      }
      item.carSourceType = ''
      item.targetLinks = ''
      if (item.type == '1000') {
        item.targetLinks = '/gongsi/'
      }
      if (item.type == '2000') {
        item.targetLinks = '/zhuanxian/list'
      }
      if (item.type == '2001') {
        item.targetLinks = '/member/' + item.companyId + '-line'
      }
      if (item.type == '3000' || item.type == '3003' || item.type == '3002') {
        item.targetLinks = '/cheyuan'
      }
      if (item.type == '3001') {
        item.targetLinks = '/cheyuan'
        item.carSourceType = 'AF01801'
      }
      if (item.type == '4000') {
        item.targetLinks = '/huoyuan'
      }
      if (item.type == '4001') {
        item.targetLinks = '/member/' + item.companyId + '-huo'
      }
    }
    huoLinks.data.data.brandOrder.links.forEach(footLink)
    huoLinks.data.data.interestOrder.links.forEach(footLink)
    hotSearchs.data.data.links.forEach(footLink)
    return {
      archival: archivals.data.status === 200 ? archivals.data.data : [],
      hyDetail: hyDetail.data.status === 200 ? hyDetail.data.data : {},
      popularity: popularitys.data.status === 200 ? popularitys.data.data : [],
      huoComprehensive:
        huoComprehensives.data.status === 200
          ? huoComprehensives.data.data
          : [],
      newestHuoyuanRe:
        newestHuoyuanRes.data.status === 200
          ? newestHuoyuanRes.data.data.list
          : [],
      newList: newLists.data.status === 200 ? newLists.data.data : [],
      zxList: zxList && zxList.data.status === 200 ? zxList.data.data : [],
      huoInfoList:
        huoInfoLists.data.status === 200 ? huoInfoLists.data.data.list : [],
      // otherInfoList: otherInfoList.list,
      huoLink:
        huoLinks.data.status === 200 ? huoLinks.data.data.brandOrder.links : [],
      huoLabel:
        huoLinks.data.status === 200 ? huoLinks.data.data.brandOrder.label : '',
      interestOrder:
        huoLinks.data.status === 200
          ? huoLinks.data.data.interestOrder.links
          : [],
      interesLabel:
        huoLinks.data.status === 200
          ? huoLinks.data.data.interestOrder.label
          : '',
      hotSearchList:
        hotSearchs.data.status === 200 ? hotSearchs.data.data.links : []
    }
  },

  mounted() {
    $('#wlLineFrom input').citypicker({
      // province: this.hyDetail.startProvince,
      // city: this.hyDetail.startCity,
      // district: this.hyDetail.startArea
    })
    $('#wlLineTo input').citypicker({
      // province: this.hyDetail.endProvince,
      // city: this.hyDetail.endCity,
      // district: this.hyDetail.endArea
    })
    let rollContainer_h = $('.list_new_box').height()
    let roll = $('.zx_sx_new')
    roll.append(roll.html())
    let number = 4
    let l = this.newestHuoyuanRe.length
    let manage_box_h = $('.manage_box').height()
    let startScroll = () => {
      this.inTerVar = setInterval(() => {
        roll
          .stop()
          .animate({ top: `${number * -manage_box_h}px` }, 2000, () => {
            if (number > l) {
              number = 4
              roll.css('top', '0px')
            }
          })
        number = number + 4
      }, 6000)
    }
    if (manage_box_h * l > rollContainer_h) {
      startScroll()
    }
    $('.list_new_box').hover(
      () => {
        clearInterval(this.inTerVar)
        this.inTerVar = null
      },
      () => {
        startScroll()
      }
    )

    let top_left_h = $('.top_left').height()
    let roll_ul_h = $('.top_left_ul')
    roll_ul_h.append(roll_ul_h.html())
    let num = 1
    let newList_l = this.newList.length
    let left_ul_li = $('.top_left_ul_li').height()
    let startScroll_top = () => {
      this.inTerVar1 = setInterval(() => {
        roll_ul_h
          .stop()
          .animate({ top: `${num * -left_ul_li}px` }, 2000, () => {
            if (num > newList_l) {
              num = 1
              roll_ul_h.css('top', '0px')
            }
          })
        num = num + 1
      }, 6000)
    }
    if (left_ul_li * newList_l > top_left_h) {
      startScroll_top()
    }
  },
  destroyed() {
    clearInterval(this.inTerVar)
    this.inTerVar = null
  },
  methods: {
    openAdd() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('user_token')
      if (access_token && user_token) {
        $axios
          .post(
            '/api/28-web/companyLine/subscribe?access_token=' +
              access_token +
              '&user_token=' +
              user_token,
            this.dataInfo
          )
          .then(res => {
            if (res.data.status === 200) {
              layer.msg('订阅成功')
            }
            if (res.data.errorInfo) {
              layer.msg(res.data.errorInfo)
            }
          })
          .catch(err => {
            console.log('提交捕获异常')
          })
      } else {
        this.isShowAdd = true
        this.dataInfo.startProvince = this.hyDetail.startProvince
        this.dataInfo.startCity = this.hyDetail.startCity
        this.dataInfo.startArea = this.hyDetail.startArea
        this.dataInfo.endProvince = this.hyDetail.endProvince
        this.dataInfo.endCity = this.hyDetail.endCity
        this.dataInfo.endArea = this.hyDetail.endArea
        console.log(this.dataInfo)
      }
    },
    showMoblieFn(showMoblieFn) {
      if (showMoblieFn == false) {
        this.showMoblie = true
        this.checkMoblie = false
      } else {
        this.checkMoblie = true
        this.showMoblie = false
      }
    },
    searchDo() {
      let list1 = [],
        list2 = []
      $('#wlLineFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.startProvince = list1[0] ? list1[0] : ''
      this.startCity = list1[1] ? list1[1] : ''
      this.startArea = list1[2] ? list1[2] : ''

      $('#wlLineTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      this.endProvince = list2[0] ? list2[0] : ''
      this.endCity = list2[1] ? list2[1] : ''
      this.endArea = list2[2] ? list2[2] : ''
    },
    search() {
      this.searchDo()
      //
      window.location.href = `/huoyuan?endArea=${this.endArea}&endCity=${
        this.endCity
      }&endProvince=${this.endProvince}&startArea=${this.startArea}&startCity=${
        this.startCity
      }&startProvince=${this.startProvince}`
    },
    goToCy() {
      window.location.href = `/huoyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=${
        this.hyDetail.startCity
      }&startProvince=${this.hyDetail.startProvince}`
    },
    goToCy1() {
      window.location.href = `/huoyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=${
        this.hyDetail.endCity
      }&startProvince=${this.hyDetail.endProvince}`
    },
    clickImg(int) {
      this.showImg = int
    },
    //点击换一个
    findAnother() {
      let _this = this
      let obj = {
        endArea: this.hyDetail.endArea,
        endCity: this.hyDetail.endCity,
        endProvince: this.hyDetail.endProvince,
        startArea: this.hyDetail.startArea,
        startCity: this.hyDetail.startCity,
        startProvince: this.hyDetail.startProvince
      }
      this.$axios.post('/28-web/lclOrder/another', obj).then(res => {
        if (res.data.status === 200) {
          console.log(res.data.data.id, '00000000')
          window.location.href = `/huoyuan/detail?id=${
            res.data.data.id
          }&shipperId=${res.data.data.shipperId}`
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
