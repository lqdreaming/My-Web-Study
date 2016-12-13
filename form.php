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
	array('name'=>'张三','identiftNum'=>'123456789987654321','password'=>'123456',
		'conformPassword'=>'123456','identifyImage','studentType'=>'应届生','acadmic'=>'本科生',
		'sex'=>'男','people'=>'汉','country'=>'中国','marry'=>'未婚','address'=>'湖北',
		'postEncode'=>'433323','telephoneNum'=>'123456789987654','email'=>'123@qq.com',
		'textBook1','textBook2','textBook3','textBook4','textBook5','textBook6','textBook7','textBook8','textBook9','textBook10','textBook11')
	);

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	search();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
	create();
}

//通过员工编号搜索员工
function search(){
	//检查是否有员工编号的参数
	//isset检测变量是否设置；empty判断值为否为空
	//超全局变量 $_GET 和 $_POST 用于收集表单数据
	if (!isset($_GET["identiftNum"]) || empty($_GET["identiftNum"])) {
		echo '{"success":false,"msg":"参数错误"}';
		return;
	}
	//函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
	//global 关键词用于访问函数内的全局变量
	global $staff;
	//获取number参数
	$number = $_GET["identiftNum"];
	$result = '{"success":false,"msg":"没有找到员工。"}';
	
	//遍历$staff多维数组，查找key值为number的员工是否存在，如果存在，则修改返回结果
	foreach ($staff as $value) {
		if ($value["identiftNum"] == $number) {
			$result = '{"success":true,"msg":"找到员工：' . $value["name"] . '已经存在 "}';
			break;
		}
	}
    echo $result;
}

//创建员工
function create(){
	
	//判断信息是否填写完全
	if (!isset($_POST["name"]) || empty($_POST["name"])||
	 	!isset($_POST["password"]) || empty($_POST["password"])
		|| !isset($_POST["identifyImage"]) || empty($_POST["identifyImage"])
		|| !isset($_POST["acadmic"]) || empty($_POST["acadmic"])
		|| !isset($_POST["people"]) || empty($_POST["people"])
		|| !isset($_POST["marry"]) || empty($_POST["marry"])
		|| !isset($_POST["postEncode"]) || empty($_POST["postEncode"])
		|| !isset($_POST["identiftNum"])|| empty($_POST["identiftNum"])
		|| !isset($_POST["email"])|| empty($_POST["email"])
		|| !isset($_POST["conformPassword"])|| empty($_POST["conformPassword"])
		|| !isset($_POST["studentType"])|| empty($_POST["studentType"])
		|| !isset($_POST["sex"])|| empty($_POST["sex"])
		|| !isset($_POST["country"])|| empty($_POST["country"])
		|| !isset($_POST["address"])|| empty($_POST["address"])
		|| !isset($_POST["telephoneNum"])|| empty($_POST["telephoneNum"])
		|| $_POST["textBook1"]!='填写正确'
		|| $_POST["textBook2"]!='填写正确'
		|| $_POST["textBook3"]!='填写正确'
		|| $_POST["textBook4"]!='填写正确'
		|| $_POST["textBook5"]!='填写正确'
		|| $_POST["textBook6"]!='填写正确'
		|| $_POST["textBook7"]!='填写正确'
		|| $_POST["textBook8"]!='填写正确'
		|| $_POST["textBook9"]!='填写正确'
		|| $_POST["textBook10"]!='填写正确'
		|| $_POST["textBook11"]!='填写正确')
	{
		echo '{"success":false,"msg":"参数错误，员工信息填写不全或有误"}';
		return;	
	} 
		# code...
	//TODO: 获取POST表单数据并保存到数据库
	
	//提示保存成功
	echo '{"success":true,"msg":"恭喜您!'. $_POST["name"] .'信息提交成功！"}';
}
 ?>