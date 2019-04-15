<template>
  <div>
    <div class="arc_top1">
      <img 
        width="135px" 
        src="/img/logo.png" >
      <div class="arc_top1_3"><a
        class="arc_input3"
      >搜全网</a></div>
      <div class="arc_top1_2">
        <select id="search_type"><option name="zx">找专线</option><option name="che">找车源</option><option name="huo">找货源</option></select>
        <input
          data-level="district"
          class="arc_input1"
          wtmap="city"
          placeholder="出发地">
        <span>&rarr;</span>
        <input
          data-level="district"
          class="arc_input2"
          wtmap="city"
          placeholder="到达地">
      </div>
    </div>

    <div class="cy_top_banner"/>
    <div class="arc_main">
      <div class="arc_top2">
        <div class="arc_top2_1"><a href="/"><span>首页</span></a></div>
        <div class="arc_top2_2">
          <a
            v-for="(item,index) in zxList"
            v-if="index < 14"
            target="_blank"
            :href="'/cheyuan?startCity='+cy1.startCity+'&startProvince='+cy1.startProvince+'&endProvince='+cy1.endProvince + '&endCity=' + item.name"
            :key="index"><span>{{ index === 0 ? '直达' + item.name.substring(0, 2) : item.name.substring(0, 2) }}</span>
          </a>
        </div>
        <div
          v-if="zxList.length >14"
          class="arc_top2_3"
          style="display: block"
          onmouseover="$('.city_box').css('display', 'block')"><a href="javascript:void(0)"><span>更多+</span></a></div>

        <!--更多城市-->
        <div
          id="city_box"
          class="city_box"
          onmouseover="$('.city_box').css('display', 'block');"
          onmouseout="$('.city_box').css('display', 'none');">
          <a
            v-for="(item,index) in zxList"
            target="_blank"
            :href="'/cheyuan?startCity='+cy1.startCity+'&startProvince='+cy1.startProvince+'&endProvince='+cy1.endProvince + '&endCity=' + item.name"
            v-if="index >= 14"
            :key="index"><span>{{ item.name.substring(0, 2) }}</span>
          </a>
        </div>

      </div>
      <div class="arc_main1">
        <div class="arc_left">
          <div class="arc_left_1">
            <img
              v-if="cy1.carFile"
              :src="cy1.carFile.split(',')[showImg]">
            <img
              v-else
              :src="'../../images/pic/bg' + cy1.num + '.png'" >
          </div>
          <div class="arc_left_2">
            <a
              href="javascript:void(0)"
              @click="clickImg(0)"><img
                v-if="cy1.carFile"
                :src="cy1.carFile.split(',')[0]" >
              <img
                v-else
                :src="'../../images/pic/bg' + cy1.num + '.png'" >
            </a>
            <a
              href="javascript:void(0)"
              @click="clickImg(1)"><img
                v-if="cy1.carFile && cy1.carFile.split(',')[1]"
                :src="cy1.carFile.split(',')[1]" >
            </a>
            <a
              href="javascript:void(0)"
              @click="clickImg(2)"><img
                v-if="cy1.carFile && cy1.carFile.split(',')[2]"
                :src="cy1.carFile.split(',')[2]" >
            </a>
          </div>
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
              下载<span>【28快运APP】</span>，您可查看更多<span>{{ cy1.startCity }}</span>到<span>{{ cy1.endCity }}</span>的车源，并可实时接 收28快运为您推荐的精品车源提醒!</a>
            </div>

          </div>
        </div>
        <div class="arc_middle">
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
          <div class="arc_middle1"><span>{{ cy1.strartAddress + '&nbsp;&rarr;&nbsp;' + cy1.endAddress }}</span>
            <div class="release_box">
              <div class="release_scroll">
                <div 
                  class="manage_box"
                  v-for="(item,index) in newList"
                  :key="index"
                >用户{{ item.creater }}发布<i :title="item.startCity">{{ item.startCity ? item.startCity.substring(0,3) : '' }}</i>到<i :title="item.endCity">{{ item.endCity ? item.endCity.substring(0,3) :'' }}</i>车源&nbsp;&nbsp;&nbsp;{{ item.gapTime }}</div>
              </div>
            </div>
          </div>
          <div class="arc_middle1-2"><span><img
            class="img1"
            src="/images/list_wlzx/hy_item6.png"></span><span>发布日期：{{ cy1.createTime }} </span><span><img
              class="img2"
              src="/images/list_wlzx/sc_num.png"></span><span>收藏量：<i class="my_cz_num"/>{{ cy1.collectNumber ? cy1.collectNumber : 0 }}</span></div>
          <div class="arc_middle2">
            <div class="arc_middle2_1">
              <p class="p1"><i>运价：</i><font
                id="nr062"
                class="font1"> {{ cy1.expectPrice ? '&yen;&nbsp;' + cy1.expectPrice : '面议' }}</font></p>
              <p class="p2"><i>车源类型：</i><span>{{ cy1.carSourceTypeName }}</span></p>
            </div>
            <div class="arc_middle2_2">
              <div class="num1"><span>{{ cy1.browseNumber }}</span></div><div class="num2"/>
              <div class="num3"><span>浏览量</span></div><div class="num4"/>
            </div>

          </div>
          <div class="arc_middle3">
            <div class="arc_m3"><i>车辆类型：</i><span>{{ cy1.carTypeName ? cy1.carTypeName : '' }}</span><span v-if="cy1.isLongCarName">({{ cy1.isLongCarName }})</span></div>
            <div class="arc_m3"><i>车辆载重：</i><span>{{ cy1.carLoad }}吨</span></div>
            <div class="arc_m3_2"><i>车长：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i><span>{{ cy1.carLength }}米</span></div>
            <div class="arc_m3_2"><i>途径点：&nbsp;&nbsp;&nbsp;</i><span>{{ cy1.viaAddress ? cy1.viaAddress : '暂无' }}</span></div>
            <div class="arc_m3_2"><i>发车时间：&nbsp;</i><span>{{ cy1.startTime ? cy1.startTime : '随时发车' }}</span></div>
          </div>
          <div class="arc_middle4">
            <div class="arc_m3"><i>联系人：</i><span>{{ cy1.driverName }}</span></div>
            <div class="arc_m3"><i>手机：</i>
              <span>
                <font 
                style="color: #333" >{{ cy1.phone }}</font>
              </span>
            </div>
            <div class="arc_m3_2"><i>说明：</i><span>{{ cy1.carTagName ? cy1.carTagName : '暂无说明' }}</span><span v-if="cy1.remark">{{ '|'+cy1.remark.substring(0, 30) }}</span></div>
          </div>

          <div class="arc_middle5">
            <div class="arc_m5_1">
              <span>联系我时，请说明是从28快运上看到此信息，谢谢！</span>
              <div style="margin-top: 15px">
                <a 
                  href="/create/order" 
                  target="_blank">快速下单</a>
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
        <div class="arc_right">
          <p class="arc_right01"><img src="/images/article_wlzx/04gongsi.png"><span>车辆档案</span></p>
          <p class="arc_right04">
            <span class="arc_right04_1"><i>车牌号：</i><font v-if="cy1.carNum">{{ cy1.carNum.substring(0, 2) + '***' + cy1.carNum.substring(6, 10) }}</font></span>
            <span><i>常驻地：</i><font 
              v-if="cy1.usualPlace" 
              :title="cy1.usualPlace">{{ cy1.usualPlace.substring(0, 10) }}</font></span>
            <span><i>车长：</i><font>{{ cy1.carLength }}米</font></span>
            <span><i>类型：</i><font>{{ cy1.carTypeName }}</font></span>
            <span><i>载重：</i><font>{{ cy1.carLoad }}吨</font></span>
            <span><i>联系人：</i><font>{{ cy1.belongDriver }}</font></span>
            <span><i>手机：</i>
              <font 
              style="color: #333" >{{ cy1.phone }}</font>
            </span>
            <span><i>Q&nbsp;Q：</i>
              <a
                id="nr1023"
                :href="'http://wpa.qq.com/msgrd?v=3&uin='+ cy1.qq+'&site=qq&menu=yes'"
                target="_blank">
                <input
                  v-if="cy1.qq != '' && cy1.qq != null"
                  readonly
                  id="qq"
                  value="QQ交谈">
              </a>
            </span>
          </p>
          <p style="clear: both;"/>
          <p class="arc_right05" >
            <input 
              class="collection_hz" 
              style="cursor: pointer;" 
              readonly 
              @click="collected()"
              :value="isShowCollect ? '收藏' : '取消收藏'">
          </p>
          <p class="arc_right06" >
            <span>相关认证</span>
          </p>
          <div class="arc_right07">
            <img
              v-if="cy1.driverStatus === 'AF0010403'"
              src="/images/article_wlzx/10shiming.png">
            <span
            v-if="cy1.driverStatus !== 'AF0010403'">暂无认证信息</span>
          </div>

        </div>

      </div>
      <div class="arc_main1-1">
        想要更多<span>{{ cy1.startCity }}</span>到<span>{{ cy1.endCity }}</span>的车源信息，您可以<a
          :href="'/create/cheyuan?startProvince='+cy1.startProvince+'&startCity='+cy1.startCity+'&startArea='+cy1.startArea+'&endProvince='+cy1.endProvince+'&endCity='+cy1.endCity+'&endArea='+cy1.endArea" 
          style="color: #75b3ff;">发布车源</a>，让车主主动来联系您，达成交易
      </div>

      <div class="arc_main3">
        <div class="left">
          <div class="zx_sx">
            <span class="biaozhi"/><span>价格参考</span><i style="margin-left: 12px;color: #333333">大数据智能模型精准定价，28智能平台指导定价</i>
          </div>
          <div class="echart_tip">{{ cy1.startCity +
            '->' +
            cy1.endCity +
          cy1.carLength }}米整车</div>
          <div id="echart"/>
        </div>
        <div class="right">
          <div class="zx_sx">
            <span class="biaozhi"/><span>车主综合力评估</span>
          </div>
          <div class="content">
            <div class="content-left">
              <div class="img">
                <img
                  src="/images/cy/09sj.png"
                  width="82"
                  height="82">
              </div>
              <div class="name">{{ cheComprehensive.driverName }}</div>
              <div class="name">
                <img 
                  v-if="cheComprehensive.driverStatus === 'AF0010403'" 
                  src="/images/article_wlzx/10shiming.png">
              </div>
            </div>
            <div class="content-right">
              <img 
                v-if="cheComprehensive.liveness >= 70"
                src="/images/cy/02gold.png">
              <img 
                v-if="cheComprehensive.liveness >= 30 && cheComprehensive.liveness < 70"
                src="/images/cy/silver.png">
              <img 
                v-if="cheComprehensive.liveness <30"
                src="/images/cy/bronze.png">
              <div class="content-right-row">
                <img
                  class="img"
                  src="/images/cy/13hot.png">活跃度：<i>{{ cheComprehensive.liveness }}</i></div>
              <div class="content-right-row">最近三个月发布车源 <i>{{ cheComprehensive.lastThreeMonthPublishNum }}</i> 次</div>
              <div class="content-right-row">共成交 <i>{{ cheComprehensive.orderNumber }}</i> 笔订单，收到好评 <i>{{ cheComprehensive.evaGoodCount }}</i> 次</div>
              <div class="content-right-row">大家对他的印象:</div>
              <div 
              class="content-right-row">
                <span 
                  v-for="(item,index) in cheComprehensive.labels" 
                  :key="index"
                >{{ item.name }}（{{ item.count }}）</span>
              </div>
              <div 
                class="content-right-row"
              >
                <em 
                  v-for="(item,index) in cheComprehensive.runningLineVoList" 
                  :key="index">{{ item.startCity }}<img src="/images/yd_zx.png">{{ item.endCity }}</em>
              </div>
              <div
                class="content-right-row"
                style="clear: both">
                <a
                  href="javascript:;" 
                  class="button1"
                  @click="showPrice()">标准价</a>
                <a
                  href="javascript:;"
                  class="button2"
                  @click="openAdd()"
                ><img src="/images/cy/03u410082.gif">帮我选择优质车源</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="arc_main4">
        <div class="left4">
          <div>
            <div 
              class="zx_sx" 
            >
              <span 
                class="biaozhi" 
              /><span>更多从{{ cy1.startCity }}出发的车源</span>
              <div class="morelink"><a 
                :href="'/cheyuan?startProvince='+cy1.startProvince+'&startCity='+cy1.startCity" 
                target="_blank">更多&gt;</a>
              </div>	
            </div>
            <div class="arc_main4-content">
              <div
                v-if="carInfoStartList.length === 0"
                class="list_none"
                style="display: block">
                <span>暂时没有找到您要查询的信息，可以看看其他车源哦</span>
                <img src="/images/none_pic.png">
              </div>
              <ul
                v-for="(item,index) in carInfoStartList"
                :key="index"
                class="wlzx_list">
                <li id="cy_list_0">
                  <div class="sc_num"><img src="/images/list_wlzx/sc_num.png"><span><i><em>{{ item.collectNum?item.collectNum:0 }}</em>收藏量</i></span></div>
                  <div class="view_num"><img src="/images/wzlImg/lll.png"><span><i><em>{{ item.browseNumber?item.browseNumber:0 }}</em>浏览量</i></span></div>
                </li>
                <li class="cy_list_4">
                  <a
                    :href="'/cheyuan/detail?id=' + item.id"
                    target="_blank"><img :src="item.carFile?item.carFile.split(',')[0]:''" ></a>

                </li>
                <li class="cy_list_1">
                  <a
                    :href="'/cheyuan/detail?id=' + item.id"
                    target="_blank" >
                    <span class="list-icon lines-sprite-icons icon-start"/>
                    <em>{{ item.startCity?item.startCity:'' + item.startArea?item.startArea:'' }}</em>
                    <span class="list-icon lines-sprite-icons icon-through"/>
                    <span class="list-icon lines-sprite-icons icon-end"/>
                    <em>{{ item.endCity?item.endCity:'' + item.endArea?item.endArea:'' }}</em>
                  </a>
                  <p class="p2"><i>车辆：</i><font>{{ item.carNum }}</font>
                    <font>{{ item.carTypeName }}</font>
                    <font>长<b>{{ item.carLength }}</b>米</font>
                    <font>载重<b>{{ item.carLoad }}</b>吨</font>
                    <font>{{ item.carSourceTypeName }}</font>
                  </p>
                  <p class="p3"><i>常驻地：</i><font :title="item.usualPlace">{{ item.usualPlace ? item.usualPlace.substring(0, 10) : '' }}</font>&nbsp;&nbsp;<i>运价：</i>
                    <font>{{ item.expectPrice?item.expectPrice + '元':'面议' }}</font>&nbsp;&nbsp;<i>发布者：</i>
                  <font>{{ item.driverName?item.driverName:'' }}</font></p>
                  <p class="p4"><i>说明：</i><font>{{ item.remark ? item.remark.substring(0,10) : '暂无说明' }}</font></p>
                </li>
                <li class="cy_list_3">
                  <p class="p1"><img
                    v-if="item.driverStatus === 'AF0010403'"
                    src="/images/list_wlzx/10shiming.png"></P>
                </li>
                <li class="wlzx_list_6">
                  <p class="p2"><a
                    :href="'/cheyuan/detail?id=' + item.id"
                    target="_blank" ><input
                      readonly
                      value="查看"></a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="middle-ad">
            <img
              src="/images/cy/10banner.png"
              alt="广告">
          </div>

          <div>
            <div class="zx_sx">
              <span class="biaozhi"/><span>更多从{{ cy1.endCity }}出发的车源</span>
              <div class="morelink"><a 
                :href="'/cheyuan?startProvince='+cy1.endProvince+'&startCity='+cy1.endCity" 
                target="_blank">更多&gt;</a>
              </div>	
            </div>
            <div class="arc_main4-content">
              <div
                v-if="carInfoEndList.length === 0"
                class="list_none"
                style="display: block">
                <span>暂时没有找到您要查询的信息，可以看看其他车源哦</span>
                <img src="/images/none_pic.png">
              </div>
              <ul
                v-for="(item,index) in carInfoEndList"
                :key="index"
                class="wlzx_list">
                <li id="cy_list_0">
                  <div class="sc_num"><img src="/images/list_wlzx/sc_num.png"><span><i><em>{{ item.collectNum?item.collectNum:0 }}</em>收藏量</i></span></div>
                  <div class="view_num"><img src="/images/wzlImg/lll.png"><span><i><em>{{ item.browseNumber?item.browseNumber:0 }}</em>浏览量</i></span></div>
                </li>
                <li class="cy_list_4">
                  <a
                    :href="'/cheyuan/detail?id=' + item.id"
                    target="_blank"><img :src="item.carFile?item.carFile.split(',')[0]:''" ></a>

                </li>
                <li class="cy_list_1">
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

                  <!-- </P> -->
                  <p class="p2"><i>车辆：</i><font>{{ item.carNum }}</font>
                    <font>{{ item.carTypeName }}</font>
                    <font>长<b>{{ item.carLength }}</b>米</font>
                    <font>载重<b>{{ item.carLoad }}</b>吨</font>
                    <font>{{ item.carSourceTypeName }}</font>
                  </p>
                  <p class="p3"><i>常驻地：</i><font :title="item.usualPlace">{{ item.usualPlace ? item.usualPlace.substring(0, 10) : '' }}</font>&nbsp;&nbsp;<i>运价：</i>
                    <font>{{ item.expectPrice?item.expectPrice + '元':'面议' }}</font>&nbsp;&nbsp;<i>发布者：</i>
                  <font>{{ item.driverName?item.driverName:'' }}</font></p>
                  <p class="p4"><i>说明：</i><font>{{ item.remark ? item.remark.substring(0,10) : '暂无说明' }}</font></p>
                </li>
                <li class="cy_list_3">
                  <p class="p1"><img
                    v-if="item.driverStatus === 'AF0010403'"
                    src="/images/list_wlzx/10shiming.png"></P>
                    <!--<p class="p2"><img id="list_xinyong" src="/images/list_wlzx/11xinyong.png"/></P>-->
                </li>
                <li class="wlzx_list_6">
                  <p class="p2"><a
                    :href="'/cheyuan/detail?id=' + item.id"
                    target="_blank" ><input
                      readonly
                      value="查看"></a>
                  </p>
                  <!-- <p class="p3"><a
                    v-if="item.qq"
                    :href="'http://wpa.qq.com/msgrd?v=3&uin=' + item.qq + '&site=qq&menu=yes'"
                    target="_blank"><input
                    value="QQ交谈">
                  </a></p> -->
                </li>
              </ul>
            </div>
          </div>

          <div style="clear: both">
            <div class="zx_sx1">
              <span class="biaozhi1"/><span>{{ interesLabel }}</span>
            </div>
            <ul class="hot-cities">
              <li 
                v-for="(item,index) in interestOrder" 
                :key="index" 
                class="hot-cities-li" >
                <a
                  target="_blank"
                  :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
                  class="hot-cities-a">{{ item.title }}</a>
              </li>
            </ul>
          </div>

        </div>

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
            <div class="zx_sx"><span class="biaozhi"/><span>车主月人气榜</span></div>
            <div 
              v-for="(item,index) in popularity" 
              :key="index" 
              class="rc_list">
              <div class="left">
                <p :class="{'oneColor':index == 0,'twoColor':index== 1 , 'trihColor':index==2}">{{ index+1 }}</p>
              </div>
              <div 
                v-if="index < 3" 
                class="img">
                <img :src="'/line/images/touxiang'+(index+1)+'.png'" >
              </div>
              <div 
                class="right"
                style="padding-right:18px">
                <span>{{ item.driverName +' ' + item.carNum }}</span>
                <span style="float: right">人气值：<i style="color: red">{{ item.popNum }}</i></span>
              </div>
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
            <div class="zx_sx">
              <span class="biaozhi"/><span>仓储与配送</span>
            </div>
            <div 
              class="list_none" 
              v-if="$store.state.news.cheyuan_ccyps.length === 0">
              <span>暂无仓储与配送</span>
            </div>
            <ul
              class="ps-list"
              style="padding-left: 30px;list-style: square">
              <li 
                :key="index" 
                v-for="(item, index) in $store.state.news.cheyuan_ccyps">
                <a 
                  :href="item.url" 
                  target="_blank">{{ item.title }}</a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div class="arc_main4">
        <div class="zx_sx1">
          <span class="biaozhi1"/><span>{{ cheLabel }}</span>
        </div>
        <ul class="hot-cities">
          <li 
            v-for="(item,index) in cheLink" 
            :key="index" 
            class="hot-cities-li" >
            <a
              target="_blank"
              :href="item.targetLinks+'?startp='+ item.startProvince+'&startc='+item.startCity+'&starta='+item.startArea+'&endp='+item.endProvince+'&endc='+item.endCity+'&enda='+item.endArea+'&carSourceType='+item.carSourceType"
              class="hot-cities-a">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <Add 
      :is-show-add.sync="isShowAdd" 
      :data-info="dataInfo"/>
  </div>
