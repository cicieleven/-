function $(id){
  return document.getElementById(id);
 }

function chkUsername() {
	if(isBlank($("username").value)) {
	   $("usernamePrompt").style.color="red";
	   $("usernamePrompt").innerHTML="*用户名必须填写！";
	   return false;
   }
   else {
	   $("usernamePrompt").style.color="black";
	   $("usernamePrompt").innerText="*";
   }
   var re=new RegExp(/^[a-zA-Z]\w{3,15}$/);
	if(!re.test($("username").value)) {
		$("usernamePrompt").style.color="red";
	   	$("usernamePrompt").innerText="*只能以英文开头，4-16个英文、数字或下划线字符！";
		return false;
	}
	else
	{
		$("usernamePrompt").style.color="black";
	   	$("usernamePrompt").innerText="*";
	}
	return true;
}

function chkEmail() {
	if(isBlank($("email").value)) {
	   $("emailPrompt").style.color="red";
	   $("emailPrompt").innerHTML="*邮箱地址必须填写！";
	   return false;
   }
   else {
	   $("emailPrompt").style.color="black";
	   $("emailPrompt").innerText="*";
   }
	if(!isEmail($("email").value)) {
		$("emailPrompt").style.color="red";
	   	$("emailPrompt").innerText="*电子邮箱格式不正确！";
		return false;
	}
	else
	{
		$("emailPrompt").style.color="black";
	   	$("emailPrompt").innerText="*";
	}
	return true;
}

function chkPassword() {
	if(isBlank($("password").value)) {
	   $("passwordPrompt").style.color="red";
	   $("passwordPrompt").innerHTML="*密码必须填写！";
	   return false;
   }
   else {
	   $("passwordPrompt").style.color="black";
	   $("passwordPrompt").innerText="*";
   }
   var re=new RegExp(/^\w{6,24}$/);
	if(!re.test($("password").value)) {
		$("passwordPrompt").style.color="red";
	   	$("passwordPrompt").innerText="*必须为英文、数字、下画线，且长度在6-24个字符！";
		return false;
	}
	else
	{
		$("passwordPrompt").style.color="black";
	   	$("passwordPrompt").innerText="*";
	}
	return true;
}
function chkPassword2() {
	if(isBlank($("password").value)) {
	   $("passwordPrompt").style.color="red";
	   $("passwordPrompt").innerHTML="*密码必须填写！";
	   return false;
   }
	if($("password").value!=$("password2").value) {
		$("password2Prompt").style.color="red";
	   	$("password2Prompt").innerHTML="*两次密码输入不一致！";
		return false;
	}
	else
	{
		$("password2Prompt").style.color="black";
	   	$("password2Prompt").innerText="*";
	}
	return true;
}

function chkIdnum() {
	if(!isBlank($("idnum").value)) {
		if(!isIdcardNum($("idnum").value)) {
	   		$("idnumPrompt").style.color="red";
	   		$("idnumPrompt").innerText="身份证号码格式不正确！";
	   		return false;
		}		
   	}
   	$("idnumPrompt").style.color="black";
	$("idnumPrompt").innerText="";
	return true;
}

function chkPhonenum() {
	if(!isBlank($("phonenum").value)) {
		if(!isPhoneNum($("phonenum").value)) {
	   		$("phonenumPrompt").style.color="red";
	   		$("phonenumPrompt").innerText="电话号码格式不正确！";
	   		return false;
		}
   	}
   	$("phonenumPrompt").style.color="black";
	$("phonenumPrompt").innerText="";
	return true;
}

function chkAll() {
	var msg="";
	if(!chkUsername()) {
		msg +="用户名输入不正确！\n";
	}
	if(!chkEmail()) {
		msg +="电子邮箱输入不正确！\n";
	}	
	if(!chkPassword()) {
		msg +="密码输入不正确！\n";
	}
	if(!chkPassword2()) {
		msg +="请再次输入密码！\n";
	}
	if(!chkIdnum()) {
		msg +="身份证号码格式不正确！\n";
	}
	if(!chkPhonenum()) {
		msg +="电话号码格式不正确！\n";
	}
	//if(msg!="") {
	if(!isBlank(msg)) {
		msg=msg.substr(0,msg.length-1);
		alert(msg);
		return false;
	}
	return true;
}function $(id){
  return document.getElementById(id);
 }

