/*中间新闻区域*/
function GetNews(){
	var lis=document.getElementsByClassName("news_nav")[0].getElementsByTagName("li");
	var nl1=document.getElementById("nl1");
	var nl2=document.getElementById("nl2");
	var nl3=document.getElementById("nl3");
	var nl4=document.getElementById("nl4");
	var nl=[nl1,nl2,nl3,nl4];
		lis[0].onmouseover=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				nl[i].className="nl-n";
			}
			lis[0].className="current";
			nl[0].className="nl-b";
		}
		lis[1].onmouseover=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				nl[i].className="nl-n";
			}
			lis[1].className="current";
			nl[1].className="nl-b";
		}
		lis[2].onmouseover=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				nl[i].className="nl-n";
			}
			lis[2].className="current";
			nl[2].className="nl-b";
		}
		lis[3].onmouseover=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				nl[i].className="nl-n";
			}
			lis[3].className="current";
			nl[3].className="nl-b";
		}
}