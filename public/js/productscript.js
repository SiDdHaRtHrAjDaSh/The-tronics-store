function addtocart(p_id){
		console.log(p_id);
	var x={product_id:p_id};
	$.ajax({ url: "/addtocart",
      data:x,
      success: function(result){
        console.log('adding to cart sending to backend');
        console.log(result);
                
        }});

}


function gohome(){
	window.location.href='http://localhost:3000/home';

}

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