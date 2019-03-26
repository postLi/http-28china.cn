<template>
  


  <div class="list-box-right list-box-right1">
    <div class="list-box-r-top">
      <form action="">
        <span>出发地</span>
        <div class="ltl-input">
          <input 
            id="right-bar-form" 
            autocomplete="off" 
            wtmap="" 
            type="text" 
            class="ltl-location" 
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
    <!-- 热门城市 -->
    <div class="list-right-city">
      <h3 class="layer-title">热门城市</h3>
      <div class="advice-list">
        <ul>
          <li>
            <a href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E5%B9%BF%E5%B7%9E%E5%B8%82">广州市</a>
            <a href="/zhuanxian/list?&startp=%E5%8C%97%E4%BA%AC%E5%B8%82&startc=%E5%8C%97%E4%BA%AC%E5%B8%82">北京市</a>
            <a href="/zhuanxian/list?&startp=%E7%A6%8F%E5%BB%BA%E7%9C%81&startc=%E7%A6%8F%E5%B7%9E%E5%B8%82">福州市</a>
            <a href="/zhuanxian/list?&startp=%E7%A6%8F%E5%BB%BA%E7%9C%81&startc=%E5%8E%A6%E9%97%A8%E5%B8%82">厦门市</a>
            <a href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E6%B7%B1%E5%9C%B3%E5%B8%82">深圳市</a>
            <a href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E4%BD%9B%E5%B1%B1%E5%B8%82">佛山市</a>
            <a href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E4%B8%9C%E8%8E%9E%E5%B8%82">东莞市</a>
            <a href="/zhuanxian/list?&startp=%E9%87%8D%E5%BA%86%E5%B8%82&startc=%E9%87%8D%E5%BA%86%E5%B8%82">重庆市</a>
            <a href="/zhuanxian/list?&startp=%E6%B1%9F%E8%8B%8F%E7%9C%81&startc=%E5%8D%97%E4%BA%AC%E5%B8%82">南京市</a>
            <a href="/zhuanxian/list?&startp=%E6%B1%9F%E8%8B%8F%E7%9C%81&startc=%E8%8B%8F%E5%B7%9E%E5%B8%82">苏州市</a>
            <a href="/zhuanxian/list?&startp=%E6%B2%B3%E5%8D%97%E7%9C%81&startc=%E9%83%91%E5%B7%9E%E5%B8%82">郑州市</a>
            <a href="/zhuanxian/list?&startp=%E6%B9%96%E5%8C%97%E7%9C%81&startc=%E6%AD%A6%E6%B1%89%E5%B8%82">武汉市</a>
            <a href="/zhuanxian/list?&startp=%E6%B9%96%E5%8D%97%E7%9C%81&startc=%E9%95%BF%E6%B2%99%E5%B8%82">长沙市</a>
            <a href="/zhuanxian/list?&startp=%E8%BE%BD%E5%AE%81%E7%9C%81&startc=%E6%B2%88%E9%98%B3%E5%B8%82">沈阳市</a>
            <a href="/zhuanxian/list?&startp=%E4%B8%8A%E6%B5%B7%E5%B8%82&startc=%E4%B8%8A%E6%B5%B7%E5%B8%82">上海市</a>
            <a href="/zhuanxian/list?&startp=%E5%B1%B1%E4%B8%9C%E7%9C%81&startc=%E6%B5%8E%E5%8D%97%E5%B8%82">济南市</a>
            <a href="/zhuanxian/list?&startp=%E5%9B%9B%E5%B7%9D%E7%9C%81&startc=%E6%88%90%E9%83%BD%E5%B8%82">成都市</a>
            <a href="/zhuanxian/list?&startp=%E5%A4%A9%E6%B4%A5%E5%B8%82&startc=%E5%A4%A9%E6%B4%A5%E5%B8%82">天津市</a>
            <a href="/zhuanxian/list?&startp=%E6%B5%99%E6%B1%9F%E7%9C%81&startc=%E6%9D%AD%E5%B7%9E%E5%B8%82">杭州市</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 专线推荐 -->
    <div id="js007">
      <h3 
        id="h3_title" 
        class="layer-title zx_title" 
        style="display: none;">专线推荐</h3>
      <div 
        class="list-right-advice" 
        style="display: none">
      
        <div class="advice-list">
          <ul>
            <li class="advice-list-li">
              <div class="list-title advice-list-title">
                <!-- <span class="list-icon lines-sprite-icons icon-start"></span> -->
                <span id="tj01">广东-东莞</span><img 
                  class="xiao-jian-tou" 
                  src="/images/wzlImg/sjt.png"><span id="tj02">河北-石家庄</span>
              </div>
              <div class="list-title advice-list-title" >
                <span class="list-icon lines-sprite-icons icon-end"/>
                <a 
                  id="tj03" 
                  target="_blank">澳门特别行政圣方济各堂</a>
              </div>
              <div class="advice-unit-details">
                <span class="number_linst">重货：<em 
                  id="tj04" 
                  class="number">645</em>元/吨</span>
                <span>轻货：<em 
                  id="tj05" 
                  class="number">645</em>元/方</span>
              </div>
              <div class="advice-unit-details">
                <span class="number_linst">时效：<em 
                  id="tj06" 
                  class="number">4天</em></span>
                <span>最低一票：<em 
                  id="tj07" 
                  class="number">645</em></span>
              </div>
              <div class="advice-unit-details">
                <span class="number_linst"><img 
                  id="tj_shiming" 
                  src="/images/list_wlzx/10shiming.png" 
                  class="img"></span>
                <span class="number_linst"><img 
                  id="tj_xinyong" 
                  src="/images/list_wlzx/11xinyong.png" 
                  class="img"></span>
                <span class="number_linst"><img 
                  id="tj_danbao" 
                  src="/images/list_wlzx/12danbao.png" 
                  class="img"></span>
              </div>
              <div class="advice-unit-details">
                <a 
                  id="tj09" 
                  href="" 
                  target="_blank"><span class="number_look" >查看详情<img 
                    src="/images/wzlImg/qjt.png" 
                    class="img"></span></a>
              </div>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>
