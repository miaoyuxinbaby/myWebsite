
import '../css/reset.css';
import '../css/fullpageDemo.less';
import {minit} from './computed-rem.js';
import {checkBrowser} from './header.js';

$(function() {
	minit();
	checkBrowser();
})


