/*中间图片变换区域*/
function GetRotate(){
	var rts=document.getElementsByClassName("rt");
	var lts=document.getElementsByClassName("lt");
		rts[0].onmouseover=function(){
				for(var j=0;j<rts.length;j++){	
					rts[j].className="rt";
					lts[j].className="lt";
				}
				rts[0].className="rt rn";
				lts[0].className="lt ln";
			}
		rts[1].onmouseover=function(){
				for(var j=0;j<rts.length;j++){	
					rts[j].className="rt";
					lts[j].className="lt";
				}
				rts[1].className="rt rn";
				lts[1].className="lt ln";
			}
		rts[2].onmouseover=function(){
				for(var j=0;j<rts.length;j++){	
					rts[j].className="rt";
					lts[j].className="lt";
				}
				rts[2].className="rt rn";
				lts[2].className="lt ln";
			}
		rts[3].onmouseover=function(){
				for(var j=0;j<rts.length;j++){	
					rts[j].className="rt";
					lts[j].className="lt";
				}
				rts[3].className="rt rn";
				lts[3].className="lt ln";
			}
		rts[4].onmouseover=function(){
				for(var j=0;j<rts.length;j++){	
					rts[j].className="rt";
					lts[j].className="lt";
				}
				rts[4].className="rt rn";
				lts[4].className="lt ln";
			}
}