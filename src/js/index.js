/**
 * @author  wuyunfei
 * @date    2017-9-26
 * @version V 1.0
 * @email   1151815317@qq.com
 */

import '../css/reset.css';
import '../css/header.less';
import '../css/index.less';
import {minit} from './computed-rem.js';
import {navAction, checkBrowser} from './header.js';

$(function() {
	minit();
	checkBrowser();
	navAction();
	actionBody();
})
function actionBody() {
	$('.logo').attr('href', 'javascript:void(0);');
	$('.nav-wrapper ul li:eq(0) a').attr('href', 'javascript:void(0);');

	$('.nav-wrapper ul li:eq(0)').css({
		'color': '#337ab7',
		'background': '#eee'
	});

	{
		let dom = $('.row div a img');
		$('.row div').on('mouseenter', 'img', function(event) {
			$(this).removeClass('rotate-end').addClass('rotate-start');
		});
		$('.row div').on('mouseleave', 'img', function(event) {
			$(this).removeClass('rotate-start').addClass('rotate-end');
		});

	}
}
