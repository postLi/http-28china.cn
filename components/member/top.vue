<template>
  <div class="topNam">
    <div class="top_com">
      <div class="collection_zx">
        <div 
          class="bt_close" 
          onclick="$('.collection_zx').hide()" ><img src="/templets/default/images/article_wlzx/xxx.png"></div>	
        <div class="collection_zx_nr">
          <img src="/templets/default/images/article_wlzx/yes.png">
          <span>成功加入</span><a 
            id="collection_url" 
            target="_blank" 
            href="#">收藏夹</a>
        </div>
      </div>
      <!--公司名称-->
      <div class="comHeader fl">
        <h1 class="comName cmne"><em id="nr081"/></h1>
      </div>
      <div class="top_xiantiao fl"/>
      <div 
        class="top_num fl" 
        onmouseover="gs_block()" 
        onmouseout="gs_none()"> 
        <ul><li><span>服务质量</span></li><li><span>运输时效</span></li><li><span>收费价格</span></li></ul>
        <ul><li><i id="num001"/></li><li><i id="num002"/></li><li><i id="num003"/></li></ul>
      </div>
      <div 
        id="collection_website" 
        class="top_shouchang fl"> <img src="space/company/images/000shouchang.png"></div>
      <div class="top_right_num fr">
        <ul><li><span>收藏量</span></li><li><span>评价数</span></li></ul>
        <ul><li><i id="num004"/></li><li><i id="num005"/></li><li/></ul>
         	
      </div>
      <div class="clear"/>
    </div>
  </div>
</template>
