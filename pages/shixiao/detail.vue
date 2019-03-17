<template>
  <div>
    <div class="arc_main">
      <!--<div class="arc_nav">-->
      <!--<a href="/">物流首页</a>&gt;<a -->
      <!--id="arc_nav_a1" -->
      <!--href="">零担物流专线</a>&gt;<a -->
      <!--id="arc_nav_a2" -->
      <!--href="">零担物流专线</a>&gt;<a -->
      <!--id="arc_nav_a3" -->
      <!--href="">零担物流专线</a>-->
      <!--</div>-->
      <div class="arc_top1">
        <div class="arc_top1_1">
          <span><i v-if="tranDetail.startLocation && tranDetail.endLocation">{{ tranDetail.startLocation.substring(0, 15) }}</i>&nbsp;&rarr;&nbsp;<i>{{ tranDetail.endLocation.substring(0, 15) }}</i></span>
        </div>
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
          onmouseover="$('.city_box').css('display', 'block')" ><a href="javascript:void(0)"><span>更多+</span></a></div>

        <!--更多城市-->
        <div 
          id="city_box" 
          class="city_box" 
          onmouseover="$('.city_box').css('display', 'block');"
          onmouseout="$('.city_box').css('display', 'none');" >
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
            <img 
              v-if="tranDetail.rangeLogo" 
              :src="tranDetail.rangeLogo.split(',')[showImg]">
            <img 
              v-else 
              :src="'../../images/pic/bg' + tranDetail.num + '.png'" >
          </div>
          <div class="arc_left_2">
            <a 
              href="javascript:void(0)" 
              @click="clickImg(0)"><img
                v-if="tranDetail.rangeLogo" 
                :src="tranDetail.rangeLogo.split(',')[0]" >
              <img
                v-else
                :src="'../../images/pic/bg' + tranDetail.num + '.png'" >
            </a>
            <a 
              href="javascript:void(0)" 
              @click="clickImg(1)"><img
                v-if="tranDetail.rangeLogo && tranDetail.rangeLogo.split(',')[1]"
                :src="tranDetail.rangeLogo.split(',')[1]" ></a>
            <a 
              href="javascript:void(0)" 
              @click="clickImg(2)"><img
                v-if="tranDetail.rangeLogo && tranDetail.rangeLogo.split(',')[2]"
                :src="tranDetail.rangeLogo.split(',')[2]" ></a>
          </div>
          <div class="arc_left_3"><a href="javascript:void(0)"><img src="../../static/images/article_wlzx/17shoucang.png">&nbsp;<span id="collection_zx">收藏专线</span><i>&nbsp;(&nbsp;<em class="my_zx_num"/>人气&nbsp;)</i></a></div>
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
          <div class="pj_price_box">
            <div class="pj_price_box1"><div 
              class="bt_close" 
              onclick="$('.pj_price_box').hide()" ><img src="../../static/images/article_wlzx/xxx.png"></div></div>
            <div class="pj_price_box2">试算价格</div>
            <div class="item-form plr20">
              <h2 class="form-tit">货物重量/体积计算</h2>
              <div class="item-cell">
                <label><span class="r-point">*</span>总重量：</label>
                <div class="item-primary w190">
                  <input 
                    id="goodsweight" 
                    class="item-input" 
                    type="text" 
                    placeholder="">
                </div>
                <span class="unit">千克</span>
              </div>
              <div class="item-cell">
                <label><span class="r-point">*</span>总体积：</label>
                <div class="item-primary w190">
                  <input 
                    id="goodsvolume" 
                    class="item-input" 
                    type="text" 
                    placeholder="">
                </div>
                <span class="unit">立方米</span>
              </div>
              <div class="item-cell c-red calculator">
                辅助计算器
                <i class="icon i-down"/>
              </div>
              <p class="txt mb20 pl20 c-red">注：我们的工作人员会在接货时重新称重，此估算仅供参考。</p>
              <!-- 辅助计算器 -->
              <div 
                id="_cal_div" 
                class="cal-all cl" 
                style="display: none;">
                <div class="cal-box">
                  <div class="cal-panel">
                    <ul class="cal-head">
                      <li>
                        <label>重量：</label>
                        <div class="cal-primary">
                          <span 
                            id="_cal_weight" 
                            class="num" 
                            name="_cal_weight"/>kg
                        </div>
                      </li>
                      <li>
                        <label>体积：</label>
                        <div class="cal-primary">
                          <span 
                            id="_cal_volume" 
                            class="num" 
                            name="_cal_volume"/>m3
                        </div>
                      </li>
                      <li>
                        <label>件数：</label>
                        <div class="cal-primary">
                          <span 
                            id="_cal_package" 
                            class="num" 
                            name="_cal_package"/>
                        </div>
                      </li>
                    </ul>
                    <div class="cal-hs fr">
                      <a 
                        href="javascript:;" 
                        class="calstop">收起</a>
                      <a 
                        href="javascript:;" 
                        class="caldel">删除</a>
                    </div>
                    <div class="cal-body">
                      <div class="cal-cell">
                        <label>单位重量</label>
                        <div class="cal-primary">
                          <input 
                            id="_unit_weight" 
                            type="text">
                          <span>kg</span>
                        </div>
                      </div>
                      <div class="cal-cell">
                        <label>单位体积</label>
                        <div 
                          id="_volume" 
                          class="cal-primary">
                          <input 
                            id="_unit_length" 
                            type="text" 
                            onkeyup="Calculator._volume_cal(this)" 
                            placeholder="长(m)">
                          <span>x</span>
                          <input 
                            id="_unit_width" 
                            type="text" 
                            onkeyup="Calculator._volume_cal(this)" 
                            placeholder="宽(m)">
                          <span>x</span>
                          <input 
                            id="_unit_higth" 
                            type="text" 
                            onkeyup="Calculator._volume_cal(this)" 
                            placeholder="高(m)">
                          <span>=</span>
                          <span 
                            id="_unit_volume" 
                            class="cal-bulk"/>
                          <span>立方米</span>
                        </div>
                      </div>
                      <div class="cal-cell">
                        <label>件数</label>
                        <div class="cal-primary">
                          <input 
                            id="_total_package" 
                            type="text">
                          <a 
                            href="javascript:;" 
                            class="btn btn-orange btn-cal" 
                            onclick="Calculator._confirm_cal(this)">确认</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="caladd-box fr">
                  <a 
                    class="btn btn-orange caladd" 
                    href="javascript:;">添加</a>
                </div>
              </div>
              <h2 class="form-tit">费用合计</h2>
              <div class="item-cell item-block">
                <label><span class="r-point">*</span>预计费用：</label>
                <div id="_totalFee_div">
                  <p class="loose-txt"><span 
                    id="_totalFee" 
                    class="price-big mr10">0.00</span><span class="c-red">元</span></p>
                </div>
              </div>
            </div>

          </div>
          <div class="arc_middle1"><span>{{ tranDetail.startLocation.substring(0, 15) }}&nbsp;&rarr;&nbsp;{{ tranDetail.endLocation.substring(0, 15) }}</span></div>
          <div class="arc_middle2">
            <div class="arc_middle2_1">
              <p class="p1"><i>重货价：</i><span v-if="tranDetail.rangePrices1[0]">{{ tranDetail.rangePrices1[0].startVolume }} - {{ tranDetail.rangePrices1[0].endVolume }}公斤</span>
                <font 
                  v-if="tranDetail.rangePrices1[0] && tranDetail.rangePrices1[0].discountPrice"
                  class="font1">&yen;&nbsp;{{ tranDetail.rangePrices1[0].discountPrice.toFixed(0) }}</font>
                <span 
                  v-if="tranDetail.rangePrices1[0] && tranDetail.rangePrices1[0].primeryPrice"
                  class="span2">&yen;&nbsp;{{ tranDetail.rangePrices1[0].primeryPrice.toFixed(0) }}</span><font
                    v-if="tranDetail.rangePrices1.length >=2"
                    onmouseover="$('.price_box1').css('display', 'block');"
                    onmouseout="$('.price_box1').css('display', 'none');"
                    class="font2">[阶梯价]</font></p>
              <p class="p2"><i>轻货价：</i><span v-if="tranDetail.rangePrices0[0]">{{ tranDetail.rangePrices0[0].startVolume }} - {{ tranDetail.rangePrices0[0].endVolume }}公斤</span>
                <font 
                  v-if="tranDetail.rangePrices0[0] && tranDetail.rangePrices0[0].discountPrice"
                  class="font1">&yen;&nbsp;{{ tranDetail.rangePrices0[0].discountPrice.toFixed(0) }}</font>
                <span 
                  v-if="tranDetail.rangePrices0[0] && tranDetail.rangePrices0[0].primeryPrice"
                  class="span2">&yen;&nbsp;{{ tranDetail.rangePrices0[0].primeryPrice.toFixed(0) }}</span><font
                    v-if="tranDetail.rangePrices0.length >=2"
                    onmouseover="$('.price_box2').css('display', 'block');"
                    onmouseout="$('.price_box2').css('display', 'none');"
                    class="font2">[阶梯价]</font></p>
            </div>
            <div class="arc_middle2_2">
              <div class="num1"><span>{{ tranDetail.orderNumber }}</span></div><div class="num2"><a href="javascript:void(0)"><span>{{ tranDetail.assessNumber }}</span></a></div>
              <div class="num3"><span>下单量</span></div><div class="num4"><a href="javascript:void(0)"><span>累计评价</span></a></div>
            </div>
            <!--阶梯价格 S-->
            <div
              class="price_box1" 
              onmouseover="$('.price_box1').css('display', 'block');"
              onmouseout="$('.price_box1').css('display', 'none');">
              <div class="price_box_bt">阶梯价（重货）</div>
              <div 
                v-for="(item,index) in tranDetail.rangePrices1" 
                :key="index"
                class="price_box_item1">
                <span>{{ item.startVolume }} - {{ item.endVolume }}公斤</span>
                <i>&nbsp;&nbsp;{{ item.discountPrice ? item.discountPrice.toFixed(0) : '0' }}元/公斤</i>
              <font>{{ item.primeryPrice.toFixed(0) }}</font><em id="nr07210">元/公斤</em></div>
            </div>

            <div
              class="price_box2" 
              onmouseover="$('.price_box2').css('display', 'block');"
              onmouseout="$('.price_box2').css('display', 'none')();">
              <div class="price_box_bt">阶梯价（轻货）</div>
              <div
                v-for="(item,index) in tranDetail.rangePrices0"
                :key="index"
                class="price_box_item2">
                <span>{{ item.startVolume }} - {{ item.endVolume }}立方</span>
                <i>&nbsp;&nbsp;{{ item.discountPrice ? item.discountPrice.toFixed(0) : '0' }}元/立方</i>
              <font>{{ item.primeryPrice.toFixed(0) }}</font><em id="nr07310">元/立方</em></div>
            </div>
            <!--阶梯价格 E-->


          </div>
          <div class="arc_middle3">
            <div class="arc_m3"><i>运输时效：</i><span>{{ tranDetail.transportAging }}{{ tranDetail.transportAgingUnit }}</span></div>
            <div class="arc_m3"><i>发货频次：</i><span>{{ tranDetail.departureHzData }}天{{ tranDetail.departureHzTime }}次</span></div>
            <div class="arc_m3"><i>最低一票价格：</i><span>{{ tranDetail.lowerPrice ? '&yen;&nbsp;' + tranDetail.lowerPrice + '元' : '面议' }}</span></div>
          </div>
          <div class="arc_middle4">
            <div class="arc_m4_1">
              <div ><span>出发地</span></div>
              <div ><i>联系人：</i><span>{{ tranDetail.startLocationContacts }}</span></div>
              <div ><i>手机：</i><span>{{ tranDetail.startLocationContactsMobile }}</span></div>
            </div>
            <div class="arc_m4_2">
              <div ><span>到达地</span></div>
              <div ><i>联系人：</i><span>{{ tranDetail.endLocationContacts }}</span></div>
              <div ><i>手机：</i><span>{{ tranDetail.endLocationContactsMobile }}</span></div>
            </div>
          </div>
          <div class="arc_middle5">
            <div class="arc_m5_1"><span>联系我时，请说明是从28快运上看到此信息，谢谢！</span></div>
            <div class="arc_m5_2" >
              <div 
                id="order_price" 
                class="arc_m5_2_1" 
                onclick="$('.pj_price_box').show()"><a href="javascript:void(0)"><span>试算价格</span></a></div>
              <div 
                id="order_arc" 
                class="arc_m5_2_2"><a 
                  id="nr_order" 
                  target="_blank" 
                  href="javascript:void(0)"><span >快速下单</span></a></div>
            </div>
          </div>
          <div class="arc_middle6">
            <div class="arc_m6_1"><i>增值服务：</i></div>
            <div class="arc_m6_2">
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02501')"
                class="item_zzfw1"><img src="../../static/images/pic/item_zzfw1.png"><span>送货上门</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02502')"
                class="item_zzfw2"><img src="../../static/images/pic/item_zzfw2.png"><span>保价运输</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02503')"
                class="item_zzfw3"><img src="../../static/images/pic/item_zzfw3.png"><span>运费到付</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02504')"
                class="item_zzfw4"><img src="../../static/images/pic/item_zzfw4.png"><span>代收货款</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02505')"
                class="item_zzfw5"><img src="../../static/images/pic/item_zzfw5.png"><span>上门提货</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02506')"
                class="item_zzfw6"><img src="../../static/images/pic/item_zzfw6.png"><span>开发票</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02507')"
                class="item_zzfw7"><img src="../../static/images/pic/item_zzfw7.png"><span>签单回收</span></div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02508')"
                class="item_zzfw8"><img src="../../static/images/pic/item_zzfw8.png"><span>时效保障</span></div>
            </div>
          </div>

        </div>
        <div class="arc_right">
          <p class="arc_right01"><img src="../../static/images/article_wlzx/04gongsi.png"><span>{{ oneCompany.companyName }}</span></p>
          <p 
            v-if="oneCompany.credit >= 0 && oneCompany.credit <= 150" 
            class="arc_right02"><i>信誉：</i>
            <img
              v-for="(item1,index1) in oneCompany.starS"
              :key="index1"
              class="xy_zuan" 
              src="../../static/images/article_wlzx/blue.gif"
              style="display: inline">
          </p>
          <p
            v-if="oneCompany.credit >= 151"
            class="arc_right02"><i>信誉：</i>
            <img
              v-for="(item1,index1) in oneCompany.starB"
              :key="index1"
              class="xy_zuan"
              src="../../static/images/article_wlzx/34huanguan.gif"
              style="display: inline">
          </p>
          <p class="arc_right03">
            <span>质量</span><span>时效</span><span>价格</span><br >
            <font>{{ oneCompany.serverQualityScore }}</font><font>{{ oneCompany.transportAgingScore }}</font><font>{{ oneCompany.serverPriceScore }}</font>
          </p>
          <p class="arc_right04">
            <span class="arc_right04_1"><i>联系人：</i><font>{{ oneCompany.contactsName }}</font></span>
            <span><i>手机：</i><font>{{ oneCompany.mobile }}</font></span>
            <span><i>Q&nbsp;Q：</i><a
              v-if="oneCompany.qq"
              :href="'http://wpa.qq.com/msgrd?v=3&uin=' + oneCompany.qq + '&site=qq&menu=yes'" 
              target="_blank"><input
            value="QQ交谈"></a></span>
            <span><i>地址：</i><font>{{ oneCompany.address }}</font></span>
          </p>
          <p class="arc_right05">
            <a 
              :href=" '/member/' + oneCompany.companyId + ''"
              target="_blank"><input
                readonly="" 
                value="进入官网"></a>
            <a ><input 
              id="collection_wlgs" 
              readonly="" 
              value="收藏"></a>
          </p>
          <p class="arc_right06">
            <span>相关认证</span>
          </p>
          <p class="arc_right07">
            <img 
              v-if="oneCompany.isVip && oneCompany.isVip ===1"
              src="../../static/images/list_wlzx/11xinyong.png">
            <img
              v-if="oneCompany.authStatus ==='AF0010403'"
              src="../../static/images/list_wlzx/10shiming.png">
            <img
              v-if="oneCompany.collateral && oneCompany.collateral !==0"
              src="../../static/images/list_wlzx/danbao.png"><span v-if="oneCompany.collateral && oneCompany.collateral !==0">{{ oneCompany.collateral + '元' }}</span>
            <span 
              v-if="oneCompany.authStatus != 'AF0010403' &&
                (!oneCompany.isVip || oneCompany.isVip == 0) &&
            (!oneCompany.collateral || oneCompany.collateral == 0)">暂无认证信息</span>
          </p>

        </div>

      </div>
      <div class="arc_main2">
        <div class="arc_left2">
          <div class="arc_left2_bt" >
            <span>公司网点分布</span><i><a 
              :href="'/member/' + oneCompany.companyId + '-wangdian'"
              target="_blank" >更多</a></i>
          </div>
          <div class="arc_left2_nr">
            <div
              v-for="(item,index) in listDetailPointNetwork" 
              :key="index"
              class="tjwd_list">
              <p class="p01"><span>{{ item.pointName.substring(0, 12) + '..' }}</span></p>
              <p class="p02"><img src="../../static/images/04gongsi.png" >&nbsp;<span><a
                :href="'/member/' + item.companyId + ''"
                target="_blank">{{ item.companyName.substring(0, 16) + '..' }}</a></span></p>
              <p class="p03">
                <i>联系人：</i><span >{{ item.name }}</span> &nbsp; <i>手机号：</i><font>{{ item.mobile }}</font>

              </p>
              <p class="p04">
                <i>所在地：</i><span>{{ item.belongCityName }}</span>
              </p>
              <p class="p05">
                <img src="../../static/images/06dingwei.png" >&nbsp;<span>{{ item.address.substring(0, 17) + '..' }}</span>
              </p>
            </div>
            <div 
              v-if="listDetailPointNetwork.length === 0" 
              class="tjwd_list"
              style="text-align: center;line-height: 180px;">暂无网点内容！</div>
          </div>
        </div>
        <div class="arc_right2">
          <div class="arc_right2_bt">
            <span 
              v-for="(item,index) in nav4List" 
              :key="index"
              :class="[nav4Id === item.id ? 'arc_active' : '']"
              class="arc_span"
              @click="click4(item)">{{ item.name }}&nbsp;<font
                v-if="index === 2"
                style="color: #eb434d;">{{ rangeEvaluationCount.count }}</font></span>
          </div>
          <div 
            :class="[nav4Id === 0 ? '':'arc_nr_none']"
            class="arc_nr">
            <div class="arc_nr1">
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02501')"
                class="arc_fw item_fw1">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_1.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>送货上门</span></p>
                  <p class="fw_nr2"><i>收取客户货物后，将货物送到指定收件对象的服务。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02502')"
                class="arc_fw item_fw2">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_2.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>保价运输</span></p>
                  <p class="fw_nr2"><i>保价运输是我司与您共同确定的以托运人申明货物价值为基础的一种特殊运输方式，您向我司声明其托运货物的实际价值，按保价运输的货物，托运人除缴纳运输费用外，按照规定缴纳一定的保价费用，若货物在运输过程中出险，我司将按照托运人的声明价值赔偿一定损失。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02503')"
                class="arc_fw item_fw3" >
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_3.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>运费到付</span></p>
                  <p class="fw_nr2"><i>为您提供派送末端支付运费服务，当货物到达收货人时由收货人支付运费。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02504')"
                class="arc_fw item_fw4">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_4.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>代收货款</span></p>
                  <p class="fw_nr2"><i>按照寄件方（卖家）与收件方（买家）达成交易协议的要求，为寄件方提供承运、寄递物品的同时，并代寄件方向收件方收取货款，同时按照约定时间将货款返还给寄件方的服务。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02505')"
                class="arc_fw item_fw5">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_5.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>上门提货</span></p>
                  <p class="fw_nr2"><i>按照客户指令到指定地点收取货物的服务。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02506')"
                class="arc_fw item_fw6">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_6.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>开发票</span></p>
                  <p class="fw_nr2"><i>客户可向物流公司申请开具货物运输发票。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02507')"
                class="arc_fw item_fw7">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_7.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>签单回收</span></p>
                  <p class="fw_nr2"><i>在货物正常签收后，将寄件客户提供的需收件客户签名的收条或收货单等单据返还寄件客户的服务。</i></p>
                </div>
              </div>
              <div 
                v-if="tranDetail.otherServiceCode && tranDetail.otherServiceCode.includes('AF02508')"
                class="arc_fw item_fw8">
                <div class="fw_img"><img src="../../static/images/article_wlzx/fw_8.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>时效保障</span></p>
                  <p class="fw_nr2"><i>承诺在规定时间内送达的时效保障服务。</i></p>
                </div>
              </div>
            </div>

          </div>
          <div
            :class="[nav4Id === 1 ? '':'arc_nr_none']"
            class="arc_nr">
            <div 
              v-if="tranDetail.transportRemark" 
              class="arc_nr2">
              {{ tranDetail.transportRemark.substring(0,500) }}
            </div>
            <div 
              v-else 
              class="arc_nr2">暂无专线说明。点击为您推荐<a
                target="_blank" 
                href="/zhuanxian/list?amp;start=深圳市&amp;end=北京市">更多专线</a></div>
          </div>
          <div
            :class="[nav4Id === 2 ? '':'arc_nr_none']"
            class="arc_nr" >
            <div class="arc_pjnr_bt">
              <div class="arc_pjnr_bt1">
                <div class="arc_pjbt_item"><input 
                  type="radio" 
                  name="radio"
                  value=""
                  @click="radioClick('')"><span>全部</span><i>({{ rangeEvaluationCount.count }})</i></div>
                <div class="arc_pjbt_item"><input 
                  type="radio" 
                  name="radio"
                  value="AF0360101"
                  @click="radioClick('AF0360101')"><span>好评</span><i>({{ rangeEvaluationCount.good }})</i></div>
                <div class="arc_pjbt_item"><input 
                  type="radio" 
                  name="radio"
                  value="AF0360102"
                  @click="radioClick('AF0360102')"><span>中评</span><i>({{ rangeEvaluationCount.medium }})</i></div>
                <div class="arc_pjbt_item"><input 
                  type="radio" 
                  name="radio"
                  value="AF0360103"
                  @click="radioClick('AF0360103')"><span>差评</span><i>({{ rangeEvaluationCount.bad }})</i></div>
              </div>

              <div class="arc_pjnr_bt2">
                <input 
                  value="我要评价" 
                  onclick="$('.pj_box').show()">
                <div class="pj_box" >
                  <div class="pj_box1"><div 
                    class="bt_close" 
                    onclick="$('.pj_box').hide()" ><img src="../../static/images/article_wlzx/xxx.png"></div></div>
                  <div class="pj_box2">
                    <div class="pj_box2_1"><img src="../../static/images/article_wlzx/pj.png"></div>
                    <div class="pj_box2_2">
                      <p class="pj_box2_2_p1">物流公司需要您的建议哦！</p>
                      <P class="pj_box2_2_p2">认真填写评价平台会给你推荐最优质的物流专线</P>
                    </div>
                  </div>
                  <div class="pj_box3">
                    <div class="pj_box3_left">服务价格：</div><div 
                      id="pj_box_item1" 
                      class="pj_box3_right"><img 
                        id="pjxx1_1" 
                        src="../../static/images/article_wlzx/stars01.png"><img 
                          id="pjxx1_2" 
                          src="../../static/images/article_wlzx/stars01.png"><img 
                            id="pjxx1_3" 
                            src="../../static/images/article_wlzx/stars01.png"><img 
                              id="pjxx1_4" 
                              src="../../static/images/article_wlzx/stars01.png"><img 
                                id="pjxx1_5" 
                                src="../../static/images/article_wlzx/stars01.png"><span id="pj_f1"/></div>
                  </div>
                  <div class="pj_box3">
                    <div class="pj_box3_left">服务质量：</div><div 
                      id="pj_box_item2" 
                      class="pj_box3_right"><img 
                        id="pjxx2_1" 
                        src="../../static/images/article_wlzx/stars01.png"><img 
                          id="pjxx2_2" 
                          src="../../static/images/article_wlzx/stars01.png"><img 
                            id="pjxx2_3" 
                            src="../../static/images/article_wlzx/stars01.png"><img 
                              id="pjxx2_4" 
                              src="../../static/images/article_wlzx/stars01.png"><img 
                                id="pjxx2_5" 
                                src="../../static/images/article_wlzx/stars01.png"><span id="pj_f2"/></div>
                  </div>
                  <div class="pj_box3">
                    <div class="pj_box3_left">运输时效：</div><div 
                      id="pj_box_item3" 
                      class="pj_box3_right"><img 
                        id="pjxx3_1" 
                        src="../../static/images/article_wlzx/stars01.png"><img 
                          id="pjxx3_2" 
                          src="../../static/images/article_wlzx/stars01.png"><img 
                            id="pjxx3_3" 
                            src="../../static/images/article_wlzx/stars01.png"><img 
                              id="pjxx3_4" 
                              src="../../static/images/article_wlzx/stars01.png"><img 
                                id="pjxx3_5" 
                                src="../../static/images/article_wlzx/stars01.png"><span id="pj_f3"/></div>
                  </div>
                  <div class="pj_box3 " >
                    <div class="pj_box3_left"><font>综合评价</font>：</div><div class="pj_box3_right" ><i id="pj_box_zh"/></div>
                  </div>
                  <div class="pj_box4"> <div class="pj_box4_left">评价说明：</div><div class="pj_box4_right"><textarea 
                    id="pj_nr" 
                    maxlength="400" 
                    rows="3" 
                    cols="30" /></div></div>
                  <div class="pj_box5"><span>还可输入<i id="pj_limit">400</i>字</span></div>
                  <div class="pj_box6"><input 
                    id="pj_submit" 
                    class="pj_input2" 
                    value="提交评价"><input 
                      class="pj_input1" 
                      onclick="$('.pj_box').hide()" 
                      value="取消" ></div>
                  <div class="pj_box7">打分和评价都将是其他用户的参考依据，并影响该承运商信誉值。
                  请发布真实、客观的本人消费体验评价。如您受到威逼、利诱如优惠等干扰而发布的评价或并非本人体验的虚假/恶意评价，则点评视为违规，同时影响您的信誉度。更多请见 <span>这里的说明</span>。
                  </div>
                </div>



              </div>

            </div>
            <div 
              v-for="(item,index) in rangeEvaluationlist" 
              :key="index"
              class="arc_pjnr_nr">
              <div class="arc_pjnr_item">
                <div class="arc_pjnr_item_left">
                  <p class="item_p1"><font>{{ item.evaluationName }}</font></p>
                  <p class="item_p2">
                  <img src="../../static/images/article_wlzx/pingfen.png"></p>

                </div>
                <div class="arc_pjnr_item_right">
                  <p class="item_p3"><span>{{ item.evaluationDes ? item.evaluationDes : '此用户没有评论' }}</span></p>
                  <p class="item_p4"><i>{{ item.createTime }}</i></p>
                  <p class="item_p5"><font>[回复]：</font><font>{{ item.replyDes }}</font></p>

                </div>
              </div>


            </div>
            <!--分页-->
            <div 
              class="box" 
              style="float: right;margin-right: 70px;">
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
            :class="[nav4Id === 3 ? '':'arc_nr_none']"
            class="arc_nr" >
            <div
              v-if="oneCompany.collateral !== 0"
              class="arc_nr1">
              <div class="arc_fw_bt" >
                <img src="../../static/images/pic/xiexian.png">
              </div>
              <div class="arc_fw arc_fw2">
                <div class="fw_img"><img src="../../static/images/pic/baozhengjin.png" ></div>
                <div class="fw_nr">
                  <p class="fw_nr1"><span>物流运输保障服务</span></p>
                  <p class="fw_nr2"><i>此承运商已交</i><i id="nr1036"/><i>元诚信保证金</i></p>
                  <p class="fw_nr3"><span>如果您采用平台的担保交易，您与承运商洽谈好价格后，要平台上生成标准托运单，并把运费托管在平台上，如果承运商未能良好履约，您有权要求退回所有的运费。并根据托运单规定的规则条款，您有权对承运商要求相应的补偿。</span></p>
                  <p class="fw_nr4"><span>如果您线下私自与承运商进行交易，平台不承担任何协助您向承运商要求兑现承诺的义务。</span></p>
                </div>
              </div>

            </div>
            <div
              v-if="oneCompany.collateral === 0"
              id="none_bzj"
              class="arc_nr1">
              <img src="../../static/images/pic/gantanhao.png" >
              <span>暂未开通此项服务</span>

            </div>

          </div>
        </div>
      </div>
    </div>

    <div 
      id="js017" 
      class="arc_bottom"
      style="display: none">
      <div class="zx_sx"><span class="biaozhi"/><span>此路线其他专线</span><a 
        id="arc_bottom_more" 
        href="#"><span class="arc_bottom_more">更多+</span></a></div>
      <div 
        class="tj_list" 
        style="display: none;">
        <div class="p p02"><img src="../../static/images/04gongsi.png" ><span><a id="tj023" /></span>
          <img 
            id="tj_shiming" 
            src="../../static/images/list_wlzx/shiming.png" >
          <img 
            id="tj_xinyong" 
            src="../../static/images/list_wlzx/xinyong.png" >
          <img 
            id="tj_danbao" 
            src="../../static/images/list_wlzx/danbao.png" >

        </div>
        <div class="p p01"><a 
          id="tj020" 
          target="_blank"><span id="tj021"/><i>&rarr;</i><span id="tj022"/></a></div>
        <div class="p p03">
          <ul>
            <li class="tj_left"><i>时效：</i><span id="tj026"/></li>
            <li class="tj_right"><i>最低一票：</i><span id="tj027"/></li>
            <li class="tj_left"><i>重货：</i><font id="tj024"/><span>元/公斤</span></li>
            <li class="tj_right"><i>轻货：</i><font id="tj025"/><span>元/方</span></li>


          </ul>
        </div>

        <div class="p p05"/>
        <div class="p p06">
          <a 
            id="tj028" 
            target="_blank"><span>查看&gt;</span></a>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import { getCode, getCity } from '~/components/commonJs.js'
