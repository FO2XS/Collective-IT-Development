
$(document).ready(function(){
	
	$('body').addClass('js');
	 
	$("body").on("click", "[data-ajaxc]:not(.is-active)", function(){
		var $castom = $(this).attr("data-ajaxc"),
			$targetBox = $(this).closest('.sect').children('.sect-cont');
		$targetBox.html('<span class="fa fa-spinner fa-spin"></span>');
		$.post(dle_root+"engine/ajax/custom.php", {castom:$castom}, function(data){
			$targetBox.html(data);
		});
		$(this).addClass('is-active').siblings().removeClass('is-active');
	});
	
	var tempScrollTop, currentScrollTop = 0;
	var header = $('#header'), headerPos = header.offset().top, headerHeight = header.outerHeight(), stickyHide = headerPos + 180; 
	header.wrap('<div style="height:'+headerHeight+'px"></div>');
	$(window).scroll(function(){	
		if ($(this).scrollTop () > headerPos) {
			header.addClass('sticky')
		} else {
			header.removeClass('sticky')
		};
		if ($(this).scrollTop () > stickyHide) {
			header.addClass('sticky-hide')
		} else {
			header.removeClass('sticky-hide')
		};
		currentScrollTop = $(window).scrollTop();
		if (tempScrollTop < currentScrollTop ) {
			header.removeClass('sticky-vis')
		} else if (tempScrollTop > currentScrollTop ) {
			header.addClass('sticky-vis')
		};
		tempScrollTop = currentScrollTop;
	}); 
	
   $('.slice-this').wTextSlicer({
    height: '150',
    textExpand: 'Развернуть описание',
    textHide: 'Свернуть описание'
   });
   
	$('.slide-circle').each(function() {
		var circleBox = $(this);
		var votes = circleBox.parent().next(),
			rateCount = parseInt(votes.find('.ratingtypeplusminus').text()),
			voteCount = parseInt(votes.find('span[id]:last').text());
        if ( voteCount >= rateCount && voteCount > 0) {
			var circleRate = (Math.round((voteCount - (voteCount - rateCount)/2)/voteCount*100))/10
        } else {var circleRate = 0};
		circleBox.append('<div>'+circleRate+'<div>рейтинг</div></div>');
		setTimeout(function () {
		circleBox.circleProgress({
		  size: 50.0,
		  startAngle: -1.5,
		  lineCap: 'round',
		  value: circleRate/10,
		  emptyFill:'#bbb',
		  fill: {gradient: ['#F37335','#FDC830']}
		});
		}, 400);
	});
	
	$('.flikes').each(function(){
        var a = $(this),
			aNext = a.next(),
			b = parseInt(aNext.find('.ratingtypeplusminus').text()),
			c = parseInt(aNext.find('span[id]:last').text());
        if ( c >= b ) {
        var m = (c - b)/2,
			p = c - m;
		a.find('.ps').append('<span class="psc">'+p+'</span>');
        a.find('.ms').prepend('<span class="msc">'+m+'</span>');
        };
    });	
	$('.tabs-box').each(function(){
		$(this).find('.tabs-sel span:first').addClass('current');
		$(this).find('.tabs-b:first').addClass('visible');
	});
	$('.tabs-sel').on('click', 'span:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
		.parents('.tabs-box').find('.tabs-b').hide().eq($(this).index()).fadeIn(0);
	});
	$('.flight').click(function(){
		if ( $('.light-overlay').length < 1 ) {
			$('.full').prepend('<div class="light-overlay"></div>');
		};
		$('body').toggleClass('light-off');
		var t = $(this);
		t.text(t.text() == 'Свет' ? 'Свет' : 'Свет');
	});	
	
	$('.comm-author').each(function(){
        var a = $(this), b = a.closest('.comm-item'), c = a.text().substr(0,1),
			d = ["#c57c3b","#753bc5","#79c53b","#eb3b5a","#45aaf2","#2bcbba","#778ca3"], rand = Math.floor(Math.random() * d.length);
		b.prepend('<div class="comm-letter" style="background-color:'+d[rand]+'">'+c+'</div>');
    });	
	
	$('body').on('click','#pagi-load a',function(){
		var $urlNext = $(this).attr('href');
		var $scrollNext = $(this).offset().top - 200;
        if ($urlNext !== undefined) {
			$.ajax({
				url: $urlNext,
				beforeSend: function() {
					ShowLoading('');
				},			 
                success: function(data) {
                    $('#bottom-nav').remove();
                    $('#dle-content').append($('#dle-content', data).html());
                    $('#dle-content').after($('#bottom-nav'));
					window.history.pushState("", "", $urlNext);
					// $('html, body').animate({scrollTop:$scrollNext}, 800);	
					HideLoading('');
                },
				  error: function() {				
					HideLoading('');
					alert('что-то пошло не так');
				  }
			});
		};
		return false;
	});	
		
	$('body').on('click','.js-login',function(){
		if ( $('.login-overlay').length < 1 ) {
			$('.login-box').before('<div class="login-overlay"></div>');
			$('.login-box').prepend('<div class="login-close"><span class="fa fa-times"></span></div>');
		};
		$('.login-box, .login-overlay').fadeIn(200);
		$('#side-panel, .btn-close').removeClass('active');
		$('#close-overlay').fadeOut(200);
		$('body').removeClass('opened-menu');
		return false;
	});
	$('body').on('click','.login-overlay, .login-close',function(){
		$('.login-box, .login-overlay').fadeOut(200);
	});
	
	
	$('body').append('<div class="close-overlay" id="close-overlay"></div><div class="side-panel" id="side-panel"></div><div class="btn-close"><span class="fa fa-times"></span></div>');
	$('.to-mob').each(function() {
		$(this).clone().prependTo('#side-panel');
	});		
	$(".btn-menu").click(function(){
		$('#side-panel, .btn-close').addClass('active');
		$("#close-overlay").fadeIn(200);
		$('body').addClass('opened-menu');
	});
	$(".close-overlay, .btn-close").click(function(){
		$('#side-panel, .btn-close').removeClass('active');
		$('#close-overlay').fadeOut(200);
		$('body').removeClass('opened-menu');
	}); 
	$('body').on('click','.ac-textarea textarea, .fr-wrapper',function(){
		$('.add-comm-form').addClass('active').find('.ac-protect').slideDown(400);
	});
    $('#dle-content > #dle-ajax-comments').appendTo($('#full-comms')); 

	$('body').append('<div id="gotop"><span class="fa fa-arrow-up"></span></div>');
	var $gotop=$('#gotop'); 
	$(window).scroll (function () {
		if ($(this).scrollTop () > 300) {$gotop.fadeIn(200);
		} else {$gotop.fadeOut(200);}
	});	
	$gotop.click(function(){
		$('html, body').animate({ scrollTop : 0 }, 'slow');
	});
	
	$('body').on('click', '.fshare .fa', function() {
		var id = $(this).data('id');
		social_share(id);
	});
	
});

