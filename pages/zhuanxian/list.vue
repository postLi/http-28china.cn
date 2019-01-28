<script src="../../static/line/js/arc_wlzx.js">
</script>
<template>
  <div class="lll-zhuangXian">
    <div class="list_box" >
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
              <dd><form
                name="zxaddform"
                method="post"
                action="" >
                <input
                  name="a7"
                  type="hidden"
                  value="0">
                <input
                  type="hidden"
                  name="mid"
                  value="19" >
                <input
                  type="hidden"
                  name="dopost"
                  value="search" >
                <div
                  id="wlLineFrom"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    name="cfd"
                    style="height: 100%;"
                    data-level="district"
                    type="text"
                    placeholder="请输入出发地" >
                </div>
                <img
                  class="fl list_img"
                  src="/line/images/02jiantou.png">
                <div
                  id="wlLineTo"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    name="ddd"
                    style="height: 100%;"
                    data-level="district"
                    type="text"
                    placeholder="请输入到达地" >
                </div>
                <input
                  id="wlgs_name"
                  name="wlgs"
                  type="text"
                  class="list_input"
                  style="margin-left: 16px;"
                  placeholder="请输入公司名称" >
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
                        style="position:relative;" >
                        <input
                          style="height: 100%;"
                          data-toggle="city-picker"
                          data-level="district"
                          type="text"
                          name=""
                          placeholder="请选择园区所在地" >
                      </div>
                      <input
                        id="wlyq_name"
                        class="list_wlyq_input"
                        placeholder="请输入园区名称" >
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
                <a
                  class="now all"
                  href="/plus/list.php?tid=4" >不限</a>
              </dd>
              <dt>选择品牌&nbsp;:</dt>
              <dd id="tjcx_02" >
                <a
                  class="now all"
                  href="/plus/list.php?tid=4"
                >不限</a>
              </dd>
              <dt >其他&nbsp;:</dt>
              <dd id="tjcx_03">
                <a
                  class="now all"
                  href="/plus/list.php?tid=4" >不限</a>
                <a class="shiming" >实名认证</a>
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036 list_wlzx" >

          <div class="zx_sx"><span class="biaozhi"/><span>专线信息</span></div>
          <div class="list_tiaoj"><span
            id="seq0"
            class="active">默认排序</span><span
              id="seq1"
              title="交易量从高到低">交易量</span><span
                id="seq2"
                title="运输时效从低到高">运输时效</span><span
                  id="seq3" >重货价格</span>
            <div
              id="tj_price">
              <span id="tj_price1">轻货价格从低到高</span>
              <span id="tj_price2">重货价格从低到高</span>
            </div>
          </div>
          <div class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他线路哦</span>
            <img src="/line/images/none_pic.png">
          </div>
          <ul
            class="wlzx_list"
            style="display: none;">
            <li id="wlzx_list_0">
              <div class="sc_num"><img src="/line/images/ll_num.png"><span><i><em id="nr1001"/>人浏览</i></span></div>

              <div class="view_num"><img src="/line/images/pj_num.png"><span><i><em id="nr1002"/>条评论</i></span></div>
            </li>
            <li class="wlzx_list_1">
              <a
                id="nr_a21"
                target="_blank"
                class="nr_a21_img"><img
                  class="scrollLoading"
                  width="180"
                  height="180"
            ></a></li>
            <li class="wlzx_list_2">
              <p class="p1">
                <a
                  id="nr02"
                  class="list-title-a"
                  target="_blank" >
                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em id="nr02_1"/>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em id="nr02_2"/>
                </a>
              </P>
              <p class="p2">
                <!--<img src="/line/images/04gongsi.png">-->
                <a
                  id="nr03"
                  href="#"
                  target="_blank"><font
                    id="nr04"
                    class=""/></a>
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
              <p class="p5">
                <img
                  id="list_shiming"
                  src="/line/images/10shiming.png">
                <img
                  id="list_xinyong"
                  src="/line/images/11xinyong.png">
                <img
                  id="list_danbao"
                  src="/line/images/12danbao.png">
              </p>
              <p class="p21">
                <img
                  id="tj_shiming"
                  src="/line/images/shiming.png" >
                <img
                  id="tj_xinyong"
                  src="/line/images/xinyong.png" >
                <img
                  id="tj_danbao"
                  src="/line/images/danbao.png" >
              </p>
              <p class="p3">
                <i >说明：</i><font
                  id="nr05"
                  class=""/></p>
              <p class="p4"><i>地址：</i><font
                id="nr06"
                class=""/></p>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><i
                class="zhuo"
                style="color: #666">重货：</i><font
                  id="nr07"
                  class=""/><span style="color: #333">元/公斤</span></P>
              <p class="p2"><i
                class="zhuo"
                style="color: #666">轻货：</i><font
                  id="nr08"
                  class=""/><span style="color: #333">元/m³</span></p>
              <p class="p3"><i>时效：</i><span id="nr09"/></p>
              <p class="p4"><i>频率：</i><span id="nr10"/></p>
            </li>
            <li class="wlzx_list_6">
              <p class="p1"><a
                id="nr_order"
                target="_blank"><input
                  id="fahuo"
                  readonly=""
                  value="下单"></a>
              </p><p class="p2"><a
                id="nr_a22"
                target="_blank"><input
                  id="wlzx_list_view"
                  readonly=""
                  value="查看"></a>
            </p><p class="p3"/></li>
          </ul>
        </div>

        <!--分页-->
        <div class="clearfix">
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


        <div class="lll-recommend" >
          <div
            class="zx_sx"
          ><span class="biaozhi"/><span>28快运为您推荐</span></div>
          <ul>
            <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span></li>
            <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span></li>
          </ul>
        </div>
        <div
          class="lll-recommend"
          style="padding-top: 40px;">
          <div
            class="zx_sx"
          ><span class="biaozhi"/><span>其他相关推荐</span></div>
          <ul>
            <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span></li>
            <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span></li>
            <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span></li>
          </ul>
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
        <div class="tj_none">
          <span>没有相关线路推荐</span>
        </div>
        <div class="tj_list_box">
          <div
            class="tj_list"
            style="display: none;">
            <div class="p p1">
              <img src="/line/images/04gongsi.png" ><span><a
                id="tj_a011"
                target="_blank"
                href="#">广州明科物流有限公司</a></span>
              <img
                id="tj_shiming"
                src="/line/images/shiming.png" >
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
                class="list-title-a"
                target="_blank" >
                <span class="list-icon lines-sprite-icons icon-start"/>
                <em id="tj011"/>
                <span class="list-icon lines-sprite-icons icon-through"/>
                <span class="list-icon lines-sprite-icons icon-end"/>
                <em id="tj012"/>
              </a>
            </div>

            <div class="p p3">
              <ul>
                <li class="tj_left"><i>时效：</i><span id="tj015"/></li>
                <li class="tj_right"><i>最低一票：</i><span id="tj016"/></li>
                <li class="tj_left"><i >重货：</i><font id="tj013" /><span >元/公斤</span></li>
                <li class="tj_right"><i >轻货：</i><font id="tj014" /><span >元/m³</span></li>
              </ul>

            </div>

            <div class="p p6">
              <div class="sc_num1"><img src="/line/images/ll_num.png"><span><i><em id="tj101"/>人浏览</i></span></div>
              <div class="view_num1"><img src="/line/images/pj_num.png"><span><i><em id="tj102"/>条评论</i></span></div>

            </div>
          </div>
        </div>

      </div>
      <div class="list-box-r-hot">

        <div class="zx_sx"><span class="biaozhi" />企业月人气榜</div>
        <div class="tj_none">
          <span>没有相关企业月人气榜</span>
        </div>
        <ul>
          <li><span class="hot-num">1</span><img
            src="/line/images/touxiang1.png"
            alt=""
            width="50"
            height="50">
          <p>新光速惠快运有限公司</p><span class="hot-peonum">人气值:<i>1590</i></span></li>
          <li><span class="hot-num">2</span><img
            src="/line/images/touxiang2.png"
            alt=""
            width="50"
            height="50">
          <p>新光速惠快运有限公司</p><span class="hot-peonum">人气值:<i>1590</i></span></li>
          <li><span class="hot-num">3</span><img
            src="/line/images/touxiang3.png"
            alt=""
            width="50"
            height="50">
          <p>新光速惠快运有限公司</p><span class="hot-peonum">人气值:<i>1590</i></span></li>
        </ul>
        <ul class="lastul">
          <li><span class="hot-num">4</span><p>扬州物流公司</p><span class="hot-peonum">人气值:<i>1590</i></span></li>
          <li><span class="hot-num">5</span><p>扬州物流公司</p><span class="hot-peonum">人气值:<i>1590</i></span></li>
        </ul>
        <!--<div class="zx_sx"><span class="biaozhi"/><span>专线信45息推荐</span></div>-->
        <!--<div class="tj_none">-->
        <!--<span>没有相关线路推荐23</span>-->
        <!--</div>-->
      </div>
      <div class="list-box-r-phone">
        <div class="zx_p_tit">帮我找优质承运商</div>
        <div class="list-box-r-top">
          <form action="">
            <!--<span>出发地</span>-->
            <div class="ltl-input">
              <input
                id="right-bar-form"
                autocomplete="off"
                wtmap=""
                type="text"
                class="ltl-location"
                placeholder="请选择出发地">
              <i class="ltl-icons ss56-common-sprite-icon ltl-ico-start"/>
            </div>
            <!--<span>目的地</span>-->
            <div class="ltl-input">
              <input
                id="right-bar-to"
                autocomplete="off"
                wtmap=""
                type="text"
                class="ltl-location"
                placeholder="请选择目的地">
              <i class="ltl-icons ss56-common-sprite11 ltl-ico-end"/>
            </div>
            <div class="ltl-input">
              <input
                type="text"
                class="ltl-location"
                placeholder="备注信息，如：期望发货时间、货物体积重量
