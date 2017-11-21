/*
	CIS166AA: Security JavaScript
	Author: David Goodyke
	Date: 11/21/2017
*/

"use strict"

/*
	this function creates paragraph elements containing navigation and screen properties from the users browser and 
	display which is then appended to the userInfo div element 
 */
function addUserInfo() {
	var container = document.getElementById("userInfo");
	var info = [9];//creates an array for info
	for(var i = 0; i < 9; i++ ) {
		info[i] = document.createElement("p");//initializes the array to create paragraph elements
	}
	info[0].innerHTML = "<b>Browser network connection: </b>" + navigator.onLine;
	info[1].innerHTML = "<b>Web browser: </b>" + navigator.platform;
	info[2].innerHTML = "<b>Web browser name: </b>" + navigator.appName;
	info[3].innerHTML = "<b>Web browser version: </b>" + navigator.appVersion;
	info[4].innerHTML = "<b>User Agent: </b>" + navigator.userAgent;
	info[5].innerHTML = "<b>Available Height: </b>" + screen.availHeight;
	info[6].innerHTML = "<b>Available Width: </b>" + screen.availWidth;
	info[7].innerHTML = "<b>Pixel Depth: </b>" + screen.pixelDepth;
	info[8].innerHTML = "<b>ColorDepth: </b>" + screen.colorDepth;
	for(var i = 0; i < 9; i++ ) {
		container.appendChild(info[i]);//info array is looped for 9 iterations to append each element
		}
}

/* 
	this function creates paragraph and hyperlink elements with links to 3 web browsing saftey sites and respective information
	regarding each site.
*/
function addSafetyInfo() {
	var container = document.getElementById("safetyInfo");
	var info = [3];
	var link = [3];
	for(var i = 0; i < 3; i++ ) {
		link[i] = document.createElement("a")
		info[i] = document.createElement("p");
	}
	link[0].href = "https://www.webroot.com/us/en/home/resources/articles/pc-security/online-activities-internet-security";
	link[0].innerHTML = "Webroot.com - Internet Browsing Safety";
	info[0].innerHTML = "This is a security website and has credible information on safe browsing practices.";
	link[1].href = "http://www.safesurfingkids.com/";
	link[1].innerHTML = "SafeSurfingKids.com - Safe Internet Surfing";
	info[1].innerHTML = "This website is specific to kids browsing the internet and staying safe, the site also includes tips for parents.";
	link[2].href = "https://www.lifewire.com/reasons-to-use-a-vpn-for-private-web-browsing-2483583";
	link[2].innerHTML = "Lifewire.com - 10 Reasons to Use a VPN for Private Web Browsing";
	info[2].innerHTML = "This website is about why you might want to utilize a VPN for navigating the internet for added strength in maintaining your privacy.";
	for(var i = 0; i < 3; i++ ) {
		container.appendChild(link[i]);
		container.appendChild(info[i]);
	}
}

//calls each function at the loading of the page
function callFunctions() {
	addUserInfo();
	addSafetyInfo();
}

//calls callFunction on page load
if (window.addEventListener) {
	window.addEventListener("load", callFunctions, false); 
} else if (window.attachEvent)  {
	window.attachEvent("onload", callFunctions);
}