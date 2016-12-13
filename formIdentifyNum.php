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
	if (!isset($_POST["identiftNum"]) || empty($_POST["identiftNum"])) {
			echo '{"success":false,"msg":"身份证号没有填写"}';
			return;
			# code...
		}else if (strlen($_POST["identiftNum"])>18) {
			echo '{"success":false,"msg":"身份证号不能超过18位"}';
			return;
			# code...
		}else  if (strlen($_POST["identiftNum"])<18){
			echo '{"success":false,"msg":"身份证号不能低于18位"}';
			return;
		}
		echo '{"success":true,"msg":"填写正确"}';
		}	
 		/*
		if (!isset($_POST["password"]) || empty($_POST["password"])) {
			echo '{"falute":31,"msg:"密码没有填写"}';
			return;
			# code...
		} else if ($_POST["password"]!=$_POST["conformPassword"]) {
			# code...
			echo '{"falute":32,"msg:"两次密码输入不相同"}';
			return;
		}

		if (!isset($_POST["identifyImage"]) || empty($_POST["identifyImage"])) {
			echo '{"falute":4,"msg:"没有输入验证码"}';
			return;
			# code...
		}

	if (!isset($_POST["people"]) || empty($_POST["people"])) {
			echo '{"falute":5,"msg:"没有填写民族"}';
			return;
			# code...
		}		

	if (!isset($_POST["country"]) || empty($_POST["country"])) {
			echo '{"falute":6,"msg:"没有填写籍贯"}';
			return;
			# code...
		}

	if (!isset($_POST["address"]) || empty($_POST["address"])) {
			echo '{"falute":7,"msg:"没有填写通讯地址"}';
			return;
			# code...
		}

	if (!isset($_POST["postEncode"]) || empty($_POST["postEncode"])) {
			echo '{"falute":8,"msg:"没有填写邮政编码"}';
			return;
			# code...
		}

	if (!isset($_POST["telephoneNum"]) || empty($_POST["telephoneNum"])) {
			echo '{"falute":9,"msg:"没有填写手机电话"}';
			return;
			# code...
		}

	if (!isset($_POST["email"]) || empty($_POST["email"])) {
			echo '{"falute":10,"msg:"没有填写Email"}';
			return;
			# code...
		}*/
	
 ?>