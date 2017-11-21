/*
	CIS166AA: Shop JavaScript
	Author: David Goodyke
	Date: 10/23/2017
*/

// global variables and arrays
"use strict"
var shippingPrice = [5, 10, 15]
var itemPrice = [20, 20, 15, 15, 5, 5, 10];
var itemTotal = [7];
var itemQuantity = [7];
var totalCost = 0;
var formValidity = true;

function calculateAmount(){		//this function is the main function for calculating the amount when selecting amounts of each product
	totalCost = 0;						//resets total cost to prevent price stacking when changes are made
	var i = 0;
	do {										//these store the integer values from the input fields to their respective local variables using a do while loop
		itemQuantity[i] = document.getElementById("item_" + (i + 1)).value;
		i++
	}while(i < 7);
	i = 0;
	while(i < 7) {						//while loop multiplies itemQuantity and itemPrice arrays then added to totalCost variable
		itemTotal[i] = itemQuantity[i] * itemPrice[i];
		totalCost += itemTotal[i];
		i++
	}
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;//writes the total cost to the grandTotal paragraph field
}

//each function checks the checkbox fields subtracting or adding the shipping prices whether the boxes are checked or not
//if statements are added to keep a single check mark for all shipping options
function toggleShipping_1() {
	(document.getElementById("shipping_1").checked === false) ? totalCost -= shippingPrice[0] : totalCost += shippingPrice[0];
	if(document.getElementById("shipping_2").checked === true) {
	document.getElementById("shipping_2").checked = false
	totalCost -= shippingPrice[1];
	}
	if(document.getElementById("shipping_3").checked === true) {
	document.getElementById("shipping_3").checked = false
	totalCost -= shippingPrice[2];
	}
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;
}

function toggleShipping_2() {
	(document.getElementById("shipping_2").checked === false) ? totalCost -= shippingPrice[1] : totalCost += shippingPrice[1];
	if(document.getElementById("shipping_1").checked === true) {
	document.getElementById("shipping_1").checked = false
	totalCost -= shippingPrice[0];
	}
	if(document.getElementById("shipping_3").checked === true) {
	document.getElementById("shipping_3").checked = false
	totalCost -= shippingPrice[2];
	}
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;
}

function toggleShipping_3() {
	(document.getElementById("shipping_3").checked === false) ? totalCost -= shippingPrice[2] : totalCost += shippingPrice[2];
	if(document.getElementById("shipping_1").checked === true) {
	document.getElementById("shipping_1").checked = false
	totalCost -= shippingPrice[0];
	}
	if(document.getElementById("shipping_2").checked === true) {
	document.getElementById("shipping_2").checked = false
	totalCost -= shippingPrice[1];
	}
	document.getElementById("grandTotal").innerHTML = "$" + totalCost;
}

/* Input validation */
function verifyItem_1() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_1.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_1.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger){
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItem_2() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_2.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_2.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger) {
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItem_3() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_3.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_3.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger) {
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItem_4() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_4.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_4.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger) {
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItem_5() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_5.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_5.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger) {
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItem_6() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_6.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_6.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger) {
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItem_7() {
	var trigger = false;
	var messageText = "";
	try {
		if (item_7.value < 0) {
			trigger = true;
			throw "You cannot enter a negative quatity.";
		}
	}
	catch(message) {
		messageText = message;
		item_7.value = 0; // remove erroneous entry from input box
	}
	finally {
		if(trigger) {
			alert(messageText);
			recalculateAmount();// calls calculate function to remove any negative values in total
		}
	}
}

function verifyItems() {//calls each item verification
	verifyItem_1();
	verifyItem_2();
	verifyItem_3();
	verifyItem_4();
	verifyItem_5();
	verifyItem_6();
	verifyItem_7();
}


// clears the default state AL in list to blank to force user to select a state
function clearSelectDefaults() {
	var emptyBoxes = document.getElementsByTagName("select");
	emptyBoxes[0].selectedIndex = -1;
}

// automatically checks Special instructions checkbox when user enters text in Special Instruction textarea, removes check if text is deleted
function autoCheckSpecial() {
	var messageBox = document.getElementById("specialBox");
	if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) {
		document.getElementById("specialInstruct").checked = true;
	} else {
		document.getElementById("specialInstruct").checked = false;
	}
}

