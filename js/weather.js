"use strict"

/* Global Variables */
var waitForUser;
var currentLatitude;
var currentLongitude;
var weatherReport;
var weatherIcon;
var weatherDescription;
var httpRequest = false;
var httpResponse = false;
var currentTime;
var sunrise;
var sunset;
var timeOfDay;

/* Retrieves location coordinates */
function startGeolocation() {
	waitForUser = setTimeout(fail, 10000);
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getLocation, fail, {timeout: 10000});
	} else {
		fail();
	}
}

function fail() {
	console.log("Geolocation information not available or not authorized.");
}

 /* Sets corresponding variables with coordinates */
function getLocation(position) {
	clearTimeout(waitForUser);
	currentLatitude = position.coords.latitude;
	currentLongitude = position.coords.longitude;
	getForecast();
}

/* getRequestObject and getForecast call forecast.php and populate httpRequest with forecast data from weather underground */
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

function getForecast() {
   if(!httpRequest) {
	   httpRequest = getRequestObject();
   }
   httpRequest.abort();
   httpRequest.open("get","php/forecast.php?" + "lat=" + currentLatitude + "&lon=" + currentLongitude, true);
   httpRequest.send(null);
   console.log(httpRequest);
   httpRequest.onreadystatechange = displayWeather;
}

function displayWeather() {
	
	/*forecast data is parsed into a JSON object*/
	if(httpRequest.readyState === 4 && httpRequest.status === 200) {
		httpResponse = JSON.parse(this.responseText);
		console.log(httpResponse);
		
		var cArray1 = [null, "condition:", "High Temp:", "Low Temp:", "Humidity:", "Wind:"];
		var cArray2 = [6];
		var currentTime = httpResponse.moon_phase.current_time.hour + httpResponse.moon_phase.current_time.minute;
		var sunrise = httpResponse.moon_phase.sunrise.hour + httpResponse.moon_phase.sunrise.minute;
		var sunset = httpResponse.moon_phase.sunset.hour + httpResponse.moon_phase.sunset.minute;
		var day;
		var img;
		var row = document.querySelectorAll("tr");
		var col1 = document.querySelectorAll("th");
		var col2 = document.querySelectorAll("td");
		var count = 0;
		var length;
		var start;
		var array;
		
		/* This checks sunrise and sunset times against current time pulled from weather underground api to chenge background to night img if condition is true */
		if(Number(currentTime) < Number(sunrise) && Number(currentTime) > Number(sunset))
			document.body.style.backgroundImage = "url('images/mountainsNightClear.png')";
		
		/* This sets the current weather conditions section */
		document.getElementById("icon").src = "images/" + httpResponse.current_observation.icon + ".gif";
		document.getElementById("currentWeather").innerHTML = httpResponse.current_observation.weather;
		document.getElementById("currentTemp").innerHTML = httpResponse.current_observation.temp_f + " F";
		document.getElementById("currentHumidity").innerHTML = httpResponse.current_observation.relative_humidity;
		document.getElementById("currentWind").innerHTML = httpResponse.current_observation.relative_humidity;
		
		/*This populates the 3 day forecast tables parent for loop pulls data for each day, nested for loops populates the info within each day table*/
		for(var j = 1; j < 4; j++){
			cArray1[0] = httpResponse.forecast.simpleforecast.forecastday[j].date.weekday;
			cArray2[0] = httpResponse.forecast.simpleforecast.forecastday[j].icon;
			cArray2[1] = httpResponse.forecast.simpleforecast.forecastday[j].conditions;
			cArray2[2] = httpResponse.forecast.simpleforecast.forecastday[j].high.fahrenheit + " F";
			cArray2[3] = httpResponse.forecast.simpleforecast.forecastday[j].low.fahrenheit + " F";
			cArray2[4] = httpResponse.forecast.simpleforecast.forecastday[j].avehumidity + "%";
			cArray2[5] = httpResponse.forecast.simpleforecast.forecastday[j].avewind.mph + " mph " + httpResponse.forecast.simpleforecast.forecastday[j].avewind.dir;
			count++;
			length = count * 6;
			start = length - 6;
			array = 0;
			for(var i = length - 6; i < length; i++){
					if(i == 0 || i == 6 || i == 12){
						img = document.createElement("img");
						img.src = "images/" + cArray2[0] + ".gif";
						col2[i].appendChild(img);
					} else {
						col2[i].innerHTML = cArray2[array];
					}
					col1[i].innerHTML = cArray1[array];
				array ++;
			}
		}
	}
}

if (window.addEventListener) {
   window.addEventListener("load", startGeolocation, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", startGeolocation);
}