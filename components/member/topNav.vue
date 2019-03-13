<template>
  <div class="top">
    <div class="top_dengLu">
      <div class="fl topLeft">
        <p>
               
          <span 
            v-if="!islogin" 
            id="_userlogin3" >
            <a 
              href="/" 
              class="wuTong">您好，欢迎来到28快运！</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a 
              href="/login" 
              class="denLu" 
              target="_blank">登录</a>&nbsp;&nbsp;
            <a 
              href="/regisiter" 
              class="zhuCe" 
              target="_blank">注册</a>&nbsp;&nbsp; </span>

          <span 
            v-if="islogin" 
          ><span style="color: #666;">您好，<em id="login_name3">{{ username }}</em>已登录</span>
            <a 
              target="_blank" 
              href="/hyzx" 
              style="color: #008be7" >会员中心</a>
            <a 
              class="exit_anfa"
              href="/exit" 
              style="color: #008be7">
              退出登录
          </a></span>

        </p>

      </div>
      <ul class="fr topRight">
        <li class="top_list1 sel"><a 
          target="_blank" 
          href="/" 
          class="tubiao">首页</a></li>
        <li class="head_xiantiao"/>
        <li class="top_list1 sel"><a 
          target="_blank" 
          href="http://www.anfanet.com/download.html" 
          class="tubiao">APP下载</a></li>
        <li class="head_xiantiao"/>
        <li class="top_list1 sel"><a 
          target="_blank" 
          href="http://www.28tms.com/" 
          class="tubiao">云TMS</a></li>
        <li class="head_xiantiao"/>
        <!-- <li class="top_list1 sel"><a 
          target="_blank" 
          href="#" 
          class="tubiao">增值服务</a></li>
        <li class="head_xiantiao"/> -->
        <li class="top_list1 sel"><a 
          target="_blank" 
          href="/Insurance" 
          class="tubiao">保险</a></li>
        <li class="head_xiantiao"/>
        <li class="top_list1 sel"><a 
          target="_blank" 
          href="/help/tsjy/index.jhtml" 
          class="tubiao">帮助中心</a></li>
        <li class="head_xiantiao"/>
        <li class="top_list1 sel"><a 
          target="_blank" 
          href="#" 
          class="tubiao">全国热线400-9992828</a></li>
          
      </ul>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      islogin: false,
      username: ''
    }
  },
  mounted() {
    let cookies = this.$cookies
    if (process.client) {
      let acct = cookies.get('access_token')
      if (acct) {
        this.islogin = true
        this.username = cookies.get('login_mobile')
      }
      /* cookies.remove('login_type')
      cookies.remove('loginId')
      cookies.remove('loginCompanyName')
      location.href = '/' */
    }
  }
}
</script>