// checks all input fields within the Tattoo Supplies fieldset for all values, if no items are selected an error is thrown
function validateSupplies() {
	var inputElements = document.querySelectorAll("#supplies input");
	var elementCount = inputElements.length;
	var totalQuantity = 0;
	try {
	//check all input elements for any item quantity and added to totalQuantity
		for (var i = 0; i < elementCount; i++) {
			totalQuantity += inputElements[i].value;
			}
	// if totalQuantity is equal to 0 error is thrown
		if (totalQuantity == 0) {
			throw "You have not selected any items for purchase."
		} else {
		suppliesError.style.display = "none";
		suppliesError.innerHTML = "";
		}
	}
	catch(msg) {
		suppliesError.style.background = "rgb(255, 200, 200)";
		suppliesError.style.display = "block";
		suppliesError.innerHTML = msg;
		formValidity = false;
	}
}

// checks all checkbox inputs for at least one checkbox checked true
function validateShippingMethod() {
	var inputElements = document.querySelectorAll("#shipMethod input");
	var elementCount = inputElements.length;
	var elementChecked = [elementCount];
	try {
	//checks all checkbox inputs for checked value
		for (var i = 0; i < elementCount; i++) {
			elementChecked[i] = inputElements[i].checked;
		}
	// if all values are false ! reverses statement to true throwing an error, if any value is true ! reverses to false
		if (!(elementChecked[0] || elementChecked[1] || elementChecked[2])) {
			throw "You have not selected a shipping method."								
		} else {
		shipError.style.display = "none";
		shipError.innerHTML = "";
		}
	}
	catch(msg) {
		shipError.style.background = "rgb(255, 200, 200)";
		shipError.style.display = "block";
		shipError.innerHTML = msg;
		formValidity = false;
	}
}

//validates all shipping info input boxes, state selection, and special instruction text area if checkboc is checked
function validateShippingInfo() {
	var inputElements = document.querySelectorAll("#shipInfo input");
	var fieldsetValidity = true;
	var elementCount = inputElements.length;
	var totalQuantity = 0;
	var currentElement;
	try {
		//checks for input values a field is blank this sets fieldsetValidity to false and highlights input fields with a red background
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputElements[i];
			if (currentElement.value ==="") {
				currentElement.style.background = "rgb(255, 200, 200)";
				fieldsetValidity = false;
			} else {
				currentElement.style.background = "rgb(125, 125, 125)";
			}
		}
		// checks if a state as been selected if left blank fieldsetValidity is set to false and a red border is placed around state selection box
		currentElement = document.querySelector("#shipInfo select");
		if (currentElement.selectedIndex === -1) {
			currentElement.style.border = "1px solid red";
			fieldsetValidity = false;
		} else {
			currentElement.style.border = "";
		}
		// checks if Special Instructions box is checked and text is entered into Special Instruction text area if blank and check fieldsetValidity is false
		currentElement = document.getElementById("specialBox");
		if (document.getElementById("specialInstruct").checked && ((currentElement.value === "") || (currentElement.value === currentElement.placeholder))) {
			currentElement.style.background = "rgb(255, 200, 200)";
			fieldsetValidity = false;
		} else {
			currentElement.style.background = "rgb(125, 125, 125)";
		}
		if (!fieldsetValidity) {
			throw "Please complete all shipping information fields."
		} else {
		shipInfoError.style.display = "none";
		shipInfoError.innerHTML = "";
		}
	}
	catch(msg) {
		shipInfoError.style.background = "rgb(255, 200, 200)";
		shipInfoError.style.display = "block";
		shipInfoError.innerHTML = msg;
		formValidity = false;
	}
}

function validateForm(evt) {
	if (evt.preventDefault) {
	// prevent form from submitting
		evt.preventDefault();
	} else {
	// prevent form from submitting in ie8
		evt.returnValue = false; 
	}
	// reset value for revalidation
	formValidity = true;
	validateSupplies();
	validateShippingMethod();
	validateShippingInfo();
	validateFirstName();
	validateLastName();
	validateStreet();
	validateCity();
	validateZIP();
	validateSpecialBox();
	// if formValididty is true the form will submit, if false form will not submit and error message will appear at the top of the form
	if (formValidity === true) {
		document.getElementById("errorMessage").innerHTML = "";
		document.getElementById("errorMessage").style.display  = "none";
		alert("Thank you for your order!")
		document.getElementsByTagName("form")[0].submit();
	} else {
		document.getElementById("errorMessage").innerHTML = "This form is not complete, please check all fields for completion.";
		document.getElementById("errorMessage").style.display = "block";
		document.getElementById("errorMessage").style.background = "rgb(255, 200, 200)";
	}
}

