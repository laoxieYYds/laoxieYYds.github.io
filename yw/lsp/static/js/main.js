
// var granimInstance = new Granim({
// 	element: '#canvas-basic',
// 	direction: 'left-right',
// 	isPausedWhenNotInView: true,
// 	states: {
// 		"default-state": {
// 			gradients: [
// 				['#a18cd1', '#fbc2eb'],
// 				['#fff1eb', '#ace0f9'],
// 				['#d4fc79', '#96e6a1'],
// 				['#a1c4fd', '#c2e9fb'],
// 				['#a8edea', '#fed6e3'],
// 				['#9890e3', '#b1f4cf'],
// 				['#a1c4fd', '#c2e9fb'],
// 				['#fff1eb', '#ace0f9']
// 			]
// 		}
// 	}
// });

(function () {
	var a_idx = 0;
	window.onclick = function (event) {
		var a = new Array("❤口交❤", "❤内射❤", "❤后入❤", "❤得吃❤", "❤好吃❤", "❤鲍鱼❤", "❤白虎❤", "❤黑丝❤", "❤乱伦❤","❤男男❤", "❤女女❤", "❤偷吃❤");
		var heart = document.createElement("b"); //创建b元素
		heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

		document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
		a_idx = (a_idx + 1) % a.length;
		heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

		var f = 15, // 字体大小
			x = event.clientX - f / 2 - 30, // 横坐标
			y = event.clientY - f, // 纵坐标
			c = randomColor(), // 随机颜色
			a = 1, // 透明度
			s = 0.8; // 放大缩小

		var timer = setInterval(function () { //添加定时器
			if (a <= 0) {
				document.body.removeChild(heart);
				clearInterval(timer);
			} else {
				heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
					c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
					s + ");";

				y--;
				a -= 0.016;
				s += 0.002;
			}
		}, 15)
	}
	// 随机颜色
	function randomColor() {
		return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
			.random() * 255)) + ")";
	}
}());

	function NewDate(str) {
		str = str.split('-');
		var date = new Date();
		date.setUTCFullYear(str[0], str[1] - 1, str[2]);
		date.setUTCHours(0, 0, 0, 0);
		return date;
	}
	function showsectime() {
		var birthDay = NewDate("2024-4-14");
		var today = new Date();
		var timeold = today.getTime() - birthDay.getTime();
		var sectimeold = timeold / 1000
		var secondsold = Math.floor(sectimeold);
		var msPerDay = 24 * 60 * 60 * 1000; var e_daysold = timeold / msPerDay;
		var daysold = Math.floor(e_daysold);
		var e_hrsold = (daysold - e_daysold) * -24;
		var hrsold = Math.floor(e_hrsold);
		var e_minsold = (hrsold - e_hrsold) * -60;
		var minsold = Math.floor((hrsold - e_hrsold) * -60); var seconds = Math.floor((minsold - e_minsold) * -60).toString();
		document.getElementById("运行时间").innerHTML = "彦吾站台旗下的lsp 已安全运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
		setTimeout(showsectime, 1000);
	} showsectime();
