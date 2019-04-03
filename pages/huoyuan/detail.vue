<template> 
  <div class="arc_main">
    <div class="arc_top1">
      <img 
        width="135px" 
        src="/img/logo.png" >
      <div class="arc_top1_3"><a 
        id="search_huo" 
        target="_blank"><input 
          class="arc_input3" 
          readonly
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
    <div class="arc_toptitle">
      <h1
        v-if="archival.archivalType === '3'"
      >{{ archival.companyName }}</h1>
      <h1 v-else>货源详情</h1>
      <ul 
        class="two_tltle" 
        v-if="archival.archivalType === '3'">
        <li/>
        <li><a 
          style="float:left"
          :href="/member/ + archival.companyId">公司官网</a><a :href="/member/ + archival.companyId + '-line'">专线信息</a></li>
        <li><a  
          style="float:left" 
          :href="/member/ + archival.companyId + '-wangdian'">网点信息</a>
        <a :href="/member/ + archival.companyId + '-huo'">货源信息</a></li>
        <li/>
      </ul>
    </div>
    <div class="arc_top2">
      <div class="arc_top2_1"><a href="/"><span>首页</span></a></div>
      <div class="arc_top2_2">
        <a
          v-for="(item,index) in zxList"
          v-if="index < 14"
          target="_blank"
          :href="'/cheyuan?startCity='+hyDetail.startCity+'&startProvince='+hyDetail.startProvince+'&endProvince='+hyDetail.endProvince + '&endCity=' + item.name"
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
          target="_blank"
          :href="'/cheyuan?startCity='+hyDetail.startCity+'&startProvince='+hyDetail.startProvince+'&endProvince='+hyDetail.endProvince + '&endCity=' + item.name"
          v-if="index >= 14"
          :key="index"><span>{{ item.name.substring(0, 2) }}</span>
        </a>
      </div>

    </div>
    <div class="arc_main1">
      <div class="arc_left">
        <div class="arc_left_1">
          <div class="top_left">
            <ul class="top_left_ul" >
              <li 
                v-for="(item,index) in newList" 
                :key="index" 
                class="top_left_ul_li" >
                <span>用户<em style="color: #2577e3;">{{ item.creater }}</em></span>
                <span><em 
                  :title="item.startCity"
                  style="color: #2577e3;">{{ item.startCity ? item.startCity.substring(0,3) : '' }}</em>到</span>
                <span><em 
                  :title="item.endCity"
                  style="color: #2577e3;">{{ item.endCity ? item.endCity.substring(0,3) :'' }}</em>货源</span>
                <span>{{ item.time }}前</span>
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
              src="/images/list_wlzx/sc_num.png"></span><span>收藏量：{{ hyDetail.collectNumber }}<i class="my_hz_num"/></span></div>
        </div>
        <div class="arc_left_2">
          <div class="arc_left_2_1">
            <div class="arc_left_2_1_1"><span>货源信息</span></div>
            <div class="arc_left_2_1_2"><table>
              <tr><td class="arc_td1">名称：</td><td class="arc_td2"><font>{{ hyDetail.goodsTypeName ? hyDetail.goodsTypeName : '' }}</font></td></tr>
              <tr><td class="arc_td1">数量：</td><td class="arc_td2">{{ hyDetail.goodsNum ? hyDetail.goodsNum + '件': '' }}</td></tr>
              <tr><td class="arc_td1">重量：</td><td
              class="arc_td2">{{ hyDetail.goodsWeight }}公斤</td></tr>
              <tr><td class="arc_td1">体积：</td><td class="arc_td2">{{ hyDetail.goodsVolume }}立方米</td></tr>
              <tr><td class="arc_td1">有效期：</td><td
              class="arc_td2">{{ hyDetail.orderClass }}</td></tr>
              <tr><td class="arc_td1">其他：</td><td
              class="arc_td2">{{ hyDetail.extraName ? hyDetail.extraName : '暂无其他描述' }}</td></tr>
              <tr><td class="arc_td1">备注：</td><td
              class="arc_td2">{{ hyDetail.remark ? hyDetail.remark.substring(0,10) : '暂无备注信息' }}</td></tr>
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
              <tr><td class="arc_td1">联系人：</td><td class="arc_td2">{{ hyDetail.contacts }}</td></tr>
              <tr><td class="arc_td1">联系电话：</td><td 
                class="arc_td2" 
                @click="checkobile()">
                <a 
                :class="[isMobile ? '' : 'checkMobile']">
              {{ isMobile ? mobile : '查看电话' }}</a></td></tr>
              <tr><td class="arc_td1">装货时间：</td><td class="arc_td2">{{ hyDetail.createTime }}</td></tr>
              <tr><td class="arc_td1">里程：</td><td class="arc_td2">{{ hyDetail.distance }}</td></tr>
              <tr><td class="arc_td1">期望运价：</td><td class="arc_td2">{{ hyDetail.forecastPrice? hyDetail.forecastPrice : '电话沟通' }}</td></tr>
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
                <a 
                  target="_black"
                  href="http://h5.28tms.com/">
                下载<span>【28快运APP】</span>，您可查看更多<span>{{ hyDetail.startCity }}</span>到<span>{{ hyDetail.endCity }}</span>的货源，并可实时接 收28快运为您推荐的精品货源提醒!</a>
              </div>
              <p style="margin:20px;">便捷<span 
                @click="openOrder('check')"
                style="color:#f8542b;cursor:pointer">查询我的运力</span>撮合情况</p>
            </div>
            <div class="arc_middle5">
              <div class="arc_m5_1">
                <span>小贴士：对此货源有意向可点击“抢单”，货主即可看到您的联系信息，提高成交率！</span>
                <div style="margin-top: 15px">
                  <a 
                    href="javascript:;" 
                    class="button1"
                    @click="openOrder('order')" 
                  >立即抢单</a>
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
        v-if="archival.archivalType === '3'" 
        class="arc_right">
        <p class="arc_right01"><img src="/images/article_wlzx/04gongsi.png"><span :title="archival.companyName">{{ archival.companyName ? archival.companyName.substring(0,18) : '' }}</span></p>
        <p
          v-if="archival.isShowA"
          class="arc_right02" ><i>信誉：</i>
          <img
            v-for="(item1,index1) in archival.startA"
            :key="index1"
            class="xy_zuan"
            src="/gongsi/images/34huanguan.gif"
            style="display: inline">
        </p>
        <p
          v-if="archival.isShowB"
          class="arc_right02" ><i>信誉：</i>
          <img
            v-for="(item1,index1) in archival.startB"
            :key="index1"
            class="xy_zuan"
            src="/gongsi/images/blue.gif"
            style="display: inline">
        </p>
        <p class="arc_right03">
          <span>质量</span><span>时效</span><span>价格</span><br >
          <font>{{ archival.serverQualityScore }}</font><font>{{ archival.transportAgingScore }}</font><font>{{ archival.serverPriceScore }}</font>
        </p>
        <p class="arc_right04">
          <span class="arc_right04_1"><i>联系人：</i><font>{{ archival.contactsName }}</font></span>
          <span><i>手机：</i><font>{{ archival.mobile }}</font></span>
          <span><i>Q&nbsp;Q：</i>
            <a
              id="nr1023"
              :href="'http://wpa.qq.com/msgrd?v=3&uin='+ archival.qq+'&site=qq&menu=yes'"
              target="_blank">
              <input
                v-if="archival.qq != '' && archival.qq != null"
                readonly
                id="qq"
                value="QQ交谈">
            </a>
          </span>
          <span><i style="float:left">地址：</i><a 
            style="overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 226px;
            display: block;
            float: left;"
            :title="archival.address"
            v-if="archival.address">{{ archival.address }}</a></span>
        </p>
        <p class="arc_right05">
          <a 
            :href="/member/ + archival.companyId" 
            class="website">进入官网</a>
          <input 
            class="collection_hz" 
            style="cursor: pointer;" 
            readonly 
            @click="collected()"
            :value="isShowCollect ? '收藏' : '取消收藏'">
        </p>
        <p class="arc_right06">
          <span>相关认证</span>
        </p>
        <p class="arc_right07">
          <img
            v-if="archival.isVip != 0"
            src="/images/article_wlzx/11xinyong.png">
          <img
            v-if="archival.authStatus === 'AF0010403'"
            src="/images/article_wlzx/10shiming.png">
          <span v-if="archival.authStatus !== 'AF0010403' && (!archival.isVip || archival.isVip === 0)">暂无认证信息</span>
        </p>
      </div>
      <div 
        class="arc_right1" 
        v-if="archival.archivalType === '1'">
        <div class="arc_top_title">
          <h4>货主档案</h4>
        </div>
        <div class="arc_top_img">
          <img src="/images/cy/gold.png">
        </div>
        <div class="arc_middle">
          <img src="/images/cy/hztx.png">
          <p style="color:#f8542b">{{ archival.shipperTypeName }}</p>
          <p><img 
            v-if="archival.authStatus === 'AF0010403'"
            src="/images/cy/hzsmrz.png"></p>
          <p>
            <img src="/images/cy/13hot.png">活跃度：<i style="color: #f8542b">{{ archival.liveness }}</i>
          </p>
        </div>
        <ul class="bottom_ul">
          <li>联系人：{{ archival.contacts }}</li>
          <li>手机：
            <a 
              @click="showMoblieFn()"
              :class="[checkMoblie ? '' : 'checkMobile']">
            {{ checkMoblie ? check : '查看电话' }}</a>
          </li>
          <li>已加入：{{ archival.registerDays }}天</li>
          <li>好评数：{{ archival.evaGoodCount }}</li>
        </ul>
      </div>
      <div 
        class="arc_right1" 
        v-if="archival.archivalType === '2'">
        <div class="arc_top_title">
          <h4 :title="archival.companyName">{{ archival.companyName ? archival.companyName.substring(0,10) : '' }}</h4>
        </div>
        <div class="arc_top_img">
          <img src="/images/cy/gold.png">
        </div>
        <div class="arc_middle">
          <img src="/images/cy/hztx.png">
          <p style="color: #fa9925;">{{ archival.shipperTypeName }}</p>
          <p><img 
            v-if="archival.authStatus === 'AF0010403'"
            src="/images/cy/hzsmrz.png"></p>
          <p><img src="/images/cy/13hot.png">活跃度：<i style="color: #fa9925;">{{ archival.liveness }}</i></p>
        </div>
        <ul class="bottom_ul">
          <li>联系人：{{ archival.contacts }}</li>
          <li>手机：
            <a 
              @click="showMoblieFn()"
              :class="[checkMoblie ? '' : 'checkMobile']">
          {{ checkMoblie ? check : '查看电话' }}</a></li>
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
                src="/images/cy/hztx.png"
                width="120"
                height="100">
            </div>
            <div class="name">{{ huoComprehensive.companyName }}</div>
            <div class="name">
              <img 
                v-if="huoComprehensive.accountStatus === 'AF0010403'" 
                src="/images/cy/hzsmrz.png">
            </div>
          </div>
          <div class="content-right">
            <img src="/images/cy/gold.png">
            <div class="content-right-row"><img
              v-if="huoComprehensive.liveness >= 50"
              class="img"
              src="/images/cy/13hot.png">活跃度：<i>{{ huoComprehensive.liveness }}</i></div>
            <div class="content-right-row">最近三个月发布货源 <i>{{ huoComprehensive.lastThreeMonthSupplyNum }}</i> 次</div>
            <div class="content-right-row">共成交 <i>{{ huoComprehensive.orderNumber }}</i> 笔订单，收到好评 <i>{{ huoComprehensive.evaGoodCount }}</i> 次</div>
            <div class="content-right-row">大家对他的印象:</div>
            <div class="content-right-row">
              <span 
                v-for="(item,index) in huoComprehensive.labels" 
                :key="index" 
              >{{ item.name }}（{{ item.count }}）</span>
            </div>
            <div
              class="content-right-row"
              style="clear: both">
              <a
                href="javascript:;"
                class="button2"
                @click="openHelp()"><img src="/images/cy/03u41008 2.gif">此货主货源上新提醒我</a>
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
              class="manage_box">
              <a 
              :href="'/huoyuan?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea +'&endProvince='+item.endProvince+'&endCity='+item.endCity + '&endArea='+item.endArea"> 
                <span :title="item.startProvinceCityArea">{{ item.startProvinceCityArea ? item.startProvinceCityArea.substring(0,6) : '' }}</span>
                <span :title="item.endProvinceCityArea">{{ item.endProvinceCityArea ? item.endProvinceCityArea.substring(0,6) : '' }}</span>
                <span :title="item.goodsTypeName">{{ item.goodsTypeName ?item.goodsTypeName.substring(0,5) : '无' }}</span>
                <span><em style="color: #f14747;">{{ item.goodsWeight }}</em>公斤</span>
                <span><em style="color: #f14747;">{{ item.goodsVolume }}</em>方</span>
                <span>{{ item.createTime }}</span>
              </a>
            </li>
            <p 
              class="massge"
              v-if="isShowMessge">
              货主货源太少？为您推荐其他<a 
                :href="'/huoyuan?startProvince='+ hyDetail.startProvince+'&startCity='+hyDetail.startCity+'&endProvince='+hyDetail.endProvince+'&endCity='+hyDetail.endCity"
                style="color:#3f94ee;">同线路货源</a>
            </p>
            <li 
              v-for="(i,dex) in dataset" 
              :key="dex">
              <a 
              :href="'/huoyuan?startProvince='+ i.startProvince+'&startCity='+i.startCity+'&startArea='+i.startArea +'&endProvince='+i.endProvince+'&endCity='+i.endCity + '&endArea='+i.endArea"> 
                <span :title="i.startProvinceCityArea">{{ i.startProvince + i.startCity }}</span>
                <span :title="i.endProvinceCityArea">{{ i.endProvince + i.endCity }}</span>
                <span :title="i.goodsTypeName">{{ i.goodsTypeName ?i.goodsTypeName.substring(0,5) : '' }}</span>
                <span><em style="color: #f14747;">{{ i.goodsWeight }}</em>公斤</span>
                <span><em style="color: #f14747;">{{ i.goodsVolume }}</em>方</span>
                <span>{{ i.createTime }}</span>
              </a>
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
                @click="search()">
            </div>                        
            <div class="more floatr"><a 
              :href="'/huoyuan?startProvince='+hyDetail.startProvince+'&startCity='+hyDetail.startCity" 
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
              <p class="p2"><img src="/images/list_wlzx/hy_item1.png"><i>货物：</i><font :title="item.goodsTypeName">{{ item.goodsTypeName ? item.goodsTypeName.substring(0,6) : '' }} </font></p>
              <p class="p3"><img src="/images/list_wlzx/hy_item2.png"><i>规格：</i>
                <span>{{ item.goodsNum ? item.goodsNum : '' }}<font id="nr0420" >件&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsWeight }}<font>公斤&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsVolume }}<font>立方米</font></span>
              </p>
            </li>
            <li class="wlzx_list_2">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item3.png"><span>发布者：</span><i>{{ item.companyName?item.companyName.substring(0,5) + '...': '' }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item4.png"><span>联系人：</span><i>{{ item.contacts }}</i></P>
            </li>
            <li class="wlzx_list_4">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item5.png"><span>货源类型：</span><i>{{ item.orderClass === 0 ? '单次急发货源' : '长期稳定货源' }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item6.png"><span>发布时间：</span><i>{{ item.createTime ?item.createTime.substring(0, 16) : '' }}</i></P>
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
            </li>
          </ul>
        </div>
        <div class="middle-ad">
          <img
            src="/images/cy/10banner.png"
            alt="广告">
        </div>
        <div
          v-if="hyDetail.startCity != hyDetail.endCity"
          class="listInfo2">
          <div class="main3_1_1">
            <div class="floatl">
              <b class="b_title">更多从{{ hyDetail.endCity }}出发的货源</b>
        
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
              :href="'/cheyuan?startProvince='+hyDetail.endProvince+'&startCity='+hyDetail.endCity"  
              target="_blank">更多&gt;</a></div>		 
          </div>
          <div 
            v-if="huoInfoList1.length === 0" 
            class="list_none" 
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他货源哦</span>
            <img src="/images/none_pic.png">
          </div>
          <ul 
            v-for="(item,index) in huoInfoList1"
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
              <p class="p2"><img src="/images/list_wlzx/hy_item1.png"><i>货物：</i><font :title="item.goodsTypeName">{{ item.goodsTypeName ? item.goodsTypeName.substring(0,6) : '' }} </font></p>
              <p class="p3"><img src="/images/list_wlzx/hy_item2.png"><i>规格：</i>
                <span>{{ item.goodsNum }}<font id="nr0420" >件&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsWeight }}<font >公斤&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsVolume }}<font >立方米</font></span>
              </p>
            </li>
            <li class="wlzx_list_2">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item3.png"><span>发布者：</span><i>{{ item.companyName?item.companyName.substring(0,5) + '...': '' }}</i></P>
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
            </li>
          </ul>
        </div>
        <div 
        class="arc_main4">
          <div class="zx_sx1">
            <span class="biaozhi1"/><span>更多从广州出发的{{ huoLabel }}</span>
          </div>
          <ul class="hot-cities">
            <li 
              v-for="(item,index) in huoLink" 
              :key="index" 
              class="hot-cities-li" >
              <a
                target="_blank"
                :href="item.targetLinks+'?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea+'&endProvince='+item.endProvince+'&endCity='+item.endCity+'&endArea='+item.endArea+'&carSourceType='+item.carSourceType"
                class="hot-cities-a">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div 
          class="arc_main4"
          v-if="interestOrder.length != 0">
          <div class="zx_sx1">
            <span class="biaozhi1"/><span>{{ interesLabel }}</span>
          </div>
          <ul class="hot-cities">
            <li 
              v-for="(item,index) in interestOrder" 
              :key="index" 
              class="hot-cities-li" >
              <a
                :title="item.startCity + '到' + item.endCity"
                target="_blank"
                :href="item.targetLinks+'?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea+'&endProvince='+item.endProvince+'&endCity='+item.endCity+'&endArea='+item.endArea+'&carSourceType='+item.carSourceType"
                class="hot-cities-a">{{ item.title }}</a>
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
            target="_blank">
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
              :href="item.targetLinks+'?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea+'&endProvince='+item.endProvince+'&endCity='+item.endCity+'&endArea='+item.endArea+'&carSourceType='+item.carSourceType"
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
                <img :src="'/line/images/touxiang'+(index+1)+'.png'" >
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
    <Add 
      :is-show-add.sync="isShowAdd" 
      :data-info="dataInfo"/>
    <Lelp :is-show-help.sync="isShowHelp" />
    <Order 
      :is-show-order.sync="isShowOrder" 
      :order-title="orderTitle"/>
  </div>
