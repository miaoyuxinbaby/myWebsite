
import '../css/reset.css';
import '../css/header.less';
import '../css/table.less';
import {minit} from './computed-rem.js';
import {navAction, checkBrowser} from './header.js';
$(function() {
	minit();
	checkBrowser();
	navAction();
})