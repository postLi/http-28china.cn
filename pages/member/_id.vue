<template>
  <div>
    <div 
      id="content" 
      class="index-banner">
      <div class="banner_text">
        <span>
          <em id="nr_name"/>&nbsp;
          <em id="nr_tel"/>
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
            class="menu-item js-express-price item-3 need_companyId"
            href="13001010101-order?uid=13001010101"
            target="_blank"
          >
            <div class="menu-icon">
              <img src="/member/images/004xiadan.png">
            </div>
            <span>在线下单</span>
          </a>
          <a
            id="qq"
            class="menu-item js-express-complain item-4"
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=596803544&amp;site=qq&amp;menu=yes"
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

          <div class="main1_nr cp_5_8">
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
              <li class="item9">
                <img src="/member/images/index/cp_09.jpg">
              </li>
            </ul>
          </div>

          <div class="main1_nr cp_1">
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

          <div class="main1_nr cp_2">
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

          <div class="main1_nr cp_3">
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

          <div class="main1_nr cp_4">
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

          <div class="main1_nr fw_5_8">
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

          <div class="main1_nr fw_1">
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

          <div class="main1_nr fw_2">
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

          <div class="main1_nr fw_3">
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

          <div class="main1_nr fw_4">
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
                <input 
                  id="wlLineFrom" 
                  wtmap 
                  class="search_input1" 
                  placeholder="出发地">
                <span>→</span>
                <input 
                  id="wlLineTo" 
                  wtmap 
                  class="search_input2" 
                  placeholder="到达地">
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
          <div 
            class="zx_item" 
            style="display: none;">
            <ul>
              <li class="zx_item01">
                <em id="nr001"/>&nbsp;→&nbsp;
                <em id="nr002"/>
              </li>
              <li class="zx_item02">
                <p>
                  <font>重货：
                    <i id="nr003"/>元/公斤
                  </font>
                  <span>时效：
                    <em id="nr004"/>
                  </span>
                </p>
                <p>
                  <font>轻货：
                    <i id="nr005"/>元/立方
                  </font>
                  <span>最低一票：
                    <em id="nr006"/>
                  </span>
                </p>
              </li>
              <li class="zx_item03">
                <p class="p1">
                  <img 
                    id="nr007" 
                    src="/templets/default/images/list_wlzx/10shiming.png">
                </p>
                <p class="p2">
                  <img 
                    id="nr008" 
                    src="/templets/default/images/list_wlzx/11xinyong.png">
                </p>
                <p class="p3">
                  <img 
                    id="nr009" 
                    src="/templets/default/images/list_wlzx/12danbao.png">
                </p>
              </li>
              <li class="zx_item04">
                <p>
                  <a href="javacript:void(0)">
                    <em id="nr0010">9224</em>人询价
                  </a>
                </p>
                <p>
                  <a href="javacript:void(0)">
                    <em id="nr0011">986</em>条评价
                  </a>
                </p>
              </li>
              <li class="zx_item05">
                <a 
                  id="nr0007" 
                  target="_blank" 
                  href="13001010101-order.html">
                  <input 
                    class="input1" 
                    readonly 
                    value="下单">
                </a>
                <a 
                  id="nr0012" 
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
                wtmap="city" 
                class="search_input3" 
                placeholder="请选择&nbsp;省-市">
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
          class="wd_item" 
          style="display: none;">
          <p id="nr011"/>
          <p>
            <img src="/member/images/wd_lxr.png">
            <em id="nr012"/>
            <em id="nr013"/>
          </p>
          <p>
            <img src="/member/images/wd_dw.png">
            <em id="nr014"/>
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
            class="main4_nr">暂无内容</div>
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
  mounted() {
    seajs.use(
      [
        '/index/js/city-picker.data.js',
        '/index/js/city-picker.js',
        '/member/js/index.js',
        '/member/js/banner.js',
        '/index/js/collection.js'
      ],
      function() {
        $('body').click(function(e) {
          var _con = $('.bill-search ') // 设置目标区域(排除此元素)
          if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $('.bill-search').removeClass('show')
          }
        })

        $('#txtbill').mousedown(function() {
          $('.bill-search').addClass('show')
        })
      }
    )
  },
  fetch({ store, params }) {
    store.commit('member/setId', params.id)
  }
}
</script>
