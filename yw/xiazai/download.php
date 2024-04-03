<?php
// 读取请求参数
$file = @$_REQUEST['file'];

// 获取当前页面的URL
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'];
$requestUri = $_SERVER['REQUEST_URI'];
$currentUrl = 'https://get.66a.vip/' . $protocol . '://' .$host . $requestUri;

// 检查文件参数是否设置
if (!isset($file)) {
    die('文件未指定' . $file);
}

// 获取文件名，并进行安全处理
$file = basename($file);
$file = urldecode($file); // 解码URL编码的文件名
$filePath = $file; // 假设文件在当前目录下

// 检查文件是否存在
if (!file_exists($filePath)) {
    die('文件不存在' . $filePath);
}

// 设置头信息来告诉浏览器这是一个文件下载
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
header('Content-Length: ' . filesize($filePath));
header('Pragma: no-cache');
header('Expires: 0');

// 读取文件并输出到浏览器
readfile($filePath);

// 结束脚本执行
exit;
?>