等信息...">
            </div>
            <div class="ltl-input">
              <input
                type="text"
                class="ltl-location phone-num"
                placeholder="11位手机号"
                style="width: 60%"
                maxlength="11">
              <input
                class="phone-btn"
                type="button"
                value="找到通知我">
            </div>
            <!--<input-->
            <!--id="check-fee"-->
            <!--type="button"-->
            <!--value="查询零担运费"-->
            <!--class="right-top-btn">-->
          </form>
        </div>
      </div>
    </div>
    <div class="lll-line-bot">
      <div
        class="lll-recommend">
        <div
          class="zx_sx"
        ><span class="biaozhi"/><span>全国热门物流货运专线</span></div>
        <ul style="border-bottom: 2px dotted #e7e7e7">
          <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span><span>北京车源信息</span></li>
          <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span><span>北京车源信息</span></li>
        </ul>
      </div>
      <div
        class="lll-recommend">
        <div
          class="zx_sx"
        ><span class="biaozhi"/><span>北京出发物流专线</span></div>
        <ul style="border-bottom: 2px dotted #e7e7e7">
          <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span><span>北京车源信息</span></li>
          <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span><span>北京车源信息</span></li>
        </ul>
      </div>
      <div
        class="lll-recommend">
        <div
          class="zx_sx"
        ><span class="biaozhi"/><span>广州到北京物流专线相关信息</span></div>
        <ul style="border-bottom: 2px dotted #e7e7e7">
          <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span><span>北京车源信息</span></li>
          <li><span>广州到北京物流专线</span><span>广州物流专线</span><span>北京物流专线</span><span>北京物流公司</span><span>广州到北京整车运输</span><span>广州车源信息</span><span>北京车源信息</span><span>北京车源信息</span></li>
        </ul>
      </div>
    </div>

    <div class="h70"/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/list_wlzx.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ]
  },
  mounted() {
    seajs.use(['../../js/city.js', 'layer'], function() {
      seajs.use(
        [
          '../../js/city-picker.js',
          '../../js/jquery.pagination.min.js',
          '../../js/AFLC_API.js'
        ],
        function() {
          seajs.use(['/line/js/list_wlzx.js'], function() {
            seajs.use(['../../js/collection.js'], function() {
              seajs.use(['../../js/gaodemap2.js'], function() {
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
                $('#pagination1').pagination({
                  currentPage: 1,
                  totalPage: process02(1),
                  callback: function(current) {
                    $('#current1').text(current)
                    process02(current)
                    window.location.href = '#top'
                  }
                })
                $('.phone-btn').click(function() {
                  var validReg = window.AFLC_VALID
                  var phoneNum = $('.phone-num').val()
                  if (validReg.MOBILE.test(phoneNum)) {
                    layer.alert('请求出错了，请尝试刷新页面')
                  } else {
                    layer.alert('请求出错了，请尝试刷新页面11')
                    // $('.phone-num').val().length = 0
                    console.log(
                      $('.phone-num').val(),
                      $('.phone-num').val().length,
                      'phoneNum.length'
                    )
                  }
                })
              })
            })
          })
        }
      )
    })
  }
}
</script>

