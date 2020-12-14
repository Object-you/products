let isdown=true
let XY_arr=[]

document.documentElement.style.overflowY = 'hidden';
document.documentElement.style.overflowX = 'hidden';
	
var naicha = document.querySelector('#naicha')
var ncimg=document.querySelectorAll('#naicha>img')
naicha.scrollLeft=0
for(i=0;i<=4;i++){
	naicha.appendChild(ncimg[i].cloneNode(true))
}
setInterval(function(){
	naicha.scrollLeft+=1
	if(naicha.scrollLeft==2240){
		naicha.scrollLeft=0
	}
	
},10)
document.ondragstart = function() {
        return false;
};
















// naicha.onmousedown=function(e){
// 	e.stopPropagation()
// 	console.log('aaa')
// 	// isdown=true
// 	// XY_arr=[e.clientX,e.clientY]
// }
// // naicha.addEventListener('mousedown',function(e){
// // 				e.stopPropagation()
// // 				console.log('aaa')
// // 			},true);
// naicha.onmousemove=function(){
// 	console.log(isdown)
// 	if(isdown){
// 		console.log(1)
// 	}
// }
// window.onmouseup=function(){
// 	isdown=false
// }
	
	

