
<script src="../../store/member.js">
</script>
<template>
  <div class="lll-zhuangXian">
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a1"
          href="">零担物流专线</a>&gt;<a
            id="list_nav_a2"
            href="">零担物流专线</a>&gt;<a
              id="list_nav_a3"
              href="">零担物流专线</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;">
          <div class="zx_sx"><span class="biaozhi"/><span>专线筛选</span>
            <a
              class="toggle-btn show-collapse"
              href="#">
              <span class="expand">
                <span>显示筛选</span><span class="arrow icon-btn-arrow-down-2"/>
              </span>
              <span class="collapse">
                <span>收起筛选</span><span class="arrow icon-btn-arrow-up-2"/>
              </span>
            </a>
          </div>
          <div class="select_con">
            <dl>
              <dt>专线线路&nbsp;：</dt>
              <dd>
                <form
                  class="form-line"
                  name="zxaddform"
                  method="post"
                  action="">
                  <input
                    name="a7"
                    type="hidden"
                    value="0">
                  <input
                    type="hidden"
                    name="mid"
                    value="19">
                  <input
                    type="hidden"
                    name="dopost"
                    value="search">
                  <div
                    id="wlLineFrom"
                    class="fl list_input"
                    style="position:relative;">
                    <input
                      name="cfd"
                      style="height: 100%;"
                      data-level="district"
                      type="text"
                      placeholder="请输入出发地">
                  </div>
                  <img
                    class="fl list_img"
                    src="/line/images/02jiantou.png">
                  <div
                    id="wlLineTo"
                    class="fl list_input"
                    style="position:relative;">
                    <input
                      name="ddd"
                      style="height: 100%;"
                      data-level="district"
                      type="text"
                      placeholder="请输入到达地">
                  </div>
                  <input
                    id="wlgs_name"
                    name="wlgs"
                    type="text"
                    class="list_input"
                    style="margin-left: 16px;"
                    placeholder="请输入公司名称">
                  <input
                    id="search_wlLine"
                    readonly=""
                    name="Submit2"
                    value=" 搜索 "
                    class="list_button">
                  <input
                    id="flush"
                    readonly=""
                    name="Submit2"
                    value="重置 "
                    class="list_button">
                </form>
              </dd>
              <div style="display: none">
                <dt>所属园区&nbsp;：</dt>
                <dd
                  id="tjcx_00"
                  style="position: relative;">
                  <input
                    id="select_wlyq"
                    placeholder="请选择园区"
                    class="list_wlzx_yq js_yq">
                  <div id="list_wlzx_yq">
                    <div class="wlzx_yq_bt js_yq">
                      <div
                        id="wlyq_pos"
                        class="fl list_wlyq_input"
                        style="position:relative;">
                        <input
                          style="height: 100%;"
                          data-toggle="city-picker"
                          data-level="district"
                          type="text"
                          name=""
                          placeholder="请选择园区所在地">
                      </div>
                      <input
                        id="wlyq_name"
                        class="list_wlyq_input"
                        placeholder="请输入园区名称">
                      <input
                        class="list_wlyq_cx"
                        readonly=""
                        value="查询">
                    </div>
                    <div
                      id="js010"
                      class="wlzx_yq_nr">
                      <div class="wlzx_yq_none">
                        <font>暂无园区信息</font>
                      </div>
                      <div
                        class="wlzx_yq_item"
                        style="display: none;">
                        <font
                          id="wlzx_yq_01"
                        />
                        <span
                          id="wlzx_yq_02"
                        />
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <dt>发车时间&nbsp;:</dt>
              <dd id="tjcx_01">
                <!--lineCodeA-->
                <span
                  v-for="(item,index) in lineCodeA"
                  :key="index"
                  style="margin-right: 10px;">
                  <a
                    :href="'/zhuanxian/list?departureTimeCode='+ item.code"
                    :data-code="item.code"
                    :class=" item.name=='不限'? 'now':''"
                    class="all">{{ item.name }}</a>
                </span>
                <!--<a-->
                <!--class="now all"-->
                <!--href="/zhuanxian/list">不限</a>-->
              </dd>
              <dt>选择品牌&nbsp;:</dt>
              <dd id="tjcx_02">
                <span
                  v-for="(item,index) in lineCodeB"
                  :key="index"
                  style="margin-right: 10px;">
                  <a
                    :href="'/zhuanxian/list?belongBrandCode='+ item.code"
                    :data-code="item.code"
                    :class=" item.name=='不限'? 'now':''"
                    class="all">{{ item.name }}</a>
                </span>
                <!--<a-->
                <!--class="now all"-->
                <!--href="/zhuanxian/list"-->
                <!--&gt;不限</a>-->
              </dd>
              <dt>其他&nbsp;:</dt>
              <dd id="tjcx_03">
                <span
                  v-for="(item,index) in lineCodeC"
                  :key="index"
                  style="margin-right: 10px;">
                  <a
                    :href="'/zhuanxian/list?otherServiceCode='+ item.code"
                    :data-code="item.code"
                    :class=" item.name=='不限'? 'now':''"
                    class="all">{{ item.name }}</a>
                </span>
                <!--<a-->
                <!--class="now all"-->
                <!--href="/zhuanxian/list">不限</a>-->
                <!--<a class="shiming">实名认证</a>-->
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036 list_wlzx">

          <div class="zx_sx"><span class="biaozhi"/><span>专线信息</span></div>
          <div class="list_tiaoj"><span
            id="seq0"
            class="active"
          >默认排序</span><span
            id="seq1"
            title="交易量从高到低">交易量</span><span
              id="seq2"
              title="运输时效从低到高">运输时效</span><span
              id="seq3">重货价格</span>
            <div
            id="tj_price">
              <span id="tj_price1">轻货价格从低到高</span>
              <span id="tj_price2">重货价格从低到高</span>
            </div>
          </div>
          <div
            v-if="!lineLists.length"
            class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他线路哦</span>
            <img src="/line/images/none_pic.png">
          </div>
          <!--lineList-->
          <!--<span>{{lineLists.length}}</span>-->
          <div
          v-else >
            <ul
              v-for="(item , index) in lineLists"
              :key="index"
              class="wlzx_list">
              <li id="wlzx_list_0">
                <div class="sc_num"><img src="/line/images/ll_num.png"><span><i><em id="nr1001"/>{{ item.browseNumber?item.browseNumber:'0' }}人浏览</i></span></div>

                <div class="view_num"><img src="/line/images/pj_num.png"><span><i><em id="nr1002"/>{{ item.assessNumber?item.assessNumber:'0' }}条评论</i></span></div>
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
                  <img src="/line/images/04gongsi.png">
                  <a
                    id="nr03"
                    :href="'/member/'+item.companyId"
                    target="_blank"><font
                  class="">{{ item.companyName }}</font></a>
                  <a
                    id="nr11"
                    target="_blank"
                    href="http://wpa.qq.com/msgrd?v=596803544&uin=&site=qq&menu=yes"><img
                      id="qq"
                      src="../../static/gongsi/images/15qq.gif"></a>
                  <img
                    id="tj_icon_1"
                    src="/line/images/wtjzx.gif">
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
                  style="padding-top: 15px;">
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
                  class="">{{ item.address.length>24?item.address.substring(0,24)+'..':item.address }}</font></p>
              </li>
              <li class="wlzx_list_3">
                <p class="p1"><i
                  class="zhuo"
                  style="color: #666">重货：{{ item.weightPrice }}</i><span style="color: #333">元/公斤</span></P>
                <p class="p2"><i
                  class="zhuo"
                  style="color: #666">轻货：</i>{{ item.lightPrice }}<span style="color: #333">元/m³</span></p>
                <p class="p3"><i>时效：</i><span>{{ item.transportAging?item.transportAging:'' }}{{ item.transportAging?item.transportAgingUnit:'暂无' }}</span></p>
                <!--<p class="p3"><i>时效：</i><span id="nr09"/></p>-->
                <p class="p4"><i>频率：</i><span>{{ item.departureHzData?item.departureHzData+'天':'' }}</span><span>{{ item.departureHzData?item.departureHzTime+'次':'暂无' }}</span></p>
                <!--<p class="p4"><i>频率：</i><span id="nr10"/></p>-->
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
                    value="查看"></a>
                </p>
              <p class="p3"/></li>
            </ul>
          </div>

        </div>

        <!--分页-->
        <div
          v-if="lineLists.length"
          class="clearfix">
          <div
            class="box"
            style="float: right;margin-right: 150px;">
            <div
              id="pagination1"
              class="page fl"/>
            <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
            </div>
          </div>
        </div>
        <!--分页-->


        <div class="lll-line--othet">
          <div class="lll-recommend clearfix">
            <div
              class="zx_sx1"
            ><span class="biaozhi"/><span class="zx_sxl_tit">{{ lineLinks.recommendBy28.label }}</span></div>
            <FooterLinks :info="lineLinks.recommendBy28.links"/>
          </div>
          <div
            class="lll-recommend"
            style="padding-top: 40px;">
            <div
              class="zx_sx"
            ><span class="biaozhi"/><span>{{ lineLinks.otherRecommend.label }}</span></div>
            <FooterLinks :info="lineLinks.otherRecommend.links"/>
          </div>
        </div>

      </div>

      <div
        id="js007"
        class="list_right">

        <div class="list-box-r-top">
          <form action="">
            <span>出发地</span>
            <div class="ltl-input">
              <input
                id="right-bar-form"
                autocomplete="off"
                wtmap=""
                type="text"
                class="ltl-location "
                placeholder="请选择出发地">
              <i class="ltl-icons ss56-common-sprite1 ltl-ico-start"/>
            </div>
            <span>目的地</span>
            <div class="ltl-input">
              <input
                id="right-bar-to"
                autocomplete="off"
                wtmap=""
                type="text"
                class="ltl-location"
                placeholder="请选择目的地">
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>
            <input
              id="check-fee"
              type="button"
              value="查询零担运费"
              class="right-top-btn">
          </form>
        </div>
        <div class="list-box-r-top">
          <img
            src="/line/images/guangg.jpg"
            alt="">
        </div>
        <div class="zx_sx"><span class="biaozhi"/><span>专线信息推荐</span></div>
        <div
          v-if="!lineRecoms.length"
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
                :href="'/member/'+ item.companyId"
                target="_blank">{{ item.companyName }}</a></span>
              <img
                id="tj_shiming"
                src="/line/images/shiming.png">
                <!--<img-->
                <!--id="tj_xinyong"-->
                <!--src="/line/images/xinyong.png" >-->


                <!--<img-->
                <!--id="tj_icon_2"-->
                <!--src="/line/images/wtjzx.gif">-->
            </div>
            <div class="p p2">

              <a
                id="tj010"
                :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                class="list-title-a"
                target="_blank">
                <span class="list-icon lines-sprite-icons icon-start"/>
                <!--<em id="tj011"></em>-->
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
                <li class="tj_left"><i>重货：</i><font id="tj013">{{ parseFloat(item.weightPrice).toFixed(1) }}</font><span>元/公斤</span></li>
                <li class="tj_right"><i>轻货：</i><font id="tj014">{{ parseFloat(item.lightPrice).toFixed(1) }}</font><span>元/m³</span></li>
              </ul>

            </div>

            <div class="p p6">
              <div class="sc_num1"><img src="/line/images/ll_num.png"><span><i><em id="tj101">{{ item.browseNumber?item.browseNumber:'0' }}</em>人浏览</i></span></div>
              <div class="view_num1"><img src="/line/images/pj_num.png"><span><i><em id="tj102">{{ item.assessNumber?item.assessNumber:'0' }}</em>条评论</i></span></div>

            </div>
          </div>
        </div>
        <div class="list-box-r-hot">

          <div class="zx_sx"><span class="biaozhi"/>企业月人气榜</div>
          <div
            v-if="!lineHots.length"
            class="hot_none">
            <span>没有相关企业月人气榜</span>
          </div>
          <div
            v-else
            class="hot-ul">
            <ul

            >
              <li><a
                :href="'/member/'+lineHots[0].id"
                style="display: flex;"><span class="hot-num">1</span><img
                  src="/line/images/touxiang1.png"
                  alt=""
                  width="50"
                  height="50">
              <p>{{ lineHots[0].companyName }}</p><span class="hot-peonum">人气值:<i>{{ lineHots[0].popularity }}</i></span></a></li>
              <li><a
                :href="'/member/'+lineHots[1].id"
                style="display: flex;"><span class="hot-num">2</span><img
                  src="/line/images/touxiang2.png"
                  alt=""
                  width="50"
                  height="50">
              <p>{{ lineHots[1].companyName }}</p><span class="hot-peonum">人气值:<i>{{ lineHots[1].popularity }}</i></span></a></li>
              <li><a
                :href="'/member/'+lineHots[2].id"
                style="display: flex;"
                target="_blank"><span class="hot-num">3</span><img
                  src="/line/images/touxiang3.png"
                  alt=""
                  width="50"
                  height="50">
              <p>{{ lineHots[2].companyName }}</p><span class="hot-peonum">人气值:<i>{{ lineHots[2].popularity }}</i></span></a></li>
            </ul>
            <ul
            class="lastul">
              <li
                v-for="(item, index) in lineHots.slice(-12)"
                :key="index"><a
                  :href="'/member/'+item.id"
                  style="display: flex;"
                  target="_blank"><span class="hot-num">{{ index + 4 }}</span>
              <p>{{ item.companyName }}</p><span class="hot-peonum">人气值:<i>{{ item.popularity }}</i></span></a></li>
            </ul>
          </div>
        </div>
        <div class="list-box-r-phone">
          <div class="zx_p_tit">帮我找优质承运商</div>
          <div class="list-box-r-top">
            <selectMap/>
          </div>
        </div>
      </div>

    </div>
    <div class="lll-line-bot">
      <div
      class="lll-recommend clearfix">
        <div
          class="zx_sx"
        ><span class="biaozhi"/><span>{{ lineLinks.hotRecommend.label }}</span></div>
        <FooterLinks :info="lineLinks.hotRecommend.links"/>
      </div>
      <div
      class="lll-recommend clearfix">
        <div
          class="zx_sx"
        ><span class="biaozhi"/><span>{{ lineLinks.startArriveRecommend.label }}</span></div>
        <FooterLinks :info="lineLinks.startArriveRecommend.links"/>
      </div>
      <div
      class="lll-recommend clearfix">
        <div
          class="zx_sx"
        ><span class="biaozhi"/><span>{{ lineLinks.startFromRecommend.label }}</span></div>
        <FooterLinks :info="lineLinks.startFromRecommend.links"/>
      </div>
    </div>

    <div class="h70"/>
  </div>
