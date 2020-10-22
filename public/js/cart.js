function delitem(p_id){

	console.log(p_id);
	var pdtid=p_id+"pdt";
	console.log(pdtid);
	document.getElementById(pdtid).remove();
	var x={product_id:p_id};
	$.ajax({ url: "/delcart",
      data:x,
      success: function(result){
        console.log('viewing cart');
        console.log(result);
        window.location.href='http://localhost:3000/cart';
        
        
        }});



}

function checkout(){

	gtotal=document.getElementById("gtotal").innerHTML;
	saving=document.getElementById("saved").innerHTML;
	aprice=document.getElementById("actualprice").innerHTML;
	len=document.getElementById("length").innerHTML;
	if(len=="0")
	{
		alert("you have nothing in your cart");
	}
	else{

	

	var x={total:gtotal,
		save:saving,
		actualprice:aprice,
		len:len};

		console.log(x);
	$.ajax({ url: "/gtotal",
      data:x,
      success: function(result){
        console.log('viewing cart');
        console.log(result);
        window.location.href='http://localhost:3000/checkout';
        
        
        }});

	  }

}

function gohome(){
	window.location.href='http://localhost:3000/home';

}