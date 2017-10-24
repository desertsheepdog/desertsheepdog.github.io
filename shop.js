/*
	CIS166AA: Common JavaScript
	Author: David Goodyke
	Date: 10/23/2017
*/

// global variables
var itemOnePrice = 20;//price variables declared as global variable for easy access to changing prices as new items are added or removed
var itemTwoPrice = 20;
var itemThreePrice = 15;
var itemFourPrice = 15;
var itemFivePrice = 5;
var itemSixPrice = 5;
var itemSevenPrice = 10;
var shippingOnePrice = 5;//shipping prices are also easily accessible for changing
var shippingTwoPrice = 10;
var shippingThreePrice = 15;
var itemOneCost = 0;
var itemTwoCost = 0;
var itemThreeCost = 0;
var itemFourCost = 0;
var itemFiveCost = 0;
var itemSixCost = 0;
var itemSevenCost = 0;
var shippingOneCheck = false;
var shippingTwoCheck = false;
var shippingThreeCheck = false;
var totalCost = 0;

//this function is the main function for calculating the amount when selecting amounts of each product
function calculateAmount(){
	var one = document.getElementById("itemOne");			//these store the integer values from the input fields to their respective local variables
	var two = document.getElementById("itemTwo");
	var three = document.getElementById("itemThree");
	var four = document.getElementById("itemFour");
	var five = document.getElementById("itemFive");
	var six = document.getElementById("itemSix");
	var seven = document.getElementById("itemSeven");
	totalCost -= itemOneCost;											// the -= prevents price stacking when changing the amount of each product
	itemOneCost = itemOnePrice * one.value;						// input field value * the price of each item stored into the global variable
	totalCost += itemOneCost;											// adds the item cost to the total cost
	totalCost -= itemTwoCost;
	itemTwoCost = itemTwoPrice * two.value;
	totalCost += itemTwoCost;
	totalCost -= itemThreeCost;
	itemThreeCost = itemThreePrice * three.value;
	totalCost += itemThreeCost;
	totalCost -= itemFourCost;
	itemFourCost = itemFourPrice * four.value;
	totalCost += itemFourCost;
	totalCost -= itemFiveCost;
	itemFiveCost = itemFivePrice * five.value;
	totalCost += itemFiveCost;
	totalCost -= itemSixCost;
	itemSixCost = itemSixPrice * six.value;
	totalCost += itemSixCost;
	totalCost -= itemSevenCost;
	itemSevenCost = itemSevenPrice * seven.value;
	totalCost += itemSevenCost;
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;//writes the total cost to the grandTotal paragraph field
}

//each function checks the checkbox fields subtracting or adding the shipping prices whether the boxes are checked or not
function toggleShippingOne() {
	(document.getElementById("shippingOne").checked === false) ? totalCost -= shippingOnePrice : totalCost += shippingOnePrice;
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;
}

function toggleShippingTwo() {
	(document.getElementById("shippingTwo").checked === false) ? totalCost -= shippingTwoPrice : totalCost += shippingTwoPrice;
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;
}

function toggleShippingThree() {
	(document.getElementById("shippingThree").checked === false) ? totalCost -= shippingThreePrice : totalCost += shippingThreePrice;
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;
}

//this function resets the form on page refresh
function formReset() {
	document.getElementById("itemOne").value = 0;
	document.getElementById("itemTwo").value = 0;
	document.getElementById("itemThree").value = 0;
	document.getElementById("itemFour").value = 0;
	document.getElementById("itemFive").value = 0;
	document.getElementById("itemSix").value = 0;
	document.getElementById("itemSeven").value = 0;
	document.getElementById("shippingOne").checked = 0;
	document.getElementById("shippingTwo").checked = 0;
	document.getElementById("shippingThree").checked = 0;
	calculateAmount();
	createEventListeners();
}

//this allows the the toggle and calculate functions to trigger when changed are made to each input field
function createEventListeners() {
	document.getElementById("itemOne").addEventListener("change", calculateAmount, false);
	document.getElementById("itemTwo").addEventListener("change", calculateAmount, false);
	document.getElementById("itemThree").addEventListener("change", calculateAmount, false);
	document.getElementById("itemFour").addEventListener("change", calculateAmount, false);
	document.getElementById("itemFive").addEventListener("change", calculateAmount, false);
	document.getElementById("itemSix").addEventListener("change", calculateAmount, false);
	document.getElementById("itemSeven").addEventListener("change", calculateAmount, false);
	document.getElementById("shippingOne").addEventListener("change", toggleShippingOne, false);
	document.getElementById("shippingTwo").addEventListener("change", toggleShippingTwo, false);
	document.getElementById("shippingThree").addEventListener("change", toggleShippingThree, false);	
}
//forces form reset on page load/refresh
document.addEventListener("load", formReset, true);