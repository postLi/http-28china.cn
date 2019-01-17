;(function($){
		if(!$){
			return;
		}
		jQuery.getParams = function(_keystr,url) {
			var keystr = _keystr || '';
			var args = url || location.search;
			args = args.replace(/&amp;/ig,"&");
			if(!args){return "";}
			var reg = new RegExp('[\?&]' + keystr + '=([^&]*)[&$]?', 'i');
			var chk = args.match(reg);
			return chk ? chk[1] : "";
		};
	
		// 控制输入框行为
		$('#find_order_input').on({
			'keyup': function(){
				if(this.value){
					$('.find_order_search').addClass('hide_search_tip');
				} else {
					$('.find_order_search').removeClass('hide_search_tip');
				}
			},
			"focus": function(){
				//$('.find_order_search').addClass('hide_search_tip');
				
			},
			"blur": function(){
				if(!this.value){
					$('.find_order_search').removeClass('hide_search_tip');
				} else {
					$('.find_order_search').addClass('hide_search_tip');
				}
			},
		});

		var AFWL_API = {
			url: '/api',
			findByNum: function(num){
				return $.get(this.url + '/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/' + num)
			},
			getInfoById: function(id){
				return $.get(this.url + '/aflc-portal/order/fclOrder/v1/queryWaybillStateById/' + id)
			},
			getCompanyOrder: function(cid, num){
				return $.get(this.url + '/aflc-portal/order/fclOrder/v1/queryCurrentCompanyWaybillInfoBySerial',{
					'userName': cid,
					'serial': num
				})
			}
		};
		function findByCompany(queryuid,querynum){
			return AFWL_API.getCompanyOrder(queryuid,querynum).done(function(res){
				$('.find_order_con').addClass('hide');
				var data = res.data;
				if(res.status === 200&&data.length){
					$('.return_search').hide();
					render(data);
					$('.find_order_content_info').removeClass('hide');
				} else {
					$('.return_search').show();
					$('.find_order_none').removeClass('hide');
				}
			}).fail(function(){
				alert('请求出错了~');
			});
		}
		function findById(id){
			return AFWL_API.getInfoById(id).done(function(res){
				
				if(res.status === 200 ){
					$('.find_order_con').addClass('hide');
					render(res.data);
					$('.find_order_content_info').removeClass('hide');
				} else {
					alert('查询出错了:' + (res.errorInfo || res.text));
					//$('.find_order_none').removeClass('hide');
				}
			}).fail(function(){
				alert('请求出错了~');
			});
		}
		function findByNum(querynum){
			return AFWL_API.findByNum(querynum).done(function(res){
				$('.find_order_con').addClass('hide');
				if(res.status === 200 && res.data.length){
					if(res.data.length===1){
						$('.return_search').hide();
						findById(res.data[0].id);
					} else {
						$('.return_search').show();
						var data = res.data;
						var title = $('.find_order_search_list .find_order_company');
						title.find('span').text(querynum);
						title.find('span').attr('title',querynum);
						title.find('i').text(data.length);
						
						var str = '';
						var len = data.length;
						
						for(var i =0;i<len;i++){
							str += '<li><span rel="'+data[i].id+'" class="find_company_order">'+data[i].shipSn+' <i>'+data[i].companyName+'</i> </span></li>';
						}

						$('.find_order_search_list ol').html(str);
						$('.find_order_search_list').removeClass('hide');
					}
				} else {
					$('.find_order_none').removeClass('hide');
				}
			}).fail(function(){
				alert('请求出错了~');
			});
		}
		function render(data){
			$('.find_order_content_info .find_order_company').text(data[0].orgName);

			var tpl = '<li class="{class}"> <span class="find_order_date">{date}</span> <span class="find_order_line"><i></i></span> <span class="find_order-info"><b>{trackNode}</b> {trackInfo} </span> </li>';
			var str  = '';
			var len = data.length;
			for(var i = 0;i<len;i++){
				str += tpl.replace('{class}', (i===0&&data[i].trackNode==='签收'&&data[i].trackType === 0) ? 'find_order_sign' : (i===(len-1) ? 'find_order_create' : '')).replace('{date}',data[i].createTime).replace('{trackNode}',data[i].trackNode).replace('{trackInfo}',data[i].trackInfo)
			}

			$('.find_order_list').html(str);
		}
		// 如果传了参数，则进行判断
		var querynum = $.getParams('num');
		var queryuid = $.getParams('uid2');
		// 1.传了uid跟num值
		if(querynum&&queryuid){
			$('#find_order_input').val(querynum).trigger('blur');
			findByCompany(queryuid,querynum);
		} else if(querynum){
			$('#find_order_input').val(querynum).trigger('blur');
			// 2.只传num值
			findByNum(querynum);
		} else {
			// 3.什么都没传
			$('.find_order_default').removeClass('hide');
		}
		
		// 搜索按钮
		$(".find_order_search_btn").on({
			'click': function(){
				var querynum = $.trim($('#find_order_input').val())
				if(querynum){
					var queryuid = $.getParams('uid2');
					if(queryuid){
						findByCompany(queryuid,querynum);
					} else {
						findByNum(querynum);
					}
				} else {
					alert('请输入你要搜索的值');
				}
			}
		});

		// 列表点击公司
		$('.find_order_company_list').on('click','span',function(){
			findById($(this).attr('rel'));
			
		});
		// 返回公司列表
		$('.return_search').on('click',function(){
			$('.find_order_content_info').addClass('hide');
			$('.find_order_search_list').removeClass('hide');
		});

		

	})(window.jQuery);