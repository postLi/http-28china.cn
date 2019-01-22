<template>
  <div class="side_left">
    <ul><li class="side_title"><span>客户服务</span></li>

      <li class="side_memu active"><a href="{dede:var.userid_e /}-order.html"><span>在线下单</span></a></li>
      <li class="side_memu"><span>查询服务</span></li>
      <ul class="side_submemu ">
        <li><a href="{dede:var.userid_e /}-chajian.html"><span>查件（物流追踪）</span></a></li>
        <li ><a href="{dede:var.userid_e /}-line.html"><span>物流专线</span></a></li>
        <li ><a href="{dede:var.userid_e /}-wangdian.html"><span>网点分布</span></a></li>
        <li ><a href="{dede:var.userid_e /}-huo.html"><span>货源信息</span></a></li>

      </ul>


    </ul>

  </div>
</template>

<script>
export default {
  name: 'SideLeft8',
  mouted() {
    $('.side_memu').click(function() {
      if (
        $(this)
          .next()
          .hasClass('side_submemu')
      ) {
        //console.log("包含下拉项");
        $(this)
          .next()
          .toggle()
      }
      $(this).toggleClass('active')
      $('.side_memu')
        .not($(this))
        .removeClass('active')
    })
  }
}
</script>

<style scoped>
</style>
