"use strict"

var waitForUser;
var currentLatitude;
var currentLongitude;
var weatherReport;
var httpRequest = false;

function startGeolocation() {
	waitForUser = setTimeout(fail, 10000);
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getLocation, fail, {timeout: 10000});
	} else {
		fail();
	}
}

function getLocation(position) {
	clearTimeout(waitForUser);
	currentLatitude = position.coords.latitude;
	currentLongitude = position.coords.longitude;
	getWeather();
}

function fail() {
	console.log("Geolocation information not available or not authorized.");
}

function getRequestObject() {
	try {
		httpRequest = new XMLHttpRequest();
	}
	catch (requestError) {
		document.querySelector("p.error").innerHTML = "Forecast not supported by your browser.";
		document.querySelector("p.error").style.display = "block";
		return false;
	}
	return httpRequest;
}

function getWeather() {
   if(!httpRequest) {
	   httpRequest = getRequestObject();
   }
   httpRequest.abort();
   httpRequest.open("get","weather.php?" + "lat=" + currentLatitude + "&lng=" + currentLongitude, true);
   httpRequest.send(null);
}

function loader(){
	startGeolocation();
}

if (window.addEventListener) {
   window.addEventListener("load", loader, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", loader);
}