//Chapter 8 Validation

// global variables
var account = {};
var selection = [];
var usernameComplete = false;
var passwordComplete = false;
var emailComplete = false;

// function validates the entered username
function validateUsername() {
	var input = document.getElementById("info1");
	var warning = document.getElementById("info1warning");
	try{
		//tests for the username to be greater than 4 characters and lesser than 12 characters
		if(/^.{4,12}$/.test(input.value) === false) {
			throw "Username must be at least 4-12 characters long.";
			// tests if contains non alphnumeric characters
		} else if(/\W/.test(input.value) === true) {
			throw "Username must only contain letters and numbers"
		}
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
		usernameComplete = true;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 220, 220)";
		warning.style.display = "block";
		warning.innerHTML = msg;
		usernameComplete = false;
	}
}

// function validates the entered password
function validatePassword1() {
	var input = document.getElementById("info2");
	var warning = document.getElementById("info2warning");
	try {
		// test for a minimum of 12 characters
		if(/.{12,}/.test(input.value) === false) {
			throw "Password must be at least 12 characters long.";
			//test for lowercase alphabetical characters
		} else if (/[a-z]/.test(input.value) === false) {
			throw "Password must contain at least 1 lower case letter.";
			//test for uppercase alphabetical characters
		} else if (/[A-Z]/.test(input.value) === false) {
			throw "Password must contain at least 1 upper case letter.";
			//tests for numerical characters
		} else if (/\d/.test(input.value) === false) {
			throw "Password must contain at least 1 number";
			//test for one of the specified characters
		} else if (/[!@#_\-\$\.]/.test(input.value) === false) {
			throw "Password must contain at least one of the following symbols: ! @ # _  - $  ."
		}
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 220, 220)";
		warning.style.display = "block";
		warning.innerHTML = msg;
	}
}

// function validates the entered password validation
function validatePassword2() {
	var input = document.getElementById("info2");
	var validation = document.getElementById("info3");
	var warning = document.getElementById("info3warning");
	try {
		//compares both password inputs against each other
		if(input.value.localeCompare(validation.value) !== 0) {
			throw "Passwords do not match.";
		}
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		validation.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.password = input.value;
		passwordComplete = true;
	}
	catch (msg) {
		//displays error message and show input fields red
		input.style.background = "rgb(255, 220, 220)";
		validation.style.background = "rgb(255, 220, 220)";
		warning.style.display = "block";
		warning.innerHTML = msg;
		passwordComplete = false;
	}
}

// function validates the entered email
function validateEmail() {
	var input = document.getElementById("info4");
	var warning = document.getElementById("info4warning");
	var emailFormat = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
	try {
		//test input against emailFormat variable
		if (emailFormat.test(input.value) === false) {
			throw "Invalid email format."
		}
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies inputfield to account object
		account.email = input.value;
		emailComplete = true;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 220, 220)";
		warning.style.display = "block";
		warning.innerHTML = msg;
		emailComplete = false;
	}
}

function selectionAppend(event) {
	if(event === undefined) {//get caller element in IE8
		event = window.event;
	}
	var choice = event.target || event.srcElement;
	var source = choice.value;
	//checks if checkbox is checked
	if(choice.checked) {
		//adds checkbox value to selection array
		selection.push(source);
		//adds checkbox value to selection div
		var writeSource = document.createElement("p");
		writeSource.innerHTML = source;
		document.getElementById("selection").appendChild(writeSource);
	} else {// if checkbox is unchecked
		var listSources = document.querySelectorAll("#selection p");
		for (var i = 0; listSources.length; i++) {
			if(listSources[i].innerHTML === source) {
				//removed element from array
				selection.splice(i,1);
				//removes from selection div
				listSources[i].parentNode.removeChild(listSources[i]);
				break;
			}
		}
	}
}

