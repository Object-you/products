

window.onload = function() {
	
	var a = localStorage.getItem('a');
	
	

	var dh = document.getElementById("donghua");
	var sy = document.getElementById("shouye");
	var sy2 = document.getElementById("shouye2");
	var dh2 = document.getElementById("donghua2");
	var logo = document.getElementById("logo");
	var dakai = document.getElementById("xiala");
	var zhuti = document.getElementById("xialakuang");
	var shouhui = document.getElementById("shousuo");
	var hei = document.getElementById("hei");
	var panding = document.getElementById("cont_bj")
	


	xz()
		

	
	
	
	if (sy) {
		sy.onclick = function() {
			localStorage.setItem('a',1);
			xz()
		}

		sy2.onclick = function() {
			localStorage.setItem('a',1);
			xz()
		}
		dh.onclick = function() {
			localStorage.setItem('a',2);
			xz()
		}

		dh2.onclick = function() {
			localStorage.setItem('a',2);
			xz()
		}

		logo.onclick = function() {
			localStorage.setItem('a',1);
			xz()
		}




		dakai.onclick = function() {
			zhuti.style.top = "0.88rem";
			dakai.style.opacity = "0";
			hei.style.top = "0.33rem";
		}
		shouhui.onclick = function() {
			zhuti.style.top = "-2.2rem";
			dakai.style.opacity = "1";
			hei.style.top = "-120rem";
		}






	}



	function xz() {
		
		if(sy){
			if (localStorage.getItem('a') == 1) {
				shouye.classList.add("xuanzhong");
				shouye2.classList.add("xuanzhong");
				donghua.classList.remove("xuanzhong");
				donghua2.classList.remove("xuanzhong");
				zhuti.style.top = "-2.2rem";
				dakai.style.opacity = "1";
				hei.style.top = "-12rem";
			} else {
				donghua.classList.add("xuanzhong");
				donghua2.classList.add("xuanzhong");
				shouye.classList.remove("xuanzhong");
				shouye2.classList.remove("xuanzhong");
				zhuti.style.top = "-2.2rem";
				dakai.style.opacity = "1";
				hei.style.top = "-12rem";
			}
		}
		
	}












































}