async function getRangeEvaluationlist($axios, currentPage, vo = {}) {
  let parm = {
    currentPage: currentPage,
    pageSize: 10,
    vo: vo
  }
  return await $axios.post(
    '/aflc-portal/portal/aflcTransportEvaluation/v1/rangeEvaluationlist',
    parm
  )
}
function setCredit(item) {
  if (item.credit >= 0 && item.credit <= 3) {
    item.starS = new Array(1)
  }
  if (item.credit >= 4 && item.credit <= 10) {
    item.starS = new Array(2)
  }
  if (item.credit >= 11 && item.credit <= 40) {
    item.starS = new Array(3)
  }
  if (item.credit >= 41 && item.credit <= 90) {
    item.starS = new Array(4)
  }
  if (item.credit >= 91 && item.credit <= 150) {
    item.starS = new Array(5)
  }
  if (item.credit >= 151 && item.credit <= 250) {
    item.starB = new Array(1)
  }
  if (item.credit >= 251 && item.credit <= 500) {
    item.starB = new Array(2)
  }
  if (item.credit >= 501 && item.credit <= 1000) {
    item.starB = new Array(3)
  }
  if (item.credit >= 1001 && item.credit <= 2000) {
    item.starB = new Array(4)
  }
  if (item.credit >= 2001) {
    item.starB = new Array(5)
  }
}
export default {
  name: 'Detail',
  layout: 'subLayout',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/article_wlzx.css' },
      { rel: 'stylesheet', href: '/css/price.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ],
    script: [
      { src: '../js/jquery.pagination.min.js' },
      { src: '../js/WTMap.min.js' }
    ]
  },
  data() {
    return {
      nav4List: [
        { id: 0, name: '增值服务' },
        { id: 1, name: '专线介绍' },
        { id: 2, name: '累计评价' },
        { id: 3, name: '专享服务' }
      ],
      nav4Id: 0,
      showImg: 0
    }
  },
  async asyncData({ $axios, app, query }) {
    let zxList
    const oneCompanyRes = await $axios.get(
      '/aflc-portal/portalt/aflcLogisticsCompany/v1/' + query.publishId
    )
    if (oneCompanyRes.data.status === 200) {
      setCredit(oneCompanyRes.data.data)
    }
    let parm = {
      currentPage: 1,
      pageSize: 6,
      vo: {
        companyId: query.publishId
      }
    }
    const listDetailPointNetworkRes = await $axios.post(
      '/aflc-portal/portalt/aflcPointNetwork/v1/listDetailPointNetwork',
      parm
    )
    if (listDetailPointNetworkRes.data.status === 200) {
      listDetailPointNetworkRes.data.data.list.forEach(item => {
        if (item.address.indexOf(item.belongCityName !== -1)) {
          item.address = item.address.replace(item.belongCityName, '')
        }
      })
    }
    const tranDetailRes = await $axios.get(
      '/aflc-portal/portalt/aflcTransportRange/v1/' + query.id
    )
    if (tranDetailRes.data.status === 200) {
      // tranDetailRes.data.data.num = Math.ceil(Math.random() * 30)
      let item = tranDetailRes.data.data
      let arr = (item.id || '').split('')
      let num = 0
      arr.forEach(el => {
        num += el.charCodeAt(0) || 0
      })
      item.num = num % 30
      tranDetailRes.data.data.rangePrices1 = tranDetailRes.data.data.rangePrices.filter(
        item => {
          return item.type === '1'
        }
      )
      tranDetailRes.data.data.rangePrices0 = tranDetailRes.data.data.rangePrices.filter(
        item => {
          return item.type === '0'
        }
      )
      let code = await getCode($axios, tranDetailRes.data.data.endProvince)
      zxList = await getCity($axios, code, tranDetailRes.data.data.startCity)
    }
    let rangeEvaluationlistRes = await getRangeEvaluationlist($axios, 1, {
      transportRangeId: query.id
    })
    let rangeEvaluationCountRes = await $axios.get(
      '/aflc-portal/portal/aflcTransportEvaluation/v1/rangeEvaluationCount/' +
        query.id
    )
    return {
      oneCompany:
        oneCompanyRes.data.status === 200 ? oneCompanyRes.data.data : {},
      listDetailPointNetwork:
        listDetailPointNetworkRes.data.status === 200
          ? listDetailPointNetworkRes.data.data.list
          : [],
      tranDetail:
        tranDetailRes.data.status === 200 ? tranDetailRes.data.data : {},
      zxList: zxList && zxList.data.status === 200 ? zxList.data.data : [],
      rangeEvaluationlist:
        rangeEvaluationlistRes.data.status === 200
          ? rangeEvaluationlistRes.data.data.list
          : [],
      rangeEvaluationCount:
        rangeEvaluationCountRes.data.status === 200
          ? rangeEvaluationCountRes.data.data
          : {}
    }
  },
  mounted() {
    seajs.use(['../js/city.js'], function() {
      seajs.use(['../js/arc_wlzx.js'], function() {
        seajs.use(['../js/collection.js'], function() {
          seajs.use(['../js/calculator.js'], function() {
            seajs.use(['../js/gaodemap2.js'], function() {})
          })
        })
      })
    })
  },
  methods: {
    clickImg(int) {
      this.showImg = int
    },
    click4(item) {
      this.nav4Id = item.id
    },
    async radioClick(data) {
      let rangeEvaluationlistRes = await getRangeEvaluationlist(
        this.$axios,
        1,
        {
          transportRangeId: this.$route.query.id,
          assessLevel: data
        }
      )
      this.rangeEvaluationlist =
        rangeEvaluationlistRes.data.status === 200
          ? rangeEvaluationlistRes.data.data.list
          : []
    }
  }
}
</script>

<style scoped>
</style>
