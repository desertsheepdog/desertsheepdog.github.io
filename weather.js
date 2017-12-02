"use strict"

var waitForUser;
var currentLatitude;
var currentLongitude;
var weatherReport;
var httpRequest = false;
var key = "760ce3d4a8ca81faf2c3dfb1fee3c583";

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
		console.log("Forecast not supported by your browser.");
		return false;
	}
	return httpRequest;
}

function getWeather() {
   /*if(!httpRequest) {
	   httpRequest = getRequestObject();
   }
   httpRequest.abort();
   httpRequest.open("get","weather.php?" + "lat=" + currentLatitude + "&lon=" + currentLongitude, true);
   httpRequest.send(null);
   console.log(httpRequest);*/
   var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + currentLatitude + "&lon=" + currentLongitude + "&APPID=760ce3d4a8ca81faf2c3dfb1fee3c583";
   var req = new XMLHttpRequest();
   var payload = {location:null, tempurature:null, humididty:null};
   req.open("GET", url, true);
   req.addEventListener('load', function(){
	if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		console.log(response);
	} else {
		console.log("error in network request: " + request.statusText);
	}});
	req.send(null);
}

function loader(){
	startGeolocation();
}

if (window.addEventListener) {
   window.addEventListener("load", loader, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", loader);
}