function submitInfo() {
	//if all 3 areas are true (completed)
	if(usernameComplete && passwordComplete && emailComplete) {
		//converts selection array to string
		var objectString = selection.toString();
		//converts account object to string
		var arrayString = JSON.stringify(account);
		//information stored in account object is written to corresponding elements and displays information
		document.getElementById("username").innerHTML = account.username;
		document.getElementById("email").innerHTML = account.email;
		document.getElementById("accountDisplay").style.display = "block";
		document.getElementById("writeString").innerHTML = objectString;
		document.getElementById("writeJSON").innerHTML = arrayString;
		//clears input fields
		for (var i = 1; i <= 4; i++) {
			document.getElementById("info" + i).value = "";
		}
		//clears checkboxes
		for (var i = 1; i <= 6; i++) {
			document.getElementById("check" + i).checked = false;
		}
	}
}

// Chapter 9 Validation

// function validates the entered username
function validateFirstName() {
	var input = document.getElementById("firstName");
	var warning = document.getElementById("shipInfoError");
	try{
		//tests if field is blank
		if(input.value === ""){
			throw "First name is required."
			//tests for the first name for only alphabetical characters
		} else if (/[*.\W\d]/.test(input.value) === true) {
			throw "First name can only contain alphabetical characters.";
		} 
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.background = "rgb(255, 200, 200)";
		warning.innerHTML = msg;
		formValidity = false;
	}
}

function validateLastName() {
	var input = document.getElementById("lastName");
	var warning = document.getElementById("shipInfoError");
	try{
		//tests if field is blank
		if(input.value === "") {
			throw "Last name is required."
			//tests for the last name for only alphabetical characters
		} else if (/[*.\W\d]/.test(input.value) === true) {
			throw "Last name can only contain alphabetical characters.";
		} 
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.background = "rgb(255, 200, 200)";
		warning.innerHTML = msg;
		formValidity = false;
	}
}

function validateStreet() {
	var input = document.getElementById("street");
	var warning = document.getElementById("shipInfoError");
	try{
		//tests if field is blank
		if(input.value === "") {
			throw "Street address is required."
			//tests for only typical characters used in street address format
		} else if (/[a-zA-Z0-9.'-]/.test(input.value) === false) {
			throw "Illegal character(s) used.";
		} 
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.background = "rgb(255, 200, 200)";
		warning.innerHTML = msg;
		formValidity = false;
	}
}

function validateCity() {
	var input = document.getElementById("city");
	var warning = document.getElementById("shipInfoError");
	try{
		//tests if field is blank
		if(input.value === "") {
			throw "City is required."
			//tests for symbols and numerical characters
		} else if (/[*.\W\d]/.test(input.value) === true) {
			throw "City can only contain alphabetical characters.";
		} 
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.background = "rgb(255, 200, 200)";
		warning.innerHTML = msg;
		formValidity = false;
	}
}

function validateZIP() {
	var input = document.getElementById("zip");
	var warning = document.getElementById("shipInfoError");
	try{
		//tests for the last name for only alphabetical characters
		if(input.value === "") {
			throw "ZIP code is required."
			//tests for only typical characters used in street address format
		} else if (/\d\-?/.test(input.value) === false) {
			throw "ZIP code can only contain numbers and '-' character"
		} else if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input.value) === false) {
			throw "Invalid Zip code format.";
		} 
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.background = "rgb(255, 200, 200)";
		warning.innerHTML = msg;
		formValidity = false;
	}
}

function validateSpecialBox() {
	var input = document.getElementById("specialBox");
	var warning = document.getElementById("shipInfoError");
	var checkbox = document.getElementById("specialInstruct");
	try{
		//tests for maximum of 200 characters
		if (/^.{0,200}$/.test(input.value) === false) {
			throw "Special Instructions cannot be greater than 200 characters.";
			//checks for all characters and excludes alphanumeric and punctuation characters
		} else if (/[^*.\w\,\.\?]/.test(input.value) === true) {
			throw "Special Instructions can only contain alphanumeric and , . ? characters.";
		} 
		//resets input feild and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		//copies input field to account object
		account.username = input.value;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.background = "rgb(255, 200, 200)";
		warning.innerHTML = msg;
		formValidity = false;
	}
}

