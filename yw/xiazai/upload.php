<?php
if(isset($_POST["pass"])) {
	$pass = $_POST['pass'];
	$target_dir = "./";
	$uploadOk = 1;

	// 遍历所有上传的文件
	foreach ($_FILES["filesToUpload"]["error"] as $key => $error) {
		if ($error === UPLOAD_ERR_OK) {
			// 获取文件名
			$fileName = basename($_FILES["filesToUpload"]["name"][$key]);
			// 文件路径
			$target_file = $target_dir . $fileName;

			// 这里可以添加更多的验证，比如文件类型、大小等
			if ($pass != "6508"){
				echo "上传密码错误";
				$uploadOk = 0;
			}

			// 检查文件是否已经存在
			if (file_exists($target_file)) {
				echo "抱歉，文件 " . htmlspecialchars($fileName) . " 已经存在。";
				$uploadOk = 0;
			}

			// 检查 $uploadOk 标志是否设置为了 0，以确定是否有错误发生
			if ($uploadOk == 1) {
				if (move_uploaded_file($_FILES["filesToUpload"]["tmp_name"][$key], $target_file)) {
					echo "文件 " . htmlspecialchars($fileName) . " 已上传。";
				} else {
					echo "文件 " . htmlspecialchars($fileName) . " 上传时出现了错误。";
				}
			}
		} else {
			echo "文件上传出错。";
		}
	}
}
?>