function social_share(id) {
    var like_title = encodeURIComponent(document.title),
        like_url = encodeURIComponent(window.location.href),
        like_image = encodeURIComponent($('meta[property="og:image"]').attr('content'));
    if (like_image == undefined) {
        like_image = '';
    }
    if (id == 'vk') {
        var url = "https://vk.com/share.php?title=" + like_title + "&description=" + "&url=" + like_url + "&image=" + like_image + "&nocache-";
    } else if (id == 'fb') {
        var url = "https://www.facebook.com/sharer.php?s=100&p[title]=" + like_title + "&p[url]=" + like_url + "&p[images][0]=" + like_image + "&nocache-";
    } else if (id == 'tw') {
        var url = "https://twitter.com/share?text=" + like_title + "&url=" + like_url + "&counturl=" + like_url + "&nocache-";
    } else if (id == 'ggl') {
        var url = "https://plus.google.com/share?url=" + like_url + "&title=" + like_title + "&imageurl=" + like_image;
    } else if (id == 'ok') {
        var url = "https://connect.ok.ru/offer?url=" + like_url;
    } else if (id == 'tlg') {
        var url = "https://telegram.me/share/url?url=" + like_url + "&text=" + like_title;
    }
    window.open(url, '', 'toolbar=0,status=0,width=655,height=430');
};

function doRateLD( rate, id ) {
	ShowLoading('');
	$.get(dle_root + "engine/ajax/controller.php?mod=rating", { go_rate: rate, news_id: id, skin: dle_skin, user_hash: dle_login_hash }, function(data){
		HideLoading('');
		if ( data.success ) {
			var rating = data.rating;
			rating = rating.replace(/&lt;/g, "<");
			rating = rating.replace(/&gt;/g, ">");
			rating = rating.replace(/&amp;/g, "&");
			$("#ratig-layer-" + id).html(rating);
			$("#vote-num-id-" + id).html(data.votenum);
			var rt = parseInt($(rating).text());
			var ms = (data.votenum - rt)/2;
			var ps = data.votenum - ms;
			var cr = (Math.round((data.votenum - (data.votenum - rt)/2)/data.votenum*100))/10;
			$("#ps-" + id).children('.psc').text(ps);
			$("#ms-" + id).children('.msc').text(ms);
			$('.slide-circle > div').html(cr+'<div>рейтинг</div>');
			$('.slide-circle').circleProgress({value: cr/10});
		} else if (data.error) {DLEalert ( data.errorinfo, dle_info );}
	}, "json");
};

/*!  wTextSlicer v 1.01 */

jQuery.fn.wTextSlicer = function(options){
   var options = jQuery.extend({
    height: '200',
    textExpand: 'expand text',
    textHide: 'hide text'
    },options);
   return this.each(function() {
     var a = $(this),
       h = a.outerHeight();
     if ( h > options.height ) {
       a.addClass('slice slice-masked').attr('data-height',h).height(options.height).after('<div class="slice-btn"><span>'+options.textExpand+'</span></div>');
     };
     var bt = $(this).next('.slice-btn').children('span');
     bt.click(function() {
       var ah = parseInt(a.css("height"), 10);
       ah == h ? a.css({'height':options.height}) : a.css({'height':h});
       bt.text(bt.text() == options.textExpand ? options.textHide : options.textExpand);
       a.toggleClass('slice-masked');
     });
   });
};

