<?php 
//设置页面内容是html编码格式是utf-8
header("Content-Type: text/plain;charset=utf-8"); 
//header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST,GET');
//header('Access-Control-Allow-Credentials:true'); 
//header("Content-Type: application/json;charset=utf-8"); 
//header("Content-Type: text/xml;charset=utf-8"); 
//header("Content-Type: text/html;charset=utf-8"); 
//header("Content-Type: application/javascript;charset=utf-8"); 
//定义一个数组-15项
$staff = array
(
	array('name','identiftNum','password','conformPassword','identifyImage','studentType','acadmic','sex','people','country','marry','address','postEncode','telephoneNum','email')
	);

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	create1();
}

//创建员工
function create1(){			
	if (!isset($_POST["email"]) || empty($_POST["email"])) {
			echo '{"success":false,"msg":"没有填写Email"}';
			return;
			# code...
		}
		echo '{"success":true,"msg":"填写正确"}';
	}
	
 ?>