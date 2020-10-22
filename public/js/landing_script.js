/*
$(document).ready(function(){
$(".product_type").click(function(){
	console.log("laptop clicked");

	
	console.log(p_type);
	var x={product_name:id};
	$.ajax({ url: "/getproduct",
      data:x,
      success: function(result){
        console.log('getting laptops');
        console.log(result);
        var products=JSON.parse(result);
        console.log(products);
        document.getElementById("product_container").innerHTML="";

        for(i=0;i<products.length;i++)
        {
        	document.getElementById("product_container").innerHTML=document.getElementById("product_container").innerHTML+"<div class=\"box\"><img class=\"product_image\" src=\""+products[i].image_url1+"\"><div class=\"product_name\">"+products[i].product_name+"</div></div>";
        }
        
      
  }});
});
});
*/
function gotocart()
{

  
 
var x="go to cart";
  

  $.ajax({ url: "/getcart",
      data:x,
      success: function(result){
        console.log('viewing cart');
        console.log(result);
        window.location.href='http://localhost:3000/cart';
        
        
        }});
}

function changeimage(id)
{
console.log("stylemod");
console.log(id);
document.getElementById("zoomimage").style.backgroundImage=document.getElementById(id).style.backgroundImage;
}

function get_product(p_type){
	console.log(p_type);
	var x={product_name:p_type};
	$.ajax({ url: "/getproduct",
      data:x,
      success: function(result){
        console.log('getting laptops');
        console.log(result);
        var products=JSON.parse(result);
        console.log(products);
        document.getElementById("product_container").innerHTML="";

        for(i=0;i<products.length;i++)
        {
        	document.getElementById("product_container").innerHTML=document.getElementById("product_container").innerHTML+"<div class=\"box\"><img class=\"product_image\" src=\""+products[i].image_url1+"\"><div class=\"product_name\">"+products[i].product_name+"</div><button class=\"view_button\" id=\""+products[i].product_id+"\" onclick=\"view_product(this.id)\">View item</button></div>";
        }
        }});
}

function view_product(p_id)
{
	console.log(p_id);
	
  var a = {product_id:p_id};

  console.log(a);

	$.ajax({ url: "/viewproduct",
      data:a,
      success: function(result){
        console.log('viewing product');
        window.location.href='http://localhost:3000/productspage';
        console.log(result);
        
        }});
}