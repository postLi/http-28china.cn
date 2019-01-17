<template>
  <div class="side_left">
    <ul><li class="side_title"><span>客户服务</span></li>
      <li class="side_memu"><a :href="$store.state.member.id + '-order.html'"><span>在线下单</span></a></li>
      <li class="side_memu active" ><span>查询服务</span></li>
      <ul class="side_submemu ">
        <li><a :href="$store.state.member.id + '-chajian.html'"><span>查件（物流追踪）</span></a></li>
        <li ><a :href="$store.state.member.id + '-line.html'"><span>物流专线</span></a></li>
        <li ><a :href="$store.state.member.id + '-wangdian.html'"><span>网点分布</span></a></li>
        <li class="now"><a :href="$store.state.member.id + '-huo.html'"><span>货源信息</span></a></li>
      </ul>
    </ul>	
  </div>
</template>
