<template>
  <div class="lll-zhuangXian-detail">
    <div class="arc_main">
    
      <div class="arc_top1">
        <div class="arc_top1_1">
          <img
            width="135px"
            src="/img/logo.png" >
           
        </div>
        <div class="arc_top1_3"><a
          id="search_huo"
          target="_blank"><input
            class="arc_input3"
            value="搜全网"> </a></div>
        <div class="arc_top1_2">
          <select id="search_type">
            <option name="zx">找专线</option>
            <option name="che">找车源</option>
            <option name="huo">找货源</option>
          </select>
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
        <h1>{{ linedataB.companyName ? linedataB.companyName : '专线详情' }}</h1>

        <ul
          class="two_tltle"
          v-if="linedataB.companyName">
          <li/>
          <li><a
            style="float:left"
            :href="/member/ + linedataB.id">公司官网</a><a :href="/member/ + linedataB.id + '-line'">专线信息</a></li>
          <li><a
            style="float:left"
            :href="/member/ + linedataB.id+ '-wangdian'">网点信息</a><a
          :href="/member/ +linedataB.id + '-huo'">货源信息</a></li>
          <li/>
        </ul>
      </div>

      <div class="arc_main1">
        <div class="arc_top2">
          <div
            style="padding-left:30px"
            class="arc_top2_1"><a href="/"><span>首页</span></a></div>
          <div
            id="arc_city"
            class="arc_top2_2">
            <a
              v-for="(item,index) in lineCitys"
              v-if="index<14"
              :key="index"
              :href="'/zhuanxian/list?startp='+linedataA.startProvince+'&startc='+linedataA.startCity+'&endp='+linedataA.endProvince+'&endc='+item.name"
              target="_blank"><span>{{ index === 0?'直达'+item.name.substring(0,2):item.name.substring(0,2) }}</span></a>
            
          </div>
          <div
            v-if="lineCitys.length>14"
            class="arc_top2_3"
            style="padding-right:30px"
            onmouseover="$('.city_box').css('display','block');"
          ><a href="javascript:void(0)" ><span>更多+</span></a></div>
         
          <div
            id="city_box"
            class="city_box"
            onmouseover="$('.city_box').css('display','block');"
            onmouseout="$('.city_box').css('display','none');">
            <a
              v-for="(item,index) in lineCitys"
              v-if="index >= 14"
              :key="index"><span @click="gotoHuoList($event)">{{ item.name.substring(0, 2) }}</span>
            </a>
          </div>
         

        </div>
        <div class="arc_left">
          <div class="arc_left_1">
            <img
              v-if="linedataA.rangeLogo"
              :src="linedataA.rangeLogo.split(',')[showImg]">
            <img
              v-else
              :src="'/images/pic/bg' + linedataA.num + '.png'"
              alt="">
          </div>
          <div class="arc_left_down">
            <ul>
              <li><img
                src="/line/images/04ewm.png"
                alt=""></li>
              <li
              @click="downFn">
                下载<span style="color: #2577e3">【28快运APP】</span>，您可查看更多<span style="color: #2577e3">{{ (linedataA.startCity || '').substring(0, linedataA.startCity.length-1) }}</span>到<span style="color: #2577e3">{{ (linedataA.endCity || '').substring(0, linedataA.endCity.length-1) }}</span>的专线，并可实时接收28快运为您推荐的精品货源提醒!

              </li>
             
            </ul>
          </div>


        </div>
        <div class="arc_middle">
          <div class="collection_zx">
            <div
              class="bt_close"
              onclick="$('.collection_zx').hide()"><img src="/line/images/xxx.png"></div>
            <div class="collection_zx_nr">
              <img src="/line/images/yes.png">
              <span>成功加入</span><a
                id="collection_url"
                target="_blank"
                href="#">收藏夹</a>
            </div>
          </div>
          <div class="pj_price_box">
            <div class="pj_price_box1">
              <div
                class="bt_close"
                onclick="$('.pj_price_box').hide()"><img src="/line/images/xxx.png"></div>
            </div>
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
          <div
            class="arc_middle1"
            style="padding-left: 20px"><span id="nr072">{{ linedataA.startLocation+ '&nbsp;&rarr;&nbsp;' +linedataA.endLocation }}</span>
         
            <ul>
              <li><img
                src="/line/images/02sj.png"
                alt=""
                style="vertical-align: middle;"><span>发布日期：{{ linedataA.createTime }} </span></li>
              <li
                style="padding-left: 26px;cursor:pointer"
                @click="openColl('detail')"
              >
                <img
                  v-if="isXin==false"
                  src="/line/images/03sc.png"
                  alt=""
                  style="vertical-align: middle;"
                >
                <img
                  v-else
                  src="../../static/line/images/xin.png"
                  alt=""
                  style="vertical-align: middle;width:20px"
                >
                <span>收藏量:{{ linedataA.collectNumber }}</span>
              </li>
            </ul>
          </div>
          <div
            v-if="linedataA.rangePrices != [] || linedataA.rangePrices !=null"
            class="arc_middle2">
            <ShowPrice
              :info="linedataA.rangePrices"
              :browse="linedataA.assessNumber"/>
          </div>
          <div class="arc_middle3">
            <div class="arc_m3"><i>运输时效：</i><span>{{ linedataA.transportAging+linedataA.transportAgingUnit }}</span></div>
            <div class="arc_m3"><i>发货频次：</i>
              <span>{{ (linedataA.departureHzData?linedataA.departureHzData:'')+'天'+(linedataA.departureHzTime?linedataA.departureHzTime:'') +'次' }}</span>
             
            </div>
            <div class="arc_m3"><i>最低一票价格：</i><span id="nr079"/>{{ linedataA.lowerPrice?'￥'+linedataA.lowerPrice+'元':'面议' }}</div>
          
          </div>
          <div class="arc_middle4">
            <div class="arc_m4_1">
              <div><span>出发地</span></div>
              <div><i>联系人：</i><span>{{ linedataA.startLocationContacts }}</span></div>
              <div><i>手机：</i><span>{{ linedataA.startLocationContactsMobile }}</span></div>
            </div>
            <div class="arc_m4_2">
              <div><span>到达地</span></div>
              <div><i>联系人：</i><span>{{ linedataA.endLocationContacts }}</span></div>
              <div><i>手机：</i><span>{{ linedataA.endLocationContactsMobile }}</span></div>
            </div>
          </div>
          <div class="arc_middle5">
            <div class="arc_m5_1"><span>联系我时，请说明是从28快运上看到此信息，谢谢！</span></div>
            <div class="arc_m5_2">
           
              <div
                id="order_arc"
                class="arc_m5_2_2"><a
                  id="nr_order"
                  :href="'/create/line?uid='+ linedataB.account+'&publishId='+linedataA.publishId+'&id='+linedataA.id"
                  target="_blank"><span>快速下单</span></a></div>
              <div class="arc_m5_2_3">
              
                <span><a :href="'/zhuanxian/detail?id='+ LineChangeAnother.rangeId+'&publishId='+LineChangeAnother.companyId"> <img
                  src="/line/images/05fresh.png"
                  alt=""><span style="padding-left: 5px">换一个</span></a></span>
              </div>
            </div>
          </div>
        
        </div>
        <div class="arc_right">
          <p class="arc_right01"><img src="/line/images/04gongsi.png"><span id="nr1020" >{{ linedataB.companyName.length>13?linedataB.companyName.substring(0, 13) + '..' : linedataB.companyName }}</span></p>
          <p class="arc_right02"><i>信誉：</i>
            <creditIcon :credit="linedataB.credit" />
          </p>
          <p class="arc_right03">
            <span>质量</span><span>时效</span><span>价格</span><br>
            <font id="nr1041">{{ linedataB.serverQualityScore ? linedataB.serverQualityScore:'5' }}</font><font id="nr1042">{{ linedataB.transportAgingScore ? linedataB.transportAgingScore:'5' }}</font><font id="nr1043">{{ linedataB.serverPriceScore ? linedataB.serverPriceScore:'5' }}</font>
          </p>
          <p class="arc_right04">
            <span class="arc_right04_1"><i>联系人：</i><font
              id="nr1021"
              style="color: #333">{{ linedataB.contactsName }}</font></span>
            <span><i>手机：</i>
             
              <font
                id="nr1022"
                style="color: #333">{{ linedataB.mobile }}</font>
            </span>
            <span><i>Q&nbsp;Q：</i><a
              id="nr1023"
              :href="'http://wpa.qq.com/msgrd?v=3&uin='+ linedataB.qq+'&site=qq&menu=yes'"
              &site="qq&menu=yes&quot;"
              target="_blank"><input
                id="qq"
                value="QQ交谈"></a></span>
            <span><i>地址：</i><font id="nr10232">{{ linedataB.address.length > 20 ? linedataB.address.substring(0,20)+'..':linedataB.address }}</font></span>
          </p>
          <p class="arc_right05">
            <a
              id="nr1024"
              :href="'/member/'+ linedataB.id"
              target="_blank"><input
                id="arc_right05_1"
                readonly=""
                value="进入官网"></a>
            <a

            @click="openColl('comany')"><input
              class="arc_right05_2"
              readonly=""
              value="收藏"></a>
           

          </p>
          <p class="arc_right06">
            <span>相关认证</span>
          </p>

          <p
            v-if="linedataB.isRenZhen"
            class="arc_right07">
            <img
              v-if="linedataB.showIsVip"
              id="right_xinyong"
              src="/line/images/11xinyong.png">
            <img
              v-if="linedataB.isAuthStatus"
              id="right_shiming"
              src="/line/images/10shiming.png">
            <img
              v-if="linedataB.isAuthStatus"
              id="right_baozhengjin"
              src="/line/images/danbao.png"><span id="nr1037">{{ linedataB.collateral }}</span>
          </p>
          <p
            v-else
            class="arc_right07">
            <br>暂无认证信息
          </p>

        </div>

      </div>
      <div
        style="display: inline-block;width: 1360px; margin-top: 30px;"
        class="arc_main1-1">
        想要更多<span>{{ linedataA.startCity.substring(0, linedataA.startCity.length-1) }}</span>到<span>{{ linedataA.endCity.substring(0, linedataA.endCity.length-1) }}</span>的专线信息，您可以<a 
          :href="'/create/line?startProvince='+linedataA.startProvince+'&startCity='+linedataA.startCity+'&startArea='+linedataA.startArea+'&endProvince='+linedataA.endProvince+'&endCity='+linedataA.endCity+'&endArea='+linedataA.endArea"
        ><i style="border-bottom:1px solid #ccc; cursor: pointer;">发布专线</i></a>，让车主主动来联系您，达成交易
      </div>

      <div class="arc_main3">
        <div class="left">
          <div class="zx_sx">
            <span class="biaozhi"/><span>价格参考</span><i style="margin-left: 12px;color: #333333">大数据智能模型精准定价，28智能平台指导定价</i>
          </div>
          <ShowEchart :info="LineeEchartInfo"/>
          
        </div>
        <div class="right">
          <div class="zx_sx">
            <span class="biaozhi"/><span>服务亮点</span>
          </div>
          <div class="content">

            <div class="content-right">
              <div
                class="content-right-row"
                style="clear: both">
                <ul>
                  <li>

                    <div

                    class="content-right-row-left">
                      <span
                        v-for="(item, index) in linedataB.allServiceNameList.slice(0,8)"
                        :key="index"
                      >{{ item }}</span>
                    </div>
                    <div
                      v-if="linedataB.allServiceNameList.length >8"
                      class="content-right-row-right"
                      style="float:right;margin-right: 25px;">
                      <a
                        :href="'/member/'+linedataA.publishId+'-cpfw'"
                        target="_blank"
                        style="color: #fa9925">
                        <p style="padding-top: 10px">全部</p>
                        <p style="padding-top: 0px;">（{{ linedataB.allServiceNameList.length }}）</p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <p v-if="linedataB.authStatus =='AF0010403'"><span>证件已认证</span>承运商的运营资质证件已经核实！</p>
                    <p v-if="linedataB.collateral != 0"><span>已交保证金</span>承运商的运输货物安全保证金已交纳{{ linedataB.collateral }}！</p>
                    <p v-if="linedataB.isVip != 0"><span>推荐承运商</span>承运商的运营资质证件已经核实！</p>
                  </li>
                </ul>

                <div style="padding-left: 65px;display: inline-block">
                  <!-- <a
                    href="javascript:;"
                    class="button1"
                    @click="showEchart()">标准价</a> -->
                  <a
                    href="javascript:;"
                    class="button1"
                    @click="showfind()">标准价</a>
                  <a
                    onclick="$('.pj_price_box').show()"
                    href="javascript:;"
                    class="button1">精准报价</a>
                  <a
                    href="javascript:;"
                    class="button2"
                    @click="showFindFn()"><img
                      src="/line/images/06fm.gif"
                      style="vertical-align: middle;padding-right: 15px">帮我选择优质专线</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div
        class="arc_main4"
        style="clear: both">
        <div class="arc_main4_top">
          <img
            src="/line/images/07hege.png"
            alt="">
          <ul class="top_tit">
            <li>此专线物流公司诚信值超过<span style="color: #f88700;border-bottom: 1px solid #f88700">{{ linedataE.greaterCreditRate }}%</span>的同行</li>
            <li>{{ linedataE.qualificationNum }}项经营资质认证，{{ linedataE.serviceNum }}项平台物流服务标准监督<span v-if="linedataE.evaCount!=0">，{{ linedataE.evaCount }}人评价反馈</span></li>
          </ul>
         
          <img
            src="/line/images/08gold.png"
            alt="">
        </div>
        <div class="arc_main4_bot">
          <div class="bot_left">
            <div class="bot_left_per">
              <img
                src="/line/images/09sj.png"
                alt="">
              <p>{{ linedataE.companyName }}</p>
            </div>
            <div class="bot_left_pj">
              <ul>
                <li>
                  <p>{{ linedataE.evaGoodRate }}%</p>
                  <p><span
                    :class="indexPl==0?'active':'unActive'"
                    class="unActive"
                    @click="showPingLunFn(0)"/>好评</p>
                </li>
                <li>
                  <p>{{ linedataE.evaMiddleRate }}%</p>
                  <p><span
                    :class="indexPl==1?'active':'unActive'"
                    class="unActive"
                    @click="showPingLunFn(1)"/>中评</p>
                </li>
            
              </ul>
            </div>
            <div class="bot_left_ts">
              <img
                src="/line/images/12xx.png"
                alt="">
              <span>公司未收到重大服务投诉</span>
            </div>
            <div
              style="width: 288px; margin: 0;"
              class="bot_left_btn">
              <button
                class="layui-btn layui-btn-fluid"
                @click="showgongsiFn()">免费咨询公司情况</button>
            </div>
            <div class="bot_left_tip">
              以上信息根据网上用户提报，仅代表此<br>
              承运商的历史服务水平，仅供参观
            </div>
          </div>
          <div class="bot_right">
            <p
              style="margin-top: 20px;color:red;font-size:16px"
              v-if="!linedataF.length || linedataF == null">此用户没有评论</p>
            <div v-else>
              <div class="bot_right_btn">
                <button
                  class="layui-btn layui-btn-primary"
                  @click="moreFn()">更多</button>
              </div>
              <ul>
                <li
                  v-for="(item, index) in linedataF"

                  :key="index">
                  <div class="bot_right_per">
                    <p>{{ item.evaluationName }}</p>
                    <p>
                      <img
                        v-for="( item, index ) in 4"
                        :key="index"
                        src="/line/images/13z.png"
                        alt="">
                    </p>
                  </div>
                  <div class="bot_right_detail">
                    <p>{{ item.evaluationDes }}</p>
                    <p>{{ item.createTime }}</p>
                    <div class="huifu">
                      <p>[回复]：{{ item.replyDes }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div

        style="clear: both"
        class="clearfix">
        <div
        class="arc_main5">
          <div
            id="js002"
            class="w1036 list_wlzx">
            <div class="main3_1_1">
              <div class="xt_left"/>
              <div class="floatl">
                <b>更多从{{ linedataA.startCity.substring(0, linedataA.startCity.length-1) }}出发的专线</b>
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
                      placeholder="&nbsp;请选择出发地"
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
                      placeholder="&nbsp;请选择到达地"
                      readonly="">
                  </div>
                </div>
                <input
                  id="search_huoyuan"
                  type="button"
                  class="search_hy"
                  value=""></div>
              <div class="more floatr"><a
                href="/zhuanxian/list"
                target="_blank"
              >更多&gt;</a></div>
            </div>
            <div
            >
              <div
                class="list_none"
                v-if="lineLists===null||
              !lineLists.length"><span style="float: left; width: 100%;text-align: center;height: 40px;line-height: 40px; font-size: 16px;margin-top: 40px;">暂时没有找到您要查询的信息，可以看看其他线路哦</span> <img
                src="/images/none_pic.png"
                style=" float: left;width: 300px;height: 160px;margin: 20px 0 20px 400px;"></div>
              <div v-else>
                <ul
                  v-for="(item , index) in lineLists"
                  :key="index"
                  class="wlzx_list">
                  <li id="wlzx_list_0"/>
                  <li class="wlzx_list_1">
                    <a
                      id="nr_a21"
                      :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                      target="_blank"
                      class="nr_a21_img">
                      <img
                        v-if="item.rangeLogo==''"
                        :src="'/images/pic/bg' + item.num + '.png'"
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
                      
                        <span class="list-icon lines-sprite-icons icon-through"/>
                        <span class="list-icon lines-sprite-icons icon-end"/>
                        <em>{{ (item.endCity+item.endArea).length>7? (item.endCity+item.endArea).substring(0,7)+'..': item.endCity+item.endArea }}</em>
                   
                      </a>
                    </P>
                    <p class="p2">
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
                          src="/gongsi/images/15qq.gif"></a>
                        
                    </p>
                   
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
                    <i>说明：</i><font>{{ item.transportRemark }}</font></p>
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
                    <p class="p3"><i>时效：</i><span>{{ item.transportAging }}{{ item.transportAging }}</span></p>
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

          </div>
        </div>
        <div class="arc_main6">
          <div class="zx_sx"><span class="biaozhi"/><span>更多从{{ queryCitys.endCity || queryCitys.endProvince }}出发的专线</span></div>
          <div
            v-if="!lineRecoms.length ||lineRecoms==null"
            class="tj_none">
            <span>没有相关线路推荐</span>
          </div>
          <div
            v-for="(item,index) in lineRecoms"
            v-else
            :key="index"
            class="tj_list_box">
            <div
              class="tj_list"
            >
              <div class="p p1">
                <img src="/line/images/04gongsi.png"><span><a
                  id="tj_a011"
                  :href="'/member/'+ item.publishId"
                  target="_blank">{{ item.companyName }}</a></span>
                <img
                  id="tj_shiming"
                  src="/line/images/shiming.png">
             
              </div>
              <div class="p p2">

                <a
                  id="tj010"
                  :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                  class="list-title-a"
                  target="_blank">
                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em id="tj011">{{ (item.startCity+item.startArea).length>7? (item.startCity+item.startArea).substring(0,7)+'..': item.startCity+item.startArea }}</em>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em id="tj012">{{ (item.endCity+item.endArea).length>7? (item.endCity+item.endArea).substring(0,7)+'..': item.endCity+item.endArea }}</em>
                </a>
              </div>

              <div class="p p3">
                <ul>
                  <li class="tj_left"><i>时效：</i><span>{{ item.transportAging + item.transportAgingUnit.replace("多", "") }}</span></li>
                  <li class="tj_right"><i>最低一票：</i><span id="tj016">{{ item.lowerPrice?item.lowerPrice+'元':'面议' }}</span></li>
                  <li class="tj_left tj_left1"><i>重货：</i><font id="tj013">{{ parseFloat(item.weightPrice).toFixed(1) }}</font><span>元/公斤</span></li>
                  <li class="tj_right tj_right1">轻货：<span style="color: #ff4747">{{ parseFloat(item.lightPrice).toFixed(1) }}</span>元/m³</li>
                 
                </ul>

              </div>

              <div class="p p6">
                <div class="sc_num1"><img src="/line/images/ll_num.png"><span><i><em id="tj101">{{ item.browseNumber?item.browseNumber:'0' }}</em>人浏览</i></span></div>
                <div
                  class="view_num1"
                  style="padding-left: 20px"><img src="/line/images/pj_num.png"><span><i><em id="tj102">{{ item.assessNumber?item.assessNumber:'0' }}</em>条评论</i></span></div>

              </div>
            </div>
          </div>
        </div>
        <div class="arc_main7">
          <div class="lll-recommend clearfix">
            <div
              class="zx_sx"
            ><span class="biaozhi"/><span>{{ linedataG.brandRecommend.label }}</span></div>
            <FooterLinks :info="linedataG.brandRecommend.links"/>
          </div>
        </div>
      </div>
      <div class="arc_main8">
        <div class="arc_main8_1">
          <div class="lll-recommend clearfix">
            <div
              class="zx_sx"
              style="border-color: #e7e7e7"
            ><span class="biaozhi"/><span>{{ linedataG.interestedRecommend.label }}</span></div>
            <FooterLinks :info="linedataG.interestedRecommend.links"/>
          </div>
        </div>
        <div class="arc_main8_2">
          <div
            class="lll-recommend clearfix"
            style="padding-top: 10px;">
            <div
              class="zx_sx"
              style="border-color: #e7e7e7"
            ><span class="biaozhi"/><span>{{ linedataG.startFromRecommend.label }}</span></div>
            <FooterLinks :info="linedataG.startFromRecommend.links"/>
          </div>
        </div>
      </div>

    </div>
    <Add
      :show = "isAdd"
      :info="linedataE"
      @close="noaddFn"/>
    <BzAdd
      :show = "isBzAdd"
      :info="LineeEchartInfo"
      :linedata-a="linedataA"
      :line-company="lineBzAdd"
      @close="nobzAddFn"
    />
  </div>

</template>

<script>
import creditIcon from '~/components/common/creditIcon'
import Add from './add'
import BzAdd from './bzAdd'

import {
  isZXcity,
  getSEListParams,
  getCode,
  getCity,
  parseTime
} from '~/components/commonJs.js'
import ShowPrice from './showPrice'
import ShowEchart from './showEchart'
import FooterLinks from '../../components/footerLinks'

async function getDetailColl(
  $axios,
  transportRangeId,
  access_token,
  user_token,
  handle
) {
  let res = await $axios.post(
    `/28-web/collect/transportRange?access_token=${access_token}&user_token=${user_token}&transportRangeId=${transportRangeId}&handle=${handle}
`
  )
  if (res.data.status === 200) {
    return {
      data: res.data
    }
  }
}
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
    return {
      data: res.data
    }
  } else {
    return { data: false }
  }
}