//this function resets the form on page refresh
function formReset() {
	for (var i = 1; i <= 7; i++) {
		document.getElementById("item_" + i).value = 0;
	}
	for (var i = 1; i <= 3; i++) {
		document.getElementById("shipping_" + i).checked = false;
	}
	calculateAmount();
	createEventListeners();
}

//loads functions on webpage load
function functionLoader() {
	formReset();
	createEventListeners();
	clearSelectDefaults();
}

function createEventListeners() {
	for(var i = 1; i <= 7; i++) {
		document.getElementById("item_" + i).addEventListener("change", calculateAmount, false);
	}
	document.getElementById("shipping_1").addEventListener("change", toggleShipping_1, false);
	document.getElementById("shipping_2").addEventListener("change", toggleShipping_2, false);
	document.getElementById("shipping_3").addEventListener("change", toggleShipping_3, false);
	for(var i = 1; i <= 7; i++) {
		document.getElementById("item_" + i).addEventListener("change", verifyItems, false);
	}
	for(var i = 1; i <= 7; i++) {
		document.getElementById("item_" + i).addEventListener("change", calculateAmount, false);
	}
	var messageBox = document.getElementById("specialBox");
	if (messageBox.addEventListener) {
		messageBox.addEventListener("blur", autoCheckSpecial, false);
	} else if (messageBox.attachEvent) {
		messageBox.atachEvent("onblur", autoCheckSpecial);
	}
	var form = document.getElementsByTagName("form")[1];
	if (form.addEventListener) {
		form.addEventListener("submit", validateForm, false);
	}else if (form.attachEvent) {
		form.attachEvent("onsubmit", validateForm);
	}
	var usernameInput = document.getElementById("info1");
	var password1Input = document.getElementById("info2");
	var password2Input = document.getElementById("info3");
	var emailInput = document.getElementById("info4");
	if(usernameInput.addEventListener) {
		usernameInput.addEventListener("change", validateUsername, false);
		password1Input.addEventListener("change", validatePassword1, false);
		password2Input.addEventListener("change", validatePassword2, false);
		emailInput.addEventListener("change", validateEmail, false);
	} else if(usernameInput.attachEvent) {
		usernameInput.attachEvent("onchange", validateUsername);
		password1Input.attachEvent("onchange", validatePassword1);
		password2Input.attachEvent("onchange", validatePassword2);
		emailInput.attachEvent("onchange", validateEmail);
	}
	var choices = document.getElementsByName("choices");
	if (choices[0].addEventListener) {
		for (var i = 0; i < choices.length; i++) {
			choices[i].addEventListener("change", selectionAppend, false);
		}
	} else if (choices[0].attachEvent) {
		for (var i = 0; i < choices.length; i++) {
			choices[i].attachEvent("onchange", selectionAppend);
		}
	}
	var submit = document.getElementById("accountSubmit");
	if (submit.addEventListener) {
		submit.addEventListener("click", submitInfo, false);
	} else if (submit.attachEvent) {
		submit.attachEvent("onclick", submitInfo);
	}
	var firstNameInput = document.getElementById("firstName");
	var lastNameInput = document.getElementById("lastName");
	var streetInput = document.getElementById("street");
	var cityInput = document.getElementById("city");
	var zipInput = document.getElementById("zip");
	var specialBoxInput = document.getElementById("specialBox");
	if(firstNameInput.addEventListener) {
		firstNameInput.addEventListener("change", validateFirstName, false);
		lastNameInput.addEventListener("change", validateLastName, false);
		streetInput.addEventListener("change", validateStreet, false);
		cityInput.addEventListener("change", validateCity, false);
		zipInput.addEventListener("change", validateZIP, false);
		specialBoxInput.addEventListener("change", validateSpecialBox, false);
	} else if(usernameInput.attachEvent) {
		firstNameInput.attachEvent("onchange", validateFirstName);
		lastNameInput.attachEvent("onchange", validateLastName);
		streetInput.attachEvent("onchange", validateStreet);
		cityInput.attachEvent("onchange", validateCity);
		zipInput.attachEvent("onchange", validateZIP);
		specialBoxInput.attachEvent("onchange", validateSpecialBox);
	}
}

//forces form reset on page load/refresh
if (window.addEventListener) {
	window.addEventListener("load", functionLoader, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", functionLoader);
}