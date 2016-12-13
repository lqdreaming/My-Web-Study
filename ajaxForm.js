$(document).ready(function(){

	$("#submitsearch").click(function(){ 
		$.ajax({ 
		    type: "GET", 	
			//url: "http://127.0.0.1:8080/ajaxdemo/serverjson2.php?number=" + $("#keyword").val(),
			url: "form.php?identiftNum=" + $("#staffNumber").val(),
			dataType: "json",
			success: function(data) {
				console.log(data.success);
				if (data.success) { 
					alert(data.msg);
				} else {
					alert(data.msg);;
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});

		$("#staffName").blur(function(){
		$("#textBook1").remove();
		$(this).after("<span id='textBook1'></span>");
		$("#textBook1").css({
			"width":"125px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-530px"
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formName.php",
			dataType: "json",
			data: {
			name:$("#staffName").val(),
			},
			success: function(data){
				if (data.success) { 
				console.log(data.success);
					$("#textBook1").html(data.msg);
				} else {
					$("#textBook1").html(data.msg);
				}  
			}, 
		});
	});	

	$("#staffNumber").blur(function(){
		$("#textBook2").remove();
		$(this).after("<span id='textBook2'></span>");
		$("#textBook2").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formIdentifyNum.php",
			dataType: "json",
			data: {
			identiftNum: $("#staffNumber").val(),
			},
			success: function(data){
					$("#textBook2").html(data.msg);
			}, 
		});
	});

	$("#staffPassword").blur(function(){
		$("#textBook3").remove();
		$(this).after("<span id='textBook3'></span>");
		$("#textBook3").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formPassword.php",
			dataType: "json",
			data: {
			password: $("#staffPassword").val(),
			},
			success: function(data){
			$("#textBook3").html(data.msg);
			}, 
		});
	});

	$("#staffConformPassword").blur(function(){
		$("#textBook4").remove();
		$(this).after("<span id='textBook4'></span>");
		$("#textBook4").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formconfirmPassword.php",
			dataType: "json",
			data: {
			conformPassword:$("#staffConformPassword").val(),
			password: $("#staffPassword").val(),
			},
			success: function(data){
			$("#textBook4").html(data.msg);
			}, 
		});
	});

	//生成随机字符串
	function getRandomString() {  
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1  
    var maxPos = $chars.length;  
    var pwd = '';  
    for (i = 0; i < 4; i++) {  
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));  
    }  
    return pwd;  
	}  
	$('#image').text(getRandomString());

	//点击刷新改变验证码内容
	$('#refresh').click(function(){
	 $('#image').text(getRandomString());	
	});

	//验证验证码
	$("#staffindentify").blur(function(){
		$("#textBook5").remove();
		$(this).after("<span id='textBook5'></span>");
		$("#textBook5").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-645px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formIdentifyImage.php",
			dataType: "json",
			data: {
			identifyImage:$("#staffindentify").val(),
			imageText: $('#image').text(),
			},
			success: function(data){
			$("#textBook5").html(data.msg);
			}, 
		});
	});

	//验证民族
	$("#staffPeople").blur(function(){
		$("#textBook6").remove();
		$(this).after("<span id='textBook6'></span>");
		$("#textBook6").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formPeople.php",
			dataType: "json",
			data: {
			people:$("#staffPeople").val(),
			},
			success: function(data){
			$("#textBook6").html(data.msg);
			}, 
		});
	});

	//验证籍贯
	$("#staffCountry").blur(function(){
		$("#textBook7").remove();
		$(this).after("<span id='textBook7'></span>");
		$("#textBook7").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formCountry.php",
			dataType: "json",
			data: {
			country:$("#staffCountry").val(),
			},
			success: function(data){
			$("#textBook7").html(data.msg);
			}, 
		});
	});

	//验证通讯地址
	$("#staffAddress").blur(function(){
		$("#textBook8").remove();
		$(this).after("<span id='textBook8'></span>");
		$("#textBook8").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formAddress.php",
			dataType: "json",
			data: {
			address:$("#staffAddress").val(),
			},
			success: function(data){
			$("#textBook8").html(data.msg);
			}, 
		});
	});

	//验证邮政编码
	$("#staffEncode").blur(function(){
		$("#textBook9").remove();
		$(this).after("<span id='textBook9'></span>");
		$("#textBook9").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formEncode.php",
			dataType: "json",
			data: {
			postEncode: $("#staffEncode").val(),
			},
			success: function(data){
			$("#textBook9").html(data.msg);
			}, 
		});
	});

	//验证手机电话
	$("#staffTelephoneNum").blur(function(){
		$("#textBook10").remove();
		$(this).after("<span id='textBook10'></span>");
		$("#textBook10").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formcellphoneNum.php",
			dataType: "json",
			data: {
			telephoneNum: $("#staffTelephoneNum").val(),
			},
			success: function(data){
			$("#textBook10").html(data.msg);
			}, 
		});
	});

	//验证邮箱地址
	$("#staffEmail").blur(function(){
		$("#textBook11").remove();
		$(this).after("<span id='textBook11'></span>");
		$("#textBook11").css({
			"width":"145px",
			"font-size":"14px",
			"color":"red",
			"float":"right",
			"margin-right":"-555px",
		});
		$.ajax({ 
		    type:"POST", 	
			url: "formEmail.php",
			dataType: "json",
			data: {
			email: $("#staffEmail").val()
			},
			success: function(data){
			$("#textBook11").html(data.msg);
			}, 
		});
	});

		//提交验证
		$("#sub").click(function(){
		$.ajax({ 
		    type:"POST", 	
			url: "form.php",
			dataType: "json",
			data: {
			name:$("#staffName").val(),
			identiftNum: $("#staffNumber").val(),
			password: $("#staffPassword").val(),
			conformPassword: $("#staffConformPassword").val(),
			identifyImage: $("#staffindentify").val(),
			studentType: $("#staffType").val(),
			acadmic: $("#staffAcaddmic").val(),
			sex: $("#staffSex").val(),
			people: $("#staffPeople").val(),
			country: $("#staffCountry").val(),
			marry: $("#staffMarry").val(),
			address: $("#staffAddress").val(),
			postEncode: $("#staffEncode").val(),
			telephoneNum: $("#staffTelephoneNum").val(),
			email: $("#staffEmail").val(),
			textBook1:$("#textBook1").html(),
			textBook2:$("#textBook2").html(),
			textBook3:$("#textBook3").html(),
			textBook4:$("#textBook4").html(),
			textBook5:$("#textBook5").html(),
			textBook6:$("#textBook6").html(),
			textBook7:$("#textBook7").html(),
			textBook8:$("#textBook8").html(),
			textBook9:$("#textBook9").html(),
			textBook10:$("#textBook10").html(),
			textBook11:$("#textBook11").html()
			},
			success: 
			function(data){
				if (data.success) { 
					alert('提交成功');  
					$("#createResult").html(data.msg);
				} else {
					alert('提交失败'); 
					$("#createResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},   
		});
	});
});