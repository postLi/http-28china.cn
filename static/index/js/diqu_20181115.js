// 获取参数的值

function GetQueryString(e) {
	var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
			s = window.location.search.substr(1).match(t)
			return null != s ? unescape(s[2]) : null
}

function GetUrlParam(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	var r = encodeURI(window.location.search).substr(1).match(reg)
	if (r != null) return unescape(r[2]);
	return null
}

var myurl = window.location.href
if (location.href.indexOf('?') == -1) {
	myurl = location.href + '?'
}
var code = GetQueryString('code')
var REGIONSDATA = []
function getCityNameByCode(code){
	var find = ""
	$.each(REGIONSDATA, function(index,ele){
		if(el.code === code){
			find = el
		}
	});
	return find || code
}
//console.log(code)


// 专线数据字典 S

function cx01() {
	return $.getJSON('/templets/default/js/regions.json').done(function(res){
		REGIONSDATA = res
		var datas = res
		for (var i = 0; i < datas.length; i++) {
			if(datas[i].level === 1){
				var name = datas[i].alias
				var code = datas[i].code
				// var name1 = name.substring(0, 2)
				var s1 = '<a href="#" data-pinyin="' + datas[i].pinyin  +'" name="' + code + '" ><span>' + name + '</span></a>'

				$('#map_box').append(s1)
			}
				
		}
		// 初始化横向的导航
		cx02(null)
		// 初始化页面
		detectWhereYouGo()
	});

}


function cx02(code) {

	var datas = []
	$.each(REGIONSDATA, function(index, el){
		if(el.parent_code === code){
			datas.push(el)
		}
	})

	$('#sub_diqu').html('')
	for (var i = 0; i < datas.length; i++) {
			var name = datas[i].alias
			var code = datas[i].code
			// var name1 = name.substring(0, 2)
			var s1 = '<a href="#" data-pinyin="' + datas[i].pinyin  +'"  name="' + code + '" >' + name + '</a>'


			$('#sub_diqu').append(s1)
	}
}

function setSelectArea(a,b,c){
	$.cookie('currentArea',b||"",{
		expires: 365,
		path:'/'
	})
	$.cookie('currentAreaName',b?a:"",{
		expires: 365,
		path:'/'
	})
	$.cookie('currentAreaIsAll',!b ? 'china' : '',{
		expires: 365,
		path:'/'
	})

vo1 = new Object();
vo1.startLocation=a;
 if (!b || b== "null") {
 
 	delete vo1.startLocation;}

 window.process1 && process1(vo1);
console.log(vo1)
vo2 = new Object();
vo2.strartAddress=a;
 if (!b || b== "null") {
 	delete vo2.startLocation;}
 	
 window.process2 && process2(vo2);
console.log(vo2)
vo3 = new Object();
vo3.startProvinceCityArea=a;
vo3.queryType=2;
 if (!b || b== "null") {
 	delete vo3.startLocation;}
 	
 window.process3 && process3(vo3);
 console.log(vo3)
}
// 点击下拉框
$('.map_box').on('click', 'a', function (e) {
	e.preventDefault()
	var a = $(this).children('span').html()
	var b = $(this).attr('name')
	var c = $(this).data('pinyin')

	console.log('切换到省市'+a+b+c)
	$('#diqu').html(a)
	$('#map_box').css('display', 'none')
	cx02(b || null)
	setSelectArea(a,b,c)
});
// 点击横向的分站
$('#sub_diqu').on('click', 'a', function (e) {
	e.preventDefault()
	var a = $(this).html()
	var b = $(this).attr('name')
	var c = $(this).data('pinyin')
	$('#diqu').html(a)
	if (b.indexOf('0000') != -1) {
			console.log('此地区为省份，展开下级城市！')
			cx02(b);
	}
	console.log("sub:"+a+b+c)
	setSelectArea(a,b,c)
});
cx01()
// cx02(' ')
// 专线数据字典 E

// 处理自动跳转
function detectWhereYouGo(){
	
	// 在样式后面载入脚本，避免被脚本卡住样式
	// 返回格式
	// {"cip": "219.137.141.118", "cid": "440106", "cname": "广东省广州市天河区"};

	// 先获取链接
	// 再判断cookie
	// 最后利用搜狗ip库
	var area = $.cookie('currentArea');
	var all = $.cookie('currentAreaIsAll');
	var find;
	if(area){
		// 判断能否找到对应的地区
		
		$.each(REGIONSDATA, function(index, el) {
			if(el.code === area){
				find =  true;
				// 如果是1级则点击上面
				if(el.level===1){
					$('#map_box [name="'+el.code+'"]').trigger('click');
				} else if(el.level===2){
					// 如果是2级则点击下面
					// $('#map_box [name="'+el.parent_code+'"]').trigger('click');
					cx02(el.parent_code)
					$('#sub_diqu [name="'+el.code+'"]').trigger('click');
				}
				
			}
		});
	}
	// 当找不到且选的为非全国时，调用第三方ip库判断
	if(!find && !all){

		$.getScript('http://pv.sohu.com/cityjson?ie=utf-8').done(function(){
			if(window.returnCitySN){
				var city = returnCitySN.cname;
				console.log(city)
				// 先从前到后判断
				// 先找省
				// 再找市
				// 匹配不到市则选省
				// 匹配不到省则默认全国
				var find1;
				var find2;
				$.each(REGIONSDATA, function(index, ele){
					if(city.indexOf(ele.name)===0){
						find1 = ele;
						
					}
				});
				if(find1){
					$.each(REGIONSDATA, function(index, ele){
						if(city.indexOf(find1.name + ele.name)===0){
							find2 = ele;
						}
					});
					if(find2){
						cx02(find2.parent_code)
						$('#sub_diqu [name="'+find2.code+'"]').trigger('click');
					} else {
						$('#map_box [name="'+find1.code+'"]').trigger('click');
					}
				} else {
					// 如果匹配失败，则默认为全国
					setSelectArea("",null,"")
				}
			}
			$('#diqu').show();
		}).fail(function(){
			// 如果加载失败，则默认为全国
			$('#diqu').show();
			setSelectArea("",null,"")
		});
	} else if(!find || all==='china') {
		$('#diqu').show();
		setSelectArea("",null,"")
	} else {
		$('#diqu').show();
	}
	
}


