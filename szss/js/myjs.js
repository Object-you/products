var temp
var temp_ss =0
var inter
var temp_opa=1
var opa_inter
window.onload=function(){
	setTimeout(function(){
		window.scrollTo(0,0)
	},150)
	document.documentElement.style.overflowY = 'hidden';
	document.documentElement.style.overflowX = 'hidden';
	// 禁止滑动条
	
	setTimeout(function(){
		// console.log('c')
		start()
		//遮罩层淡出
	},1000)
	$('#t1').css('top','-100px')
	$('#t2').css('top','100px')
	$('#t3').css('top','200px')
	$('#t3').css('top','300px')
	$('#t5').css('top','400px')
	$('#UWOS').css('top','-200px')
	$('#bt').css('top','-200px')
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('#pinpai>.duan').eq(0).hover(function(){
		$('#jieshao').css('display','block')
	},function(){
		$('#jieshao').css('display','none')
	})
	
	
	$('#pinpai>.duan').eq(1).hover(function(){
		$('#tese').css('display','block')
	},function(){
		$('#tese').css('display','none')
	})
	
	$('#pinpai>.duan').eq(2).hover(function(){
		$('#linian').css('display','block')
	},function(){
		$('#linian').css('display','none')
	})
	
	
	$('#fanwei .duan_cont').eq(0).hover(function(){
		$('#shipin').css('display','block')
	},function(){
		$('#shipin').css('display','none')
	})
	

	
	$('#fanwei .duan_cont').eq(1).hover(function(){
		$('#zhoubian').css('display','block')
	},function(){
		$('#zhoubian').css('display','none')
	})
	$('#fanwei .duan_cont').eq(2).hover(function(){
		$('#kuajie').css('display','block')
	},function(){
		$('#kuajie').css('display','none')
	})
	
	$('#fanwei .duan_cont').eq(3).hover(function(){
		$('#xianshang').css('display','block')
	},function(){
		$('#xianshang').css('display','none')
	})
	
	$('#fanwei .duan_cont').eq(4).hover(function(){
		$('#toushi').css('display','block')
	},function(){
		$('#toushi').css('display','none')
	})
	
	$('#fanwei .duan_cont').eq(5).hover(function(){
		$('#xiaodian').css('display','block')
	},function(){
		$('#xiaodian').css('display','none')
	})
	
	
	
	$('#jiaru').eq(0).hover(function(){
		$('#songshuwo').css('display','block')
	},function(){
		$('#songshuwo').css('display','none')
	})
	
	$('#meiti').eq(0).hover(function(){
		$('#meiti_none').css('display','block')
	},function(){
		$('#meiti_none').css('display','none')
	})
	
	
	
	
}



window.onscroll=function(){
	temp = document.documentElement.scrollTop
	run()
	
	
}

function run(){
	var t1_num =200-temp/10 +'px'
	var ywos_num =350 - temp/(700/168)+'px'
	var bt_num =550 - temp/(700/168)+'px'
	var t2_num =1000- temp/(700/(1000-860))+'px'
	var t3_num =1700- temp/(700/(1700-1490))+'px'
	var t4_num =2200- temp/(700/(2200-1920))+'px'
	var t5_num =3000- temp/(700/(3000-2580))+'px'
	var qq_num =450- temp/(700/(450-352))+'px'
	var y1_num =120- temp/(700/(120-22))+'px'
	var y2_num =2800- temp/(700/(2800-2450))+'px'
	var y3_num =2500- temp/(700/(2500-2150))+'px'
	var y4_num =4500- temp/(700/(4500-4010))+'px'
	$('#t1').css('top',`${t1_num}`)
	$('#UWOS').css('top',`${ywos_num}`)
	$('#bt').css('top',`${bt_num}`)
	$('#t2').css('top',`${t2_num}`)
	$('#t3').css('top',`${t3_num}`)
	$('#t4').css('top',`${t4_num}`)
	$('#t5').css('top',`${t5_num}`)
	$('#qq').css('top',`${qq_num}`)
	$('#y1').css('top',`${y1_num}`)
	$('#y2').css('top',`${y2_num}`)
	$('#y3').css('top',`${y2_num}`)
	$('#y4').css('top',`${y2_num}`)
}


//遮罩层淡出
function start(){
	opa_inter=setInterval(function(){
		temp_opa-=0.005
		// console.log('b')
		$('#zhezhao').css('opacity', `${temp_opa}`)
		if(temp_opa<=0){
			clearInterval(opa_inter)
			shurun()  
			// 树叶下降
		}
	},1)
}
// 树叶下降
function shurun(){
	shu_inter=setInterval(function(){
		$('#shu').css({top:`+=${10}px`})
		
		if(parseInt($('#shu').css('top'))==100){
			fangrun()
		}
		
		if(parseInt($('#shu').css('top'))>2000){
			clearInterval(shu_inter)
			// 松鼠出
			// ssrun()
			
		}
		
		// console.log('d')
	})
}

// 房子下降
function fangrun(){
	// $('#t2').css('top','100px')
	// $('#t3').css('top','300px')
	// $('#t3').css('top','500px')
	// $('#t5').css('top','700px')
	
	UWOS_inter =setInterval(function(){
		$('#UWOS').css('top',`+=7px`)
		// console.log('UWOS')
		if(parseInt($('#UWOS').css('top'))>350){
			clearInterval(UWOS_inter)
		}
	},20)
	
	
	bt_inter =setInterval(function(){
		$('#bt').css('top',`+=9px`)
		// console.log('bt')
		if(parseInt($('#bt').css('top'))>550){
			clearInterval(bt_inter)
		}
	},20)
	
	
	t1_inter =setInterval(function(){
		$('#t1').css('top',`+=5px`)
		// console.log('t1')
		if(parseInt($('#t1').css('top'))>200){
			clearInterval(t1_inter)
		}
	},20)
	
	
	t2_inter =setInterval(function(){
		$('#t2').css('top',`+=10px`)
		// console.log('t2')
		if(parseInt($('#t2').css('top'))>1000){
			clearInterval(t2_inter)
		}
	},20)
	
	
	
	
	t3_inter =setInterval(function(){
		$('#t3').css('top',`+=14px`)
		// console.log('t3')
		if(parseInt($('#t3').css('top'))>1700){
			clearInterval(t3_inter)
		}
	},15)
	
	
		t4_inter =setInterval(function(){
			$('#t4').css('top',`+=17px`)
			// console.log('t4')
			if(parseInt($('#t4').css('top'))>2200){
				clearInterval(t4_inter)
			}
		},10)
	
	
	
	
		t5_inter =setInterval(function(){
			$('#t5').css('top',`+=20px`)
			// console.log('t5')
			if(parseInt($('#t5').css('top'))>3000){
				clearInterval(t5_inter)
				ssrun()
			}
		},10)
	
	
	
	
	
}






// 松鼠出
function ssrun(){
	
	$('#songshu').css('display','block')
	inter= setInterval(function(){
		$('#songshu>img').css('transform',`translateX(${temp_ss}px)`)
		temp_ss-=1200
		// console.log('a')
		if(temp_ss<-15600){
			
			clearInterval(inter)
			document.documentElement.style.overflowY = 'scroll';
			$('#zhezhao').css('display','none')
		$('#songshu>img').css('transform',`translateX(-15600px)`)
		}
	},100)
	
}







// console.log(document.documentElement.scrollTop)