</template>

<script>
import Add from './add'
import MUTUAL from '@/static/js/wzl-commonJs.js'
import { getCode, getCity, parseTime } from '~/components/commonJs.js'
async function getOtherCarInfoList($axios, currentPage, vo) {
  let res = await $axios.get(
    `/28-web/carInfo/findOtherCarInfoList/${
      vo.id
    }?pageNum=${currentPage}&pageSize=5`
  )
  if (res.data.status === 200) {
    return {
      list: res.data.data.list,
      pages: res.data.data.pages,
      currentPage: res.data.data.pageNum
    }
  } else {
    return { list: [], pages: 0, currentPage: 1 }
  }
}
async function getCanyColl(
  $axios,
  carInfoId,
  access_token,
  user_token,
  handle
) {
  let res = await $axios.post(
    `/28-web/collect/carInfo??access_token=${access_token}&user_token=${user_token}&carInfoId=${carInfoId}&handle=${handle}
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
    Add
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/article_cheyuan.css?v2' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
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
      cy1: {},
      zxList: [],
      otherCarSourceList: [],
      otherCarInfoList: [],
      handle: '',
      collection: '',
      isShowCollect: true,
      isCencelCollect: false,
      isShowAdd: false,
      dataInfo: {},
      showImg: 0,
      pages: 0,
      currentPage: 1,
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
  async fetch({ store, params, $axios, error, app, query }) {
    await store.dispatch('cheyuan/addBrowserNum', query.id)
    await store
      .dispatch('news/GETNEWSINFO', {
        params: {
          channelIds: '101',
          count: 10,
          orderBy: 9,
          channelOption: 0
        },
        name: 'cheyuan_ccyps',
        preFn: data => {
          return data.map((el, index) => {
            el.url = el.url.replace(
              /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
              '/zixun'
            )

            return el
          })
        }
      })
      .catch(err => {})
  },
  async asyncData({ $axios, app, query }) {
    let zxList, otherCarSourceList, carInfoRes, carInfoRes1
    const cy1 = await $axios.post('/28-web/carInfo/' + query.id)
    if (cy1.data.status === 200) {
      let item = cy1.data.data
      let arr = (item.id || '').split('')
      let num = 0
      arr.forEach(el => {
        num += el.charCodeAt(0) || 0
      })
      cy1.data.data.num = (num % 30) + 1
      cy1.data.data.startTime1 = parseTime(
        cy1.data.data.startTime,
        '{y}-{m}-{d} {h}:{i}:{s}'
      )
      let code = await getCode($axios, cy1.data.data.endProvince)
      zxList = await getCity($axios, code, cy1.data.data.startCity)
      let parm = {
        currentPage: 1,
        pageSize: 10,
        startProvince: cy1.data.data.startProvince,
        startCity: cy1.data.data.startCity
      }
      carInfoRes = await $axios.post('/28-web/carInfo/list', parm)
      let parm1 = {
        currentPage: 1,
        pageSize: 10,
        startProvince: cy1.data.data.endProvince,
        startCity: cy1.data.data.endCity
      }

      carInfoRes1 = await $axios.post('/28-web/carInfo/list', parm1)
    }
    let parm2 = {
      endArea: cy1.data.data.endArea,
      endCity: cy1.data.data.endCity,
      endProvince: cy1.data.data.endProvince,
      startArea: cy1.data.data.startArea,
      startCity: cy1.data.data.startCity,
      startProvince: cy1.data.data.startProvince
    }
    //最新货源信息
    let newLists = await $axios
      .post('/28-web/carInfo/newest/publish')
      .catch(err => {})
    let driverId = cy1.data.data.driverId
    //综合力评估
    let cheComprehensives = await $axios
      .get('/28-web/driver/comprehensive?driverId=' + driverId)
      .catch(err => {})
    //货源热门搜索
    let hotSearchs = await $axios.get('/28-web/hotSearch/carInfo/detail/links')
    //底部推荐
    let cheLinks = await $axios
      .post('/28-web/carInfo/detail/related/links', parm2)
      .catch(err => {})
    //企业人气榜
    let popularitys = await $axios
      .get('/28-web/driver/driverPopularityList')
      .catch(err => {})
    hotSearchs.data.data.links.forEach(item => {
      MUTUAL.HREFLINKS(item)
    })
    cheLinks.data.data.interestedRecommend.links.forEach(item => {
      MUTUAL.HREFLINKS(item)
    })
    cheLinks.data.data.recommend.links.forEach(item => {
      MUTUAL.HREFLINKS(item)
    })
    return {
      cy1: cy1.data.status === 200 ? cy1.data.data : {},
      zxList: zxList && zxList.data.status === 200 ? zxList.data.data : [],
      newList: newLists.data.status === 200 ? newLists.data.data : [],
      interestOrder:
        cheLinks.data.status === 200
          ? cheLinks.data.data.interestedRecommend.links
          : [],
      cheLabel:
        cheLinks.data.status === 200 ? cheLinks.data.data.recommend.label : '',
      cheLink:
        cheLinks.data.status === 200 ? cheLinks.data.data.recommend.links : [],
      interesLabel:
        cheLinks.data.status === 200
          ? cheLinks.data.data.interestedRecommend.label
          : [],
      cheComprehensive:
        cheComprehensives.data.status === 200
          ? cheComprehensives.data.data
          : {},
      otherCarSourceList:
        otherCarSourceList && otherCarSourceList.data.status === 200
          ? otherCarSourceList.data.data
          : [],
      carInfoStartList: !carInfoRes
        ? []
        : carInfoRes.data.status === 200
          ? carInfoRes.data.data.list
          : [],
      carInfoEndList: !carInfoRes1
        ? []
        : carInfoRes1.data.status === 200
          ? carInfoRes1.data.data.list
          : [],
      popularity: popularitys.data.status === 200 ? popularitys.data.data : [],
      hotSearchList:
        hotSearchs.data.status === 200 ? hotSearchs.data.data.links : []
    }
  },
  mounted() {
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

    let rollContainer_h = $('.release_box').height()
    let roll = $('.release_scroll')
    roll.append(roll.html())
    let number = 1
    let l = this.newList.length
    let manage_box_h = $('.manage_box').height()
    let startScroll = () => {
      this.inTerVar = setInterval(() => {
        roll
          .stop()
          .animate({ top: `${number * -manage_box_h}px` }, 2000, () => {
            if (number > l) {
              number = 1
              roll.css('top', '0px')
            }
          })
        number++
      }, 6000)
    }
    if (manage_box_h * l > rollContainer_h) {
      startScroll()
    }
    $('.release_box').hover(
      () => {
        clearInterval(this.inTerVar)
        this.inTerVar = null
      },
      () => {
        startScroll()
      }
    )
    let myChart = echarts.init(document.getElementById('echart'))

    this.getChartData(this.$route.query.id)
      .then(res => {
        let data = res.data
        let odata = []

        if (data) {
          data = data.data

          for (let i in data) {
            if (i.indexOf('rice') !== -1) {
              if (data[i] > 100) {
                data[i] = Math.floor(data[i])
              }
            }
          }

          odata = [
            data.highestPrice,
            data.highAveragePrice,
            data.lowAveragePrice,
            data.lowestPrice
          ]
        }
        this.echarData = data
        return { data: odata, thisPrice: data.thisPrice }
      })
      .then(data => {
        return this.getChartOption(data)
      })
      .then(option => {
        myChart.setOption(option)
      })

    $('#pagination1').pagination({
      currentPage: this.currentPage,
      totalPage: this.pages,
      callback: async current => {
        $('#current1').text(current)
        let obj = await getOtherCarInfoList(this.$axios, current, {
          id: this.$route.query.id
        })
        this.otherCarInfoList = obj.list
        this.currentPage = obj.currentPage
        this.pages = obj.pages
        window.location.href = '#top'
      }
    })
  },
  methods: {
    //价格参考
    getChartData(id) {
      return this.$axios.get('/28-web/carInfo/priceReference/' + id)
    },
    getChartOption(obj) {
      let find = 4
      let data = obj.data
      let theCar = {
        value: obj.thisPrice === null ? 0 : obj.thisPrice,
        ovalue: 0, // 将最低价给它，方便它定位到最后
        symbol: 'image:///images/cy/12d.png',
        symbolSize: 20
      }
      if (obj.thisPrice === null) {
        data.push(theCar)
      } else {
        // 判断本车价的位置
        for (let i = 0; i < 4; i++) {
          if (data[i] < theCar.value) {
            find = i
            break
          }
        }

        data.splice(find, 0, theCar)
      }
      obj.find = find
      let maxY = obj.find === 0 ? data[0].value : data[0] // 数据正常的情况下，第一个就是最高价
      let label = ['最高', '行情价(高)', '行情价(低)', '最低']
      label.splice(obj.find, 0, '本车')
      let hqh // 行情价高
      let hql // 行情价低
      let theorangearea = [null, data[1], data[2]]
      if (obj.find === 2) {
        hqh = data[1]
        hql = data[3]
        theorangearea = [null, data[1], obj.thisPrice, data[3]]
      } else if (obj.find > 2) {
        hqh = data[1]
        hql = data[2]
      } else {
        hqh = data[2]
        hql = data[3]
        theorangearea = [null, null, data[2], data[3]]
      }
      console.log('echart 数据：', find, data, label, hqh, hql, maxY)
      return {
        title: { text: '', subtext: '' },
        tooltip: { trigger: 'axis' },
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false,
          data: label
        },
        yAxis: {
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          type: 'value'
          // max: maxY
        },
        series: [
          {
            name: '',
            type: 'line',
            lineStyle: {
              normal: { color: 'rgba(255,173,101, 0.5)' }
            },
            data: data,
            markPoint: {
              symbol: 'image:///images/cy/11wk.png',
              symbolOffset: [0, '-70%'],
              symbolSize: [82, 62],
              itemStyle: {
                color: 'white' //需要把原本的样式变成白色，字体才能正常显示
              },
              label: {
                position: 'insideTop',
                formatter: function(params) {
                  if (params.value === 0) {
                    return `{color1|${params.name}}\n{color0|面议}`
                  } else {
                    return `{color1|${params.name}}\n{color0|${params.value}元}`
                  }
                },
                rich: {
                  color0: {
                    fontSize: 14,
                    align: 'center',
                    fontWeight: 'normal',
                    color: '#FF7836',
                    padding: [0, 0, 6, 0]
                  },
                  color1: {
                    fontSize: 12,
                    align: 'center',
                    fontWeight: 'normal',
                    color: '#6F6F6F',
                    padding: [0, 0, 6, 0]
                  }
                }
              },
              data: [
                {
                  name: '',
                  // type: 'min'
                  coord: [
                    obj.find,
                    data[obj.find].value === '面议'
                      ? data[obj.find].ovalue
                      : data[obj.find].value
                  ],
                  value: data[obj.find].value
                }
              ]
            },
            itemStyle: {
              normal: {
                color: '#6F6F6F',
                opacity: 1
              },
              emphasis: {
                color: '#6F6F6F'
              }
            },
            symbolSize: 6,
            hoverAnimation: false, //拐点不要动画
            symbol: 'rect',
            // symbol: 'circle',
            label: {
              show: true,
              position: 'bottom',
              textStyle: { color: '#6F6F6F' },
              formatter: function(params) {
                let c0
                if (params.dataIndex <= 1) {
                  c0 = 'color1'
                } else {
                  c0 = 'color0'
                }
                if (params.dataIndex === obj.find) {
                  return ``
                } else {
                  return `{${c0}|${params.value}元}\n{color2|${params.name}}`
                }
              },
              rich: {
                color0: { fontSize: 14, align: 'center', color: '#FF7836' },
                color1: { fontSize: 14, align: 'center', color: '#6F6F6F' },
                color2: {
                  color: '#413A43',
                  align: 'center',
                  fontSize: 14,
                  padding: [5, 5, 5, 5]
                }
              }
            },
            tooltip: { show: false }
          },
          // 控制橙色覆盖区间
          {
            name: '',
            type: 'line',
            lineStyle: {
              normal: { color: 'rgba(255,173,101, 1)' }
            },
            areaStyle: {
              normal: { origin: 'end', color: 'rgba(255,161,77, 0.5)' }
            },
            data: theorangearea,
            tooltip: { show: false }
          },
          {
            name: '平行于y轴的趋势线',
            type: 'line',
            markLine: {
              name: 'xfdsvffds',
              symbol: ['circle', 'none'],
              symbolSize: 6,
              lineStyle: {
                normal: { color: 'rgba(255,173,101, 1)' }
              },
              label: {
                show: true,
                position: 'end',
                formatter: function(params) {
                  if (params.dataIndex === 1) {
                    return `{style|建议价格区间}`
                  }
                },
                rich: {
                  style: {
                    fontSize: 15,
                    padding: [0, 110, 0, 0],
                    color: '#FF7836'
                  }
                }
              },
              data: [
                [
                  { coord: ['行情价(高)', hqh] },
                  { coord: ['行情价(高)', maxY] }
                ],
                [
                  { coord: ['行情价(低)', hql] },
                  { coord: ['行情价(低)', maxY] }
                ]
              ]
            }
          }
        ]
      }
    },
    showPrice() {
      let tipstr =
        '<div class="myLayer_content2">此数据源于平台用户提报的历史数据统计，仅供参考！</div>'
      if (this.echarData.thisPrice !== null) {
        if (this.echarData.thisPrice > this.echarData.highAveragePrice) {
          // 高于
          tipstr =
            '<div class="myLayer_content2">车主' +
            this.cy1.driverName +
            '的承运价格<span>高于</span>行业均价高点</div>'
        } else if (this.echarData.thisPrice < this.echarData.lowestPrice) {
          // 低于
          tipstr =
            '<div class="myLayer_content2">车主' +
            this.cy1.driverName +
            '的报价<span>低于</span><i>' +
            this.cheComprehensive.lowerPriceRate +
            '%的车主</i>，承运价格<span>低于</span>行业均价低点</div>'
        } else {
          tipstr =
            '<div class="myLayer_content2">车主' +
            this.cy1.driverName +
            '的承运价格处于行业均价内</div>'
        }
      }
      layer.open({
        type: 1,
        title: ' ',
        area: ['580px', '540px'],
        closeBtn: 1,
        shadeClose: true,
        success: (layero, index) => {
          let seconds = 5
          let stop = setInterval(() => {
            $('#seconds').html(seconds + 'S')
            seconds--
            if (seconds < 0) {
              clearInterval(stop)
              $('.show1').hide()
              $('.show2').show()
              let myChart2 = echarts.init(document.getElementById('echart2'))
              let tdata = this.echarData
              let option2 = this.getChartOption({
                data: [
                  tdata.highestPrice,
                  tdata.highAveragePrice,
                  tdata.lowAveragePrice,
                  tdata.lowestPrice
                ],
                thisPrice: tdata.thisPrice
              })
              myChart2.setOption(option2)
            }
          }, 1000)
        },
        content:
          '<div class="show1"><div class="myLayer_title">稍等。。。</div><div class="myLayer_content">28平台智能运输大数据中心正在为您核算从<span>' +
          this.cy1.startCity +
          '</span>至<span>' +
          this.cy1.endCity +
          '</span>全网优质车源的最新报价</div><div class="myLayer_footer"><span id="seconds">5S</span></div></div>' +
          '<div class="show2">' +
          '<div class="myLayer_title2"><span></span> <span>价格参考</span><span>大数据智能模型精准定价，28智能平台指导定价</span></div>' +
          '<div class="myLayer_content2">' +
          this.cy1.startCity +
          '->' +
          this.cy1.endCity +
          this.cy1.carLength +
          '米</div>' +
          '<div id="echart2"></div>' +
          tipstr +
          '</div>'
      })
    },
    findAnother() {
      let parm = {
        strartAddress: this.cy1.strartAddress,
        endAddress: this.cy1.endAddress
      }
      this.$axios.post('/28-web/carInfo/findAnother', parm).then(res => {
        if (res.data.status === 200) {
          window.location.href = `/cheyuan/detail?id=${res.data.data.id}`
        }
      })
    },
    collected() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('login_userToken')
      this.isShowCollect = !this.isShowCollect
      if (!this.isShowCollect) {
        this.handle = 'collect'
      } else {
        this.handle = 'cancelCollect'
      }
      if (access_token != 'aflc-1') {
        this.isShowCollect = true
      }
      if (access_token && user_token) {
        getCanyColl(
          this.$axios,
          this.cy1.carInfoId,
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
      let user_token = $.cookie('login_userToken')
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
          .catch(err => {})
      } else {
        this.isShowAdd = true
        this.getAddress()
      }
    },
    getAddress() {
      this.dataInfo.startProvince = this.cy1.startProvince
      this.dataInfo.startCity = this.cy1.startCity
      this.dataInfo.startArea = this.cy1.startArea
      this.dataInfo.endProvince = this.cy1.endProvince
      this.dataInfo.endCity = this.cy1.endCity
      this.dataInfo.endArea = this.cy1.endArea
    },
    goToCy() {
      window.open(
        `/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=
        ${this.cy1.startCity}&startProvince=${this.cy1.startProvince}`
      )
    },
    goToCy1() {
      window.open(
        `/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=
        ${this.cy1.endCity}&startProvince=${this.cy1.endProvince}`
      )
    },
    clickImg(int) {
      this.showImg = int
    }
  }
}
</script>

<style scoped>
.arc_top1 {
  margin: 0px auto;
  padding: 20px 0;
  width: 1400px;
  height: 80px;
}
.arc_top1_1,
.arc_top1_2,
.arc_top1_3 {
  margin-top: 22px;
}
.arc_input3 {
  display: inline-block;
}
</style>
