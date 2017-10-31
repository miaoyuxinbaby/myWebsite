
import '../css/reset.css';
import '../css/header.less';
import '../css/resume.less';
import {minit} from './computed-rem.js';
import {navAction, checkBrowser} from './header.js';

$(function(){
	minit();
	checkBrowser();
	navAction();
	navChangeColor();
	sidebarClick();
	sidebarFixed();
})

// 控制header的变色
function navChangeColor () {
	$('.nav-wrapper ul li:eq(1) a').attr('href', 'javascript:void(0);');

	$('.nav-wrapper ul li:eq(1)').css({
		'color': '#337ab7',
		'background': '#eee'
	});
}

// 控制sidebar的位置
function sidebarFixed () {
	let doms = $(".sidebar li");
	let $rOffsetTop = $(".sidebar").offset().top || 0,
    	$width = $(".sidebar").width();
    let arr = [];
    doms.each(function(index, el) {
    	arr.push($(this).attr('data-pos'));
    });
	window.onscroll = function(){
	    var t = document.documentElement.scrollTop || document.body.scrollTop;
	    if( t >= $rOffsetTop ) {
	         $(".sidebar").css({"top":15,"width":$width});
	    } else {
	        $(".sidebar").css({"top":51,"width":$width});
	    }
		
	    if (t < arr[1]) {
		    $('.sidebar .active').removeClass('active');
		    doms.eq(0).addClass('active');
	    }

	    if (arr[1] < t && t < arr[2]) {
	    	$('.sidebar .active').removeClass('active');
			doms.eq(1).addClass('active');
	    }

	    if (arr[2] < t && t < arr[3]) {
	    	$('.sidebar .active').removeClass('active');
			doms.eq(2).addClass('active');
	    }

	    if (arr[3] < t && t < arr[4]) {
	    	$('.sidebar .active').removeClass('active');
			doms.eq(3).addClass('active');
	    }

	    if (arr[4] < t && t < arr[5]) {
	    	$('.sidebar .active').removeClass('active');
			doms.eq(4).addClass('active');
	    }

	    if (arr[5] < t) {
	    	$('.sidebar .active').removeClass('active');
			doms.eq(5).addClass('active');
	    }
	}
}

// 点击导航定位网页
function sidebarClick() {
	// 绑定每个楼层的位置
	$(".module").each(function(index){ //下标从0开始
		var offsetTop = $(this).offset().top || 0;
		$(".sidebar li").eq(index).attr("data-pos",offsetTop);
	});

	// 绑定点击事件
	$('.sidebar').on('click', 'li', function(event) {
		let offsetTopNew = $(this).attr('data-pos') - 70;
		// console.log(typeof $(this).attr('data-pos'));
		// console.log(typeof offsetTopNew);
		$('body,html').animate({"scrollTop": `${offsetTopNew}px`}, 500);
		$('.sidebar .active').removeClass('active');
		$(this).addClass('active');
	});
}

