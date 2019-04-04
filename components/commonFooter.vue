<template>
  <div>
    <div class="footer clear">
      <div class="center">
        <div class="img"/>
        <div class="title">
          <div class="left">
            <div class="title1">快 好 省</div>
            <div class="title2">国内领先的一站式综合物流快运平台，物流运输管理，网络路径优化，网络货物跟踪，供应链可视化</div>
          </div>
          <div class="right">
            <div class="box-qr divide">
              <div class="box-in"/>
            </div>
            <div class="box-qr">
              <img 
                src="/images/28fast_download.png" 
                width="112" 
                height="112">
              <div>28快运 货主端</div>
            </div>
            <div class="box-qr">
              <img
                src="/images/28fast_download.png"
                width="112"
                height="112">
              <div>28快运 车主端</div>
            </div>
          </div>
        </div>
        <div class="footer1">
          <a 
            href="http://www.anfanet.com/about.html" 
            target="_blank">关于我们</a>
          <a 
            href="http://www.anfanet.com/index.html"
            target="_blank">产品与服务</a>
          <a 
            href="http://www.28tms.cn" 
            target="_blank">云TMS</a>
          <a
            target="_blank"
            href="/help/khal/index.jhtml">精选案例</a>
          <a href="/zixun">资讯动态</a>
          <a 
            href="/help/ggp/index.jhtml" 
            target="_blank">帮助中心</a>
        </div>
        <div class="footer1-1">
          <a href="javascript:void(0)">友情链接：</a>
          <a 
            href="http://www.28kuaiyun.cn" 
            target="_blank"> 28快运官网</a>
          <a 
            href="http://www.28tms.cn" 
            target="_blank">28云TMS</a>
        </div>
        <div class="footer2 center">
          <p>版权所有：28快运|客服免费电话：400-9992828</p>
          <p>备案：<a 
            href="http://www.miitbeian.gov.cn/" 
            target="_blank">粤ICP备16061301号-4</a></p>
          <p>Copyright © 2018-2021 anfachina.com All rights reserved</p>
        </div>
      </div>
    </div>
    <CommonLogin />
  </div>
</template>

<script>
import CommonLogin from '~/components/public/login'
export default {
  name: 'CommonFooter',
  components: {
    CommonLogin
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
.footer {
  font-family: MicrosoftYaHei;
  margin-top: 50px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid #ccc;
  background-color: #2d3b55;
  /* min-width: 1400px; */
  .center {
    padding-top: 27px;
    width: 1400px;
    margin: 0 auto;
    position: relative;
    .img {
      position: absolute;
      top: -19px;
      left: 0;
      width: 205px;
      height: 140px;
      background: url(/images/foot_logo_bg.png) no-repeat center;
    }
    .title {
      height: 100px;
      .left {
        float: left;
        margin: 0 0 0 229px;
        .title1 {
          text-align: left;
          font-size: 20px;
          font-weight: bold;
          line-height: 28px;
          color: #3f97ef;
        }
        .title2 {
          font-size: 14px;
          font-weight: bold;
          line-height: 28px;
          color: #ffffff;
        }
      }
      .right {
        float: right;
        .box-qr {
          display: table-cell;
          padding-left: 20px;
          div {
            font-size: 14px;
            color: #e0e0e0;
          }
        }
        .divide {
          vertical-align: middle;
          .box-in {
            background: #ffffff;
            width: 1px;
            height: 100px;
          }
        }
      }
    }
  }
}
.footer1 {
  clear: both;
  text-align: left;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
}
.footer1-1 {
  padding-top: 10px;
  text-align: left;
}
.footer1 a,
.footer1-1 a {
  padding-right: 20px;
  line-height: 1.2;
  font-size: 16px;
  color: #fefefe;
}
.footer1 a:last-child {
  border: none;
}
.footer2 a {
  color: #999999;
}
.footer2 {
  line-height: 24px;
  padding-top: 10px;
  width: 1200px;
  font-size: 14px;
  color: #cccccc;
}
</style>
