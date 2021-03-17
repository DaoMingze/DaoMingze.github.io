/* 鼠标特效 */
function getColorRandom() { /* 随机颜色函数 */
	var c = "#";
	var cArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	for (var i = 0; i < 6; i++) {
		var cIndex = Math.round(Math.random() * 15);
		c += cArray[cIndex];
	}
	return c;
}
var a_idx = 0;
jQuery(document).ready(function ($) {
	$("body").click(function (e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
			y = e.pageY;
		$i.css({
			"z-index": 999999999,
			"top": y - 20,
			"left": x,
			"position": "absolute",
			"font-weight": "bold",
			"color": getColorRandom()
		});
		$("body").append($i);
		$i.animate({
			"top": y - 180,
			"opacity": 0
		}, 1500, function () {
			$i.remove();
		});
	});
});<link rel="stylesheet" href="/css/markmap.css" type="text/css">