/*视频中心*/
function GetVideos(){
	var slis=document.getElementsByClassName("pre_list")[0].getElementsByTagName("li");
	var sp1=document.getElementById("sp1");
	var sp2=document.getElementById("sp2");
	var sp3=document.getElementById("sp3");
	var sp4=document.getElementById("sp4");
	var sp5=document.getElementById("sp5");
	var sp6=document.getElementById("sp6");
	var sp=[sp1,sp2,sp3,sp4,sp5,sp6];
		slis[0].onmouseover=function(){
			for(var i=0;i<slis.length;i++){
				slis[i].className="";
				sp[i].className="spt";
			}
			slis[0].className="current";
			sp[0].className="spt spn";
		}
		slis[1].onmouseover=function(){
			for(var i=0;i<slis.length;i++){
				slis[i].className="";
				sp[i].className="spt";
			}
			slis[1].className="current";
			sp[1].className="spt spn";
		}
		slis[2].onmouseover=function(){
			for(var i=0;i<slis.length;i++){
				slis[i].className="";
				sp[i].className="spt";
			}
			slis[2].className="current";
			sp[2].className="spt spn";
		}
		slis[3].onmouseover=function(){
			for(var i=0;i<slis.length;i++){
				slis[i].className="";
				sp[i].className="spt";
			}
			slis[3].className="current";
			sp[3].className="spt spn";
		}
		slis[4].onmouseover=function(){
			for(var i=0;i<slis.length;i++){
				slis[i].className="";
				sp[i].className="spt";
			}
			slis[4].className="current";
			sp[4].className="spt spn";
		}
		slis[5].onmouseover=function(){
			for(var i=0;i<slis.length;i++){
				slis[i].className="";
				sp[i].className="spt";
			}
			slis[5].className="current";
			sp[5].className="spt spn";
		}
}