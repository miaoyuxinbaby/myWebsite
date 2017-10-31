
import '../css/reset.css';
import '../css/header.less';
import '../css/myComponents.less';
import {minit} from './computed-rem.js';
import {navAction, checkBrowser} from './header.js';

$(function() {
	minit();
	checkBrowser();
	navAction();
	navChangeColor();
})
function navChangeColor() {
	$('.nav-wrapper ul li:eq(3) a').attr('href', 'javascript:void(0);');
	$('.nav-wrapper ul li:eq(3)').css({
		'color': '#337ab7',
		'background': '#eee'
	});
}