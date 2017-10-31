/**
 * @author  wuyunfei
 * @date    2017-9-28
 * @version V 1.0
 * @email   1151815317@qq.com
 */
// var $ = require('jquery');

import '../css/fonts/iconfont/iconfont.css';
export const navAction = () => {
	let menuState = false;
	let menuDom = $('.nav-wrapper ul');
	$('.menu').on('click', function(event) {
		if ( menuState === false) {
			menuDom.addClass('h160');
			menuState = true;
		} else {
			menuDom.removeClass('h160');
			menuState = false;
		}
	});
}
export const checkBrowser = function() {
    function isLowerBrowser() {
        var flag = false;

        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                flag = true;
            } else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                flag = true;
            } else if (navigator.userAgent.indexOf("MSIE 8.0") > 0) { //这里是重点，区别ie9
                flag = true;
            } else if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
                flag = true;
            }
        }
        return flag;
    }
    if (isLowerBrowser()) {
        window.location = "./notice.html";
    }
}