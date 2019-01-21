<template>
  <section class="index_container">
    <div class="w1400 center clear">

      <div class="main1">
        <div class="main1_1">
          <div class="main1_1_l">
            <div 
              id="m1_01_1" 
              class="m1_01 m1_01_01  m1_on_01">发物流 </div>
            <div 
              id="m1_01_2" 
              class="m1_01 m1_01_02">找大货车</div>
            <div 
              id="m1_01_3" 
              class="m1_01 m1_01_03">找小货车</div>


          </div>
          <div class="title">
            <img 
              src="/images/index/10tb.png" 
              class="imgtj">
            <p id="desc_01">推荐物流承运商，提供免费上门接货和送货到家服务，发货省心又省钱</p>
            <p id="desc_02">整车运输，车辆不放空，门到门、代签回单、无挤压、无破损、速度快</p>
            <p id="desc_03">同城货运价格低，上门快，更安全</p>
          </div>
          <div 
            id="main1_1_m1" 
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input 
              id="zhidaFrom" 
              wtmap="detail" 
              type="text" 
              placeholder="您的货物在哪里？" 
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input 
              id="zhidaTo" 
              wtmap="detail" 
              type="text" 
              placeholder="把货运到哪里？" 
              readonly=""></div>
            <div class="m1_02_search center">
              <input 
                id="order_01" 
                type="button" 
                value="快速下单" 
                onclick="javascript:void(0)">
              <input 
                id="order_02" 
                type="button" 
                value="快速下单" 
                onclick="javascript:void(0)">
              <input 
                id="order_03" 
                type="button" 
                value="快速下单" 
                onclick="javascript:void(0)">
            </div>
          </div>
          <div 
            id="main1_1_m2" 
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input 
              id="peisongFrom" 
              wtmap="detail" 
              type="text" 
              placeholder="您的货物在哪里？" 
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input 
              id="peisongTo" 
              wtmap="detail" 
              type="text" 
              placeholder="把货运到哪里？" 
              readonly=""></div>
            <div class="m1_02_search center">
              <input 
                type="button" 
                value="快速下单2" 
                onclick="window.location.href='/plus/list.php?tid=4'">
            </div>
          </div>
          <div 
            id="main1_1_m3" 
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input 
              id="zhengcheFrom" 
              wtmap="detail" 
              type="text" 
              placeholder="您的货物在哪里？" 
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input 
              id="zhengcheTo" 
              wtmap="detail" 
              type="text" 
              placeholder="把货运到哪里？" 
              readonly=""></div>
            <div class="m1_02_search center">
              <input 
                type="button" 
                value="快速下单3" 
                onclick="window.location.href='/plus/list.php?tid=4'">
            </div>
          </div>
          <div 
            id="main1_1_m4" 
            class="main1_1_m">
            <div class="m1_02_fh center"><span>发货地</span><input 
              id="baocheFrom" 
              wtmap="detail" 
              type="text" 
              placeholder="您的货物在哪里？" 
              readonly=""></div>
            <div class="m1_02_sh center"><span>收货地</span><input 
              id="baocheTo" 
              wtmap="detail" 
              type="text" 
              placeholder="把货运到哪里？" 
              readonly=""></div>
            <div class="m1_02_search center">
              <input 
                type="button" 
                value="快速下单4" 
                onclick="window.location.href='/plus/list.php?tid=4'">
            </div>
          </div>
          <div class="main1_1_xx"/>
	
	
	
        </div>
        <div class="main1_2">
          <ul class="yd_box">
            <li class="yd_1">
              <img src="/images/index/12kd.png">
            </li>
            <li class="yd_2"><input 
              id="yd_nr" 
              rows="3" 
              cols="20" 
              placeholder="请输入运单号，例如：">
              <input 
                id="yd_cx" 
                type="button">
              <div class="ydh">
                <span>1809260061</span>
              </div>
            </li>
            <li class="yd_4">
              <ul>
                <li class="yd_item">
                  <img src="/images/yd_huo.png"><span>当前货物</span>
                  <i id="data001"/>
                </li>
                <li class="yd_item">
                  <img src="/images/yd_zx.png"><span>物流专线</span>
                  <i id="data002"/>
                </li>
                <li class="yd_item">
                  <img src="/images/yd_che.png"><span>车源信息</span>
                  <i id="data003"/>
                </li>
              </ul>
			
            </li>
            <li class="yd_5"><img src="/images/yd_jt.png">
              <span>今日新增:</span><span>货源</span><i id="data004"/><span>专线</span><i id="data005"/><span>车源</span><i id="data006"/>
            </li>
		
          </ul>

        </div>
        <div class="main1_3">
          <div class="main1_3_1">
            <div 
              class="order_list" 
              onclick="window.open('/plus/list.php?tid=85')">发布专线</div>
            <div 
              class="order_list" 
              onclick="window.open('/plus/list.php?tid=83')">发布货源</div>
            <div 
              class="order_list" 
              onclick="window.open('/plus/list.php?tid=84')">发布车源</div>
          </div>
          <div class="main1_3_2">
            <div 
              id="_userlogin2" 
              class="userLogin" 
              style="display:block;">
              <div class="yhimg"><img src="/images/index/19stx.png"></div>
              <div class="userHeader">
                <div class="img_"/>
                <span id="ts">您好，欢迎来到28快运！</span>
              </div>
              <div class="operation">
                <div class="loginBtn"><a href="/member/login.php">登录</a></div>
                <div class="regBtn"><a href="/member/index_do.php?fmdo=user&amp;dopost=regnew">注册</a></div>
              </div>
            </div>
            <div 
              id="_userlogin2_2" 
              class="userLogin" 
              style="display:none;">
              <div class="userHeader">
                <div class="yhimg"><img src="/images/index/19stx.png"></div>
                <span>您好，<span id="login_name2"/>&nbsp;</span>
                <span style="cursor: pointer"> <a 
                  class="exit_anfa" 
                  href="/member/index_do.php?fmdo=login&amp;dopost=exit">【安全退出】</a> </span>
              </div>
              <div class="operation">
                <div class="loginBtn"><a 
                  target="_blank" 
                  href="/member/content_list.php?channelid=1">会员中心</a></div>
                <div class="regBtn"> <a 
                  id="my_website" 
                  target="_blank" 
                  href="">我的网站</a></div>
              </div>
            </div>
               
            <div class="main1_c">
              <ul>
                <li class="kefu_index">
                  <a 
                    href="/plus/list.php?tid=12" 
                    onmouseout="kefu_none();">咨讯</a>
                  <a 
                    href="/plus/list.php?tid=88" 
                    onmouseout="kefu_none();">帮助</a>
                  <a onmouseover="kefu_block();">客服</a>

                  <a 
                    target="_blank" 
                    href="/plus/list.php?tid=69" 
                    onmouseout="kefu_none();">建议</a>
                </li>
                <li><a 
                  target="_blank" 
                  href="/wlzx/xingyezixun/2018/0629/320.html">中国重汽不停车服务入驻凯立德物流地图生态</a></li>
                <li><a 
                  target="_blank" 
                  href="/wlzx/xingyezixun/2018/0629/318.html">老企鹅新「舞台」：前腾讯T4专家向伟出任</a></li>
                <li><a 
                  target="_blank" 
                  href="/wlzx/xingyezixun/2018/0629/323.html">雄安新区将打造集约智能共享的物流体系</a></li>

              </ul>
            </div> 
            <div 
              class="kefu_box" 
              onmouseover="kefu_block();" 
              onmouseout="kefu_none();">
              <div class="kefu_box_1"><img src="/images/kefu_weixin.png"> </div>
              <div class="kefu_box_2"/>
              <div class="kefu_box_3">
                <ul 
                  style="cursor: pointer;" 
                  onclick="window.open('http://wpa.qq.com/msgrd?v=3&amp;uin=596803544&amp;site=qq&amp;menu=yes')"><li><img src="/images/kefu_qq.png"></li><li class="kefu_box_3_1">QQ交谈</li></ul>
                <ul><li><img 
                  class="kefu_box_3_phone" 
                  src="/images/kefu_phone.png"></li><li class="kefu_box_3_2">客服电话：<br>400-9992828</li></ul>
              </div>
            </div>
          </div>
          
 
        </div>
      </div>
      <div class="banner h62">
        <div class="echart_scroll">
          <div class="fl echart_scroll_sm">全国专线价</div>
          <div class="fl echart_scroll_nr">
            <div class="fl echart_scroll_nr800">
              <ul class="echart_scroll_nr1">
                <li><a 
                  href="javascript:void(0)" 
                  target="_blank"><span>广州发武汉</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a 
                  href="javascript:void(0)" 
                  target="_blank"><span>广州发合肥</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a 
                  href="javascript:void(0)" 
                  target="_blank"><span>广州发重庆</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a 
                  href="javascript:void(0)" 
                  target="_blank"><span>广州发南昌</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
                <li><a 
                  href="javascript:void(0)" 
                  target="_blank"><span>广州发郑州</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>
              </ul>
              <ul class="echart_scroll_nr2"/>
            </div>
          </div>
        </div>
      </div>

      <!--找物流专线 S-->
      <div 
        id="rf01" 
        class="main3 center ">
        <div class="main3_12">


          <div class="hy main3_99 clear">
            <div class="main3_1_1">
              <div class="xt_bottom"/>
              <div class="floatl">
                <b>找物流专线</b>
        
                <div class="index_search floatl">
                  <div 
                    id="wlLineFrom" 
                    class="fl index_search_input" 
                    style="position:relative;">
                    <input 
                      style="height: 100%;" 
                      data-toggle="city-picker" 
                      data-level="district" 
                      type="text" 
                      name="" 
                      class="" 
                      placeholder="&nbsp;请选择出发地" 
                      readonly="">
                  </div>
                  <em>→</em>
                  <div 
                    id="wlLineTo" 
                    class="fl index_search_input" 
                    style="position:relative;">            
                    <input 
                      style="height: 100%;" 
                      data-toggle="city-picker" 
                      data-level="district" 
                      type="text" 
                      name="" 
                      class="" 
                      placeholder="&nbsp;请选择到达地" 
                      readonly="">
                  </div>                               
                       
                </div>               
                <input 
                  id="search_wlLine" 
                  type="button" 
                  class="search_hy" 
                  value=""></div>                        
                                 
                                 
                                 
              <div class="more floatr"><a 
                href="/plus/list.php?tid=4" 
                target="_blank">更多&gt;</a></div>		 
            </div>
            <dl class="hy_d">
              <dd class="d001">出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</dd>
              <dd class="d002">到达地</dd>
              <dd class="d003">重货价格</dd>
              <dd class="d004">轻货价格</dd>
              <dd class="d005">时效</dd>
              <dd class="d006">物流公司</dd>
              <dd class="d007">操作</dd>
            </dl>
            <div class="none_zx"><span>暂无专线信息</span>
            </div>          
                    
            <div class="clear scroll_nr2 ">

                        	

                        	 
              <ul 
                id="js001" 
                class="hy_nr " 
                style="margin-top: 0px;">
                        	 	
                <li style="display: none;">
                  <a 
                    id="nr_a01" 
                    target="_blank"><span 
                      id="nr001" 
                      class="t001"/></a>
                  <a 
                    id="nr_a01" 
                    target="_blank"><span 
                      id="nr001_2" 
                      class="t002"/></a>
                  <a 
                    id="nr_a02" 
                    target="_blank" 
                    href=""><span class="t003"><font 
                      id="nr002" 
                      style="color:#f00"/>元/公斤</span></a>
                  <a 
                    id="nr_a03" 
                    target="_blank"><span class="t004"><font 
                      id="nr003" 
                      style="color:#f00"/>元/方</span> </a>
                  <a 
                    id="nr_a04" 
                    target="_blank"><span 
                      id="nr004" 
                      class="t005"/></a>
                  <a 
                    id="nr005" 
                    target="_blank" 
                    href="#"><span 
                      id="nr006" 
                      class="t006"/></a>
                  <a 
                    id="nr_a05" 
                    target="_blank"><span 
                      id="t006" 
                      class="t007">详情</span></a>         
                </li>
              </ul>
                          

                                  
            </div>
 
          </div>

        </div>
        <div class="right_box">
          <div class="right_price_bt1">
            <div class="xt_bottom w102"/>
            <div class="floatl">
              <b>价格指数</b>
            </div>
		
          </div>
          <!--echart图表 S-->
          <div class="linelist">
            <div class="line-list-ul">
              <ul>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">武汉</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">重庆</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">南昌</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">长沙</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">郑州</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>
                <li>
                  <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">合肥</span></p>
                  <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方<span><em class="lineqing-percent">↓6%</em></span></p>
                </li>

              </ul>
            </div>
            <div class="line-list-echart">
              <div class="echartbox"/>
              <div class="line-list-links">
                <a 
                  id="echart_order" 
                  target="_blank" 
                  href="#">闪电下单</a>
                <a 
                  id="echart_price" 
                  href="#">即刻比价</a>
                <a 
                  target="_blank" 
                  href="/plus/list.php?tid=76">一键查单</a>
                <a 
                  id="echart_sx" 
                  href="#">时效查询</a>
              </div>
            </div>
          </div>
	
	
          <!--echart图表 E-->
        </div>

      </div>

    </div>
    <div class="banner"><img src="/images/index/23banner.png"></div>
    <div 
      id="rf01" 
      class="main3 main_cy_hy center ">
      <div class="main3_12">



        <div 
          id="rf02" 
          class="main3_11">
          <div class="main3_1_1">
            <div class="xt_bottom"/>
            <div class="floatl">
              <b>找车源信息</b>
              <div class="index_search floatl">
                <div 
                  id="carLineFrom" 
                  class="fl index_search_input" 
                  style="position:relative;">
                  <input 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text" 
                    name="" 
                    class="" 
                    placeholder="&nbsp;请选择出发地" 
                    readonly="">
                </div>
                <em>→</em>
                <div 
                  id="carLineTo" 
                  class="fl index_search_input" 
                  style="position:relative;">            
                  <input 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text" 
                    name="" 
                    class="" 
                    placeholder="&nbsp;请选择到达地" 
                    readonly="">
                </div>                               
                       
              </div>  
              <input 
                id="search_cheyuan" 
                type="button" 
                class="search_hy" 
                value=""></div>
            <div class="more floatr"><a 
              href="/plus/list.php?tid=3" 
              target="_blank">更多&gt;</a></div>		 
          </div>
    
          <div class="hy clear">
            <dl class="hy_d">
              <dd class="d1">出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</dd>
              <dd class="d2">到达地</dd>
              <dd class="d3">车牌号</dd>
              <dd class="d4">车型</dd>
              <dd class="d5">车长</dd>
              <dd class="d6">载重</dd>
              <dd class="d7">运输价格</dd>
              <dd class="d8">操作</dd>
            </dl>
            <div class="none_cy"><span>暂无车源信息</span>
            </div>            
                        
            <div class="clear scroll_nr3">
              <ul 
                id="js003" 
                class="hy_nr" 
                style="margin-top: 0px;">
                <li style="display: none;">
                  <a id="nr_a11"><span 
                    id="nr021" 
                    class="t1"/></a>
                  <a id="nr_a11"><span 
                    id="nr021_2" 
                    class="t2"/></a>
                  <a 
                    id="nr_a12" 
                    target="_blank"><span 
                      id="nr022" 
                      class="t3"/></a>
                  <a 
                    id="nr_a13" 
                    target="_blank"><span 
                      id="nr023" 
                      class="t4"/></a>
                  <a 
                    id="nr_a14" 
                    target="_blank"><span class="t5"><font 
                      id="nr024" 
                      style="color: #f00;"/>米</span></a>
                  <a 
                    id="nr_a15" 
                    target="_blank"><span class="t6"><font 
                      id="nr025" 
                      style="color: #f00;"/>吨</span></a>
                  <a 
                    id="nr_a16" 
                    target="_blank"><span class="t7"><font 
                      id="nr026" 
                      style="color: #f00;"/></span></a>
                  <a 
                    id="nr_a17" 
                    target="_blank"><span 
                      id="t7" 
                      class="t8">查看</span></a>
                </li>

                            
              </ul>


            </div>
     
          </div>

        </div>
        <div class="h30 w970 bg_f7"/>
        <div 
          id="rf03" 
          class="main3_1">
          <div class="main3_1_1">
            <div class="xt_bottom"/>
            <div class="floatl">
              <b>找货源信息</b>
              <div class="index_search floatl">
                <div 
                  id="HuoyuanFrom" 
                  class="fl index_search_input" 
                  style="position:relative;">
                  <input 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text" 
                    name="" 
                    class="" 
                    placeholder="&nbsp;请选择出发地" 
                    readonly="">
                </div>
                <em>→</em>
                <div 
                  id="HuoyuanTo" 
                  class="fl index_search_input" 
                  style="position:relative;">            
                  <input 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text" 
                    name="" 
                    class="" 
                    placeholder="&nbsp;请选择到达地" 
                    readonly="">
                </div>  
              </div>   
              <input 
                id="search_huoyuan" 
                type="button" 
                class="search_hy" 
                value=""></div>
            <div class="more floatr"><a 
              href="/plus/list.php?tid=2" 
              target="_blank">更多&gt;</a></div>		 
          </div>
    
          <div class="hy clear">
            <dl class="hy_d">
              <dd class="d1">出发地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</dd>
              <dd class="d2">到达地</dd>
              <dd class="d3">货物名称</dd>
              <dd class="d4">重量</dd>
              <dd class="d5">体积</dd>
              <dd class="d6">运输类型</dd>
              <dd class="d7">发布时间</dd>
              <dd class="d8">操作</dd>
            </dl>
            <div class="none_hy"><span>暂无货源信息</span>
            </div>
                        
                        
            <div class="clear scroll_nr1">
 
                        	
                        	
              <ul 
                id="js004" 
                class="hy_nr " 
                style="margin-top: 0px;">

                <li style="display: none;">                                      
                  <a id="nr_a31"><span 
                    id="nr031" 
                    class="t1"/></a>
                  <a id="nr_a31"><span 
                    id="nr031_2" 
                    class="t2"/></a>
                  <a id="nr_a33"><span 
                    id="nr033" 
                    class="t3"/></a>
                  <a id="nr_a34"><span class="t4"><font 
                    id="nr034" 
                    style="color: #f00;"/></span></a>
                  <a id="nr_a35"><span class="t5"><font 
                    id="nr035" 
                    style="color: #f00;"/></span></a>
                  <a id="nr_a36"><span 
                    id="nr036" 
                    class="t6"/></a>
                  <a id="nr_a37"><span 
                    id="nr037" 
                    class="t7"/></a>
                  <a 
                    id="nr_a38" 
                    target="_blank"><span 
                      id="t8" 
                      class="t8">查看</span></a>
                </li>
                            
              </ul>

            </div>
     
          </div>

        </div>

      </div>
      <div class="right_box">
        <!--echart图表 S-->
        <div class="right_price_bt1">
          <div class="xt_bottom w102"/>
          <div class="floatl">
            <b>价格指数</b>
          </div>
		
        </div>

        <div class="linelist linelist2">
          <div class="line-list-ul2">
            <ul>
              <li class="current">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">武汉</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">南昌</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">重庆</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">长沙</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">郑州</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">合肥</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>
              <li class="">
                <p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">贵阳</span></p>
                <p class="line_bt2">重货：<span><i class="linezhong">0.45</i>元/公斤</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">160</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p>
              </li>

    

            </ul>
            <div class="echartbox2">
              <strong>本周价格：</strong>
              <div class="zhong-info"><span class="zhong-info-price">重货 ：<i>0.45</i>元/公斤</span><i class="zhong-info-tong">↑5%</i>，环比<em class="zhong-info-huan">-6%</em></div>
              <div class="qing-info">  <span class="qing-info-price">轻货：  <i>200</i>元/方</span><i class="qing-info-tong">↑5%</i>，环比<em class="qing-info-huan">-6%</em></div>
              <div class="echartwrapper"/>
            </div>
          </div>
      
          <div class="hq-news-from">
            <form style="position: relative;">
              <div 
                id="cx_start" 
                class="fl from-input noieclear" 
                style="position:relative;">
                <input 
                  style="height: 100%;" 
                  data-toggle="city-picker" 
                  data-level="district" 
                  type="text" 
                  autocomplete="off" 
                  placeholder="出发地">
              </div>
 				
              <img 
                class="fl" 
                src="/index_files/search_jiantou.png">
              <div 
                id="cx_end" 
                class="fl from-input noieclear" 
                style="position:relative;">
                <input 
                  style="height: 100%;" 
                  data-toggle="city-picker" 
                  data-level="district" 
                  type="text" 
                  autocomplete="off" 
                  placeholder="目的地">
              </div>
              <a 
                id="hqzx_btn1" 
                href="javascript:void(0)" 
                onclick="line_cx()" 
                class="hq-a-text">查询其他专线</a>
            </form>
          </div>
 		
 		
        </div>	
	
        <!--echart图表 E-->
      </div>

    </div>
    <div class="banner">
      <img src="/images/index/24banners2.png">
    </div>
    <div 
      id="rf04" 
      class="main4 center ">
      <div class="main4_1">
        <div class="main4_1_1">
          <div class="xt_bottom"/>
          <div class="floatl">
            <b>找物流公司</b>
          </div>
          <div class="more2 floatr"><a 
            href="/plus/list.php?tid=80" 
            target="_blank">更多&gt;</a></div>		 
        </div>
        <div class="hy clear">

    
     
          <dl class="wlyq_d">
            <dd class="d0001">公司名称</dd>
            <dd class="d0002">公司所在地</dd>
            <dd class="d0003">经营范围</dd>
            <dd class="d0004">操作</dd>
                
          </dl>
          <div class="none_wlgs"><span>暂无物流公司信息</span>
          </div>          
          <div class="clear scroll_nr4">
            <ul 
              id="js_wlgs" 
              class="wlyq_nr">
                                
    
              <li style="display: none;">
                <a 
                  id="wlgs_a1" 
                  href="#" 
                  target="_blank" 
                  style="color: #fff;"><span 
                    id="wlgs_name" 
                    class="t0001"/></a>
                <a 
                  id="wlgs_a2" 
                  href="#" 
                  target="_blank" 
                  style="color: #fff;"><span 
                    id="wlgs_postion" 
                    class="t0002"/></a>
                <a 
                  id="wlgs_a3" 
                  href="#" 
                  target="_blank" 
                  style="color: #fff;"><span 
                    id="wlgs_jyfw" 
                    class="t0003"/></a>
                <span 
                  id="t77" 
                  class="t0004"><a 
                    id="wlgs_a" 
                    href="#" 
                    target="_blank">查看</a></span>
              </li>

       
                                
                                
            </ul>
          </div>
     
        </div>
      </div>
      <div class="main4_2">
        <div class="main4_2_1">
          <div class="xt_bottom"/>
          <div class="floatl">
            <b>找物流园区</b>
          </div>
          <div class="more2 floatr"><a 
            href="/plus/list.php?tid=1" 
            target="_blank"><span>更多&gt;</span></a></div>		 
        </div>
        <div class="h10"/>
        <div class="hy clear">
          <dl class="wlyq_d">
            <dd class="d01">物流园名称</dd>
            <dd class="d02">所在地</dd>
            <dd class="d03">专线数量</dd>
            <dd class="d04">操作</dd>
                
          </dl>
          <div class="clear ">
            <ul 
              id="js_wlyq" 
              class="wlyq_nr">
                                
    
              <li style="display: none;">
                <a 
                  id="wlyq_a1" 
                  href="#" 
                  target="_blank" 
                  style="color: #fff;"><span 
                    id="wlyq_name" 
                    class="t01"/></a>
                <a 
                  id="wlyq_a2" 
                  href="#" 
                  target="_blank" 
                  style="color: #fff;"><span 
                    id="wlyq_postion" 
                    class="t02"/></a>
                <a 
                  id="wlyq_a3" 
                  href="#" 
                  target="_blank" 
                  style="color: #fff;"><span 
                    id="wlyq_num" 
                    class="t03"/></a>
                <span 
                  id="t77" 
                  class="t04"><a 
                    id="wlyq_a4" 
                    href="#" 
                    target="_blank">查看</a></span>
              </li>

       
                                
                                
            </ul>
          </div>
        </div>
    
    
      </div>
    </div>
    <div 
      id="rf06" 
      class="main3 center ">

      <div class="tyxbox"><div class="tyxboxWrap">
        <div class="tyxleft tyxleft1">
          <div class="sHeadern">
            <div class="xt_bottom"/>	
            <b>物流商务信息</b> 
            <!--
    	<em>	<a href="#" title="合作信息">合作</a><a href="#" title="求购信息">求购</a> <a href="#" title="供应信息">供应</a><a href="#" title="招商信息">招商</a> <a href="#" title="代理信息">代理</a> 
    	</em> 
    	-->
            <span><a 
              href="/a/wuliushangwuxinxi/" 
              title="更多物流商务信息">更多&gt;</a></span></div>
          <ul class="swlist fls">
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/372.html" 
              class="cur">代理</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/372.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/372.html" 
                  title="货运全国，一站式服务！">货运全国，一站式服务！</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/372.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/371.html" 
              class="cur">供应</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/371.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/371.html" 
                  title="提供广州蚂蚁搬家服务">提供广州蚂蚁搬家服务</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/371.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/370.html" 
              class="cur">代理</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/370.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/370.html" 
                  title="广州市DHL国际快递">广州市DHL国际快递</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/370.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/369.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/369.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/369.html" 
                  title="长期供应广州至新疆到门费用">长期供应广州至新疆到门费用</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/369.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/368.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/368.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/368.html" 
                  title="长期供应广州至新西兰双清到门费用">长期供应广州至新西兰双清到门费用</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/368.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/367.html" 
              class="cur">供应</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/367.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/367.html" 
                  title="长期供应玖灵越南专线越南货运">长期供应玖灵越南专线越南货运</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/367.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/366.html" 
              class="cur">供应</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/366.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/366.html" 
                  title="黄埔报关拖车，贴心码头服务看点多">黄埔报关拖车，贴心码头服务看点多</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/366.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/365.html" 
              class="cur">代理</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/365.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/365.html" 
                  title="黄埔报关行，乌冲通关样样行">黄埔报关行，乌冲通关样样行</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/365.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/364.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/364.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/364.html" 
                  title="代理东莞虎门港、沙田港进出口报关，">代理东莞虎门港、沙田港进出口报关，</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/364.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/363.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/363.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/363.html" 
                  title="代理中山港、小榄港拖车报关公司">代理中山港、小榄港拖车报关公司</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/363.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/362.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/362.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/362.html" 
                  title="供应汕头国集港、广澳港、永泰港，拖">供应汕头国集港、广澳港、永泰港，拖</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/362.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/361.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/361.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/361.html" 
                  title="长期供应广州至迪拜海空运双清包税到">长期供应广州至迪拜海空运双清包税到</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/361.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/360.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/360.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/360.html" 
                  title="长期供应香港进出口拖车报关">长期供应香港进出口拖车报关</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/360.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/359.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/359.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/359.html" 
                  title="长期供应广州至印尼海运双清包税到门">长期供应广州至印尼海运双清包税到门</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/359.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/358.html" 
              class="cur">供应</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/358.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/358.html" 
                  title="供应江门高沙港、外海港，拖车报关公">供应江门高沙港、外海港，拖车报关公</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/358.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/357.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/357.html" 
                class="tag">报关行</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/357.html" 
                  title="长期供应珠三角进出口拖车报关">长期供应珠三角进出口拖车报关</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/357.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/356.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/356.html" 
                class="tag">公路运输</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/356.html" 
                  title="长期供应沧州河间红瑞货运信息部新疆">长期供应沧州河间红瑞货运信息部新疆</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/356.html" 
                    class="cur">详情</a></span></li>
            <li class="nods"><a 
              href="/a/wuliushangwuxinxi/2018/0703/355.html" 
              class="cur">合作</a><a 
                href="/a/wuliushangwuxinxi/2018/0703/355.html" 
                class="tag">其他</a><a 
                  href="/a/wuliushangwuxinxi/2018/0703/355.html" 
                  title="原飞航物流招合作伙伴">原飞航物流招合作伙伴</a><span><a 
                    href="/a/wuliushangwuxinxi/2018/0703/355.html" 
                    class="cur">详情</a></span></li>

          </ul>


        </div>
        <div class="tyxright tyxright1">

          <div class="sHeadern ">
            <div class="xt_bottom"/>	
            <b>物流公司推荐</b>
          </div>
          <ul id="wlgs_tj"> 
            <div id="wlgs_tj1">
              <li 
                class="arank" 
                style="display: none;">
                <div class="avatar"><a 
                  id="tj_01" 
                  href="" 
                  target="_blank" 
                  title=""><span id="tj_02"/></a></div> 
                <div class="info">
                  <div class="wlgs_pic"><img 
                    id="tj_03" 
                    class="scrollLoading" 
                    src="/images/index/wlgs_tj_01.png" 
                    alt=""></div>
                  <div class="company"><a 
                    id="tj_04" 
                    href="#" 
                    target="_blank" 
                    class="yh" 
                    title="#"/></div>
                </div>
              </li>
   
            </div>
    

            <div id="wlgs_tj2">
              <li 
                class="arank arank2" 
                style="display: none;">
                <div class="avatar avatar2"><a 
                  id="tj_05" 
                  href="" 
                  target="_blank" 
                  title=""><span id="tj_06"/></a></div> 
                <div class="company"><a 
                  id="tj_07" 
                  href="" 
                  target="_blank" 
                  class="yh" 
                  title=""/> </div>
              </li>
            </div>
     
          </ul>

        </div>
      </div>         
      </div>



      <!--仓库出租/物流设备采购 E-->
      <div class="banner">
        <img src="/images/index/26banners3.png">
      </div>

      <!--物流资讯/物流前沿/网点加盟招商 S-->
      <div 
        id="rf07" 
        class="main5 center">
        <div class="main5_1">
          <div id="main5_1_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_1"><a 
              class="zx_a1" 
              onclick="document.getElementById('main5_1_nr1').style.display='block';document.getElementById('main5_1_nr2').style.display='none';document.getElementById('more1_5_1').style.display='block';document.getElementById('more2_5_1').style.display='none';">物流资讯</a></div>
            <div id="bt2_5_1"><a 
              class="zx_a1" 
              onclick="document.getElementById('main5_1_nr1').style.display='none';document.getElementById('main5_1_nr2').style.display='block';document.getElementById('more1_5_1').style.display='none';document.getElementById('more2_5_1').style.display='block';">政策法令</a></div>
            <div id="more1_5_1"><a 
              href="/plus/list.php?tid=52" 
              target="_blank">更多&gt;</a></div>
            <div id="more2_5_1"><a 
              href="/a/zcfl/" 
              target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <div id="main5_1_nr1">
            <a href="/wlzx/xingyezixun/2018/0629/320.html"><img 
              src="/uploads/181211/1-1Q21114512A04.png" 
              alt="中国重汽不停车服务入驻凯立德物流地图生态"></a>
            <a href="/wlzx/xingyezixun/2018/0629/320.html"><span>中国重汽不停车服务入驻凯立德物流地图生态</span></a>
   
            <br>
            <div class="h18"/>
            <a href="/a/zjgd/2018/0523/114.html">因为这个补贴政策的调整，纯电动物流车“懵”</a>	<br>
            <a href="/a/zjgd/2018/0515/34.html">萨拉戈萨将成为中国企业物流宝地</a>	<br>
            <a href="/a/zjgd/2018/0523/113.html">九江石化“智能仓库”建成投用</a>	<br>
 
          </div>

          <div id="main5_1_nr2">
            <a href="/a/zcfl/2018/0514/27.html"><img 
              src="/uploads/180914/1-1P914201R1910.jpg" 
              alt="新疆密集出台方案 推动物流中心转型升级"></a>
            <a href="/a/zcfl/2018/0514/27.html"><span>新疆密集出台方案 推动物流中心转型升级</span></a>
 
            <br>
            <div class="h18"/>
            <a href="/a/zcfl/2018/0523/111.html">江苏省出台物流新政建设五大通道完善四大枢纽</a>	<br>
            <a href="/a/zcfl/2018/0515/30.html">在渝港资项目达2849个 物流等产业迎新机遇</a>	<br>
            <a href="/a/zcfl/2018/0515/29.html">安徽省首次发布社会物流统计报告</a>	<br>
  
  
          </div>
        </div>
        <div class="main5_2">
          <div id="main5_2_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_2"><a 
              class="zx_a2" 
              onclick="document.getElementById('main5_2_nr1').style.display='block';document.getElementById('main5_2_nr2').style.display='none';document.getElementById('more1_5_2').style.display='block';document.getElementById('more2_5_2').style.display='none';">物流前沿</a></div>
            <div id="bt2_5_2"><a 
              class="zx_a2" 
              onclick="document.getElementById('main5_2_nr1').style.display='none';document.getElementById('main5_2_nr2').style.display='block';document.getElementById('more1_5_2').style.display='none';document.getElementById('more2_5_2').style.display='block';">专家观点</a></div>
            <div id="more1_5_2"><a 
              href="/a/wlqy/" 
              target="_blank">更多&gt;</a></div>
            <div id="more2_5_2"><a 
              href="/a/zjgd/" 
              target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <div id="main5_2_nr1">

            <a href="/a/wlqy/2018/0515/32.html"><img 
              src="/uploads/181211/1-1Q211145152321.png" 
              alt="车联网：时代的新经济引擎 不可忽视"></a>
            <a href="/a/wlqy/2018/0515/32.html"><span>车联网：时代的新经济引擎 不可忽视</span></a>
   
            <br>
            <div class="h18"/>
            <a href="/a/wlqy/2018/0629/351.html">向快递外卖包装宣战 “绿色物流”加速推进</a>	<br>
            <a href="/a/wlqy/2018/0629/350.html">专线物流为什么难出巨头？</a>	<br>
            <a href="/a/wlqy/2018/0629/349.html">“最后一公里”的快递柜战争，怎么打？</a>	<br>
 
  
          </div>

          <div id="main5_2_nr2">
            <a href="/a/zjgd/2018/0523/112.html"><img 
              src="/uploads/180914/1-1P9142009352K.jpg" 
              alt="2020年基本建成国家车联网产业标准体系"></a>
            <a href="/a/zjgd/2018/0523/112.html"><span>2020年基本建成国家车联网产业标准体系</span></a>

            <br>
            <div class="h18"/>
                          
            <a href="/a/zjgd/2018/0523/114.html">因为这个补贴政策的调整，纯电动物流车“懵”</a>	<br>
            <a href="/a/zjgd/2018/0515/34.html">萨拉戈萨将成为中国企业物流宝地</a>	<br>
            <a href="/a/zjgd/2018/0523/113.html">九江石化“智能仓库”建成投用</a>	<br>
  
  
          </div>
        </div>


        <div class="main5_3">
          <div id="main5_3_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_2"><a 
              class="zx_a3" 
              onclick="document.getElementById('main5_3_nr1').style.display='block';document.getElementById('main5_3_nr2').style.display='none';document.getElementById('more1_5_2').style.display='block';document.getElementById('more2_5_2').style.display='none'">采购资讯</a></div>
            <div id="bt2_5_2"><a 
              class="zx_a3" 
              onclick="document.getElementById('main5_3_nr1').style.display='none';document.getElementById('main5_3_nr2').style.display='block';document.getElementById('more1_5_2').style.display='none';document.getElementById('more2_5_2').style.display='block'">仓储与配送</a></div>
            <div id="more1_5_2"><a 
              href="/plus/list.php?tid=58" 
              target="_blank">更多&gt;</a></div>
            <div id="more2_5_2"><a 
              href="/plus/list.php?tid=59" 
              target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <div id="main5_3_nr1">

            <a href="/wlzx/caigouzixun/2018/0629/301.html"><img 
              src="/uploads/181211/1-1Q211145222544.png" 
              alt="打造“智慧”与“绿色”供应链生态圈"></a>
            <a href="/wlzx/caigouzixun/2018/0629/301.html"><span>打造“智慧”与“绿色”供应链生态圈</span></a>
   
            <br>
            <div class="h18"/>
            <a href="/wlzx/caigouzixun/2018/0629/308.html">山东临沂：规范化程序采购廉租房</a>	<br>
            <a href="/wlzx/caigouzixun/2018/0629/307.html">应建立工贸结合的大型跨国经营企业集团</a>	<br>
            <a href="/wlzx/caigouzixun/2018/0629/306.html">2013北京采购论坛成功举办</a>	<br>
 
  
          </div>

          <div id="main5_3_nr2">
            <a href="/wlzx/cangchuyupeisong/2018/0629/289.html"><img 
              src="/uploads/180914/1-1P9142009352K.jpg" 
              alt="走在战斗路上的顺丰，能否经得住苏宁式考验"></a>
            <a href="/wlzx/cangchuyupeisong/2018/0629/289.html"><span>走在战斗路上的顺丰，能否经得住苏宁式考验</span></a>

            <br>
            <div class="h18"/>
                          
            <a href="/wlzx/cangchuyupeisong/2018/0629/291.html">2018外卖配送如何发力</a>	<br>
            <a href="/wlzx/cangchuyupeisong/2018/0629/290.html">聋哑小哥送外卖顺便要钱？真相让人泪奔</a>	<br>
            <a href="/wlzx/cangchuyupeisong/2018/0629/288.html">末端共同配送这把良药，让通达系吃下去有点难</a>	<br>
  
  
          </div>
        </div>



      </div>

      <!--物流资讯/物流前沿/网点加盟招商 E-->

      <!--会员量/客户案例/常用实用工具 S-->
      <div class="main5 center">
        <div class="main5_1">
          <div id="main6_1_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_1"><a>会员量</a></div>
          </div>
          <div class="clear"/>
          <div id="main6_1_hy">
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q211145A2U6.png" 
                width="60px" 
                height="60px">
              <span>工厂</span>
              <i>852</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q21114563U54.png" 
                width="60px" 
                height="60px">
              <span>商贸</span>
              <i>2078</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q211145620612.png" 
                width="60px" 
                height="60px">
              <span>物流公司</span>
              <i>2018</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q21114552W24.png" 
                width="60px" 
                height="60px">
              <span>三方物流</span>
              <i>2046</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q211145501230.png" 
                width="60px" 
                height="60px">
              <span>信息部</span>
              <i>3012</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q211145442243.png" 
                width="60px" 
                height="60px">
              <span>快递公司</span>
              <i>886</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q2111454245S.png" 
                width="60px" 
                height="60px">
              <span>车主</span>
              <i>2088</i>
            </div>
            <!--会员量 E-->
            <!--会员量 S-->
            <div class="hyl">
              <img 
                src="/uploads/181211/1-1Q21114540QZ.png" 
                width="60px" 
                height="60px">
              <span>其他类型</span>
              <i>1122</i>
            </div>
            <!--会员量 E-->




          </div>
        </div>
        <div class="main5_2">
          <div id="main5_2_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_5_2">
            <a onclick="document.getElementById('main5_2_nr1').style.display='block';document.getElementById('main5_2_nr2').style.display='none';document.getElementById('more1_5_2').style.display='block';document.getElementById('more2_5_2').style.display='none';">客户案例</a></div>
            <div id="more1_5_2"><a 
              href="/plus/list.php?tid=21" 
              target="_blank">更多&gt;</a></div>
          </div>
          <div class="clear"/>
          <div id="main6_2_nr1">
            <div class="anli">
              <div class="floatl"><a href="/a/khal/2018/0516/42.html"><img 
                src="/uploads/181211/1-1Q2111452512c.png" 
                alt="选择安发中国推广，正确无悔的" 
                width="90px" 
                height="68px"></a>	</div>
              <div class="anlixq">
                <span>选择安发中国推广，正确无悔的</span><br>
                <a href="/a/khal/2018/0516/42.html">—上海畅心物流有限公司温经理随着互联网对物流行业的影响，近...</a>
                <br>
		
		
              </div>			
			 
            </div>
            <div class="anli">
              <div class="floatl"><a href="/a/khal/2018/0516/43.html"><img 
                src="/uploads/181211/1-1Q2111452512c.png" 
                alt="从使用到经营，一条致富之路！" 
                width="90px" 
                height="68px"></a>	</div>
              <div class="anlixq">
                <span>从使用到经营，一条致富之路！</span><br>
                <a href="/a/khal/2018/0516/43.html">—天恒物流青岛分公司李经理加入物通网已经有三年多的时...</a>
                <br>
		
		
              </div>			
			 
            </div>
            <div class="anli">
              <div class="floatl"><a href="/a/khal/2018/0516/44.html"><img 
                src="/uploads/181211/1-1Q2111452512c.png" 
                alt="选择安发中国，正确无悔的选择" 
                width="90px" 
                height="68px"></a>	</div>
              <div class="anlixq">
                <span>选择安发中国，正确无悔的选择</span><br>
                <a href="/a/khal/2018/0516/44.html">—上海畅心物流有限公司温经理随着互联网对物流行业的影响，近...</a>
                <br>
		
		
              </div>			
			 
            </div>
   

   
                        
                          			                 
          </div>


        </div>
        <div class="main5_3">
          <div id="main6_3_1">
            <div class="xt_bottom_w92"/>
            <div id="bt1_6_3">
            <a>常用工具</a></div>
          </div>
          <div class="clear"/>
          <div id="tools">
            <div class="t"><a 
              target="_blank" 
              href="http://www.chajiaotong.com/jiashizheng/#guangdong"><em>•</em>驾驶证查询</a></div>
            <div class="t bold"><a 
              target="_blank" 
              href="http://www.chajiaotong.com/jiashizheng/#guangdong"><em>•</em>行驶证查询</a></div>
            <div class="t bold"><a 
              target="_blank" 
              href="https://www.kuaidi100.com/"><em>•</em>快递查询</a></div>
            <div class="t"><a 
              target="_blank" 
              href="http://www.weizhang8.cn/"><em>•</em>交通违章查询</a></div>
            <div class="t"><a 
              target="_blank" 
              href="http://tianqi.2345.com/"><em>•</em>天气预报</a></div>
            <div class="t"><a 
              target="_blank" 
              href="https://shenfenzheng.51240.com/"><em>•</em>身份证查询</a></div>
            <div class="t"><a 
              target="_blank" 
              href="https://shouji.51240.com/"><em>•</em>手机号码归属地</a></div>
            <div class="t bold"><a 
              target="_blank" 
              href="https://wannianrili.51240.com/"><em>•</em>万年历</a></div>
            <div class="t"><a 
              target="_blank" 
              href="http://www.chinacar.com.cn/vin_index.html"><em>•</em>车辆代码查询</a></div>
            <div class="t"><a 
              target="_blank" 
              href="https://youbian.51240.com/"><em>•</em>邮政编号查询</a></div>
            <div class="t bold"><a 
              target="_blank" 
              href="http://map.baidu.com/fwmap/zt/traffic/"><em>•</em>全国路况信息查询</a></div>
            <div class="t bold"><a 
              target="_blank" 
              href="https://www.icauto.com.cn/gonglu/"><em>•</em>全国高速公路查询</a></div>
            <div class="t"><a 
              target="_blank" 
              href="http://www.zou114.com/highwaycode/"><em>•</em>国家干线公路查询</a></div>
            <div class="t"><a 
              target="_blank" 
              href="http://cal.apple886.com/"><em>•</em>在线计算器</a></div>

          </div>


        </div>
      </div>
      <!--会员量/客户案例/常用实用工具  E-->
      <!--合作伙伴 S-->
      <div class="partner center w1400">
        <!--
	<img src="/templets/default/index_files/btn.png" style="width:100%;height: 100%">
		-->
        <div class="bt"><span>28快运可以为您提供什么服务保障？</span></div>
        <div class="bt2"><span>集结众多货运能力，提供真实可靠的物流服务</span></div>
        <div style="width:1400px;height:322px;">
          <div class="partner_item">
            <p><img src="/images/index/partner_1.png"></p>
            <p class="item_txt1">海量运力</p>
            <p class="item_txt2">链接上千家快运物流公司，产品囊括小票、大票零担，网络线路覆盖千万级，实现一点发全国。</p>	
          </div>
          <div class="partner_item">
            <p><img src="/images/index/partner_2.png"></p>
            <p class="item_txt1">独享低价</p>
            <p class="item_txt2">大量批发货主合伙人，独享物流费用议价能力，实现全网线上比价，在线下单可统一管理物流订单。</p>	
          </div>
          <div class="partner_item">
            <p><img src="/images/index/partner_3.png"></p>
            <p class="item_txt1">物流跟踪</p>
            <p class="item_txt2">物流节点及时更新，货物物流跟踪全程可视，让发货方和收货方的交易因物流而变得更信任。</p>	
          </div>
          <div class="partner_item">
            <p><img src="/images/index/partner_4.png"></p>
            <p class="item_txt1">发货保障</p>
            <p class="item_txt2">28快运在线发货，服务有保障，若有异议可在线投诉，客服及时介入处理，让您发货无忧。</p>	
          </div>
			
			
        </div>
      </div>

	
    </div>
    <!--右侧悬浮 S-->
    <div class="floatNavBar">

      <div class="nav-bd">
        <div class="rightKfCon"><a class="rightKf"/></div>
        <div class="rightBarHidden">
          <div class="item">
            <i class="kfImg"/>
            <div class="kfTop">
              <h3>在线客服</h3>
              <p>周一至周五 9:00-18:00</p>
            </div>
            <div class="kfCenter">
              <a 
                class="keFu1" 
                onclick="javascript:window.open('tencent://message/?uin=596803544&amp;Site=&amp;menu=yes');">
              <img src="/images/kefu1.png"></a>
              <a onclick="javascript:window.open('tencent://message/?uin=596803544&amp;Site=&amp;menu=yes');">
              <img src="/images/kefu2.png"></a>
            </div>
            <div class="kfRight">
              <span>客服电话</span><br>
              <span class="phone">400-9992828</span>
            </div>
          </div>
        </div>

        <ul class="nav-flo">
          <li class=""><a 
            href="#rf01" 
            title="找专线">找专线</a></li>
          <li class=""><a 
            href="#rf02" 
            title="找车源">找车源</a></li>
          <li class=""><a 
            href="#rf03" 
            title="找货源">找货源</a></li>
          <li class=""><a 
            href="#rf04" 
            title="找园区">找园区</a></li>
          <li>
            <a 
              href="#rf00" 
              title="回顶部" 
              class="last">回顶部<br>
            <i class="whiteArw"/></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      title: '专线列表页面',
      lists: [],
      ip: ''
    }
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/index/css/echarts.css' }]
  },
  mounted() {
    if (process.client) {
      seajs.use(
        [
          '/index/js/pic_scroll.js',
          '/index/js/gaodemap2.js',
          '/index/js/index.js',
          '/index/js/floatBar.min.js',
          '/index/js/memu.js'
        ],
        function() {
          $(function() {
            $('a[_for]').mouseover(function() {
              $(this)
                .parents()
                .children('a[_for]')
                .removeClass('thisclass')
                .parents()
                .children('dd')
                .hide()
              $(this)
                .addClass('thisclass')
                .blur()
              $('#' + $(this).attr('_for')).show()
            })
            $('a[_for=uc_member]').mouseover()
            $('a[_for=flink_1]').mouseover()
          })

          // <!-- 客服点击弹出效果-->
          function kefu_block() {
            //alert("1");
            $('.kefu_box').css('display', 'block')
          }
          function kefu_none() {
            //alert("1");
            $('.kefu_box').css('display', 'none')
          }
          $('.nods:nth-child(even)').addClass('extra')
          //header车源搜索 S
          $('#search_cheyuan0').click(function() {
            var list1 = [],
              list2 = []
            $('#carLineFrom0 .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#carLineTo0 .select-item').each(function(i, e) {
              list2.push($(this).text())
            })
            var endp = list2[0]
            var endc = list2[1]
            var enda = list2[2]

            if (!startp) {
              startp = ''
            }
            if (!startc) {
              startc = ''
            }
            if (!starta) {
              starta = ''
            }
            if (!endp) {
              endp = ''
            }
            if (!endc) {
              endc = ''
            }
            if (!enda) {
              enda = ''
            }
            startp = encodeURI(startp)
            startc = encodeURI(startc)
            starta = encodeURI(starta)
            endp = encodeURI(endp)
            endc = encodeURI(endc)
            enda = encodeURI(enda)
            window.location =
              '/plus/list.php?tid=3&startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta +
              '&endp=' +
              endp +
              '&endc=' +
              endc +
              '&enda=' +
              enda
          })
          //header车源搜索 E

          //header货源搜索 S
          $('#search_huoyuan0').click(function() {
            var list1 = [],
              list2 = []
            $('#HuoyuanFrom0 .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#HuoyuanTo0 .select-item').each(function(i, e) {
              list2.push($(this).text())
            })
            var endp = list2[0]
            var endc = list2[1]
            var enda = list2[2]

            if (!startp) {
              startp = ''
            }
            if (!startc) {
              startc = ''
            }
            if (!starta) {
              starta = ''
            }
            if (!endp) {
              endp = ''
            }
            if (!endc) {
              endc = ''
            }
            if (!enda) {
              enda = ''
            }
            startp = encodeURI(startp)
            startc = encodeURI(startc)
            starta = encodeURI(starta)
            endp = encodeURI(endp)
            endc = encodeURI(endc)
            enda = encodeURI(enda)
            window.location =
              '/plus/list.php?tid=2&startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta +
              '&endp=' +
              endp +
              '&endc=' +
              endc +
              '&enda=' +
              enda
          })
          //header货源搜索 E

          //header专线搜索 S
          $('#search_wlLine0').click(function() {
            var list1 = [],
              list2 = []
            $('#wlLineFrom0 .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var startp = list1[0]
            var startc = list1[1]
            var starta = list1[2]

            $('#wlLineTo0 .select-item').each(function(i, e) {
              list2.push($(this).text())
            })
            var endp = list2[0]
            var endc = list2[1]
            var enda = list2[2]

            if (!startp) {
              startp = ''
            }
            if (!startc) {
              startc = ''
            }
            if (!starta) {
              starta = ''
            }
            if (!endp) {
              endp = ''
            }
            if (!endc) {
              endc = ''
            }
            if (!enda) {
              enda = ''
            }
            startp = encodeURI(startp)
            startc = encodeURI(startc)
            starta = encodeURI(starta)
            endp = encodeURI(endp)
            endc = encodeURI(endc)
            enda = encodeURI(enda)
            window.location =
              '/plus/list.php?tid=4&startp=' +
              startp +
              '&startc=' +
              startc +
              '&starta=' +
              starta +
              '&endp=' +
              endp +
              '&endc=' +
              endc +
              '&enda=' +
              enda
          })
          //header专线搜索 E

          /*滚动效果*/

          var $this1 = $('.scroll_nr1')
          var scrollTimer1
          //alert(1);
          $this1
            .hover(
              function() {
                clearInterval(scrollTimer1)
              },
              function() {
                scrollTimer1 = setInterval(function() {
                  scrollNews($this1)
                }, 10000)
              }
            )
            .trigger('mouseout')

          var $this2 = $('.scroll_nr2')
          var scrollTimer2
          //alert(1);
          $this2
            .hover(
              function() {
                clearInterval(scrollTimer2)
              },
              function() {
                scrollTimer2 = setInterval(function() {
                  scrollNews($this2)
                }, 10000)
              }
            )
            .trigger('mouseout')

          var $this3 = $('.scroll_nr3')
          var scrollTimer3
          //alert(1);
          $this3
            .hover(
              function() {
                clearInterval(scrollTimer3)
              },
              function() {
                scrollTimer3 = setInterval(function() {
                  scrollNews($this3)
                }, 10000)
              }
            )
            .trigger('mouseout')

          var $this4 = $('.scroll_nr4')
          var scrollTimer4
          //alert(1);
          $this4
            .hover(
              function() {
                clearInterval(scrollTimer4)
              },
              function() {
                scrollTimer4 = setInterval(function() {
                  scrollNews4($this4)
                }, 10000)
              }
            )
            .trigger('mouseout')

          function scrollNews(obj) {
            //alert(1);
            var $self = obj.find('ul:first')
            var lineHeight = $self.find('li:first').height()
            $self.animate(
              { 'margin-top': -8 * lineHeight + 'px' },
              2000,
              function() {
                $self.css({ 'margin-top': '0px' })
                obj
                  .find('ul:first li')
                  .slice(0, 8)
                  .appendTo($self)
              }
            )
          }
          function scrollNews4(obj) {
            //alert(1);
            var $self = obj.find('ul:first')
            var lineHeight = $self.find('li:first').height()
            $self.animate(
              { 'margin-top': -9 * lineHeight + 'px' },
              2000,
              function() {
                $self.css({ 'margin-top': '0px' })
                obj
                  .find('ul:first li')
                  .slice(0, 9)
                  .appendTo($self)
              }
            )
          }
          //echart滚动脚本
          var speed = 30 //数字越大速度越慢
          var tab = $('.echart_scroll_nr')
          var tab1 = $('.echart_scroll_nr1')
          var tab2 = $('.echart_scroll_nr2')
          tab2.html(tab1.html())
          console.log('tab2:' + tab2.html())
          function Marquee() {
            if (tab2[0].offsetWidth - tab[0].scrollLeft <= 0) {
              tab[0].scrollLeft -= tab1[0].offsetWidth
              //console.log('tab1[0].offsetWidth:'+tab1[0].offsetWidth)
            } else {
              tab[0].scrollLeft++
              //console.log('tab[0].scrollLeft:'+tab1[0].scrollLeft)
            }
          }
          var MyMar = setInterval(Marquee, speed)
          tab.mouseover(function() {
            clearInterval(MyMar)
          })
          tab.mouseout(function() {
            MyMar = setInterval(Marquee, speed)
          })
        }
      )
    }
  }
}
</script>
