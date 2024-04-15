function toast(msg, timeout) {
    timeout = timeout || 3000;
    if (!document.getElementsByClassName('toast-wrap').length) {
        var div = document.createElement('div');
        div.className = 'toast-wrap';
        div.innerHTML = '<span class="toast-msg"></span>';
        document.getElementsByTagName("body")[0].appendChild(div);
    }
    document.getElementsByClassName('toast-wrap')[0].getElementsByClassName('toast-msg')[0].innerHTML = msg;
    var toastTag = document.getElementsByClassName('toast-wrap')[0];
    toastTag.style.display = "block";
    setTimeout(function () {
        toastTag.style.display = 'none';
    }, timeout);
}

function is_mobile() {
	var isMobile = null != navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i);
	return isMobile;
}

function login() {
    var html = '';
    var isLogin = Object.keys(store.get('user_info') || {}).length ? true : false;
    if (isLogin) {
        var user_info = store.get('user_info');
        html = '<dd>欢迎您 <font color="red">'+ user_info.username + '</font>，\
            <a href="javascript:void(0);" onclick="book.logout()">[退出登录]</a></dd>';
    } else {
		html = '<dd><form name="headLoginForm" id="headLoginForm" method="post">欢迎您，\
            [<a href="/user/login.html" class="txt">登录</a>]或\
            [<a href="/user/register.html" class="txt">注册</a>]</form></dd>';
    }
    document.writeln(html);
}


function getQuery(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function getSelectedCheckbox(div,name){
    var checks = "";
    var val = "";
    $("#"+div+" input[name='"+name+"']").each(function(){
        if($(this).prop("checked")){
            val = $(this).val();
            if("" == checks){
                checks += val;
            }else{
                checks += ","+val;
            }
        }
    });
    return checks;
}


//设置首页
function sethome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
            alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。");
        }
    }
}

