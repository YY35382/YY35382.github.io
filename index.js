var body=document.querySelector("body");
fun();
function fun(){
	var div=document.createElement("div");
	var height=Math.random()*100;
	div.style.height=height+"px";
	div.style.width=height*3+"px";
	div.style.backgroundSize=height*3+"px "+height+"px";
	div.style.left=Math.random()*100+"%";
	div.style.top=Math.random()*100+"%";
	body.appendChild(div);
	
	setTimeout(function(){div.style.opacity=1;},100);
	setTimeout(function(){div.style.opacity=0;},8000);
	setTimeout(function(){body.removeChild(div);},9000);
	
	setTimeout(fun,300);
}
 
