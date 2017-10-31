/**
 * @author  wuyunfei
 * @date    2017-9-27
 * @version V 1.0
 * @email   1151815317@qq.com
 */
// 如果设计图是640，10PX就是0.1rem。 
// 按设计图大小更改num的默认值。可以达到设计图是num，10px就是0.1rem。
export const minit = (num = 640) => {
	let changeRem = () => {
		let deviceWidth = document.documentElement.clientWidth;
		if ( deviceWidth >= num ) {
			document.documentElement.style.fontSize = '40px';
			return ;
		}
		document.documentElement.style.fontSize = deviceWidth / num * 100 + 'px';
	}
	changeRem();
	let t;
	window.addEventListener('resize', (e) => {
		clearTimeout(t);
		t = setTimeout(changeRem, 300);
	}, false);
	window.addEventListener('pageshow', (e) => {
		if ( e.persisted ) {
			clearTimeout(t);
			t = setTimeout(changeRem, 300);
		}
	}, false);
}

