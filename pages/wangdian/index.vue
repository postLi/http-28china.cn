<template>
  <div class="lll-wangdian">
    <div class="list_box" >
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流网点</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;margin-bottom: 20px;">
          <div
            class="zx_sx"
            style="border-bottom: 2px solid #2577e3"><span class="biaozhi"/><span>网点筛选</span>
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
              <dt>所在地&nbsp;：</dt>
              <dd><form
                name="zxaddform"
                method="post"
                action="" 
                style="float:left;"
              >
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
                  id="carLineFrom"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    id="address"
                    name="cfd"
                    style="height: 100%;width:100%;border: none;outline: none;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入出发地" >
                </div>
                <div
                  id="carLineTo"
                  class="fl list_input"
                  style="position:relative" >
                  <input
                    id="jwd"
                    name="ddd"
                    style="height: 100%;width:100%;border: none;outline: none;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入详细地址查附近网点" >
                </div>
                <input
                  id="search_wangdian"
                  name="Submit2"
                  readonly=""
                  value=" 搜索 "
                  class="list_button">
                <input
                  id="flush"
                  name="Submit2"
                  readonly=""
                  value="重置 ">
              </form>


              </dd>


              <dt>公司名称&nbsp;:</dt>

              <dd >
                <input
                  id="companyName"
                  name="cfd"
                  type="text"
                  class="list_input"
                  placeholder="请输入公司或网点名称" >
              </dd>
              <dt>所属园区:</dt>

              <dd
                id="tjcx_00"
                style="position: relative;">
                <input
                  id="select_wlyq"
                  v-model="parkName"
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
                      v-model="vo.parkName"
                      class="list_wlyq_input"
                      placeholder="请输入园区名称" >
                    <input
                      class="list_wlyq_cx"
                      readonly=""
                      value="查询"
                      @click="seachlist"
                    >
                  </div>
                  <div
                    id="js010"
                    class="wlzx_yq_nr">
                    <div class="wlzx_yq_none">
                      <font>暂无园区信息</font>
                    </div>

                    <div 
                      v-for="(item,index) in logisticsPark" 
                      :key="index" 
                      class="wlzx_yq_item"
                      @click="addTitle(item)"
                    >
                      <font id="wlzx_yq_01">{{ item.parkName }}</font>
                      <span id="wlzx_yq_02">{{ item.parkAddress }}</span>
                    </div>
                  </div>
                </div>
              </dd>
              <dt>品牌&nbsp;:</dt>

              <dd id="tjcx_02" >
                <a
                  v-for="(item,index) in AF029"
                  :class="[item.code === vo.belongBrandCode ? 'now':'all']"
                  :key="index"
                  href="javascript:"
                  @click="AF029Click(item)">{{ item.name }}</a>
              </dd>
              <dt >其他&nbsp;:</dt>
              <dd id="tjcx_03">
                <a
                  v-for="(item,index) in AF025"
                  :class="[item.code === vo.otherServiceCode ? 'now':'all']"
                  :key="index"
                  href="javascript:"
                  @click="AF025Click(item)">{{ item.name }}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036" >
          <div class="zx_sx"><span class="biaozhi"/><span id="wangdian_list">网点列表</span></div>
          <div class="list_tiaoj"><span
            id="seq1"
            class="active">综合排序</span>
            <span
              id="seq2"
              title="距离从近到远">距离最近</span>
          </div>

          <div class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他线路哦</span>
            <img src="/templets/default/images/none_pic.png">
          </div>
          <ul
            v-for="(item,index) in wangdianInfoList"
            :key="index" 
            class="wlzx_list"
          >

            <li class="wlzx_list_2">
              <p class="p1"><a
                id="nr01"
                href="#"
                target="_blank">{{ item.pointName }}</a></P>
              <p class="p2"><a
                id="nr01_1"
                href="#"
                target="_blank"><font id="nr02">{{ item.companyName }}</font></a></p>
              <p class="p3"><i>地址：</i><font
                id="nr03"
                class="">{{ item.pointAddress }}</font></p>
              <p class="p4"><i>约</i><em
                id="nr04"
                class=""/><i>公里</i></p>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><i>联系人：</i><span id="nr05">张总</span></P>
              <p class="p2"><i>电话：</i><span id="nr06">0731-88818882     17707316111</span></p>
            </li>
            <li class="wlzx_list_4">
              <p class="p1"><img
                id="list_shiming"
                src="../../static/wangdian/images/10shiming.png"></P>
              <p class="p2"><img
                id="list_xinyong"
                src="../../static/wangdian/images/11xinyong.png"></p>
              <p class="p3"><img
                id="list_danbao"
                src="../../static/wangdian/images/12danbao.png"></p>
            </li>
            <li class="wlzx_list_6">
              <p class="p1"><a target="_blank"><input
                id="fahuo"
                value="下单"></a>
              </p><p class="p2"><a target="_blank"><input
                id="nr_a01"
                value="查看"></a>
            </p></li>
          </ul>
        </div>
        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 170px;">
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
        id="js007"
        class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>物流公司推荐</span></div>
        <div class="tj_none">
          <span>没有相关物流公司推荐</span>
        </div>
        <div
          class="tj_list"
          style="display: none;">
          <p class="p1"><a
            id="tj010"
            target="_blank"><span id="tj_01">北京华远物流有限公司</span></a></p>
          <p class="p2">

            <img
              class="xy_zuan"
              src="../../static/gongsi/images/blue.gif">
            <img
              class="xy_zuan"
              src="../../static/gongsi/images/blue.gif">
            <img
              class="xy_zuan"
              src="../../static/gongsi/images/blue.gif">
            <img
              class="xy_zuan"
              src="../../static/gongsi/images/blue.gif">
            <img
              class="xy_zuan"
              src="../../static/gongsi/images/blue.gif">

            <img
              class="xy_guan"
              src="../../static/gongsi/images/34huanguan.gif">
            <img
              class="xy_guan"
              src="../../static/gongsi/images/34huanguan.gif">
            <img
              class="xy_guan"
              src="../../static/gongsi/images/34huanguan.gif">
            <img
              class="xy_guan"
              src="../../static/gongsi/images/34huanguan.gif">
            <img
              class="xy_guan"
              src="../../static/gongsi/images/34huanguan.gif">

          </p>
          <p class="p3"><i>联系人：</i><font id="tj_02">张总</font></p>
          <p class="p4"><i>电话：</i><font id="tj_03">0731-88818882  17707316111</font></p>
          <p class="p5"><i>地址：</i><font
            id="tj_04"
            class="">北京大兴区魏永路博洋仓储物流园</font></p>
          <p class="p6">
            <a
              id="tj_05"
              target="_blank"><span>查看&nbsp;&gt;</span></a>
          </p>
        </div>



      </div>

    </div>


    <div class="h70"/>
  </div>
