<!DOCTYPE html>
<html lang="en">

<head>
    <title>文件</title>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="txt/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <script src="./ajax-jquery.min.js"></script>
    <style>
      html, body { height: 100%; text-align: center; }
      body { background-repeat:no-repeat; background-size:cover; }
      table { margin: auto; border-collapse: collapse; }

      /*炫彩背景*/
      td,h2,p {
        text-align: center;
        background:
          -webkit-linear-gradient(left, #147B96, #FF00FF 25%, #147B96 50%, #FF00FF 75%, #147B96);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-background-size: 200% 100%; -webkit-animation: hi2 1s, runs 3s infinite linear;
      }
      @-webkit-keyframes runs {
        0% { background-position: 0 0; }
        100% { background-position: -100% 0; }
      }
      @-webkit-keyframes hi1 {
        0% { width: 0px; border-radius: 999999px; opacity: 0; }
        100% {}
      }
      @-webkit-keyframes hi2 {
        0% { opacity: 0; padding-top: 20px; }
        100% {}
      }
    </style>
</head>

<body>
    <h2><a href='https://qm.qq.com/q/uYsvPqa7ba' target='_blank'>联系作者</a></h2>

<?php
// 获取当前目录下的文件列表
$files = scandir('.');

// 排除当前目录和上级目录
$files = array_diff($files, array('.', '..'));

// 转换大小格式
function formatBytes($bytes, $precision = 2) {
    $units = array('B', 'KB', 'MB', 'GB', 'TB');

    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);

    $bytes /= pow(1024, $pow);

    return round($bytes, $precision) . ' ' . $units[$pow];
}

// 获取当前页面的URL
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'];
$requestUri = $_SERVER['REQUEST_URI'];
$currentUrl = $protocol . '://' .$host . $requestUri;
$currentUrl = preg_replace('/(&|\?)i=\d+(&|$)/', '', $currentUrl);

$clicksFile = '.links.json';
$clicksData = json_decode(file_get_contents($clicksFile), true);

// 输出表格
echo '<table border="1">';
echo '<tr><th>文件名</th><th>文件大小</th><th>下载链接</th><th>加速下载</th><th>下载数</th></tr>';

// 遍历文件列表并打印可点击的链接
foreach ($files as $file) {
    if (strpos($file, '.') === 0) {
        continue;
    }

    // 检查文件是否是PHP文件，如果是，则忽略之
    if (pathinfo($file, PATHINFO_EXTENSION) == 'php') {
        continue;
    }

    // 获取文件大小
    $filesize = filesize($file);

    // 转换文件名为URL编码
    $safeFile = urlencode($file);
    $safeFile = str_replace("+", "%20",$safeFile);
    $nameFile = htmlspecialchars($file);
    $page = isset($clicksData[$file]) ? $clicksData[$file] : 0;

    echo '<tr>';
    echo '<td>' . $nameFile . '</td>';
    echo '<td>' . formatBytes($filesize) . '</td>';
    echo "<td><a href='download.php?file={$safeFile}' data-url='{$file}' target='_blank'>下载</a><br></td>";
    echo "<td><a href='https://get.66a.vip/{$currentUrl}/{$safeFile}' data-url='{$file}' target='_blank'>下载</a><br></td>";
    echo "<td>{$page}</td>";
    echo '</tr>';
}

echo '</table>';

?>

    <!-- HTML表单，用于文件上传 -->
    <br>
    <form id="uploadForm">
        <input type="file" name="filesToUpload[]" id="filesToUpload" multiple>
        <input type="text" placeholder="请输入上传密码" name="pass">
        <br>
        <input type="button" value="上传" id="uploadButton">
    </form>
    <div id="uploadStatus"></div>

    <script>
      // 点击效果
      (function() {var coreSocialistValues = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"], index = Math.floor(Math.random() * coreSocialistValues.length);document.body.addEventListener('click', function(e) {if (e.target.tagName == 'A') {return;}var x = e.pageX, y = e.pageY, span = document.createElement('span');span.textContent = coreSocialistValues[index];index = (index + 1) % coreSocialistValues.length;span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color: #00FF00; top: ', y - 20, 'px; left: ', x, 'px;'].join('');document.body.appendChild(span);animate(span);});function animate(el) {var i = 0, top = parseInt(el.style.top), id = setInterval(frame, 16.7);function frame() {if (i > 180) {clearInterval(id);el.parentNode.removeChild(el);} else {i+=2;el.style.top = top - i + 'px';el.style.opacity = (180 - i) / 180;}}}}());
        $(document).ready(function() {
            $("#uploadButton").click(function() {
                var formData = new FormData($("#uploadForm")[0]);
                
                $.ajax({
                    url: "upload.php",
                    type: "POST",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function(data) {
                        $("#uploadStatus").append("<p>" + data + "</p>");
                    },
                    error: function() {
                        $("#uploadStatus").append("文件上传出错。");
                    }
                });
            });
        });
document.querySelectorAll('a[data-url]').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // 阻止默认的链接跳转行为
        event.preventDefault();

        var linkId = this.getAttribute('data-url');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'visit.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // 服务器端处理完毕后，打开目标页面
                window.open(this.href, '_blank');
                // window.location.href = this.href;
            }
        }.bind(this);
        xhr.send('url=' + encodeURIComponent(linkId));
    });
});
</script>

</body>

</html>
