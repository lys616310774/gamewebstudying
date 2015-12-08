/*活动中心*/
function GetAction(){
	var ali=document.getElementsByClassName("actionlist1")[0].getElementsByTagName("li")[0];
		ali.onmouseover=function(){
			ali.className="act-n"
		}
		ali.onmouseout=function(){
			ali.className="act-t"
		}
}