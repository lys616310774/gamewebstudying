/*客服中心*/
function GetKF(){
	var klis=document.getElementsByClassName("kf_list")[0].getElementsByTagName("li");
	var kf1=document.getElementById("kf1");
	var kf2=document.getElementById("kf2");
		klis[0].onmouseover=function(){
			klis[1].className="";
			klis[0].className="current";
			kf1.style.display="block";
			kf2.style.display="none";
		}
		klis[1].onmouseover=function(){
			klis[0].className="";
			klis[1].className="current";
			kf2.style.display="block";
			kf1.style.display="none";
		}
}