import '../css/reset.css';
import '../css/header.less';
import '../css/fixedSliderRight.less';
import { minit } from './computed-rem.js';
import { navAction, checkBrowser} from './header.js';
$(function() {
    minit();
    checkBrowser();
    navAction();
    sidebar();
})

function sidebar() {
    $(function() {
        $("#leftsead a").hover(function() {
            $(this).children("div.hides").css("margin-right", "0");
            $(this).children("div.shows").css("margin-right", "-200px");
        }, function() {
            $(this).children("div.hides").css("margin-right", "-200px");
            $(this).children("div.shows").css("margin-right", "0");
        });
        $('#backTop').click(function() {
            $("html,body").animate({ scrollTop: 0 }, 300);
        });
    });
}