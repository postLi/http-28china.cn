<template>

  <div class="list-search-container">
    <form action="">
      <div class="l-search-condition">
        <span class="l-search-tile">专线筛选</span>
        <div 
          id="carLineFrom" 
          rel-id="search-from-location" 
          class="mock-input real-input real-input-block" 
          style="position:relative;">
          <input 
            type="text" 
            style="height: 100%;" 
            data-toggle="city-picker" 
            data-level="district" 
            placeholder="请选择出发地" 
            value="">
        </div>
        <span class="ss56-list-right-ico lines-sprite-icons"><img src="/images/02jiantou.png"></span>
        <div 
          id="carLineTo" 
          rel-id="search-to-location" 
          class="mock-input real-input real-input-block" 
          style="position:relative;">
          <input 
            type="text" 
            style="height: 100%;" 
            data-toggle="city-picker" 
            data-level="district" 
            placeholder="请选择目的地" 
            value="" >
        </div>
        <span 
          id="btn1" 
          class="btn_search active">搜索</span>
        <span 
          id="btn2" 
          class="btn_search">重置</span>
      </div>

      <div class="hot-search-condition">
        <span class="hot-search-tile">热门专线</span>
        <ul class="hot-label">
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E5%B9%BF%E5%B7%9E%E5%B8%82&endp=%E4%B8%8A%E6%B5%B7%E5%B8%82">广州到上海零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E5%B9%BF%E5%B7%9E%E5%B8%82&endp=%E6%B9%96%E5%8C%97%E7%9C%81&endc=%E6%AD%A6%E6%B1%89%E5%B8%82">广州到武汉零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?startp=%E5%8C%97%E4%BA%AC%E5%B8%82&endp=%E4%B8%8A%E6%B5%B7%E5%B8%82">北京到上海零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E6%B7%B1%E5%9C%B3%E5%B8%82&endp=%E6%B5%99%E6%B1%9F%E7%9C%81&endc=%E6%9D%AD%E5%B7%9E%E5%B8%82">深圳到杭州零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E6%B7%B1%E5%9C%B3%E5%B8%82&endp=%E9%87%8D%E5%BA%86%E5%B8%82">深圳到重庆零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?startp=%E5%8C%97%E4%BA%AC%E5%B8%82&endp=%E9%BB%91%E9%BE%99%E6%B1%9F%E7%9C%81&endc=%E5%93%88%E5%B0%94%E6%BB%A8%E5%B8%82">北京到哈尔滨零担物流专线</a>
          </li>
        </ul>
      </div>

      <div class="hot-search-condition">
        <span class="hot-search-tile">全国专线</span>
        <ul class="hot-label">
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E5%B9%BF%E5%B7%9E%E5%B8%82&endp=%E4%B8%8A%E6%B5%B7%E5%B8%82&endc=%E4%B8%8A%E6%B5%B7%E5%B8%82">广州市到上海市零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E5%B9%BF%E5%B7%9E%E5%B8%82&endp=%E6%B9%96%E5%8C%97%E7%9C%81&endc=%E6%AD%A6%E6%B1%89%E5%B8%82">广州市到武汉市零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?&startp=%E5%8C%97%E4%BA%AC%E5%B8%82&startc=%E5%8C%97%E4%BA%AC%E5%B8%82&endp=%E4%B8%8A%E6%B5%B7%E5%B8%82&endc=%E4%B8%8A%E6%B5%B7%E5%B8%82">北京市到上海市零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E6%B7%B1%E5%9C%B3%E5%B8%82&endp=%E6%B5%99%E6%B1%9F%E7%9C%81&endc=%E6%9D%AD%E5%B7%9E%E5%B8%82">深圳市到杭州市零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?&startp=%E5%B9%BF%E4%B8%9C%E7%9C%81&startc=%E6%B7%B1%E5%9C%B3%E5%B8%82&endp=%E9%87%8D%E5%BA%86%E5%B8%82&endc=%E9%87%8D%E5%BA%86%E5%B8%82">深圳市到重庆市零担物流专线</a>
          </li>
          <li class="hot-label-item">
            <a 
              class="hot-label-link" 
              href="/zhuanxian/list?&startp=%E5%8C%97%E4%BA%AC%E5%B8%82&startc=%E5%8C%97%E4%BA%AC%E5%B8%82&endp=%E9%BB%91%E9%BE%99%E6%B1%9F%E7%9C%81&endc=%E5%93%88%E5%B0%94%E6%BB%A8%E5%B8%82">北京市到哈尔滨市零担物流专线</a>
          </li>
        </ul>
      </div>
    </form>



  </div>

</template>