/*!xSort*/
function xsort_empty(){
	$("#dle-content").html('<div class="xsort_empty">Ничего не найдено</div>');
}

$(document)
.on('click','.xsort-selected',function(e){
	var ul = $(this).parents('.xsort-div').find('.xsort-ul');
	var d = ul.css('display');
	$('.xsort-ul').hide();
	if(d=='none') ul.slideDown(200);
//	var litop = ul.find('li.current')[0].offsetTop-31;
//	ul.animate({'scrollTop':litop+'px'},100);
	return false;
})
.on('click','.xsort-ul li',function(){
	$this = $(this);
	var text = $this.text();
	var val = $this.data('val');
	var field = $this.parents('.xsort-ul').data('field');
	var sel = $this.parents('.xsort-div');
	if(val!=='') sel.addClass('xsort-active');
	else sel.removeClass('xsort-active');
	sel = sel.find('.xsort-selected');
	var url = window.location.href;
	if(field=='defaultsort'){
		$this.siblings().removeClass('xasc xdesc');
		sel = sel.find('span');
		if(val!==''){
			if($this.hasClass('xdesc')){
				$this.removeClass('xdesc').addClass('xasc');
				sel.attr("class","xasc");
			}else{
				$this.removeClass('xasc').addClass('xdesc');
				sel.attr("class","xdesc");
			}
		}else{
			sel.removeClass('xasc xdesc');
		}
	}else{
		if($(this).hasClass('current')){
			$this.parents('.xsort-ul').find('li').eq(0).click();
			return false;
		}
	}
	sel.html(text);
	$this.addClass('current').siblings().removeClass('current');

	if(url.indexOf('/page/')>=0){
		url = url.split('/page/');
		url = url[0]+'/';
	}
	ShowLoading();
	$(".berrors").remove();
	
	$.ajax({
		url: url,
		type: "POST",
		method: "POST",
		data: {xsort:1,xs_field:field,xs_value:val}
	}).done(function(d){
		HideLoading();
		var html = $("#dle-content",d).html();
		if(html){
			$("#dle-content").html(html);
			if(url != window.location.href) window.history.pushState(null, null, url);
		}else xsort_empty();
	}).fail(function(d){
		HideLoading();
		xsort_empty();
	})
})
.on('click','body:not(.xsort-ul)',function(){
	$('.xsort-ul').fadeOut(100);
})
.on('click','.xsort-div-filler',function(){
	ShowLoading();
	$('#xsort-admin').remove();
	$('body').append('<div id="xsort-admin" title="Поиск и формирование списка значений доп. полей" style="display:none;"/>');
	$.post(dle_root+"engine/mods/xsort/admin.php",{do:'start'},function(d){
		HideLoading();
		$('#xsort-admin').html(d).dialog({
			width: '600px',
			buttons: {
				'Закрыть':function(){
					$(this).dialog('close');
				}
			}
		});
	})
})
.on('click','.xsort-admin-area ul li',function(){
	var ul = $(this).parents('ul');
	ul.addClass('loading');
	if(!$(this).hasClass('current')) $(this).removeClass('xreverse');
	var reverse = $(this).hasClass('xreverse');
	$(this).toggleClass('xreverse');
	$(this).addClass('current').siblings().removeClass('current');
	$.post(dle_root+"engine/mods/xsort/admin.php",{field:$(this).data('field'),reverse:reverse},function(d){
		ul.removeClass('loading');
		$('.xsort-admin-area pre code').html(d);
	})
})
.on('click','.xsort-div-clearall',function(){
	var url = window.location.href;
	if(url.indexOf('/page/')>=0){
		url = url.split('/page/');
		url = url[0]+'/';
	}
	ShowLoading();
	$(".berrors").remove();
	$.ajax({
		url: url,
		type: "POST",
		method: "POST",
		data: {xsort:1,xs_field:'clearallfields'}
	}).done(function(d){
		HideLoading();
		window.location.href = url;
	}).fail(function(d){
		HideLoading();
		xsort_empty();
	})
})

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.0
 * @licence MIT
 * @preserve
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=function(t,e){return void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),i(e),e}:i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var o=a.gradientAngle||0,l=a.gradientDirection||[r/2*(1-Math.cos(o)),r/2*(1+Math.sin(o)),r/2*(1+Math.cos(o)),r/2*(1-Math.sin(o))],h=n.createLinearGradient.apply(n,l),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i,t,e,a,n){return(t/=n/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var o=i.extend({},a.data());"string"==typeof o.fill&&(o.fill=JSON.parse(o.fill)),"string"==typeof o.animation&&(o.animation=JSON.parse(o.animation)),s=i.extend(o,s),s.el=a,r=new t(s),a.data(n,r)}})}});


/* end */