export default {
  name: 'Index',
  components: {
    ShowPrice,
    FooterLinks,
    ShowEchart,
    Add,
    BzAdd,
    creditIcon
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/article_wlzx.css?V2' },
      { rel: 'stylesheet', href: '/line/css/price.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [
      { src: '../js/jquery.pagination.min.js' },
      { src: '/js/LLL-AFLC_API.js' },
      { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
  },
  layout: 'subLayout',
  data() {
    return {
      dataInfo: {},
      isDetailColl: false,
      isComanyColl: false,
      isAdd: false,
      isTit: false,
      showMoblie: false,
      isShowWPrice: false,
      isShowHPrice: false,
      checkMoblie: true,
      isShowAdd: false,
      isXin: false,
      isBzAdd: false,
      showImg: 0,
      pages: 0,
      currentPage: 1,
      linedataA: {},
      linedataB: {},
      linedataE: {},
      linedataF: {},
      LineeEchartInfo: [],
      LineChangeAnother: {},
      cargoType0: {},
      cargoType1: {},
      sendEchart: [],
      sendEchart1: [],
      linedata: {},
      form: {},
      lineCitys: [],
      msgMobile: '',
      indexPl: 0,

      lineBzAdd: {},
      showEchartData: {}
    }
  },
  async asyncData({ $axios, app, query, error }) {
    let aurl = '',
      lineCode,
      lineCity,
      LineCAnother,
      linedataC,
      linedataD,
      LineeEInfo,
      linePrice
    let startp = query.startp
    let startc = query.startc
    let starta = query.starta
    let endp = query.endp
    let enda = query.enda
    let endc = query.endc

    if (!startp || startp == 'null') {
      startp = ''
    }
    if (!startc || startc == 'null') {
      startc = ''
    }
    if (!starta || starta == 'null') {
      starta = ''
    }
    if (!endp || endp == 'null') {
      endp = ''
    }
    if (!enda || enda == 'null') {
      enda = ''
    }
    if (!endc || endc == 'null') {
      endc = ''
    }

    let linedataA = await $axios.get(aurl + `/28-web/range/${query.id}`)
    if (linedataA.data.status === 200 && linedataA.data.data) {
      enda = linedataA.data.data.endArea
      endc = linedataA.data.data.endCity
      endp = linedataA.data.data.endProvince
      starta = linedataA.data.data.startArea
      startc = linedataA.data.data.startCity
      startp = linedataA.data.data.startProvince
    }
    let [linedataB, linedataE, linedataF, linedataG] = await Promise.all([
      $axios.get(aurl + `/28-web/logisticsCompany/${query.publishId}`),
      $axios.post(
        aurl +
          `/28-web/logisticsCompany/comprehensive?companyId=${query.publishId}`
      ),
      $axios.post(aurl + `/28-web/rangeEva/range/list`, {
        currentPage: 1,
        pageSize: 3,
        transportRangeId: query.id,
        assessLevel: 'AF0360101'
      }),
      $axios.post(aurl + `/28-web/range/detail/related/links`, {
        startProvince: startp,
        startCity: startc,
        startArea: starta,
        endProvince: endp,
        endCity: endc,
        endArea: enda
      })
    ])
    if (
      linedataA.data.status == 200 &&
      linedataB.data.status == 200 &&
      linedataE.data.status == 200 &&
      linedataF.data.status == 200 &&
      linedataG.data.status == 200
    ) {
      let vo = {
        endArea: linedataA.data.data.endArea,
        endCity: linedataA.data.data.endCity,
        endProvince: linedataA.data.data.endProvince,
        startArea: linedataA.data.data.startArea,
        startCity: linedataA.data.data.startCity,
        startProvince: linedataA.data.data.startProvince
      }
      lineCode = await getCode($axios, linedataA.data.data.endProvince)
      lineCity = await getCity($axios, lineCode, linedataA.data.data.startCity)
      let queryCitys = getSEListParams(linedataA.data.data)
      linedataD = await $axios.post(aurl + '/28-web/range/recommend', {
        currentPage: 1,
        pageSize: 5,
        startProvince: queryCitys.endProvince,
        startCity: queryCitys.endCity
      })

      linedataC = await $axios.post(aurl + '/28-web/range/list', {
        currentPage: 1,
        pageSize: 6,
        startProvince: queryCitys.startProvince,
        startCity: queryCitys.startCity
      })
      LineCAnother = await $axios.post(aurl + '/28-web/range/changeAnother', vo)
      LineeEInfo = await $axios.post(
        aurl + '/28-web/range/reference/price/' + linedataA.data.data.id
      )
      LineCAnother.data.data =
        LineCAnother.data.status == 200 ? LineCAnother.data.data : ''
      LineeEInfo.data.data =
        LineeEInfo.data.status == 200 ? LineeEInfo.data.data : ''
      let item = linedataA.data.data
      let arr = (item.id || '').split('')
      let num = 0
      arr.forEach(el => {
        num += el.charCodeAt(0) || 0
      })
      item.num = (num % 30) + 1
      linedataC.data.data.list.forEach(item => {
        let arr = (item.id || '').split('')
        let num = 0
        arr.forEach(el => {
          num += el.charCodeAt(0) || 0
        })
        item.num = (num % 30) + 1
      })

      let authStatus =
        linedataB.data.status == 200 ? linedataB.data.data.authStatus : ''
      let collateral =
        linedataB.data.status == 200 ? linedataB.data.data.collateral : ''
      let isVip = linedataB.data.status == 200 ? linedataB.data.data.isVip : ''
      let credit =
        linedataB.data.status == 200 ? linedataB.data.data.credit : ''

      if (!isVip || isVip == 0) {
        linedataB.data.data.showIsVip = false
      }
      if (authStatus == 'AF0010403') {
        linedataB.data.data.isAuthStatus = true
        linedataB.data.data.isRenZhen = true
      }
      if (authStatus != 'AF0010403') {
        linedataB.data.data.isAuthStatus = false
        linedataB.data.data.isRenZhen = false
      }
      if (collateral > 0) {
        linedataB.data.data.collateral = linedataB.data.data.collateral + '元'
        linedataB.data.data.isCollateral = true
      }
      if (collateral <= 0) {
        linedataB.data.data.collateral = ''
        linedataB.data.data.isCollateral = false
      }
      if (
        authStatus != 'AF0010403' &&
        (!isVip || isVip == 0) &&
        (!collateral || collateral == 0)
      ) {
        // linedataB.data.data.isRenZhen = true
        // $('.arc_right07').html('<br/>暂无认证信息')
      }

      return {
        linedataA: linedataA.data.status == 200 ? linedataA.data.data : [],
        linedataB: linedataB.data.status == 200 ? linedataB.data.data : [],
        lineLists: linedataC.data.status == 200 ? linedataC.data.data.list : [],
        lineRecoms: linedataD.data.status == 200 ? linedataD.data.data : [],
        linedataE: linedataE.data.status == 200 ? linedataE.data.data : [],
        linedataF: linedataF.data.status == 200 ? linedataF.data.data.list : [],
        linedataG: linedataG.data.status == 200 ? linedataG.data.data : [],
        LineeEchartInfo:
          LineeEInfo.data.status == 200 ? LineeEInfo.data.data : [],
        lineCitys: lineCity.data.status == 200 ? lineCity.data.data : [],
        LineChangeAnother:
          LineCAnother.data.status == 200 ? LineCAnother.data.data : [],
        queryCitys
      }
    } else {
      error({ statusCode: 500, message: '查找不到该专线信息' })
    }
  },
  mounted() {
    let _this = this
    if (process.client) {
      seajs.use(['/layer/layer.js', '/layer/dist/layui.js'], function() {
        seajs.use(
          ['../js/city.js', '../js/city-picker.data.js', '../js/calculator.js'],
          function() {
            seajs.use(['../js/city-picker.js'], function() {
              seajs.use(['/line/js/arc_wlzx.js'], function() {
                seajs.use(['../js/collection.js'], function() {
                  seajs.use(['../js/gaodemap2.js'], function() {
                    _this.detailCollnum()
                    _this.cananyCollnum()
                    $('#search_huoyuan').click(function() {
                      var list1 = [],
                        list2 = []
                      $('#HuoyuanFrom .select-item').each(function(i, e) {
                        list1.push($(this).text())
                      })
                      var startp = list1[0]
                      var startc = list1[1]
                      var starta = list1[2]

                      $('#HuoyuanTo .select-item').each(function(i, e) {
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
                      window.open(
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
                      )
                    })

                    function mousePrice() {
                      $('#arc_bt1').click(function() {
                        //alert("1");
                        $('.arc_span').removeClass('arc_active')
                        $(this).addClass('arc_active')
                        $('.arc_nr').addClass('arc_nr_none')
                        $('#arc_nr1').removeClass('arc_nr_none')
                      })
                      $('#arc_bt2').click(function() {
                        //alert("1_2");
                        $('.arc_span').removeClass('arc_active')
                        $(this).addClass('arc_active')
                        $('.arc_nr').addClass('arc_nr_none')
                        $('#arc_nr2').removeClass('arc_nr_none')
                      })

                      $('#arc_bt3').click(function() {
                        //alert("2");
                        $('.arc_span').removeClass('arc_active')
                        $(this).addClass('arc_active')
                        $('.arc_nr').addClass('arc_nr_none')
                        $('#arc_nr3').removeClass('arc_nr_none')
                      })

                      $('#arc_bt4').click(function() {
                        //alert("3");
                        $('.arc_span').removeClass('arc_active')
                        $(this).addClass('arc_active')
                        $('.arc_nr').addClass('arc_nr_none')
                        $('#arc_nr4').removeClass('arc_nr_none')
                      })
                    }

                    mousePrice()
                  })
                })
              })
            })
          }
        )
      })
    }
  },
  methods: {
    showEchart() {
      this.bzAddFn()
    },
    gotoHuoList(event) {
      let city = event.target.innerHTML + '市'
      if (city.length > 4) {
        city = city.substring(2, 5)
      }
      window.open(
        `/zhuanxian/list?startp=${this.linedataA.startProvince}&startc=${
          this.linedataA.startCity
        }&endp=${this.linedataA.endProvince}&endc=${city}`
      )
    },
    moreFn() {
      this.addFn()
    },
    addFn() {
      this.isAdd = true
    },
    noaddFn() {
      this.isAdd = false
    },
    bzAddFn() {
      this.isBzAdd = true

      this.lineBzAdd = {
        companyName: this.linedataB.companyName,
        lowerPriceRate: this.linedataE.lowerPriceRate
      }
    },
    nobzAddFn() {
      this.isBzAdd = false
    },
    showPingLunFn(index) {
      let assessLevel = ''

      if (index == 0) {
        assessLevel = 'AF0360101'
      } else if (index == 1) {
        assessLevel = 'AF0360102'
      } else if (index == 2) {
        assessLevel = 'AF0360103'
      }
      this.indexPl = index
      let aurl = ''

      this.$axios
        .post(aurl + `/28-web/rangeEva/range/list`, {
          currentPage: 1,
          pageSize: 3,
          transportRangeId: this.linedataA.id,
          assessLevel: assessLevel
        })
        .then(res => {
          if (res.data.status === 200) {
            this.linedataF = res.data.data.list
          } else {
            layer.msg(res.data.errorInfo ? res.data.errorInfo : res.data.text)
          }
        })
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
    clickImg(int) {
      this.showImg = int
    },
    downFn() {
      window.open('http://h5.28tms.com/')
    },
    showgongsiFn() {
      layer.open({
        id: 1,
        type: 1,
        title: '您要咨询的公司',
        skin: 'layui-layer-rim1',
        area: ['500px', '300px'],
        success: (layero, index) => {
          $('.layui-btn-danger').on('click', '')
        },
        content:
          ' <div class="row_find" style="width: 490px;  margin-left:7px; margin-top:10px;">' +
          '<div class="col-sm-12">' +
          '<div class="input-group">' +
          '<p class="input-group-addon"> ' +
          '<span>' +
          this.linedataB.companyName +
          '</span>' +
          '</p>' +
          '</div>' +
          '</div>' +
          '<div class="col-sm-12">' +
          '<div class="input-group" style="width: 280px;        margin-left: 105px;">' +
          '<input type="text" name="title" required  lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input" maxlength="11" id="layui-input">' +
          '<p class="tipPhone" style="color: red">*手机号码格式不正确</p>' +
          '</div>' +
          '</div>' +
          '<div class="col-sm-12" style="margin-top: 10px">' +
          '<div class="input-group find_layui-btn">' +
          '<button class="layui-btn layui-btn-danger">提交</button>' +
          '</div>' +
          '</div>' +
          '</div>'
      })

      var mobile = $('.layui-input').val()
      $('.tipPhone').hide()
      $('.find_layui-btn .layui-btn-danger').click(() => {
        let validReg = window.Lll_AFLC_VALID
        let form = {}
        form.mobile = mobile
        form.companyId = this.LineChangeAnother.companyId
        mobile = $('.layui-input').val()
        if (mobile) {
          $('.tipPhone').hide()
          if (validReg.MOBILE.test(mobile)) {
            $('.tipPhone').hide()
            let aurl = ''

            form.mobile = msgMobile
            this.$axios
              .post(aurl + '/28-web/logisticsCompany/consult/save', form)
              .then(res => {
                if (res.data.status === 200) {
                  layer.msg(
                    '提交成功，客服稍后将会与您联系',
                    {
                      tiem: 3000
                    },
                    () => {}
                  )
                  location.reload()
                } else {
                  layer.msg(
                    res.data.errorInfo ? res.data.errorInfo : res.data.text
                  )
                }
              })
          } else {
            $('.tipPhone').show()
            $('.layui-input').val('')
          }
        } else {
          $('.tipPhone').show()
          $('.layui-input').val('')
        }
      })
    },
    showFindFn() {
      layer.open({
        id: 1,
        type: 1,
        title: '闪电服务',
        skin: 'layui-layer-rim1',
        area: ['500px', '300px'],
        success: (layero, index) => {
          // $('.layui-btn-danger').onclick(() => {
          //   console.log($('.layui-input').value, 'vakhhhfd')
          // })
          $('.layui-btn-danger').on('click', '')
        },
        content:
          ' <div class="row_find" style="width: 490px;  margin-left:7px; margin-top:10px;">' +
          '<div class="col-sm-12">' +
          '<div class="input-group">' +
          '<p class="input-group-addon"> ' +
          '<span>您要寻找的专线:' +
          this.linedataA.startCity.substring(
            0,
            this.linedataA.startCity.length - 1
          ) +
          '至' +
          this.linedataA.endCity.substring(
            0,
            this.linedataA.endCity.length - 1
          ) +
          '专线</span>' +
          '</p>' +
          '</div>' +
          '</div>' +
          '<div class="col-sm-12">' +
          '<div class="input-group" style="width: 280px;        margin-left: 105px;">' +
          '<input type="text" name="title" required  lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input" maxlength="11" id="layui-input">' +
          '<p class="tipPhone" style="color: red">*手机号码格式不正确</p>' +
          '</div>' +
          '</div>' +
          '<div class="col-sm-12" style="margin-top: 10px">' +
          '<div class="input-group find_layui-btn">' +
          '<button class="layui-btn layui-btn-danger">提交</button>' +
          '<p>提交成功后将平台会为您智能筛选，推荐优质承运商与您联系</p>' +
          '</div>' +
          '</div>' +
          '</div>'
      })

      var msgMobile = $('.layui-input').val()
      $('.tipPhone').hide()
      $('.find_layui-btn .layui-btn-danger').click(() => {
        let validReg = window.Lll_AFLC_VALID
        let form = {}
        form.msgMobile = msgMobile
        form.startProvince = this.linedataA.startProvince
        form.startCity = this.linedataA.startCity
        form.startArea = this.linedataA.startArea
        form.endProvince = this.linedataA.endProvince
        form.endCity = this.linedataA.endCity
        form.endArea = this.linedataA.endArea
        msgMobile = $('.layui-input').val()
        if (msgMobile) {
          $('.tipPhone').hide()
          if (validReg.MOBILE.test($('.layui-input').val())) {
            $('.tipPhone').hide()
            let aurl = ''

            form.msgMobile = msgMobile
            this.$axios
              .post(aurl + '/28-web/helpFind/range/create', form)
              .then(res => {
                // console.log(res, 'resresres')
                if (res.data.status === 200) {
                  layer.msg(
                    '提交成功，客服稍后将会与您联系',
                    {
                      tiem: 3000
                    },
                    () => {}
                  )
                  location.reload()
                } else {
                  layer.msg(
                    res.data.errorInfo ? res.data.errorInfo : res.data.text
                  )
                }
              })
          } else {
            $('.tipPhone').show()
            $('.layui-input').val('')
          }
        } else {
          $('.tipPhone').show()
          $('.layui-input').val('')
        }
      })
    },
    showfind() {
      let _this = this
      clearInterval(_this.stopTimer)

      layer.open({
        type: 1,
        title: ' ',
        area: ['600px', '540px'],
        closeBtn: 1,
        shadeClose: true,
        success: (layero, index) => {
          if (process.server) {
            return
          }
          let lllTitle = false

          this.LineeEchartInfo.forEach((item, index) => {
            if (item.cargoType === '0') {
              this.cargoType0 = item

              this.comInfo(this.sendEchart, this.cargoType0)
              this.showEchartData = this.cargoType0
            }
          })
          this.LineeEchartInfo.forEach((item, index) => {
            if (item.cargoType === '1') {
              this.cargoType1 = item
              this.showEchartData = this.cargoType1
              this.comInfo(this.sendEchart1, this.cargoType1)
            }
          })
          let copyobj = Object.assign(this.sendEchart1[2])
          let copyobj2 = Object.assign(this.sendEchart[2])
          let maxY = this.sendEchart[0]
          this.sendEchart.forEach(el => {
            if (maxY < el) {
              maxY = el
            }
          })

          let maxY1 = this.sendEchart1[0]
          this.sendEchart1.forEach(el => {
            if (maxY1 < el) {
              maxY1 = el
            }
          })
          let seconds = 5
          _this.stopTimer = setInterval(() => {
            $('#seconds').html(seconds + 'S')
            seconds--
            if (seconds < 0) {
              clearInterval(_this.stopTimer)
              $('.show1').hide()
              $('.show2').show()
              let myChart2 = echarts.init(document.getElementById('echart2'))
              let option = {
                title: { text: '', subtext: '' },
                tooltip: { trigger: 'axis' },
                legend: {
                  data: ['重货', '轻货'],
                  selected: {
                    重货: true,
                    轻货: false
                  },
                  bottom: 30,
                  left: 'left',
                  selectedMode: 'single',
                  textStyle: {
                    color: '#FFA657'
                  }
                },
                xAxis: {
                  show: false,
                  type: 'category',
                  boundaryGap: false,
                  data: ['最高', '行情价(高)', '本专线', '行情价(低)', '最低']
                },
                yAxis: {
                  axisLine: { show: false },
                  axisTick: { show: false },
                  axisLabel: { show: false },
                  type: 'value'
                  // max: maxY1
                },
                series: [
                  {
                    name: '重货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 0.5)' }
                    },
                    data: this.sendEchart1,
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
                          // console.log('markPoint:', params)
                          return `{color1|${params.name}}\n{color0|${
                            params.value
                          }元/公斤}`
                        },
                        rich: {
                          color0: {
                            fontSize: 14,
                            align: 'center',
                            fontWeight: 'normal',
                            color: '#FF7836',
                            padding: [0, 0, 10, 0]
                          },
                          color1: {
                            fontSize: 12,
                            align: 'center',
                            fontWeight: 'normal',
                            color: '#6F6F6F',
                            padding: [0, 0, 10, 0]
                          }
                        }
                      },
                      data: [
                        {
                          name: '',
                          coord: [2, copyobj.value],
                          value: copyobj.value
                          // type: 'max'
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
                    hoverAnimation: false,
                    symbol: 'rect',
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
                        if (params.dataIndex === 2) {
                          return ``
                        } else {
                          return `{${c0}|${params.value}元/公斤}\n{color2|${
                            params.name
                          }}`
                        }
                      },
                      rich: {
                        color0: {
                          fontSize: 14,
                          align: 'center',
                          color: '#FF7836'
                        },
                        color1: {
                          fontSize: 14,
                          align: 'center',
                          color: '#6F6F6F'
                        },
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
                  {
                    name: '重货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 1)' }
                    },
                    areaStyle: {
                      normal: { origin: 'end', color: 'rgba(255,161,77, 0.5)' }
                    },
                    data: [
                      null,
                      this.sendEchart1[1],
                      this.sendEchart1[2],
                      this.sendEchart1[3]
                    ],
                    tooltip: { show: false }
                  },
                  {
                    name: '重货',
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
                            padding: [0, 150, 0, 0],
                            color: '#FF7836'
                          }
                        }
                      },
                      data: [
                        [
                          { coord: ['行业均价（高点）', this.sendEchart1[1]] },
                          { coord: ['行业均价（高点）', maxY1] }
                        ],
                        [
                          { coord: ['行业均价（低点）', this.sendEchart1[3]] },
                          { coord: ['行业均价（低点）', maxY1] }
                        ]
                      ]
                    }
                  },
                  {
                    name: '轻货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 0.5)' }
                    },
                    data: this.sendEchart,
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
                          // console.log(params)
                          return `{color1|${params.name}}\n{color0|${
                            params.value
                          }元/立方}`
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
                          // 4表示索引位置，第二个值为具体的值
                          coord: [2, copyobj2.value],
                          value: copyobj2.value
                          // type: 'min'
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
                        if (params.dataIndex === 2) {
                          return ``
                        } else {
                          return `{${c0}|${params.value}元/立方}\n{color2|${
                            params.name
                          }}`
                        }
                      },
                      rich: {
                        color0: {
                          fontSize: 14,
                          align: 'center',
                          color: '#FF7836'
                        },
                        color1: {
                          fontSize: 14,
                          align: 'center',
                          color: '#6F6F6F'
                        },
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
                  {
                    name: '轻货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 1)' }
                    },
                    areaStyle: {
                      normal: { origin: 'end', color: 'rgba(255,161,77, 0.5)' }
                    },
                    data: [
                      null,
                      this.sendEchart[1],
                      this.sendEchart[2],
                      this.sendEchart[3]
                    ],
                    tooltip: { show: false }
                  },
                  {
                    name: '轻货',
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
                          { coord: ['行业均价（高点）', this.sendEchart[2]] },
                          { coord: ['行业均价（高点）', maxY] }
                        ],
                        [
                          { coord: ['行业均价（低点）', this.sendEchart[3]] },
                          { coord: ['行业均价（低点）', maxY] }
                        ]
                      ]
                    }
                  }
                ]
              }
              myChart2.setOption(option)
            }
          }, 1000)
        },
        content:
          '<div class="show1" style="text-align: center;"><div class="myLayer_title" style="padding-bottom:10px">稍等。。。</div><div class="myLayer_content" style="padding-bottom:10px">28平台智能运输大数据中心正在为您核算' +
          '<p style="padding:10px 0">从' +
          '<span>' +
          this.linedataA.startCity.substring(
            0,
            this.linedataA.startCity.length - 1
          ) +
          '</span>至<span>' +
          this.linedataA.endCity.substring(
            0,
            this.linedataA.endCity.length - 1
          ) +
          '</span>' +
          '</p>' +
          '全网优质车源的最新报价</div><div class="myLayer_footer"><span id="seconds">5S</span></div></div>' +
          '<div class="show2">' +
          '<div class="myLayer_title2"><span></span> <span>价格参考</span><span>大数据智能模型精准定价，28智能平台指导定价</span></div>' +
          '<div class="myLayer_content2">' +
          this.linedataA.startCity.substring(
            0,
            this.linedataA.startCity.length - 1
          ) +
          '→' +
          this.linedataA.endCity.substring(
            0,
            this.linedataA.endCity.length - 1
          ) +
          '专线</div>' +
          '<div id="echart2"></div>' +
          '<div class="myLayer_content2"><i style="color:#f66618;text-decoration:underline">' +
          this.linedataB.companyName +
          '</i>的承运价格<span>处于</span>行业均价内，此数据源于平台用户提报的历史数据统计，仅供参考！</div>' +
          '</div>'
      })
    },
    comInfo(sendEchart, cargoType) {
      sendEchart[0] =
        cargoType.highestPrice > 100
          ? Math.floor(cargoType.highestPrice)
          : cargoType.highestPrice
      sendEchart[1] =
        cargoType.highAveragePrice > 100
          ? Math.floor(cargoType.highAveragePrice)
          : cargoType.highAveragePrice
      sendEchart[2] = {
        value:
          cargoType.thisRangePrice > 100
            ? Math.floor(cargoType.thisRangePrice)
            : cargoType.thisRangePrice,
        symbol: 'image:///images/cy/12d.png',
        symbolSize: 20
      }
      sendEchart[3] =
        cargoType.lowAveragePrice > 100
          ? Math.floor(cargoType.lowAveragePrice)
          : cargoType.lowAveragePrice

      sendEchart[4] =
        cargoType.lowestPrice > 100
          ? Math.floor(cargoType.lowestPrice)
          : cargoType.lowestPrice
    },
    showfind1() {
      let _this = this
      clearInterval(_this.stopTimer)
      layer.open({
        type: 1,
        title: ' ',
        area: ['580px', '540px'],
        closeBtn: 1,
        shadeClose: true,
        success: (layero, index) => {
          if (process.server) {
            return
          }
          this.LineeEchartInfo.forEach((item, index) => {
            if (item.cargoType === '0') {
              this.cargoType0 = item
              this.comInfo(this.sendEchart, this.cargoType0)
            }
          })
          this.LineeEchartInfo.forEach((item, index) => {
            if (item.cargoType === '1') {
              this.cargoType1 = item
              this.comInfo(this.sendEchart1, this.cargoType1)
            }
          })
          let maxY = this.sendEchart[0]
          this.sendEchart.forEach(el => {
            if (maxY < el) {
              maxY = el
            }
          })

          let maxY1 = this.sendEchart1[0]
          this.sendEchart1.forEach(el => {
            if (maxY1 < el) {
              maxY1 = el
            }
          })
          let seconds = 5
          _this.stopTimer = setInterval(() => {
            $('#seconds').html(seconds + 'S')
            seconds--
            if (seconds < 0) {
              clearInterval(_this.stopTimer)
              $('.show1').hide()
              $('.show2').show()
              let myChart2 = echarts.init(document.getElementById('echart2'))
              let option2 = {
                title: { text: '', subtext: '' },
                tooltip: { trigger: 'axis' },
                legend: {
                  data: ['重货', '轻货'],
                  selected: {
                    // 选中'系列1'
                    重货: true,
                    // 不选中'系列2'
                    轻货: false
                  },
                  bottom: 10,
                  left: 'left',
                  selectedMode: 'single',
                  textStyle: {
                    color: '#FFA657' // 值域文字颜色
                  }
                },
                xAxis: {
                  show: false,
                  type: 'category',
                  boundaryGap: false,
                  data: [
                    '大品牌报价',
                    '优质承运商报价',
                    '行业均价（高点）',
                    '行业均价（低点）',
                    '本供应商价'
                  ]
                },
                yAxis: {
                  axisLine: { show: false },
                  axisTick: { show: false },
                  axisLabel: { show: false },
                  type: 'value'
                  // max: maxY1
                },
                series: [
                  {
                    name: '重货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 0.5)' }
                    },
                    data: this.sendEchart1,
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
                          // console.log(params)
                          return `{color1|${params.name}}\n{color0|${
                            params.value
                          }元/公斤}`
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
                          type: 'min'
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
                        if (params.dataIndex === 4) {
                          return ``
                        } else {
                          return `{${c0}|${params.value}元/公斤}\n{color2|${
                            params.name
                          }}`
                        }
                      },
                      rich: {
                        color0: {
                          fontSize: 18,
                          align: 'center',
                          color: '#FF7836'
                        },
                        color1: {
                          fontSize: 18,
                          align: 'center',
                          color: '#6F6F6F'
                        },
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
                  {
                    name: '重货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 1)' }
                    },
                    areaStyle: {
                      normal: { origin: 'end', color: 'rgba(255,161,77, 0.5)' }
                    },
                    data: [
                      null,
                      null,
                      this.sendEchart1[2],
                      this.sendEchart1[3]
                    ],
                    tooltip: { show: false }
                  },
                  {
                    name: '重货',
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
                          { coord: ['行业均价（高点）', this.sendEchart1[2]] },
                          { coord: ['行业均价（高点）', maxY1] }
                        ],
                        [
                          { coord: ['行业均价（低点）', this.sendEchart1[3]] },
                          { coord: ['行业均价（低点）', maxY1] }
                        ]
                      ]
                    }
                  },
                  {
                    name: '轻货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 0.5)' }
                    },
                    data: this.sendEchart,
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
                          // console.log(params)
                          return `{color1|${params.name}}\n{color0|${
                            params.value
                          }元/公斤}`
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
                          type: 'min'
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
                        if (params.dataIndex === 4) {
                          return ``
                        } else {
                          return `{${c0}|${params.value}元/公斤}\n{color2|${
                            params.name
                          }}`
                        }
                      },
                      rich: {
                        color0: {
                          fontSize: 18,
                          align: 'center',
                          color: '#FF7836'
                        },
                        color1: {
                          fontSize: 18,
                          align: 'center',
                          color: '#6F6F6F'
                        },
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
                  {
                    name: '轻货',
                    type: 'line',
                    lineStyle: {
                      normal: { color: 'rgba(255,173,101, 1)' }
                    },
                    areaStyle: {
                      normal: { origin: 'end', color: 'rgba(255,161,77, 0.5)' }
                    },
                    data: [null, null, this.sendEchart[2], this.sendEchart[3]],
                    tooltip: { show: false }
                  },
                  {
                    name: '轻货',
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
                          { coord: ['行业均价（高点）', this.sendEchart[2]] },
                          { coord: ['行业均价（高点）', maxY] }
                        ],
                        [
                          { coord: ['行业均价（低点）', this.sendEchart[3]] },
                          { coord: ['行业均价（低点）', maxY] }
                        ]
                      ]
                    }
                  }
                ]
              }
              myChart2.setOption(option2)
            }
          }, 1000)
        },
        content:
          '<div class="show1" style="text-align: center"><div class="myLayer_title">稍等。。。</div><div class="myLayer_content">28平台智能运输大数据中心正在为您核算' +
          '<p >从' +
          '<span>' +
          this.linedataA.startCity.substring(
            0,
            this.linedataA.startCity.length - 1
          ) +
          '</span>至<span>' +
          this.linedataA.endCity.substring(
            0,
            this.linedataA.endCity.length - 1
          ) +
          '</span>' +
          '</p>' +
          '全网优质车源的最新报价</div><div class="myLayer_footer"><span id="seconds">5S</span></div></div>' +
          '<div class="show2">' +
          '<div class="myLayer_title2"><span></span> <span>价格参考</span><span>大数据智能模型精准定价，28智能平台指导定价</span></div>' +
          '<div class="myLayer_content2">' +
          this.linedataA.startCity.substring(
            0,
            this.linedataA.startCity.length - 1
          ) +
          '→' +
          this.linedataA.endCity.substring(
            0,
            this.linedataA.endCity.length - 1
          ) +
          '专线</div>' +
          '<div id="echart2"></div>' +
          '<div class="myLayer_content2">' +
          this.linedataB.companyName +
          '的报价<span>低于</span><i>' +
          this.linedataE.lowerPriceRate +
          '的承运商</i>，承运价格<span>低于</span>行业均价低点，此数据源于平台用户提报的历史数据统计，仅供参考！</div>' +
          '</div>'
      })
    },
    comInfo1(sendEchart, cargoType) {
      // console.log(cargoType, 'cargoType')
      sendEchart[0] = cargoType.standardFamousBrandPrice
      sendEchart[1] = cargoType.standardHighQualityPrice
      sendEchart[2] = cargoType.standardHighAveragePrice
      sendEchart[3] = cargoType.standardLowAveragePrice
      sendEchart[4] = {
        value: 15,
        symbol: 'image:///images/cy/12d.png',
        symbolSize: 20
      }
    },
    detailCollnum() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('login_userToken') || $.cookie('user_token')
      let aurl = ''
      let isurl = ''
      let transportRangeId = this.$route.query.id
      let handle = 'check'
      if (access_token && user_token) {
        getDetailColl(
          this.$axios,
          this.$route.query.id,
          access_token,
          user_token,
          handle
        ).then(res => {
          if (res.data.status == 200) {
            if (res.data.data == true) {
              this.isXin = true
            }
          }
          if (res.data.errorInfo) {
            layer.msg(res.data.errorInfo)
          }
        })
      }
    },
    cananyCollnum() {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('login_userToken') || $.cookie('user_token')
      let aurl = ''
      let isurl = ''
      let handle = 'check'
      if (access_token && user_token) {
        getCanyColl(
          this.$axios,
          this.$route.query.publishId,
          access_token,
          user_token,
          handle
        )
          .then(res => {
            if (res.data.status == 200) {
              if (res.data.data == true) {
                this.isComanyColl = true
              }
            }
            if (res.data.errorInfo) {
              layer.msg(res.data.errorInfo)
            }
          })
          .catch(err => {})
      }
    },
    openColl(item) {
      let access_token = $.cookie('access_token')
      let user_token = $.cookie('login_userToken') || $.cookie('user_token')
      let aurl = ''
      let isurl = ''
      let transportRangeId = this.$route.query.id
      let handle = 'collect'
      if (access_token && user_token) {
        if (item == 'detail') {
          let transportRangeId = this.$route.query.id
          if (this.isXin == true) {
            handle = 'cancelCollect'
          }
          isurl =
            '/28-web/collect/transportRange?access_token=' +
            access_token +
            '&user_token=' +
            user_token +
            '&transportRangeId=' +
            transportRangeId +
            '&handle=' +
            handle
        } else {
          let companyId = this.$route.query.publishId
          if (this.isComanyColl == true) {
            handle = 'cancelCollect'
          }
          isurl =
            '/28-web/collect/company?access_token=' +
            access_token +
            '&user_token=' +
            user_token +
            '&companyId=' +
            companyId +
            '&handle=' +
            handle
        }
        this.$axios
          .post(aurl + isurl)
          .then(res => {
            if (res.data.status === 200) {
              let isMsg = res.data.data
              layer.msg(isMsg)
              if (item == 'detail') {
                if (isMsg == '收藏成功！') {
                  this.isXin = true
                } else {
                  this.isXin = false
                }
              }
              if (item == 'comany') {
                if (isMsg == '收藏成功！') {
                  this.isComanyColl = true
                } else {
                  this.isComanyColl = false
                }
              }
            }
            if (res.data.error) {
              layer.msg(res.data.error)
            }
          })
          .catch(err => {
            layer.msg('收藏失败')
          })
      } else {
        $('body').trigger('login.show')
      }
    },
    getCity() {
      this.dataInfo.startProvince = this.linedataA.startProvince
      this.dataInfo.startCity = this.linedataA.startCity
      this.dataInfo.startArea = this.linedataA.startArea
      this.dataInfo.endProvince = this.linedataA.endProvince
      this.dataInfo.endCity = this.linedataA.endCity
      this.dataInfo.endArea = this.linedataA.endArea
    }
  }
}
</script>

