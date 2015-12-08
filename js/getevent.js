/*赛事中心*/
function GetEvent(){
	var elis=document.getElementsByClassName("pre_list")[1].getElementsByTagName("li");
	var ss1=document.getElementById("ss1");
	var ss2=document.getElementById("ss2");
	var ss3=document.getElementById("ss3");
	var ss4=document.getElementById("ss4");
	var ss5=document.getElementById("ss5");
	var ss6=document.getElementById("ss6");
	var ss7=document.getElementById("ss7");
	var ss=[ss1,ss2,ss3,ss4,ss5,ss6,ss7];
		elis[0].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[0].className="current";
			ss[0].className="ss_cont-t ss_cont-n";
		}
		elis[1].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[1].className="current";
			ss[1].className="ss_cont-t ss_cont-n";
		}
		elis[2].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[2].className="current";
			ss[2].className="ss_cont-t ss_cont-n";
		}
		elis[3].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[3].className="current";
			ss[3].className="ss_cont-t ss_cont-n";
		}
		elis[4].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[4].className="current";
			ss[4].className="ss_cont-t ss_cont-n";
		}
		elis[5].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[5].className="current";
			ss[5].className="ss_cont-t ss_cont-n";
		}
		elis[6].onmouseover=function(){
			for(var i=0;i<elis.length;i++){
				elis[i].className="";
				ss[i].className="ss_cont-t";
			}
			elis[6].className="current";
			ss[6].className="ss_cont-t ss_cont-n";
		}
}