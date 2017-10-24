/*
	CIS166AA: Common JavaScript
	Author: David Goodyke
	Date: 10/23/2017
*/

// global variables for various text throughout website
var shopName = "Tattoo Shop Name Here";

/*
	this function write the page link for the main navigation bar
	this allows for easier editing of the navigation bar over all pages
*/
function pageLoad() {
	document.getElementById("tattooShopName").innerHTML = shopName;
	document.getElementById("page1").innerHTML = "<a href='index.html'>Home</a>";
	document.getElementById("page2").innerHTML = "<a href='about.html'>About</a>";
	document.getElementById("page3").innerHTML = "<a href='artists.html'>Artists</a>";
	document.getElementById("page4").innerHTML = "<a href='shop.html'>Shop</a>";
}
//trigger pageLoad function on page load
document.addEventListener("load", pageLoad, true);