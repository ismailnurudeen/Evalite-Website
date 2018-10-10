window.onerror=function(msg,url,line){
	console.log("Error Message: \n"+msg);
	console.log("Error in Line "+line);
};
window.onchange=function(){
  console.log(window.screen.width);
}
window.onload=function(){
	var showcase=document.querySelector("#showcase");
	var caption=showcase.querySelector("h2");
	var bgImages=["sitting_room.jpg","sitting_room2.jpg","home_with_pool.jpg","showcase_picture.jpg","home-with-road.jpg"];
	var bgTexts=["Find Comfortable Room with high Quality",
	             "Live in stress free enviroment",
				 "Enjoy the Beauty of Nature right in your home",
				 caption.textContent
				 ];
  var sliding;
    caption.style.fontWeight="100";	 

	function slide(){
	setTimeout(nextSlide,5000);
	}
	var i=0;
	function nextSlide(){
	showcase.style.background="url(pics/"+bgImages[i]+") no-repeat 0 -90px";
    showcase.style.backgroundSize="cover";
	caption.innerText=bgTexts[i];
	i++;
	if(i===bgImages.length){
		i=0;
	}
	}
	
	function pauseSlide(){
		clearInterval(sliding);
	}
	
	showcase.addEventListener("mouseover",pauseSlide);
	showcase.addEventListener("mouseleave",sliding);
	
	slide();
  
  function slideInterval(){
    sliding=setInterval(slide,6000);
  }
	};
