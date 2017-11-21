/*
	CIS166AA: Common JavaScript
	Author: David Goodyke
	Date: 10/23/2017
*/

// global variables for various text throughout website
var shopName = "Gilbert, AZ";

/*
	this function write the page link for the main navigation bar
	this allows for easier editing of the navigation bar over all pages
*/
function pageLoad() {
	document.getElementById("tattooShopName").innerHTML = shopName;
	document.getElementById("page1").innerHTML = "<a href='index.html'>Home</a>";
	document.getElementById("page2").innerHTML = "<a href='appointments.html'>Appointments</a>";
	document.getElementById("page3").innerHTML = "<a href='artists.html'>Artists</a>";
	document.getElementById("page4").innerHTML = "<a href='shop.html'>Shop</a>";
}

/* This function creates a new <li> and <a> elements with a link to the web security within the existing navigation */
function addNavLink() {
	var addToList = document.getElementsByTagName("ul")[0];
	var lastInList = document.createElement("li");
	lastInList.id="page5";
	var link = document.createElement("a")
	link.href="security.html";
	link.innerHTML="Web Security";
	lastInList.appendChild(link);
	addToList.appendChild(lastInList);
}
if (window.addEventListener) {
	window.addEventListener("load", addNavLink, false); 
} else if (window.attachEvent)  {
	window.attachEvent("onload", addNavLink);
}

//trigger pageLoad function on page load
document.addEventListener("load", pageLoad, true);