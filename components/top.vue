<template>
  <div class="header_top">
    <div
      class="header_top_top w1200 center"
      style="width: 1400px;" >
      <div class="header_r">
        <div
          id="_userlogin1"
          class="header_r1">您好，欢迎来到28快运!&nbsp;&nbsp; <a href="/login">登录</a> <a href="/regisiter">注册</a></div>
        <div
          id="_userlogin1_1"
          class="header_r1"
          style="display: none;">
          <span class="chgoEm">您好，<span id="login_name1"/>&nbsp;已登录</span>
          <a
            target="_blank"
            href="/hyzx" >会员中心</a>
          <a
            class="exit_anfa"
            href="/exit">退出登录</a>
        </div>
        <div class="header_r2">

          <a href="/">首页</a>
          <a
            target="_blank"
            href="http://www.anfanet.com/download.html">APP下载</a>
          <a
            target="_blank"
            href="http://www.28tms.com">28TMS</a>
          <a
            target="_blank"
            href="http://biz.28china.cn/">企业货主登录</a>
          <a
            target="_blank"
            href="/help/ggp/index.jhtml">帮助中心</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
.header_top {
  height: 30px;
  line-height: 30px;

  background-color: #eeeeee;
}
.header_top_top {
  /* width: 1400px; */
  /* margin:0 auto; */
}
.header_r {
  /* float:left; */
}
.header_r1 {
  float: left;
  margin-right: 20px;
}
.header_r1 a {
  color: #fb5000;
  padding-left: 10px;
}
.header_r2 {
  float: right;
}
.header_r2 a {
  color: #333333;
  border-left: 1px solid #ccc;
  padding: 0 10px;
}
.header_r2 a em {
  font-family: normal;
  font-weight: bold;
}
</style>
