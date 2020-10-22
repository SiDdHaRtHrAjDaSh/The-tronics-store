
var error={"name":1,"email":1,"pwd":1};

var errorin={"email":1};

	
function adduser(){

	var x={
		name:document.getElementById("namesup").value,
		email:document.getElementById("emailsup").value,
		password:document.getElementById("passwordsup").value
	}
	console.log(x);

	$.ajax({ url: "/adduser",
      data:x,
      success: function(result){
        console.log('adding user');
        console.log(result);
        
        if(result=="exists"){
        	document.getElementById("pwdprompt").innerHTML="Email already exists";
        	
        }

        else{
        	window.location.href='http://localhost:3000/home';
        }
        
        
        }});

}


function checkuser(){
	var x={
		email:document.getElementById("email").value,
		password:document.getElementById("password").value
	}
	console.log(x);

	$.ajax({ url: "/authenticate",
      data:x,
      success: function(result){
        console.log('Authenticating');
        console.log(result);
        
        if(result=="True"){
        	window.location.href='http://localhost:3000/home';
        }

        else{
        	document.getElementById("invalid").innerHTML="Invalid login credentials";
        }
        
        
        }});
}

function namecheck(){
			var name=document.getElementById("namesup").value;
			
			var re = /^[A-Za-z]+$/;

			if(name.match(re) && name.length!=0)
			{
				console.log(true);
				error.name=0;
				document.getElementById("namesup").style.border="0px";
				
			}
			else
			{
				console.log(false);
				error.name=1;
				document.getElementById("namesup").style.border="1px solid red";
			}
		}

function checkemail(){
			var email=document.getElementById("emailsup").value;
			
			var re = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/

			if(email.match(re) && email.length!=0)
			{
				console.log(true);
				error.email=0;
				document.getElementById("emailsup").style.border="0px";
			}
			else
			{
				console.log(false);
				error.email=1;
				document.getElementById("emailsup").style.border="1px solid red";
			}
		}

function checkpwd(){
			var pwd=document.getElementById("passwordsup").value;
			
			var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

			if(pwd.match(re) && pwd.length!=0)
			{
				console.log(true);
				error.pwd=0;
				document.getElementById("pwdprompt").style.visibility="hidden";
			}
			else
			{
				console.log(false);
				error.pwd=1;
				document.getElementById("pwdprompt").style.visibility="visible";
			}
		}

function validatesignup()
		{
			if(error.name==0 && error.email==0 && error.pwd==0)
			{
				adduser();
			}
			else{
				alert("There are some errors please re check the form");
			}
		}


function validateemail(){
			var email=document.getElementById("email").value;
			
			var re = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/

			if(email.match(re) && email.length!=0)
			{
				console.log(true);
				errorin.email=0;
				document.getElementById("email").style.border="0px";
			}
			else
			{
				console.log(false);
				errorin.email=1;
				document.getElementById("email").style.border="1px solid red";
			}
		}

function validatesignin()
		{
			pwdval=document.getElementById("password").value;
			if(errorin.email==0 && pwdval.length!=0)
			{
				checkuser();
			}
			else{
				alert("There are some errors please re check the form");
			}
		}

	