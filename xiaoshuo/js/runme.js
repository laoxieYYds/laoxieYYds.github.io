var flexlen = $("s_dd").getElementsByTagName('dd').length;
var pershow = parseInt(flexlen / 6);
var showdiv = 936;
var perwidth = 156;
var playme;
var nxper;
function wamccshow(per) {
    var minc;
    var mink ='';
	var no_l=$("s_dd").style.left;
    per = per ? per: 0;
	/**/
    //$("s_dd").style.left=( - perwidth * 6 * per + "px");	
	for(var j=0;j<flexlen;j++){
		$("s_dd").getElementsByTagName('dd')[j].style.display=((j>=per*6) && (j<(per+1)*6))?"block":"none";
	}
    for (var i = 0; i < pershow; i++) {
        minc = i != per ? "": 'class="current"';
        mink += '<a href="javascript:void(0);" onclick="wamccshow(' + i + ')" ' + minc + '></a>'
    }
	$("s_dt").innerHTML=mink;
    per++;
    nxper = per >= pershow ? 0: per;
	if(playme){clearInterval(playme);}
    playme = setInterval(function() {
        wamccshow(nxper)
    },
    3000);
};
$("s_dl").onmouseover=function() {
    clearInterval(playme)
};
$("s_dl").onmouseout=function() {
    playme = setInterval(function() {
        wamccshow(nxper)
    },
    3000)
};
wamccshow();