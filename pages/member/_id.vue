<template>
  <div>
    <div 
      id="content" 
      class="index-banner">
      <div class="banner_text">
        <span>
          <em id="nr_name">{{ company.contactsName }}</em>&nbsp;
          <em id="nr_tel">{{ company.mobile }}</em>
        </span>
      </div>
      <div class="banner-box">
        <div class="banner-num">
          <span class="dot cur">1</span>
          <span class="dot">2</span>
          <span class="dot">3</span>
        </div>
      </div>

      <div class="content-main index-main">
        <div class="bill-search">
          <h2 class="bill-title">
            <img src="/member/images/001search.png">
            <span>运单查询</span>
          </h2>
          <div 
            id="tab_onlineShipping" 
            class="search_txt">
            <textarea
              id="txtbill"
              type="text"
              maxlength="60"
              class="query_txt"
              placeholder="最多输入10个单号（多个用；隔开）"
            />

            <!-- <textarea type="text" id="txtbill" maxlength="20"  class="query_txt" placeholder="最多输入10个单号（多个用；隔开）" onkeyup="this.value = this.value.replace(/\D/g, &#39;&#39;)" onafterpaste="this.value=this.value.replace(/\D/g,&#39;&#39;)">
                </textarea>
            -->
          </div>
          <input 
            id="btn_onlineTracking" 
            type="button" 
            class="search_btn" 
            value="查询">
            <!--
                <div class="search-record">
                    <span>最近查询记录：</span>
                    <em>无</em>
                </div>
          -->
        </div>
        <div class="shortcut-menu">
          <a
            id="btn_onlineShipping"
            class="menu-item js-express-ship item-1"
            href="13001010101-wangdian"
            target="_blank"
          >
            <div class="menu-icon">
              <img src="/member/images/002wangdian.png">
            </div>
            <span>网点分布</span>
          </a>
          <a
            id="btn_siteQuery"
            class="menu-item js-express-website item-2"
            href="13001010101-line"
            target="_blank"
          >
            <div class="menu-icon">
              <img src="/member/images/003wuliu.png">
            </div>
            <span>物流专线</span>
          </a>
          <a
            id="btn_offerTime"
            :href="mid + '-order?uid=' + mid + '&publishId=' + mid" 
            class="menu-item js-express-price item-3 need_companyId" 
            target="_blank"
          >
            <div class="menu-icon">
              <img src="/member/images/004xiadan.png">
            </div>
            <span>在线下单</span>
          </a>
          <a
            id="qq"
            :href="'http://wpa.qq.com/msgrd?v=3&uin=' + company.qq + '&site=qq&menu=yes'"
            class="menu-item js-express-complain item-4"
            target="_blank"
          >
            <div class="menu-icon">
              <img src="/member/images/005kf.png">
            </div>
            <span>在线客服</span>
          </a>
        </div>
      </div>
    </div>
    <div id="main">
      <div class="h50"/>
      <div class="main1">
        <div class="main1_left main1_box fl">
          <div class="main1_bt">
            <i/>
            <span>产品与服务</span>
          </div>

          <div 
            v-if="plen >= 5 || plen < 1" 
            class="main1_nr cp_5_8">
            <ul>
              <li class="item1">
                <img src="/member/images/index/cp_01.jpg">
              </li>
              <li class="item2">
                <img src="/member/images/index/cp_02.jpg">
              </li>
              <li class="item3">
                <img src="/member/images/index/cp_03.jpg">
              </li>
              <li class="item4">
                <img src="/member/images/index/cp_04.jpg">
              </li>
              <li class="item5">
                <img src="/member/images/index/cp_05.jpg">
              </li>
              <li class="item6">
                <img src="/member/images/index/cp_06.jpg">
              </li>
              <li class="item7">
                <img src="/member/images/index/cp_07.jpg">
              </li>
              <li class="item8">
                <img src="/member/images/index/cp_08.jpg">
              </li>
              <li 
              class="item9">
                <img src="/member/images/index/cp_09.jpg">
              </li>
            </ul>
          </div>

          <div 
            v-if="plen === 1" 
            class="main1_nr cp_1">
            <ul>
              <li class="item1">
                <img src="/member/images/index/cp_1_01.jpg">
                <em>整车运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item2">
                <img src="/member/images/index/cp_1_02.jpg">
                <em>零担运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item3">
                <img src="/member/images/index/cp_1_03.jpg">
                <em>专线运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item4">
                <img src="/member/images/index/cp_1_04.jpg">
                <em>特大货物运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item5">
                <img src="/member/images/index/cp_1_05.jpg">
                <em>大件运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item6">
                <img src="/member/images/index/cp_1_06.jpg">
                <em>集装箱运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item7">
                <img src="/member/images/index/cp_1_07.jpg">
                <em>冷藏运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item8">
                <img src="/member/images/index/cp_1_08.jpg">
                <em>危险品运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item9">
                <img src="/member/images/index/cp_1_09.jpg">
                <em>仓储</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
            </ul>
          </div>

          <div 
            v-if="plen === 2" 
            class="main1_nr cp_2">
            <ul>
              <li class="item1">
                <img src="/member/images/index/cp_2_01.jpg">
                <em>整车运输</em>
              </li>
              <li class="item2">
                <img src="/member/images/index/cp_2_02.jpg">
                <em>零担运输</em>
              </li>
              <li class="item3">
                <img src="/member/images/index/cp_2_03.jpg">
                <em>专线运输</em>
              </li>
              <li class="item4">
                <img src="/member/images/index/cp_2_04.jpg">
                <em>特大货物运输</em>
              </li>
              <li class="item5">
                <img src="/member/images/index/cp_2_05.jpg">
                <em>大件运输</em>
              </li>
              <li class="item6">
                <img src="/member/images/index/cp_2_06.jpg">
                <em>集装箱运输</em>
              </li>
              <li class="item7">
                <img src="/member/images/index/cp_2_07.jpg">
                <em>冷藏运输</em>
              </li>
              <li class="item8">
                <img src="/member/images/index/cp_2_08.jpg">
                <em>危险品运输</em>
              </li>
              <li class="item9">
                <img src="/member/images/index/cp_2_09.jpg">
                <em>仓储</em>
              </li>
            </ul>
          </div>

          <div 
            v-if="plen === 3" 
            class="main1_nr cp_3">
            <ul>
              <li class="item1">
                <img src="/member/images/index/cp_3_01.jpg">
                <em>整车运输</em>
              </li>
              <li class="item2">
                <img src="/member/images/index/cp_3_02.jpg">
                <em>零担运输</em>
              </li>
              <li class="item3">
                <img src="/member/images/index/cp_3_03.jpg">
                <em>专线运输</em>
              </li>
              <li class="item4">
                <img src="/member/images/index/cp_3_04.jpg">
                <em>特大货物运输</em>
              </li>
              <li class="item5">
                <img src="/member/images/index/cp_3_05.jpg">
                <em>大件运输</em>
              </li>
              <li class="item6">
                <img src="/member/images/index/cp_3_06.jpg">
                <em>集装箱运输</em>
              </li>
              <li class="item7">
                <img src="/member/images/index/cp_3_07.jpg">
                <em>冷藏运输</em>
              </li>
              <li class="item8">
                <img src="/member/images/index/cp_3_08.jpg">
                <em>危险品运输</em>
              </li>
              <li class="item9">
                <img src="/member/images/index/cp_3_09.jpg">
                <em>仓储</em>
              </li>
            </ul>
          </div>

          <div 
            v-if="plen === 4" 
            class="main1_nr cp_4">
            <ul>
              <li class="item1">
                <img src="/member/images/index/cp_4_01.jpg">
              </li>
              <li class="item2">
                <img src="/member/images/index/cp_4_02.jpg">
              </li>
              <li class="item3">
                <img src="/member/images/index/cp_4_03.jpg">
              </li>
              <li class="item4">
                <img src="/member/images/index/cp_4_04.jpg">
              </li>
              <li class="item5">
                <img src="/member/images/index/cp_4_05.jpg">
              </li>
              <li class="item6">
                <img src="/member/images/index/cp_4_06.jpg">
              </li>
              <li class="item7">
                <img src="/member/images/index/cp_4_07.jpg">
              </li>
              <li class="item8">
                <img src="/member/images/index/cp_4_08.jpg">
              </li>
              <li class="item9">
                <img src="/member/images/index/cp_4_09.jpg">
              </li>
            </ul>
          </div>
        </div>
        <div class="main1_right main1_box fl">
          <div class="main1_bt">
            <i/>
            <span>增值服务</span>
          </div>

          <div 
            v-if="olen >= 5 || olen < 1" 
            class="main1_nr fw_5_8">
            <ul>
              <li class="item1">
                <img src="/member/images/index/fw_01.jpg">
              </li>
              <li class="item2">
                <img src="/member/images/index/fw_02.jpg">
              </li>
              <li class="item3">
                <img src="/member/images/index/fw_03.jpg">
              </li>
              <li class="item4">
                <img src="/member/images/index/fw_04.jpg">
              </li>
              <li class="item5">
                <img src="/member/images/index/fw_05.jpg">
              </li>
              <li class="item6">
                <img src="/member/images/index/fw_06.jpg">
              </li>
              <li class="item7">
                <img src="/member/images/index/fw_07.jpg">
              </li>
              <li class="item8">
                <img src="/member/images/index/fw_08.jpg">
              </li>
            </ul>
          </div>

          <div 
            v-if="olen === 1" 
            class="main1_nr fw_1">
            <ul>
              <li class="item1">
                <img src="/member/images/index/fw_1_01.jpg">
                <em>送货上楼</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item2">
                <img src="/member/images/index/fw_1_02.jpg">
                <em>保价运输</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item3">
                <img src="/member/images/index/fw_1_03.jpg">
                <em>运费到付</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item4">
                <img src="/member/images/index/fw_1_04.jpg">
                <em>代收货款</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item5">
                <img src="/member/images/index/fw_1_05.jpg">
                <em>开发票</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item6">
                <img src="/member/images/index/fw_1_06.jpg">
                <em>上门提货</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item7">
                <img src="/member/images/index/fw_1_07.jpg">
                <em>签单回收</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
              <li class="item8">
                <img src="/member/images/index/fw_1_08.jpg">
                <em>时效保障</em>
                <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i>
              </li>
            </ul>
          </div>

          <div 
            v-if="olen === 2" 
            class="main1_nr fw_2">
            <ul>
              <li class="item1">
                <img src="/member/images/index/fw_2_01.jpg">
                <em>送货上楼</em>
              </li>
              <li class="item2">
                <img src="/member/images/index/fw_2_02.jpg">
                <em>保价运输</em>
              </li>
              <li class="item3">
                <img src="/member/images/index/fw_2_03.jpg">
                <em>运费到付</em>
              </li>
              <li class="item4">
                <img src="/member/images/index/fw_2_04.jpg">
                <em>代收货款</em>
              </li>
              <li class="item5">
                <img src="/member/images/index/fw_2_05.jpg">
                <em>开发票</em>
              </li>
              <li class="item6">
                <img src="/member/images/index/fw_2_06.jpg">
                <em>上门提货</em>
              </li>
              <li class="item7">
                <img src="/member/images/index/fw_2_07.jpg">
                <em>签单回收</em>
              </li>
              <li class="item8">
                <img src="/member/images/index/fw_2_08.jpg">
                <em>时效保障</em>
              </li>
            </ul>
          </div>

          <div 
            v-if="olen === 3" 
            class="main1_nr fw_3">
            <ul>
              <li class="item1">
                <img src="/member/images/index/fw_3_01.jpg">
                <em>送货上楼</em>
              </li>
              <li class="item2">
                <img src="/member/images/index/fw_3_02.jpg">
                <em>保价运输</em>
              </li>
              <li class="item3">
                <img src="/member/images/index/fw_3_03.jpg">
                <em>运费到付</em>
              </li>
              <li class="item4">
                <img src="/member/images/index/fw_3_04.jpg">
                <em>代收货款</em>
              </li>
              <li class="item5">
                <img src="/member/images/index/fw_3_05.jpg">
                <em>开发票</em>
              </li>
              <li class="item6">
                <img src="/member/images/index/fw_3_06.jpg">
                <em>上门提货</em>
              </li>
              <li class="item7">
                <img src="/member/images/index/fw_3_07.jpg">
                <em>签单回收</em>
              </li>
              <li class="item8">
                <img src="/member/images/index/fw_3_08.jpg">
                <em>时效保障</em>
              </li>
            </ul>
          </div>

          <div 
            v-if="olen === 4" 
            class="main1_nr fw_4">
            <ul>
              <li class="item1">
                <img src="/member/images/index/fw_4_01.jpg">
              </li>
              <li class="item2">
                <img src="/member/images/index/fw_4_02.jpg">
              </li>
              <li class="item3">
                <img src="/member/images/index/fw_4_03.jpg">
              </li>
              <li class="item4">
                <img src="/member/images/index/fw_4_04.jpg">
              </li>
              <li class="item5">
                <img src="/member/images/index/fw_4_05.jpg">
              </li>
              <li class="item6">
                <img src="/member/images/index/fw_4_06.jpg">
              </li>
              <li class="item7">
                <img src="/member/images/index/fw_4_07.jpg">
              </li>
              <li class="item8">
                <img src="/member/images/index/fw_4_08.jpg">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div 
        id="js001" 
        class="main2">
        <div class="main2_bt">
          <div class="main2_bt1">
            <div class="main2_bt1_1">
              <i/>
              <span>物流专线</span>
            </div>
            <div class="main2_bt1_2">
              <div class="search_input">
                <div class="input_div">
                  <input 
                    id="wlLineFrom" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    class="search_input1" 
                    placeholder="出发地">
                </div><span>→</span><div class="input_div">
                  <input 
                    id="wlLineTo" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    class="search_input2" 
                    placeholder="到达地">
                </div>
              </div>
              <div 
                id="search_wlLine" 
                class="search_button">
                <input 
                  class="search_search" 
                  readonly 
                  value="搜索">
              </div>
            </div>
            <div class="main2_bt1_3">
              <a 
                target="_blank" 
                href="13001010101-line.html">
                <span>更多&gt;&gt;</span>
              </a>
            </div>
          </div>
          <div class="main2_bt2">
            <ul>
              <li class="bt_01">出发地 &nbsp;→&nbsp;到达地</li>
              <li class="bt_02">专线信息</li>
              <li class="bt_03">会员类型</li>
              <li class="bt_04">人气</li>
              <li class="bt_05">操作</li>
            </ul>
          </div>
        </div>
        <div 
          v-for="(item, index) in $store.state.member.lineList"
          :key="index"
          class="zx_item" 
        >
          <ul>
            <li class="zx_item01">
              <em id="nr001">{{ item.startCity || '' }}{{ item.startArea || '' }}</em>&nbsp;→&nbsp;
              <em id="nr002">{{ item.endCity || '' }}{{ item.endArea || '' }}</em>
            </li>
            <li class="zx_item02">
              <p>
                <font>重货：
                  <i id="nr003">{{ findPrice(item.rangePrices, '1') }}</i>元/公斤
                </font>
                <span>时效：
                  <em id="nr004">{{ item.transportAging }}{{ item.transportAgingUnit }}</em>
                </span>
              </p>
              <p>
                <font>轻货：
                  <i id="nr005">{{ findPrice(item.rangePrices, '0') }}</i>元/立方
                </font>
                <span>最低一票：
                  <em id="nr006">{{ item.lowerPrice || '面议' }}</em>
                </span>
              </p>
            </li>
            <li class="zx_item03">
              <p class="p1">
                <img 
                  id="nr007" 
                  src="/images/list_wlzx/10shiming.png">
              </p>
              <p class="p2">
                <img 
                  id="nr008" 
                  src="/images/list_wlzx/11xinyong.png">
              </p>
              <p class="p3">
                <img 
                  id="nr009" 
                  src="/images/list_wlzx/12danbao.png">
              </p>
            </li>
            <li class="zx_item04">
              <p>
                <a href="javacript:void(0)">
                  <em id="nr0010">{{ item.browseNumber }}</em>人询价
                </a>
              </p>
              <p>
                <a href="javacript:void(0)">
                  <em id="nr0011">{{ item.assessNumber }}</em>条评价
                </a>
              </p>
            </li>
            <li class="zx_item05">
              <a 
                id="nr0007" 
                :href="mid + '-order?id=' + item.id + '&publishId=' + item.companyId"
                target="_blank" >
                <input 
                  class="input1" 
                  readonly 
                  value="下单">
              </a>
              <a 
                id="nr0012"
                :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId" 
                target="_blank">
                <input 
                  class="input2" 
                  readonly 
                  value="查看">
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <!--物流专线 E-->
      <div 
        id="js002" 
        class="main3">
        <div class="main3_bt1">
          <div class="main3_bt1_1">
            <i/>
            <span>网点分布</span>
          </div>
          <div class="main3_bt1_2">
            <div class="search_input">
              <input 
                id="wangdian" 
                data-toggle="city-picker" 
                data-level="district" 
                class="search_input3" 
                placeholder="请选择省-市">
            </div>
            <div class="search_button">
              <input 
                id="search_wangdian" 
                readonly 
                class="search_search" 
                value="搜索">
            </div>
          </div>
          <div class="main3_bt1_3">
            <a 
              target="_blank" 
              href="13001010101-wangdian.html">
              <span>更多&gt;&gt;</span>
            </a>
          </div>
        </div>
        <div 
          v-for="(item, index) in $store.state.member.pointList"
          :key="index"
          class="wd_item"
        >
          <p id="nr011">{{ item.pointName }}</p>
          <p>
            <img src="/member/images/wd_lxr.png">
            <em id="nr012">{{ item.name }}</em>
            <em id="nr013">{{ item.mobile }}</em>
          </p>
          <p>
            <img src="/member/images/wd_dw.png">
            <em id="nr014">{{ item.belongCityName }}</em>
          </p>
        </div>
      </div>

      <div class="main4">
        <div class="main4_left">
          <div class="main4_bt">
            <i/>
            <span>公司简介</span>
            <em>
              <a 
                target="_blank" 
                href="13001010101-jianjie.html">更多&gt;&gt;</a>
            </em>
          </div>
          <div 
            id="nr082" 
            class="main4_nr">{{ company.companyDes ? company.companyDes.substring(0, 470) + '...' : '暂无内容' }}</div>
        </div>
        <div class="main4_right">
          <div 
            class="main4_bt" 
            style="margin-left: 0px;">
            <i/>
            <span>公司动态</span>
            <em>
              <a 
                target="_blank" 
                href="13001010101-webnotice.html">更多&gt;&gt;</a>
            </em>
          </div>

          <div class="news_item news_item0">
            <a 
              href="javacript:void(0)" 
              target="_blank">
              <img src="/member/images/news_demo.png">
              <span>818刚打响 苏宁卖出第15亿台家电</span>
              <i>2018-8-31</i>
            </a>
          </div>
          <div class="news_item news_item0">
            <a 
              href="javacript:void(0)" 
              target="_blank">
              <img src="/member/images/news_demo.png">
              <span>16周年庆典，今夜充满爱和感恩</span>
              <i>2018-9-8</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  layout: 'member',
  computed: {
    plen() {
      return this.$store.state.member.company.productServiceCodeList.length
    },
    olen() {
      return this.$store.state.member.company.otherServiceCodeList.length
    },
    mid() {
      return this.$store.state.member.id
    },
    company() {
      return this.$store.state.member.company
    }
  },
  mounted() {
    var _this = this
    seajs.use(['/index/js/city-picker.data.js'], function() {
      seajs.use(
        [
          '/js/gaodemap2.js',
          '/index/js/city-picker.js',
          // '/member/js/index.js',
          '/member/js/banner.js',
          '/index/js/collection.js'
        ],
        function() {
          var productServiceCodeList = _this.company.productServiceCodeList
          var n = productServiceCodeList.length
          var otherServiceCodeList = _this.company.otherServiceCodeList
          var uid = _this.mid
          for (var i = 1; i < 10; i++) {
            if (productServiceCodeList) {
              if (productServiceCodeList.indexOf('AF0270' + i) != -1) {
                $('.main1_left .item' + i).css('display', 'block')
                $('#cp0' + i).css('display', 'block')
              }
            }
            if (otherServiceCodeList && i < 9) {
              if (otherServiceCodeList.indexOf('AF0250' + i) != -1) {
                $('.main1_right .item' + i).css('display', 'block')
              }
            }
          }
          if (n == 9) {
            $('.main1_left .item9').css('display', 'none')
          }

          $('body').click(function(e) {
            var _con = $('.bill-search ') // 设置目标区域(排除此元素)
            if (!_con.is(e.target) && _con.has(e.target).length === 0) {
              $('.bill-search').removeClass('show')
            }
          })

          $('#txtbill').mousedown(function() {
            $('.bill-search').addClass('show')
          })

          $('#btn_onlineTracking').click(function() {
            console.log("$('#txtbill').val()", $('#txtbill').val())
            var num = $('#txtbill').val()
            if (num) {
              //window.open('/ydcx&num='+num+'&uid='+uid)
              location.href = uid + '-chajian?num=' + num
            }
            if (!num) {
              alert('请先输入运单号查询！')
            }
          })

          if ($('.news_item').length <= 2) {
            $('.news_item0').css('display', 'block')
          }

          //专线搜索 S
          $('#search_wlLine').click(function() {
            var list1 = [],
              list2 = []
            $('#wlLineFrom')
              .parent('div')
              .find('.select-item')
              .each(function(i, e) {
                list1.push($(this).text())
              })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#wlLineTo')
              .parent('div')
              .find('.select-item')
              .each(function(i, e) {
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
            location.href =
              uid +
              '-line?startp=' +
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

          //网点搜索 S
          $('#search_wangdian').click(function() {
            var list1 = []
            $('#wangdian')
              .parent('div')
              .find('.select-item')
              .each(function(i, e) {
                list1.push($(this).text())
              })
            var startp = encodeURI(list1[0] || '')
            var startc = encodeURI(list1[1] || '')
            var starta = encodeURI(list1[2] || '')
            location.href =
              uid +
              '-wangdian?startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta
          })
        }
      )
    })
  },
  methods: {
    findPrice(arr, type) {
      let find = 0
      if (arr.length) {
        arr.forEach(item => {
          if (item.type === type && item.startVolume === 0) {
            find = item.discountPrice || item.primeryPrice
          }
        })
        return find
      } else {
        return 0
      }
    }
  },
  async fetch({ store, params, $axios, error }) {
    store.commit('member/setId', params.id)
    await store.dispatch('member/GETCOMPANYINFO', params.id)
    await store.dispatch('member/GETCOMPANYPOINTINFO', {
      companyId: params.id,
      pageSize: 8,
      currentPage: 1
    })
    await store.dispatch('member/GETCOMPANYLINEINFO', {
      publishId: params.id,
      pageSize: 4,
      currentPage: 1
    })
  }
}
</script>
