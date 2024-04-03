<?php
// 文件名，用于存储点击次数
$clicksFile = '.links.json';

// 获取请求的链接
$link =$_REQUEST['url'];

// 读取现有的点击次数
if (file_exists($clicksFile)) {
    $clicksData = json_decode(file_get_contents($clicksFile), true);
} else {
    $clicksData = [];
}

// 更新点击次数
if (isset($clicksData[$link])) {
    $clicksData[$link]++;
} else {
    $clicksData[$link] = 1;
}

// 将更新后的点击次数写回文件
file_put_contents($clicksFile, json_encode($clicksData), JSON_PRETTY_PRINT);

// 返回最新的点击次数（可选）
echo $clicksData[$link];
?>