<style lang="scss" scoped>
.arc_top1 {
  width: 100%;
  height: 80px;
  margin-bottom: 0;
  margin-top: 0;
  padding: 20px 0;
  img {
    margin-top: 0;
  }
}
.arc_top1_2,
.arc_top1_3 {
  margin-top: 22px;
}
.lll-zhuangXian-detail .arc_toptitle {
  margin-top: 0 !important;
}
.lll-zhuangXian-detail {
  .arc_toptitle {
    float: left;
    width: 100%;
    height: 150px;
    background: url(/images/cy/01title.png);
    /* position: relative; */
    position: absolute;
    left: 0;
    margin-top: 25px;
    h1 {
      text-align: center;
      padding: 30px;
      color: #fff;
      font-size: 34px;
      margin-left: -135px;
    }
    .arc_top2 {
      width: 100%;
      min-height: 40px;
      overflow: auto;
      line-height: 40px;
      margin-top: 163px;
      /* margin-bottom: 28px; */
      border-bottom: 2px solid #2577e3;
      background-color: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
    }
    .two_tltle {
      color: #fff;
      max-width: 1400px;
      display: flex;
      background-color: #2c4fc4;
      margin: 15px 251px;
      li {
        float: left;
        cursor: pointer;
        flex: 1;
        height: 30px;
        line-height: 30px;
        text-align: center;
        a {
          color: #fff;
        }
      }
    }
  }
  .pj_price_box {
    top: 70%;
    z-index: 1;
  }
  /*background: rgb(249, 249, 249);*/
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
  .arc_prinr_p {
    padding: 20px 0 0 15px;
    font-size: 14px;
  }

  /**/
  /*#wlLineFrom {*/
  /*width: 190px;*/
  /*background: url(/line/images/start_addr.png) no-repeat 200px 8px*/
  /*#fff;*/
  /*background-size: 16px 17px;*/
  /*padding-right: 20px;*/
  /*}*/
  /*#wlLineTo {*/
  /*width: 190px;*/
  /*background: url(/line/images/end_addr.png) no-repeat 200px 8px #fff;*/
  /*background-size: 16px 17px;*/
  /*padding-right: 20px;*/
  /*}*/
  .ss56-common-sprite1 {
    background-image: url(/line/images/qd.png);
    background-repeat: no-repeat;
  }
  .ss56-common-sprite2 {
    background-image: url(/line/images/zd.png);
    background-repeat: no-repeat;
  }
  .lines-sprite-icons {
    background: url(/line/images/ss56-lines-sprite.png) no-repeat;
  }
  /**/
  #search_wlLine {
    width: 40px;
    height: 30px;
    border-radius: 2px;
    font-size: 16px;
    background: no-repeat url(/line/images/wlgs_search.png) 10px 6px;
    text-align: left;
    /*padding-left: 30px;*/
    /*margin-left: 20px;*/
    /*padding-right: 5px;*/
    cursor: pointer;
    border: 1px solid #3f94ee;
  }
  .ss56-common-sprite11,
  .ss56-common-sprite-icon {
    background: url('/line/images/downicon.png') no-repeat 0 11px;
  }

  .icon-through {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-position: -6px -62px;
    position: relative;
    top: 3px;
    margin: 0 10px;
  }
  .icon-end {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-position: -6px -6px;
    position: relative;
    top: 2px;
    margin-right: 3px;
  }
  .icon-start {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-position: -6px -34px;
    position: relative;
    top: 2px;
    margin-right: 3px;
  }
  .arc_main7 {
    .lll-recommend {
      transition: all 0.4s;
      background: #fff;
      .zx_sx {
        border-bottom: 1px solid #e7e7e7;
      }
      ul {
        padding-bottom: 10px;
        li {
          padding-top: 20px;
          span {
            width: 126px;
            padding-right: 40px;
            color: #333;
            font-size: 14px;
          }
          span:first-of-type {
            padding-left: 24px;
          }
        }
      }
    }
  }
}
</style>
