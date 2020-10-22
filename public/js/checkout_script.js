function submitform(){
	var x={
		name:document.getElementById("name").value,
		email:document.getElementById("email").value,
		address:document.getElementById("address").value,
		country:document.getElementById("country").value,
		state:document.getElementById("state").value,
		city:document.getElementById("city").value,
		zip:document.getElementById("zip").value

	}

	console.log(x);
	window.location.href='http://localhost:3000/thankyou';



}


var error={"name":1,"email":1,"country":1,"state":1,"city":1,"address":1};

  			function namecheck(){
			var name=document.getElementById("name").value;
			
			var re = /^[A-Za-z_ ]+$/;

			if(name.match(re) && name.length!=0)
			{
				console.log(true);
				error.name=0;
				document.getElementById("name").style.border="0px";
				
			}
			else
			{
				console.log(false);
				error.name=1;
				document.getElementById("name").style.border="1px solid red";
			}
		}

			function checkemail(){
			var email=document.getElementById("email").value;
			
			var re = /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/

			if(email.match(re) && email.length!=0)
			{
				console.log(true);
				error.email=0;
				document.getElementById("email").style.border="0px";
			}
			else
			{
				console.log(false);
				error.email=1;
				document.getElementById("email").style.border="1px solid red";
			}
		}

  			function checkreq(id){
			var check=document.getElementById(id).value;
			console.log(check.length);
			var re = /^[A-Za-z_ ]+$/;

			if(check.match(re) && check.length!=0)
			{
				console.log(true);
				error[id]=0;
				document.getElementById(id).style.border="0px";
			}
			else
			{
				console.log(false);
				error[id]=1;
				document.getElementById(id).style.border="1px solid red";
			}
		}

		function checkaddress(){
			var check=document.getElementById("address").value;
			console.log(check.length);
			var re = /^[A-Za-z0-9_ ]+$/;

			if(check.match(re) && check.length!=0)
			{
				console.log(true);
				error.address=0;
				document.getElementById("address").style.border="0px";
			}
			else
			{
				console.log(false);
				error.address=1;
				document.getElementById("address").style.border="1px solid red";
			}
		}

			function checkzip(){
			var zip=document.getElementById("zip").value;
			console.log(zip.length);
			var re = /^[1-9][0-9]{5}$/

			if(zip.match(re) && zip.length!=0)
			{
				console.log(true);
				error.zip=0;
				document.getElementById("zip").style.border="0px";
			}
			else
			{
				console.log(false);
				error.zip=1;
				document.getElementById("zip").style.border="1px solid red";
			}
		}


		function checkeverything()
		{
			if(card.checked==false && upi.checked==false && cod.checked==false)
			{
				document.getElementById("errorline").innerHTML="Please select payment method";
			}
			else if(error.name==0 && error.email==0 && error.city==0 && error.state==0 && error.country==0 && error.zip==0 && error.address==0)
			{
				alert("Successfully submitted");
				submitform();
			}
			else{
				alert("There are some errors please re check the form");
			}
		}

			function myFunction() {
		  	var x = document.getElementById("myTopnav");
		  	if (x.className === "topnav") {
		    	x.className += " responsive";
		  } else {
		    	x.className = "topnav";
		  }
			}