</template>

<script>
import $axios from 'axios'
import FooterLinks from '../../components/footerLinks'
import selectMap from './selectMap'
export default {
  name: 'Index',
  components: {
    FooterLinks,
    selectMap
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/list_wlzx.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ]
  },
  data() {
    return {
      infoLinks: {},
      showImg: 0,
      pages: 0,
      currentPage: 1,
      lineList: [],
      lineLists: []
    }
  },
  async asyncData({ $axios, query }) {
    let aurl = ''
    let startp = query.startp
    let startc = query.startc
    let starta = query.starta
    let endp = query.endp
    // let starta = query.starta
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
    if (process.server) {
      aurl = 'http://localhost:3000'
    }
    let [listA, listB, listC, listD, codeA, codeB, codeC] = await Promise.all([
      $axios.post(aurl + `/api/28-web/range/list`, {
        currentPage: 1,
        pageSize: 6,
        startProvince: startp,
        startCity: startc,
        startArea: starta,
        endProvince: endp,
        endCity: endc,
        endArea: enda,
        belongBrandCode: query.belongBrandCode,
        departureTimeCode: query.departureTimeCode,
        otherServiceCode: query.otherServiceCode,
        parkId: query.parkId
      }),
      $axios.post(aurl + `/api/28-web/range/recommend`, {
        currentPage: 1,
        pageSize: 5,
        startProvince: startp,
        startCity: startc,
        startArea: starta,
        endProvince: endp,
        endCity: endc,
        endArea: enda,
        belongBrandCode: query.belongBrandCode,
        departureTimeCode: query.departureTimeCode,
        otherServiceCode: query.otherServiceCode,
        parkId: query.parkId,
        companyName: query.companyName
      }),
      $axios.post(aurl + `/api/28-web/range/related/links`, {
        startProvince: startp,
        startCity: startc,
        startArea: starta,
        endProvince: endp,
        endCity: endc,
        endArea: enda
      }),
      $axios.get(aurl + '/api/28-web/logisticsCompany/popularity'),
      $axios.get(aurl + '/api/28-web/sysDict/getSysDictByCodeGet/AF026'),
      $axios.get(aurl + '/api/28-web/sysDict/getSysDictByCodeGet/AF029'),
      $axios.get(aurl + '/api/28-web/sysDict/getSysDictByCodeGet/AF025')
    ])
    console.log(listD.data.data.slice(-13).length, 'listD')
    //codeA过节后继续
    // console.log(codeB, 'codeA')
    if (
      listA.data.status == 200 ||
      listB.data.status == 200 ||
      codeA.data.status == 200 ||
      codeB.data.status == 200 ||
      codeC.data.status == 200
    ) {
      listA.data.data.list.forEach(item => {
        item.num = Math.ceil(Math.random() * 30)
      })
      // for (var i = 3; i < listD.data.data.length; i--) {
      //   let listD1 = listD.data.data
      //   console.log(listD1.length, 'listD1')
      // }
      let codeObj = {
        name: '不限',
        code: ''
      }
      codeA.data.data.unshift(codeObj)
      codeB.data.data.unshift(codeObj)
      codeC.data.data.unshift(codeObj)
      return {
        lineLists: listA.data.data.list,
        lineRecoms: listB.data.data,
        lineLinks: listC.data.data,
        lineHots: listD.data.data,
        lineCodeA: codeA.data.data,
        lineCodeB: codeB.data.data,
        lineCodeC: codeC.data.data
      }
    }
  },
  computed: {
    // filteredItems() {
    //   // return lineHots.slice(0, 3)
    // }
  },
  mounted() {
    let _this = this
    // console.log(_this.$router, _this.$route.params.current.query, 'this.$route')
    // console.log(_this.$route.query.belongBrandCode, 'belongBrandCode')
    seajs.use(['/js/city.js', 'layer'], function() {
      seajs.use(
        [
          '/js/city-picker.js',
          '/js/jquery.pagination.min.js',
          '/js/AFLC_API.js'
        ],
        function() {
          seajs.use(['/line/js/list_wlzx.js'], function() {
            seajs.use(['/js/collection.js'], function() {
              seajs.use(['/js/gaodemap2.js'], function() {
                let orderBy = 'default'
                let currentPage = 1
                $('.list_tiaoj span').click(function() {
                  //alert("1");
                  $('.list_tiaoj span').removeClass('active')
                  $(this).toggleClass('active')
                })

                function onCheckPage() {
                  var beginPage = parseInt(
                    document.beginPagefrm.beginPage.value
                  )
                  if (isNaN(beginPage)) {
                    alert('请输入数字！')
                    return false
                  }
                  if (beginPage <= 0) {
                    beginPage = 1
                  }
                  if (beginPage > 100) {
                    beginPage = 100
                  }
                  if (beginPage > 1) {
                    document.beginPagefrm.action =
                      '{dede:type typeid=’19′ row=1}[field:typelink /]{/dede:type}&PageNo=' +
                      beginPage
                  } else {
                    document.beginPagefrm.action =
                      '{dede:type typeid=’19′ row=1}[field:typelink /]{/dede:type}'
                  }
                  return true
                }

                // $('#pagination1').pagination({
                //   currentPage: 1,
                //   totalPage: process02(1),
                //   callback: function(current) {
                //     console.log(current, 'current')
                //     $('#current1').text(current)
                //     process02(current)
                //     window.location.href = '#top'
                //   }
                // })
                // onCheckPage()
                $('#pagination1').pagination({
                  currentPage: 1,
                  totalPage: 6,
                  callback: function(current) {
                    $('#current1').text(current)
                    // orderBy = ''
                    currentPage = current
                    fetchLineList(currentPage, orderBy)
                    window.location.href = '#top'
                  }
                })
                //切换专线信息
                function clickPrice() {
                  $('#seq0').click(function() {
                    console.log('clear排序')
                    orderBy = 'default'
                    fetchLineList(currentPage, orderBy)
                  })
                  $('#seq1').click(function() {
                    console.log('orderNumber排序')
                    orderBy = 'orderDesc'
                    fetchLineList(currentPage, orderBy)
                  })
                  $('#seq2').click(function() {
                    console.log('transportAging排序')
                    orderBy = 'transportAgingAsc'
                    fetchLineList(currentPage, orderBy)
                  })
                  $('#tj_price2').click(function() {
                    $('#tj_price').css('display', 'none')
                    // console.log('weigthPrice排序')
                    orderBy = 'weigthPrice'
                    fetchLineList(currentPage, orderBy)
                  })
                  $('#tj_price1').click(function() {
                    $('#tj_price').css('display', 'none')
                    // console.log('lightPrice排序')
                    orderBy = 'lightPrice'
                    fetchLineList(currentPage, orderBy)
                  })
                }
                function fetchLineList(currentPage, orderBy) {
                  let aurl = ''
                  let startp = _this.$route.query.startp
                  let startc = _this.$route.query.startc
                  let starta = _this.$route.query.starta
                  let endp = _this.$route.query.endp
                  let enda = _this.$route.query.enda
                  let endc = _this.$route.query.endc
                  let belongBrandCode = _this.$route.query.belongBrandCode
                  let departureTimeCode = _this.$route.query.departureTimeCode
                  let otherServiceCode = _this.$route.query.otherServiceCode
                  let parkId = _this.$route.query.parkId
                  let companyName = _this.$route.query.companyName
                  //
                  // if (
                  //   !startp ||
                  //   startp == 'null' ||
                  //   !startc ||
                  //   startc == 'null' ||
                  //   !starta ||
                  //   starta == 'null' ||
                  //   !endp ||
                  //   endp == 'null' ||
                  //   !enda ||
                  //   enda == 'null' ||
                  //   !endc ||
                  //   endc == 'null' ||
                  //   !departureTimeCode ||
                  //   departureTimeCode == 'null' ||
                  //   !otherServiceCode ||
                  //   otherServiceCode == 'null' ||
                  //   !parkId ||
                  //   parkId == 'null' ||
                  //   !companyName ||
                  //   companyName == 'null'
                  // ) {
                  //   startp = ''
                  //   startc = ''
                  //   starta = ''
                  //   endp = ''
                  //   enda = ''
                  //   endc = ''
                  //   // belongBrandCode = ''
                  //   departureTimeCode = ''
                  //   otherServiceCode = ''
                  //   parkId = ''
                  //   companyName = ''
                  // }

                  if (process.server) {
                    aurl = 'http://localhost:3000'
                  }
                  $axios
                    .post(aurl + `/api/28-web/range/list`, {
                      currentPage: currentPage,
                      pageSize: 6,
                      orderBy: orderBy,
                      startProvince: startp,
                      startCity: startc,
                      startArea: starta,
                      endProvince: endp,
                      endCity: endc,
                      endArea: enda,
                      belongBrandCode: belongBrandCode,
                      departureTimeCode: departureTimeCode,
                      otherServiceCode: otherServiceCode,
                      parkId: parkId
                    })
                    .then(res => {
                      // res.data.data.num = Math.ceil(Math.random() * 30)
                      // console.log('this.lineList12:', res.data.data)
                      res.data.data.list.forEach(item => {
                        item.num = Math.ceil(Math.random() * 30)
                        // console.log('this.lineList:', item.num)
                      })
                      _this.lineLists = res.data.data.list

                      // return {
                      //   lineList: res.data.data.list
                      // }
                    })
                }
                clickPrice()
              })
            })
          })
        }
      )
    })
  },
  methods: {}
}
</script>

