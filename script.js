'use strict';
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var elem1 = document.querySelector("header");
var elem2 = document.querySelector(".main");
var elem3 = document.querySelector(".image1");
var elem4 = document.querySelector(".headerContent");
var elem5 = document.querySelector("#laserImage1");
var elem6 = document.querySelector(".image2");
var infoPanels = document.querySelectorAll(".infoPanel");

function parallaxScroll() {
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var scrollHeight = window.pageYOffset;
		var verticleLimit = elem1.offsetTop + elem1.offsetHeight;
		var horizontalLimit;
		var limit2 = elem2.offsetTop + elem2.offsetHeight;


		console.log("Scroll Height " + scrollHeight + "px");

		if (scrollHeight < screenHeight && scrollHeight <= limit2) {
			elem1.style.backgroundPositionY = ((scrollHeight / -3) ) + "px";
		} else {
			elem1.style.backgroundPositionY = "0"; //edit or remove this
		}

		if (scrollHeight < screenHeight) {
			var movement = scrollHeight / -2;
			var transparency = (((scrollHeight * 1.5) / screenHeight) * 100) - 100;
			elem4.style.top = movement + "px";
			elem4.style.opacity = Math.abs(transparency / 100);
			console.log("movement: " + movement);
			console.log("opacity: " + transparency);
		} else {
			elem4.style.backgroundPositionY = "0"; //edit or remove this
		}
	}
}

function getScreenSize() {
	console.log(screenHeight);
	console.log(screenWidth);
	console.log(elem1.style.backgroundPositionY)
}

if (window.addEventListener) {
	window.addEventListener("load", getScreenSize, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", getScreenSize);
}

if (window.addEventListener) {
	window.addEventListener("scroll", parallaxScroll, false);
} else if (window.attachEvent) {
	window.attachEvent("scroll", parallaxScroll);
}
//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//}
