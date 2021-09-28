// https://manuel.pinto.dev
var isDark = 0;

function main(){
	console.log("Ready");
	window.onload = (event) =>{
		isDark = !isDark;
		toggleDark();
	}
	
	document.querySelector("#iconPic").onclick = (event) =>{
		toggleDark();	
	}

}

function toggleDark(){
	var links = document.querySelectorAll("a");
	if(isDark==0){
		document.querySelector("body").style.background = "linear-gradient(-45deg, #1B0D63, #0E186E, #102A57, #0E4A6E)";
		document.querySelector("body").style.color = "white";
		[].forEach.call(links, function(link) {link.style.color = "white";});
		document.querySelector("header").style.background = "rgba(16,42,87,0.5)";
		document.querySelector("main").style.backgroundColor = "rgba(0,0,0,0.7)";
		document.querySelector("nav").style.backgroundColor = "rgba(0,0,0,0.5)";
		document.querySelector("nohead").style.backgroundColor = "rgba(0,0,0,0.5)";
		isDark = 1;
	}else{
		document.querySelector("body").style.background = "linear-gradient(-45deg, #ede4ff, #dae3ff, #dbf4fd, #cdfaef)";
		document.querySelector("body").style.color = "black";
		[].forEach.call(links, function(link) {link.style.color = "black";});
		document.querySelector("header").style.background = "rgba(218, 227, 255, 0.5)";
		document.querySelector("main").style.backgroundColor = "rgba(255,255,255,0.7)";
		document.querySelector("nav").style.backgroundColor = "rgba(255,255,255,0.5)";
		document.querySelector("nohead").style.backgroundColor = "rgba(255,255,255,0.5)";
		isDark = 0;
	}

}

main();