//加入收藏
function addFavorite() {
    URL = '/';
    title = '';
    try {
        window.external.addFavorite(URL, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, URL, "");
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}



//全局
function search() {
	var html = '<form class="searchForm" action="/user/search.html">' +
		'<dl class="fl searchbox"><dt><i></i>' +
	    '<input name="q" type="text" autocomplete="off" placeholder="可搜书名和作者，请您少字也别输错字。" onfocus="this.focus();">' +
		'</dt><dd>' +
	    '<button type="submit" class="so_book" value="搜索" /></button></dd></dl>' +
	    '</form>';
    document.writeln(html);
}

function search_from() {
	var html = '<li style=\"float:right;\"><form class="searchForm" action="/user/search.html">' +
	    '<input name="q" type="text" autocomplete="off" style=\"width:200px\" placeholder="提示:宁少字,别错字" onfocus="this.focus();">' +
	    ' <input type="submit" value="搜  索" /></li>' +
	    '</form>';
    document.writeln(html);
}

function search_before() {
	$("#loading").css('display', 'block');
}

function search_after() {
	$("#loading").css('display', 'none');
}

function foot() {
}


function share() {
}

//首页 index
function show_runme(){
document.writeln("<script type=\"text/javascript\">var flexlen=$(\"s_dd\").getElementsByTagName(\'dd\').length;var pershow=parseInt(flexlen/6);var showdiv=936;var perwidth=156;var playme;var nxper;function wamccshow(per){var minc;var mink=\'\';var no_l=$(\"s_dd\").style.left;per=per?per:0;for(var j=0;j<flexlen;j++){$(\"s_dd\").getElementsByTagName(\'dd\')[j].style.display=((j>=per*6)&&(j<(per+1)*6))?\"block\":\"none\"}for(var i=0;i<pershow;i++){minc=i!=per?\"\":\'class=\"current\"\';mink+=\'<a href=\"javascript:void(0);\" onclick=\"wamccshow(\'+i+\')\" \'+minc+\'></a>\'}$(\"s_dt\").innerHTML=mink;per++;nxper=per>=pershow?0:per;if(playme){clearInterval(playme)}playme=setInterval(function(){wamccshow(nxper)},3000)};$(\"s_dl\").onmouseover=function(){clearInterval(playme)};$(\"s_dl\").onmouseout=function(){playme=setInterval(function(){wamccshow(nxper)},3000)};wamccshow();</script>");
}
function index_top() {
}

function index_middle() {
}

//信息页 book
function book_top() {
}

function book_middle() {
}


//列表页 list

function list_top() {
}

function list_middle() {
}


//列表页 content
function read_top() {
}

function read_middle() {
}

//分类 category  排行榜 top 全本 quanben
function sort() {
}

function page() {
    document.write('背景颜色 \n' + 
    '    <select name="bcolor" id="bcolor" onchange="changeOpts(this, 1)">\n' + 
    '        <option style="background-color:#E9FAFF" value="#E9FAFF">底色</option>\n' + 
    '        <option style="background-color: #f6f6f6;" value="#f6f6f6">默认</option>\n' + 
    '        <option style="background-color: #ffffff" value="#ffffff">白色</option>\n' + 
    '        <option style="background-color: #e3e8f7" value="#e3e8f7">淡蓝</option>\n' + 
    '        <option style="background-color: #daebfc" value="#daebfc">蓝色</option>\n' + 
    '        <option style="background-color: #ebeaea" value="#ebeaea">淡灰</option>\n' + 
    '        <option style="background-color: #e7e3e6" value="#e7e3e6">灰色</option>\n' + 
    '        <option style="background-color: #dedcd8" value="#dedcd8">深灰</option>\n' + 
    '<option style="background-color: #d8d7d7" value="#d8d7d7">暗灰</option>\n' + 
    '<option style="background-color: #e6fae4" value="#e6fae4">绿色</option>\n' + 
    '<option style="background-color: #f9fbdd" value="#f9fbdd">明黄</option>\n' + 
    '    </select>\n' + 
    '    文字颜色\n' + 
    '    <select name=txtcolor id=txtcolor onchange="changeOpts(this, 2)">\n' + 
    '<option value="#000000">字色</option>\n' + 
    '<option value="#000000">黑色</option>\n' + 
    '<option value="#ff0000">红色</option>\n' + 
    '<option value="#006600">绿色</option>\n' + 
    '<option value="#0000ff">蓝色</option>\n' + 
    '<option value="#660000">棕色</option>\n' + 
    '    </select>\n' + 
    '    字体大小\n' + 
    '    <select name=fonttype id=fonttype onchange="changeOpts(this, 3)">\n' + 
    '<option value="20px">字号</option>\n' + '<option value="16px" >小号</option>\n' + 
    '<option value="18px" >较小</option>\n' + '<option value="22px" >中号</option>\n' + 
    '<option value="24px" >较大</option>\n' + 
    '<option value="26px" >大号</option>\n' + 
    '    </select>\n' + 
    '    鼠标双击滚屏\n' + 
    '    <select name="scrollspeed" id="scrollspeed" onchange="changeOpts(this, 4)">\n' + 
    '<option value="5">滚屏</option>\n' + 
    '        <option value="1">1</option>\n' + 
    '        <option value="2">2</option>\n' + 
    '        <option value="3">3</option>\n' + 
    '        <option value="4">4</option>\n' + 
    '        <option value="5">5</option>\n' + 
    '        <option value="6">6</option>\n' + 
    '        <option value="7">7</option>\n' + 
    '        <option value="8">8</option>\n' + 
    '        <option value="9">9</option>\n' + 
    '        <option value="10">10</option>\n' + 
    '    </select>\n' + 
    '    (1-10，1最慢，10最快)');
}
function Book() {
    this.user_info = store.get('user_info') || {};
    this.token = Object.keys(this.user_info).length ? this.user_info.token : '';
}

Book.prototype = {
    addBook: function (book_id) {
        this.checkLogin();
        var url = '/api/addBook';
        var params = {'token': this.token, 'bid': book_id};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                toast('<p class="pop">恭喜您已成功加入到书架中！</p>');
                $("#saveBookBtn").html("<font color=red>已加入书架</font>");
            } else {
                toast(json.msg);
            }
        }, 'json');
    },
    getBook: function () {
    	this.checkLogin();
        var url = '/api/findBook';
        var params = {'token': this.token};
        $.post(url, params, function (json) {
            var bookList = json.data;
            if (json.code == 0) {
                var interText = doT.template($("#tpl-bookcase").text());
                $("#book-list").html(interText(bookList));
            } else if (json.code == 201) {
                location.href = '/user/login.html';
            }
        }, 'json');
    },
    delBook: function (book_id) {
    	this.checkLogin();
        var url = '/api/delBook';
        var params = {'token': this.token, 'bid': book_id};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                $('#book' + book_id).remove();
                toast('删除成功！');
            } else {
                toast(json.msg);
            }
        }, 'json');
    },
    getBookcase: function (site_book_id) {
    	if (this.token == '' || this.token == undefined) {
    		return ;
    	}
        var url = '/api/getBookMark';
        var params = {'token': this.token, 'bid': site_book_id};
        $.get(url, params, function (json) {
            if (json.code == 0) {
                if (json.data.id > 0) {
                    $("#saveBookBtn").html("<font color=red>已加入书架</font>");
                }
            }
        }, 'json');
    },
    getBookMark: function (site_book_id, site_chapter_id) {
    	if (this.token == '' || this.token == undefined) {
    		return ;
    	}
        var url = '/api/getBookMark';
        var params = {'token': this.token, 'bid': site_book_id};
        $.get(url, params, function (json) {
            if (json.code == 0) {
            	if (json.data.site_chapter_id == site_chapter_id) {
            		$("#saveMarkTopBtn").html("<font color=red>已加入书签</font>");
            		$("#saveMarkBottomBtn").html("<font color=red>已加入书签</font>");
                }
            }
        }, 'json');
    },
    readLog: function (type) {
        type = parseInt(type) || 0;
        if (type == 1) {
            bookList = store.get('book_readlog') || [];
            if (bookList.length) {
                if (bookList.length >= 20) {
                    bookList.pop();
                }
                for (var i in bookList) {
                    if (parseInt(bookList[i].book_id) == parseInt(info.book_id)) {
                        bookList.splice(i, 1);
                        break;
                    }
                }
            }
            bookList.unshift(info);
            store.set('book_readlog', bookList);
        } else if (typeof (doT) == 'object') {
            bookList = store.get('book_readlog') || [];
            var interText = doT.template($("#tpl-readlog").text());
            $("#book-list").html(interText(bookList));
        }
    },
    removeLog: function(book_id) {
        bookList = store.get('book_readlog') || [];
        for (var i in bookList) {
            if (parseInt(bookList[i].book_id) == book_id) {
                bookList.splice(i, 1);
                break;
            }
        }
        store.set('book_readlog', bookList);
        $("#log" + book_id).remove();
    },
    chapterSort: function () { //章节排序
        var oUl = document.getElementById('chapter-list');
        var oLi = oUl.getElementsByTagName('li');
        for (var i = 0, arr = []; i < oLi.length; i++) {
            arr[i] = oLi[i];
        }
        arr.reverse();
        for (var i = 0; i < arr.length; i++) {
            oUl.appendChild(arr[i]);
        }
        var text = document.getElementById('order').innerText;
        document.getElementById('order').innerText = (text == '[倒序]') ? '[正序]' : '[倒序]';
    },
    checkLogin: function () { //验证登录
        if (this.token == '' || this.token == undefined) {
        	var referer = window.location.href;
            location.href = '/user/login.html?referer='+encodeURIComponent(referer);
        }
    },
    userLogin: function () { //用户登录
        var username = $("#loginForm #username").val();
        var password = $("#loginForm #password").val();
        //var expire = $("#loginForm #usecookie").find('option:checked').val();
        if (username == '') {
            toast('请输入用户名！');
            return false;
        }
        if (password == '') {
            toast('请输入密码！');
            return false;
        }
        var referer = getQuery('referer');
        var url = '/api/login';
        var params = {'username': username, 'password': password};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                store.set('user_info', json.data);
                if ("" != referer && false != referer) {
                	location.href = decodeURIComponent(referer);
                }else{
                	location.href = '/';
                }
            } else {
                toast(json.msg);
            }
        }, 'json');
        return false;
    },
    userHeadLogin: function () {
    	var username = $("#headLoginForm #username").val();
        var password = $("#headLoginForm #password").val();
        //var expire = $("#loginForm #usecookie").find('option:checked').val();
        if (username == '') {
            toast('请输入用户名！');
            return false;
        }
        if (password == '') {
            toast('请输入密码！');
            return false;
        }
        var url = '/api/login';
        var params = {'username': username, 'password': password};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                store.set('user_info', json.data);
                location.href = '/';
            } else {
                toast(json.msg);
            }
        }, 'json');
        return false;
    },
    userRegister: function () {
        var username   = $("#regForm #username").val();
        var password   = $("#regForm #password").val();
        var repassword = $("#regForm #repassword").val();
        var email      = $("#regForm #email").val();

        var xarg = /^[a-z0-9][a-z0-9@\-._]{5,31}$/i;
        if (username == '' || !xarg.test(username)) {
            toast('用户名格式有误，6-32位字母、数字或_.-@组成！');
            return false;
        }
        if (password == '' || !xarg.test(password)) {
            toast('密码格式有误，6-32位字母、数字或_.-@组成！');
            return false;
        }
        if (repassword == '') {
            toast('请输入确认密码！');
            return false;
        }
        if (password != repassword) {
            toast('输入的两次密码不一致！');
            return false;
        }
        var url = '/api/register';
        var params = {'username': username, 'password': password, 'email': email};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                store.set('user_info', json.data);
                location.href = '/';
            } else {
                toast(json.msg);
            }
        }, 'json');
        return false;
    },
    editPassword: function () {
    	this.checkLogin();
        var password = $("#password").val();
        var repassword = $("#repassword").val();

        var xarg = /^[a-z0-9][a-z0-9@\-._]{5,31}$/i;
        if (password == '' || !xarg.test(password)) {
            toast('密码格式有误，6-32位字母、数字或_.-@组成！');
            return false;
        }
        if (repassword == '') {
            toast('请输入确认密码！');
            return false;
        }
        if (password != repassword) {
            toast('输入的两次密码不一致！');
            return false;
        }
        var url = '/api/editPassword';
        var params = {'token': this.token, 'password': password};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                toast('密码修改成功');
            } else {
                toast(json.msg);
            }
        }, 'json');
    },
    logout: function () {
        store.remove('user_info');
        location.href = '/';
    },
    userInfo: function () {
        this.checkLogin();
        var url = '/api/getInfo';
        var params = {'token': this.token};
        $.get(url, params, function (json) {
            if (json.code == 0) {
                var interText = doT.template($("#tpl-userinfo").text());
                $("#info-more").html(interText(json.data));
            }
        }, 'json');
    },
    editInfo: function () {
        this.checkLogin();
        var nickname = $('#nickname').val();
        var email = $('#email').val();
        var sex = $("input[name='sex']:checked").val();
        var url = '/api/editInfo';
        var params = {'token': this.token, 'nickname': nickname, 'email': email, 'sex': sex};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                alert('资料修改成功');
            } else {
                toast(json.msg);
            }
        }, 'json');
    },
    addMark: function (bid, cid, cname) {
        this.checkLogin();
        //cname = encodeURIComponent(cname || '');
        var url = '/api/mark';
        var params = {'token': this.token, 'bid': bid, 'cid': cid, 'cname': cname};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                toast('书签加入成功！');
                $("#MarkTop").html("<font color=red>已加入书签</font>");
        		$("#MarkBottom").html("<a class='case'>已加入书签，继续阅读其他章节</a>");
            } else {
                toast(json.msg);
            }
        }, 'json');
    },
    userVote: function (bid) {
        this.checkLogin();
        var url = '/api/vote';
        var params = {'token': this.token, 'bid': bid};
        $.post(url, params, function (json) {
            if (json.code == 0) {
                toast('<p class="pop">投票成功！</p>');
            } else {
                toast(json.msg);
            }
        }, 'json');
    },
    bookStats: function (bid) {
        var url = '/api/access';
        $.post(url, {'bid': bid}, function (json) {}, 'json');
    },
    search: function () {
        var keyword = decodeURIComponent(getQuery('q'));
        if ("" == keyword) {
        	bookList = new Array();
            bookList['search'] = new Array();
            bookList['keyword'] = keyword || '';
            var interText = doT.template($("#tpl-search").text());
            $("#book-list").html(interText(bookList));
        	return ;
        }
        search_before();
        var url = '/api/search';
        var params = {'q': keyword};
        $.get(url, params, function (json) {
        	search_after();
        	if (json.code == 0) {
        		bookList = json.data;
                bookList['keyword'] = keyword || '';
                var interText = doT.template($("#tpl-search").text());
                $("#book-list").html(interText(bookList));
        	} else {
        		toast(json.msg);
        	}
        }, 'json');
    },
    report: function () {
        var url = '/api/report';
        var referer = getQuery('referer');
        var bid     = $("#reportForm #bid").val();
        var cid     = $("#reportForm #cid").val();
        var content = $("#reportForm #content").val();
        var report_types = getSelectedCheckbox('reportForm', 'report_type');
        if ("" == report_types) {
        	toast('请选择一项错误类型');
            return false;
        }

        var params = {'token': this.token, 'bid': bid, 'cid': cid, 'type': report_types, 'content': content};
        $.post(url, params, function (json) {
            refreshVcode('img_vcode');
            if (json.code == 0) {
                toast('反馈成功！');
                if ("" != referer && false != referer) {
                	location.href = decodeURIComponent(referer);
                } else {
                	location.href = '/';
                }
            } else {
                toast(json.msg);
            }
        }, 'json');
    }
}

window.book = new Book();

