/*战争学院*/
function GetXY(){
	var xlis=document.getElementsByClassName("xy-fill")[0].getElementsByTagName("li");
	var xy1=document.getElementById("xy1");
	var xy2=document.getElementById("xy2");
		xlis[0].onclick=function(){
			xlis[1].className="";
			xlis[0].className="current";
			xy1.style.display="block";
			xy2.style.display="none";
		}
		xlis[1].onclick=function(){
			xlis[0].className="";
			xlis[1].className="current";
			xy2.style.display="block";
			xy1.style.display="none";
		}
}
