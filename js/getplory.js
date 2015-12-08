/*Plory区域*/
function GetPlory(){
	var glo=document.getElementById("glory");
	var tglo=document.getElementById("topglory");
	var gmore=document.getElementById("gmore");
	var glist=document.getElementById("glist");
		glo.onmouseover=function(){
			tglo.className="gspr topglory";
			glist.style.height="370px";
			gmore.className="gmore";
		}
		glo.onmouseout=function(){
			tglo.className="hid";
		}
		tglo.onmouseover=function(){
			tglo.className="gspr topglory";
		}
		tglo.onmouseout=function(){
			tglo.className="hid";
		}
		gmore.onclick=function(){
			gmore.className="hid";
			glist.style.height="500px";
		}				
}