</template>
<script>
import Add from './add'
import Lelp from './help'
import Order from './order'
import { getCode, getCity, parseTime } from '~/components/commonJs.js'
async function getCanyColl(
  $axios,
  companyId,
  access_token,
  user_token,
  handle
) {
  let res = await $axios.post(
    `/28-web/collect/company?access_token=${access_token}&user_token=${user_token}&companyId=${companyId}&handle=${handle}
`
  )
  if (res.data.status === 200) {
    layer.msg(res.data.data)
  } else {
    layer.msg(res.data.errorInfo)
  }
}
export default {
  name: 'Detail',
  components: {
    Add,
    Lelp,
    Order
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/article_huoyuan.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ],
    script: [
      { src: '../vendor/layer/layer.js' },
      { src: '../js/jquery.pagination.min.js' },
      { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
  },
  layout: 'subLayout',
  data() {
    return {
      showMoblie: false,
      checkMoblie: false,
      isShowAdd: false,
      isShowHelp: false,
      isShowOrder: false,
      isShowCollect: true,
      isShowMessge: false,
      isMobile: false,
      orderTitle: '',
      mobile: '',
      check: '',
      handle: '',
      zxList: [],
      dataset: [],
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
          url: '/create/order?',
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
  async asyncData({ $axios, app, query, error }) {
    let hyDetails = await $axios
      .get('/28-web/lclOrder/detail/' + query.id)
      .catch(err => {
        // console.log('hyDetail:', err)
      })
    let parm = {
      currentPage: 1,
      pageSize: 10,
      startProvince: hyDetails.data.data.startProvince
        ? hyDetails.data.data.startProvince
        : '',
      startCity: hyDetails.data.data.startCity
        ? hyDetails.data.data.startCity
        : ''
    }
    let parm1 = {
      endArea: hyDetails.data.data.endArea ? hyDetails.data.data.endArea : '',
      endCity: hyDetails.data.data.endCity ? hyDetails.data.data.endCity : '',
      endProvince: hyDetails.data.data.endProvince
        ? hyDetails.data.data.endProvince
        : '',
      startArea: hyDetails.data.data.startArea
        ? hyDetails.data.data.startArea
        : '',
      startCity: hyDetails.data.data.startCity
        ? hyDetails.data.data.startCity
        : '',
      startProvince: hyDetails.data.data.startProvince
        ? hyDetails.data.data.startProvince
        : ''
    }
    let parm1t = {
      startArea: hyDetails.data.data.endArea ? hyDetails.data.data.endArea : '',
      startCity: hyDetails.data.data.endCity ? hyDetails.data.data.endCity : '',
      startProvince: hyDetails.data.data.endProvince
        ? hyDetails.data.data.endProvince
        : ''
    }
    let code = await getCode($axios, hyDetails.data.data.endProvince)
    let zxList = await getCity($axios, code, hyDetails.data.data.startCity)
    //货主档案
    let archivals = await $axios
      .post('/28-web/shipper/archival?shipperId=' + query.shipperId)
      .catch(err => {
        // console.log('archivals')
      })
    if (archivals.data.status === 200) {
      let credit = archivals.data.data.credit
      if (credit >= 0 && credit <= 3) {
        archivals.data.data.startA = 1
        archivals.data.data.isShowA = true
      }
      if (credit >= 4 && credit <= 10) {
        archivals.data.data.startA = 2
        archivals.data.data.isShowA = true
      }
      if (credit >= 11 && credit <= 40) {
        archivals.data.data.startA = 3
        archivals.data.data.isShowA = true
      }
      if (credit >= 41 && credit <= 90) {
        archivals.data.data.startA = 4
        archivals.data.data.isShowA = true
      }
      if (credit >= 91 && credit <= 150) {
        archivals.data.data.startA = 5
        archivals.data.data.isShowA = true
      }
      if (credit >= 151 && credit <= 250) {
        archivals.data.data.startB = 1
        archivals.data.data.isShowB = true
      }
      if (credit >= 251 && credit <= 500) {
        archivals.data.data.startB = 2
        archivals.data.data.isShowB = true
      }
      if (credit >= 500 && credit <= 1000) {
        archivals.data.data.startB = 3
        archivals.data.data.isShowB = true
      }
      if (credit >= 1001 && credit <= 2000) {
        archivals.data.data.startB = 4
        archivals.data.data.isShowB = true
      }
      if (credit >= 2001) {
        archivals.data.data.startB = 5
        archivals.data.data.isShowB = true
      }
    }
    //顶部轮播
    let newLists = await $axios
      .get('/28-web/lclOrder/newList')
      .catch(err => {})
      .catch(err => {
        // console.log('newLists')
      })
    //货源列表
    let huoInfoLists = await $axios
      .post('/28-web/lclOrder/list', parm)
      .catch(err => {
        // console.log('huoComprehensives4:', err)
      })
    //货源列表
    let huoInfoListst = await $axios
      .post('/28-web/lclOrder/list', parm1t)
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
    let hotSearchs = await $axios
      .get('/28-web/hotSearch/supply/detail/links')
      .catch(err => {
        // console.log('hotSearchs')
      })
    //企业人气榜
    let popularitys = await $axios
      .get('/28-web/logisticsCompany/popularity')
      .catch(err => {
        // console.log('popularitys')
      })
    //底部推荐
    let huoLinks = await $axios
      .post('/28-web/lclOrder/detail/related/links', parm1)
      .catch(err => {
        // console.log('huoLinks')
      })
    // console.log(huoLinks)
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
      hyDetail: hyDetails.data.status === 200 ? hyDetails.data.data : {},
      popularity: popularitys.data.status === 200 ? popularitys.data.data : [],
      zxList: zxList && zxList.data.status === 200 ? zxList.data.data : [],
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
      huoInfoList1:
        huoInfoListst.data.status === 200 ? huoInfoListst.data.data.list : [],
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
    // console.log(this.dataset, 'this.dataset')
    seajs.use(['/js/gaodemap2.js'])
    $('.arc_input3').click(function() {
      var search_type = $('#search_type option:selected').attr('name')
      var start = $('.arc_input1')
      var end = $('.arc_input2')
      var query =
        '?startProvince=' +
        (start.attr('theprovince') || '') +
        '&startCity=' +
        (start.attr('thecity') || '') +
        '&startc=' +
        (start.attr('thecity') || '') +
        '&startp=' +
        (start.attr('theprovince') || '') +
        '&endProvince=' +
        (end.attr('theprovince') || '') +
        '&endCity=' +
        (end.attr('thecity') || '') +
        '&endp=' +
        (end.attr('theprovince') || '') +
        '&endc=' +
        (end.attr('thecity') || '')
      console.log(
        '搜索类型：' + search_type + '出发地：' + start + '到达地：' + end
      )
      if (search_type == 'zx') {
        window.open('/zhuanxian/list' + query)
      }
      if (search_type == 'huo') {
        window.open('/huoyuan' + query)
      }
      if (search_type == 'che') {
        window.open('/cheyuan' + query)
      }
    })
    if (process.client) {
      $('#wlLineFrom input').citypicker({})
      $('#wlLineTo input').citypicker({})
      let rollContainer_h = $('.list_new_box').height()
      let roll = $('.zx_sx_new')
      let l = this.newestHuoyuanRe.length

      //  当不足一页的数据时，不需要滚动展示
      if (l > 8) {
        roll.append(roll.html())
        let number = 4
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
      }
      if (l < 8) {
        this.isShowMessge = true
        let obj = {
          startProvince: this.hyDetail.startProvince
            ? this.hyDetail.startProvince
            : '',
          startCity: this.hyDetail.startCity ? this.hyDetail.startCity : '',
          endProvince: this.hyDetail.endProvince
            ? this.hyDetail.endProvince
            : '',
          endCity: this.hyDetail.endCity ? this.hyDetail.endCity : '',
          currentPage: 1,
          pageSize: 7 - l
        }
        this.$axios
          .post('/28-web/lclOrder/list', obj)
          .then(res => {
            this.dataset = res.data.data.list
          })
          .catch(err => {
            console.log('huoComprehensives4:', err)
          })
      } else {
        this.isShowMessge = false
      }

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
    }
  },
  destroyed() {
    clearInterval(this.inTerVar)
    this.inTerVar = null
  },
  methods: {
    showMoblieFn() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('user_token')
      if (access_token && user_token) {
        this.checkMoblie = true
        this.check = this.hyDetail.mobile
      } else {
        this.checkMoblie = false
        $('body').trigger('login.show')
      }
    },
    checkobile() {
      // this.isMobile = !this.isMobile
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('user_token')
      if (access_token && user_token) {
        this.isMobile = true
        this.mobile = this.hyDetail.mobile
      } else {
        this.isMobile = false
        $('body').trigger('login.show')
      }
    },
    getAddress() {
      this.dataInfo.startProvince = this.hyDetail.startProvince
      this.dataInfo.startCity = this.hyDetail.startCity
      this.dataInfo.startArea = this.hyDetail.startArea
      this.dataInfo.endProvince = this.hyDetail.endProvince
      this.dataInfo.endCity = this.hyDetail.endCity
      this.dataInfo.endArea = this.hyDetail.endArea
    },
    collected() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('user_token')
      this.isShowCollect = !this.isShowCollect
      if (!this.isShowCollect) {
        this.handle = 'collect'
      } else {
        this.handle = 'cancelCollect'
      }
      if (access_token && user_token) {
        getCanyColl(
          this.$axios,
          this.archival.companyId,
          access_token,
          user_token,
          this.handle
        )
      } else {
        this.isShowCollect = true
        $('body').trigger('login.show')
      }
    },
    openAdd() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('user_token')
      this.getAddress()
      if (access_token && user_token) {
        this.$axios
          .post(
            '/28-web/companyLine/subscribe?access_token=' +
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
        this.getAddress()
      }
    },
    openHelp() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('user_token')
      this.getAddress()
      if (access_token && user_token) {
        this.$axios
          .post(
            '/28-web/companyLine/subscribe?access_token=' +
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
        this.isShowHelp = true
        this.getAddress()
      }
    },
    openOrder(type) {
      this.isShowOrder = true
      switch (type) {
        case 'check':
          this.orderTitle = '扫码下载App随时查看运力撮合情况'
          break
        case 'order':
          this.orderTitle = '扫码下载App进行立即抢单'
        default:
          break
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
      // console.log(999999)
      this.searchDo()
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
      this.$axios
        .post('/28-web/lclOrder/another', obj)
        .then(res => {
          if (res.data.status === 200) {
            window.location.href = `/huoyuan/detail?id=${
              res.data.data.id
            }&shipperId=${res.data.data.shipperId}`
          }
        })
        .catch(err => {
          console.log('捕获异常')
        })
    }
  }
}
</script>
<style scoped>
.arc_top1 {
  /* height: 32px; */
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  padding: 20px 0;
  width: 1400px;
  height: 80px;
}
.arc_top1_1,
.arc_top1_2,
.arc_top1_3 {
  margin-top: 22px;
}
</style>
