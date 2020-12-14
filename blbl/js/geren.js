window.onload=function(){


var anniu =document.getElementById("huidingbu")
var scrolltop=null;
window.onscroll=function(e){
    var e=e;
    scrolltop=document.documentElement.scrollTop;
    if(scrolltop > 150){
        anniu.style.display="block"
    }else{
        anniu.style.display="none"
    }

}

 var zk =document.getElementById("zhankai1")
 var Details_bottom=document.getElementById("Details_bottom")

 
 zk.onclick=function(){
	var a=getComputedStyle(document.getElementById("Details_bottom")).height
	 
	 if(a=="65.025px"){
		 Details_bottom.style.height="1.79rem"
		 zk.innerHTML="收回"
		 
	 }else{
		 Details_bottom.style.height="1.3rem"
		 zk.innerHTML="展开"
		 
	 }
	 
	 
	 
	 
 }


var zk2 = document.getElementById("zhankai2")
var p =document.getElementById("geren_cont_cont_p")
zk2.onclick=function(){
	var a=getComputedStyle(document.getElementById("geren_cont_cont_p")).height
	 if(a=="107.55px"){
		p.style.height="6rem"
		 zk2.innerHTML="收回"
		p.style.webkitLineClamp="14"
	 }else{
		p.style.height="2.15rem"
		 zk2.innerHTML="展开"
		 p.style.webkitLineClamp="5"
	 }
	 
	 
	 
	 
 }







}