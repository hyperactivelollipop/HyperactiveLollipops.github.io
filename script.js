function popup() {
 open ("morganapendragon.html");
  }
  
  function changeImage() {
	  var image=document.getElementById('myImage');
	  if (image.src.match("buulb_on.jpg")){
  img.src="buulb_off.jpg";	  
    }
  else {
	  image.src="buulb_on.jpg";
     }
  }