<style lang="scss">
.lll-zhuangXian {
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
  .lll-line-bot {
    width: 1400px;
    height: auto !important;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    margin-top: 20px;
  }
  #search_wlLine {
    width: 42px;
    height: 28px;
    border-radius: 2px;
    color: #f9f9f9;
    font-size: 16px;
    background: no-repeat url(../../static/images/list_wlzx/wlgs_search.png)
      10px 6px #3f94ee;
    text-align: left;
    padding-left: 30px;
    margin-left: 20px;
    padding-right: 5px;
    cursor: pointer;
  }
  .list-box-r-hot {
    min-height: 246px;
    height: auto !important;
    width: 344px;
    margin: 0px 0px 0 16px;
    float: left;
    background: #fff;
    .zx_sx {
      border-bottom: 2px solid #2577e3;
      margin-bottom: 1px;
      color: #2577e3;
    }
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
          width: 62%;
          padding-left: 16px;
        }
      }
    }
  }
  .list-box-r-phone {
    min-height: 246px;
    height: auto !important;
    width: 344px;
    margin: 20px 0px 0 16px;
    float: left;
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
    .list-box-r-top {
      background: rgba(255, 255, 255, 0.1);
      padding-top: 0 !important;
      margin-bottom: 0px !important;
    }

    .phone-btn {
      font-size: 14px;
      padding: 7px 18px;
      margin-left: 10px;
      background-color: #589def;
      color: #ffffff;
      border-style: none;
    }
    .phone-btn:hover {
      background-color: #2577ff;
    }
  }
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
    background: url(../../static/images/list_wlzx/xiajt.png);
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
    background: url(../../static/images/list_wlzx/up_jt.png);
    background-repeat: no-repeat;
    width: 12px;
    height: 7px;
    cursor: pointer;
  }
  /**/
  #wlLineFrom {
    width: 190px;
    background: url(/line/images/start_addr.png) no-repeat 200px 8px #fff;
    background-size: 16px 17px;
    padding-right: 20px;
  }
  #wlLineTo {
    width: 190px;
    background: url(/line/images/end_addr.png) no-repeat 200px 8px #fff;
    background-size: 16px 17px;
    padding-right: 20px;
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
  .ss56-common-sprite-icon {
    background-image: url(/line/images/downicon.png);
    /*background-image: url(/line/images/downicon.png);*/
    background-repeat: no-repeat;
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