</template>

<script>
async function getWdiangSearchList($axios, vo) {
  let res = await $axios.post('/28-web/logisticsPark/search', vo)
  if (res.data.status === 200) {
    return res.data.data.list
  }
}
async function getWangdiangInfoList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 10
  let res = await $axios.post('/28-web/pointNetwork/list', parm) //车源信息列表
  console.log(res.data.data.list)
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
export default {
  name: 'Index',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/wangdian.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ],
    // script: [
    //   { src: '../js/jquery.pagination.min.js' },
    //   { src: '../js/WTMap.min.js' },
    //   { src: './js/city-picker.data.js' },
    //   { src: './js/city-picker.js' },
    //   { src: '../../static/gongsi/js/list_wlgs.js' }
    // ]
    script: [
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' },
      { src: './js/jquery.pagination.min.js' },
      { src: '/js/gaodemap2.js' }
    ]
  },
  data() {
    return {
      wangdianInfoList: [], //网点信息列表
      pages: 0,
      currentPage: 1,
      parkName: ''
    }
  },
  async asyncData({ $axios, app, query }) {
    let vo = {
      startProvince: query.startProvince
        ? query.startProvince
        : app.$cookies.get('currentProvinceFullName'),
      startCity: query.startCity
        ? query.startCity
        : app.$cookies.get('currentAreaFullName'),
      startArea: query.startArea ? query.startArea : '',
      parkName: query.parkName ? query.parkName : '',
      otherServiceCode: query.otherServiceCode ? query.otherServiceCode : '',
      belongBrandCode: query.belongBrandCode ? query.belongBrandCode : ''
    }

    let AF029 = await $axios.get(
      '/aflc-common/sysDict/getSysDictByCodeGet/AF029' //品牌
    )
    let AF025 = await $axios.get(
      '/aflc-common/sysDict/getSysDictByCodeGet/AF025'
    )

    let logisticsPark = await getWdiangSearchList($axios, vo)

    //网点信息列表
    if (AF029.data.status === 200) {
      AF029.data.data.unshift({ code: '', name: '不限' })
    }
    if (AF025.data.status === 200) {
      AF025.data.data.unshift({ code: '', name: '不限' })
    }
    return {
      AF029: AF029.data.status === 200 ? AF029.data.data : [],
      AF025: AF025.data.status === 200 ? AF025.data.data : [],
      logisticsPark: logisticsPark,
      vo: vo
    }
  },
  mounted() {
    $('#select_wlyq').mousedown(function() {
      $('#list_wlzx_yq').css('display', 'block')
    })
    $('body').click(function(e) {
      var _con = $('.js_yq') // 设置目标区域(排除此元素)
      if (!_con.is(e.target) && _con.has(e.target).length === 0) {
        $('#list_wlzx_yq').css('display', 'none')
      }
    })
    // this.pagination()
    // seajs.use(['../js/city.js'], function() {
    //   seajs.use(
    //     ['../js/city-picker.js', '../js/jquery.pagination.min.js'],
    //     function() {
    //       seajs.use(['../wangdian/js/list_wangdian.js'], function() {
    //         seajs.use(['../js/collection.js'], function() {
    //           seajs.use(['../js/gaodemap2.js'], function() {
    //             $('.list_tiaoj span').click(function() {
    //               // alert('1')
    //               $('.list_tiaoj span').removeClass('active')
    //               $(this).toggleClass('active')
    //             })
    //             function onCheckPage() {
    //               var beginPage = parseInt(
    //                 document.beginPagefrm.beginPage.value
    //               )
    //               if (isNaN(beginPage)) {
    //                 alert('请输入数字！')
    //                 return false
    //               }
    //               if (beginPage <= 0) {
    //                 beginPage = 1
    //               }
    //               if (beginPage > 100) {
    //                 beginPage = 100
    //               }
    //               if (beginPage > 1) {
    //                 document.beginPagefrm.action =
    //                   '{dede:type typeid=’19′ row=1}[field:typelink /]{/dede:type}&PageNo=' +
    //                   beginPage
    //               } else {
    //                 document.beginPagefrm.action =
    //                   '{dede:type typeid=’19′ row=1}[field:typelink /]{/dede:type}'
    //               }
    //               return true
    //             }
    //             $('#pagination1').pagination({
    //               currentPage: 1,
    //               totalPage: process02(1),
    //               callback: function(current) {
    //                 $('#current1').text(current)
    //                 process02(current)
    //                 window.location.href = '#top'
    //               }
    //             })
    //           })
    //         })
    //       })
    //     }
    //   )
    // })
  },
  methods: {
    search() {
      window.location.href = `/wangdian/?&belongBrandCode=${
        this.vo.belongBrandCode
      }&otherServiceCode=${this.vo.otherServiceCode}`
    },
    //品牌
    AF029Click(item) {
      this.vo.belongBrandCode = item.code
      this.search()
    },
    //其他
    AF025Click(item) {
      this.vo.otherServiceCode = item.code
      this.search()
    },
    addTitle(item) {
      this.parkName = item.parkName
    },
    //园区
    async seachlist() {
      // let vo

      let list1 = []
      $('#wlyq_pos .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.startProvince = list1[0] ? list1[0] : ''
      this.vo.startCity = list1[1] ? list1[1] : ''
      this.vo.startArea = list1[2] ? list1[2] : ''
      console.log(this.vo)

      this.logisticsPark = await getWdiangSearchList(this.$axios, this.vo)
      // console.log(list2)
    },
    pagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          // this.searchDo()
          let wangdianInfoList = await getWangdiangInfoList(
            this.$axios,
            current,
            {
              startProvince: this.startProvince,
              startCity: this.startCity,
              startArea: this.startArea,
              endProvince: this.endProvince,
              endCity: this.endCity,
              endArea: this.endArea,
              carType: this.carType,
              isLongCar: this.isLongCar,
              carSourceType: this.carSourceType,
              carLengthLower: this.carLengthLower,
              carLengthUpper: this.carLengthUpper,
              carLoadLower: this.carLoadLower,
              carLoadUpper: this.carLoadUpper
            }
          )
          this.wangdianInfoList = wangdianInfoList.list
          this.pages = wangdianInfoList.pages
          this.current = wangdianInfoList.current
          window.location.href = '#top'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.lll-wangdian {
  .list_button {
    width: 42px;
    height: 28px;
    border-radius: 2px;
    color: #f9f9f9;
    font-size: 15px;
    background: no-repeat url(../../static/images/list_wlzx/wlgs_search.png)
      10px 6px #2577e3;
    text-align: left;
    padding-left: 30px;
    margin-left: 8px;
    padding-right: 5px;
    cursor: pointer;
    border: none;
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
  .select_con dl dd a.now {
    background: #3371ff;
    color: #fff;
  }
  /*显示隐藏E */
}
</style>