function chkUsername() {
	if(isBlank($("username").value)) {
	   $("usernamePrompt").style.color="red";
	   $("usernamePrompt").innerHTML="*用户名必须填写！";
	   return false;
   }
   else {
	   $("usernamePrompt").style.color="black";
	   $("usernamePrompt").innerText="*";
   }
   var re=new RegExp(/^[a-zA-Z]\w{3,15}$/);
	if(!re.test($("username").value)) {
		$("usernamePrompt").style.color="red";
	   	$("usernamePrompt").innerText="*只能以英文开头，4-16个英文、数字或下划线字符！";
		return false;
	}
	else
	{
		$("usernamePrompt").style.color="black";
	   	$("usernamePrompt").innerText="*";
	}
	return true;
}

function chkEmail() {
	if(isBlank($("email").value)) {
	   $("emailPrompt").style.color="red";
	   $("emailPrompt").innerHTML="*邮箱地址必须填写！";
	   return false;
   }
   else {
	   $("emailPrompt").style.color="black";
	   $("emailPrompt").innerText="*";
   }
	if(!isEmail($("email").value)) {
		$("emailPrompt").style.color="red";
	   	$("emailPrompt").innerText="*电子邮箱格式不正确！";
		return false;
	}
	else
	{
		$("emailPrompt").style.color="black";
	   	$("emailPrompt").innerText="*";
	}
	return true;
}

function chkPassword() {
	if(isBlank($("password").value)) {
	   $("passwordPrompt").style.color="red";
	   $("passwordPrompt").innerHTML="*密码必须填写！";
	   return false;
   }
   else {
	   $("passwordPrompt").style.color="black";
	   $("passwordPrompt").innerText="*";
   }
   var re=new RegExp(/^\w{6,24}$/);
	if(!re.test($("password").value)) {
		$("passwordPrompt").style.color="red";
	   	$("passwordPrompt").innerText="*必须为英文、数字、下画线，且长度在6-24个字符！";
		return false;
	}
	else
	{
		$("passwordPrompt").style.color="black";
	   	$("passwordPrompt").innerText="*";
	}
	return true;
}
function chkPassword2() {
	if(isBlank($("password").value)) {
	   $("passwordPrompt").style.color="red";
	   $("passwordPrompt").innerHTML="*密码必须填写！";
	   return false;
   }
	if($("password").value!=$("password2").value) {
		$("password2Prompt").style.color="red";
	   	$("password2Prompt").innerHTML="*两次密码输入不一致！";
		return false;
	}
	else
	{
		$("password2Prompt").style.color="black";
	   	$("password2Prompt").innerText="*";
	}
	return true;
}

function chkIdnum() {
	if(!isBlank($("idnum").value)) {
		if(!isIdcardNum($("idnum").value)) {
	   		$("idnumPrompt").style.color="red";
	   		$("idnumPrompt").innerText="身份证号码格式不正确！";
	   		return false;
		}		
   	}
   	$("idnumPrompt").style.color="black";
	$("idnumPrompt").innerText="";
	return true;
}

function chkPhonenum() {
	if(!isBlank($("phonenum").value)) {
		if(!isPhoneNum($("phonenum").value)) {
	   		$("phonenumPrompt").style.color="red";
	   		$("phonenumPrompt").innerText="电话号码格式不正确！";
	   		return false;
		}
   	}
   	$("phonenumPrompt").style.color="black";
	$("phonenumPrompt").innerText="";
	return true;
}

function chkAll() {
	var msg="";
	if(!chkUsername()) {
		msg +="用户名输入不正确！\n";
	}
	if(!chkEmail()) {
		msg +="电子邮箱输入不正确！\n";
	}	
	if(!chkPassword()) {
		msg +="密码输入不正确！\n";
	}
	if(!chkPassword2()) {
		msg +="请再次输入密码！\n";
	}
	if(!chkIdnum()) {
		msg +="身份证号码格式不正确！\n";
	}
	if(!chkPhonenum()) {
		msg +="电话号码格式不正确！\n";
	}
	//if(msg!="") {
	if(!isBlank(msg)) {
		msg=msg.substr(0,msg.length-1);
		alert(msg);
		return false;
	}
	return true;
}