<style lang="scss">
.lll-zhuangXian {
  margin-bottom: 70px;
  .list_left {
    .zx_sx1 {
      border-bottom: 1px solid #e7e7e7;
      line-height: 50px;
      font-size: 18px;
      font-weight: bold;
      .biaozhi {
        width: 3px;
        height: 18px;
        background-color: #3f94ee;
        border-radius: 1px;
        margin: 16px 12px 0px 10px;
        float: left;
      }
      .zx_sxl_tit {
        color: #3f94ee;
      }
    }
  }

  .textareaDiv {
    height: 64px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border-color: #ccc;
  }
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
  .lll-line--othet {
    .lll-recommend:first-of-type {
      ul.footerLinks {
        li {
          width: 16.67%;
          /* text-align: center; */
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .lll-recommend:last-of-type {
      ul.footerLinks {
        li {
          width: 14.63%;
          /* text-align: center; */
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .lll-line-bot {
    width: 1400px;
    height: auto !important;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    margin-top: 20px;
    .lll-recommend {
      padding-bottom: 20px;
      border-bottom: dotted 1px #e7e7e7;
      ul.footerLinks {
        li {
          width: 17.5%;
          /* text-align: center; */
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .lll-recommend:last-of-type {
      border-bottom-color: #fff;
    }
  }
  #search_wlLine {
    width: 42px;
    height: 28px;
    border-radius: 2px;
    color: #f9f9f9;
    font-size: 16px;
    background: no-repeat url(../../static/line/images/wlgs_search.png) 10px 6px
      #3f94ee;
    text-align: left;
    padding-left: 30px;
    margin-left: 20px;
    padding-right: 5px;
    cursor: pointer;
  }
  .list_right {
    .tj_list_box {
      .tj_list4 {
        border-bottom: none;
      }
    }
    .list-box-r-hot {
      /*min-height: 246px;*/
      /*height: auto !important;*/
      /*width: 344px;*/
      /*margin: 0px 0px 0 16px;*/
      /*float: left;*/
      margin-top: 20px;
      background: #fff;
      padding-bottom: 10px;

      .zx_sx {
        border-bottom: 2px solid #2577e3;
        margin-bottom: 1px;
        color: #2577e3;
      }
      .hot-ul {
        ul:first-of-type,
        ul:last-of-type {
          li {
            display: flex;
            padding: 20px 14px 0px 16px;
            font-size: 14px;
            .hot-num {
              width: 20px;
              height: 20px;
              background: #f65050;
              text-align: center;
              line-height: 20px;
              color: #fff;
              margin-top: 20px;
            }
            img {
              margin: 0 8px 0 15px;
            }
            p {
              margin-top: 20px;
              color: #333;
              /*padding-right: 10px;*/
              width: 138px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            span.hot-peonum {
              margin-top: 20px;
              font-size: 12px;
              padding-left: 10px;
              color: #666;
              i {
                color: #f14747;
                padding-left: 5px;
              }
            }
          }
          li:nth-child(2) {
            .hot-num {
              background: #ff8547;
            }
          }
          li:nth-child(3) {
            .hot-num {
              background: #ffac38;
            }
          }
        }
        ul.lastul {
          li {
            padding: 0px 14px 0px 16px;
            span.hot-num {
              background: #8eb9f5 !important;
            }
            p {
              /*width: 62%;*/
              padding-left: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .hot-peonum {
              margin-left: 55px;
            }
          }
        }
      }
    }
    .list-box-r-phone {
      /*min-height: 246px;*/
      /*height: auto !important;*/
      /*width: 344px;*/
      /*margin: 20px 0px 0 16px;*/
      /*float: left;*/
      margin-top: 20px;
      background: url('/line/images/helpbg.png');

      .zx_p_tit {
        overflow: hidden;
        line-height: 50px;
        height: 50px;
        color: #3f94ee;
        font-size: 18px;
        font-weight: bold;
        padding-left: 20px;
      }
    }
  }

  .lll-recommend {
    transition: all 0.4s;
    background: #fff;
    .zx_sx {
      border-bottom: 1px solid #e7e7e7;
      padding-top: 20px;
    }
  }

  /*显示隐藏S */
  .toggle-btn {
    float: right;
    margin: 12px 15px 0 4px;
    height: 24px;
    line-height: 24px;
    border: solid 1px #e8e8e8;
    padding: 0 9px;
    background: #fff;
    color: #6b6b6b;
    cursor: pointer;
    text-decoration: none;
    font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
  }

  .show-collapse .expand {
    display: none;
    margin-top: 2px;
  }
  .toggle-btn .arrow {
    margin-left: 8px;
    vertical-align: middle;
  }
  .icon-btn-arrow-up-2,
  .icon-btn-arrow-down-2 {
  }

  .icon-btn-arrow-down-2 {
    margin-top: 5px;
    display: inline-block;
    background-image: url('../../static/line/images/xiajt.png');
    background-repeat: no-repeat;
    width: 12px;
    height: 7px;
    cursor: pointer;
  }
  .show-collapse .collapse {
    display: inline-block;
    margin-top: 2px;
  }
  .toggle-btn .arrow {
    margin-left: 8px;
    vertical-align: middle;
  }

  .icon-btn-arrow-up-2 {
    margin-top: 5px;
    display: inline-block;
    background: url(../../static/line/images/up_jt.png);
    background-repeat: no-repeat;
    width: 12px;
    height: 7px;
    cursor: pointer;
  }
  /**/
  .form-line {
    #wlLineFrom {
      width: 190px;
      background: url(../../static/line/images/start_addr.png) no-repeat 200px
        8px #fff;
      background-size: 16px 17px;
      padding-right: 20px;
    }
    #wlLineTo {
      width: 190px;
      background: url(/line/images/end_addr.png) no-repeat 200px 8px #fff;
      background-size: 16px 17px;
      padding-right: 20px;
    }
  }

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
}
</style>
