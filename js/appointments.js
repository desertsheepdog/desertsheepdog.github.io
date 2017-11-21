/*
	CIS166AA: Shop JavaScript
	Author: David Goodyke
	Date: 11/15/2017
*/

"use strict"
			
//Global variables
var calendarOpen = false;
var calendar;
var calendarInput;
var elapsedTime;
var apptValidity = true;
var pastValidity = true;
var dateObject = new Date();
var appointment = {
	date: "",
	client: {
		firstName: "",
		lastName: "",
	}
};

//builds and displays calendar when selected this calendar is either used for elapsed time or appointments depending on which field was first initiated
function displayCalendar(whichMonth) {
	var date;
	var dateToday = new Date();
	var daysOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	var monthArray = ["January","February","March","April","May","June","July",
								"August","September","October","November","December"];
	if (whichMonth === -1) {
		dateObject.setMonth(dateObject.getMonth() - 1);
	} else if (whichMonth === 1) {
		dateObject.setMonth(dateObject.getMonth() + 1);
	}
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	daysOfWeek = dateObject.getDay();
	captionValue = monthArray[month] + " " + year;
	document.querySelector("#calendar table caption").innerHTML = captionValue;
	if (month === 0 || month === 2 || month === 4 || month === 6 ||
		month === 7 || month === 9 || month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
		daysInMonth = 31;
	} else if (month === 1) { // Feb
		if (year % 4 === 0) {// leap year test
			if (year % 100 === 0) {
				// year ending in 00 not a leap year unless
				// divisible by 400
				if (year % 400 === 0) {
					daysInMarch = 29;
				} else {
					daysInMarch = 28;
				}
			} else {
				daysInMonth = 29;
			}
		} else {
			daysInMonth = 28;
		}
	} else { // Apr, Jun, Sep, Nov
		daysInMonth = 30;
	}
	dateCells = document.getElementsByTagName("td");
	for (var i = 0; i < dateCells.length; i++) {
		//clear existing table dates
		dateCells[i].innerHTML = "";
		dateCells[i].className = "";
	}
	if(calendar == 1) {
	for (var i = daysOfWeek; i < daysInMonth + daysOfWeek; i++) {
		//add dates to days cells
		dateCells[i].innerHTML = dateObject.getDate();
		dateCells[i].className = "date";
		if (dateToday > dateObject) {
			dateCells[i].className = "pastdate";
		}
		date = dateObject.getDate() + 1;
		dateObject.setDate(date);
	}
	} else if (calendar == 2) {
		for (var i = daysOfWeek; i < daysInMonth + daysOfWeek; i++) {
			//add dates to days cells
			dateCells[i].innerHTML = dateObject.getDate();
			dateCells[i].className = "date";
			if (dateToday < dateObject) {
				dateCells[i].className = "futuredate";
			}
			date = dateObject.getDate() + 1;
			dateObject.setDate(date);
		}
	}
	dateObject.setMonth(dateObject.getMonth() - 1);
	//reset month to month shown
	document.getElementById("calendar").style.display = "block";
	//display calendar if it's not already visible
}

// funnels choice to and directs to appropriate calendar settings
function selectCalendar() {
	if(calendar == 1) {
		calendarInput = "pastDate";
		displayCalendar();
	} else if (calendar == 2) {
		calendarInput = "apptDate";
		displayCalendar();
	}
}
// if elapsed time counter is chosen
function pastCalendar() {
	if(!calendarOpen) {
		calendarOpen = true;
		calendar = 1;
		selectCalendar();
	}
}

// if appointment calendar is chosen
function apptCalendar() {
	if(!calendarOpen) {
		calendarOpen = true;
		calendar = 2;
		selectCalendar();
	}
}

// when dates are selected from the popup calendar they are stored in their corresponding input fields
function selectDate(event) {
	if (event === undefined) { // get caller element in IE8
		event = window.event;
	}
	var callerElement = event.target || event.srcElement;
	if (callerElement.innerHTML === "") {
		// cell contains no date, so don't close the calendar
		document.getElementById("calendar").style.display = "block";
		return false;
	}
	dateObject.setDate(callerElement.innerHTML);
	var fullDateToday = new Date();
	var dateToday = Date.UTC(fullDateToday.getFullYear(), fullDateToday.getMonth(), fullDateToday.getDate());
	var selectedDate = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());
	if (calendar == 1) {
		if (selectedDate >= dateToday) {
			document.getElementById("calendar").style.display = "block";
			return false;
		}
	} else if (calendar == 2) {
		if (selectedDate <= dateToday) {
			document.getElementById("calendar").style.display = "block";
			return false;
		}
	}
		document.getElementById(calendarInput).value = dateObject.toLocaleDateString();
		hideCalendar();
}

function hideCalendar() {
	document.getElementById("calendar").style.display = "none";
	calendarOpen = false;
}

function prevMo() {
	displayCalendar(-1);
}

function nextMo() {
	displayCalendar(1);
}

function updateCounter() {
	var dateToday = new Date();
	var dateInput = document.getElementById("pastDate").value;
	var dateFrom = new Date(dateInput);
	var dateTo = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
	if ((dateTo - dateFrom) < 86400000) { // clears when less than 1 day or 86400000 milliseconds
		document.getElementById("elapsedResults").style.display = "none";
	}
	//baseline for calculating days months and years
	var baseline = Math.ceil((dateTo - dateFrom) / 86400000);
	console.log("baseline = " + baseline + " days");
	//years
	var yearsFrom = Math.floor(baseline / 365.25);
	console.log("years from = " + yearsFrom + " years");
	var yearRemain = Math.floor(baseline % 365.25);
	console.log("year remainder =  " + yearRemain + " days");
	//months
	var monthsFrom = Math.floor(yearRemain / 30.44)
	console.log("months from = " + monthsFrom + " months");
	//days
	if(yearsFrom == 0 && monthsFrom == 0) {
		var daysFrom = yearRemain - monthsFrom;
	} else {
		var monthRemain = (yearRemain / 30.44) % monthsFrom;
		console.log("months remainder = " + monthRemain + " days")
		var daysFrom = Math.floor(monthRemain * 30.44);
	}
	console.log("days from =  " + daysFrom + " days");
	document.getElementById("elapsedResults").innerHTML = yearsFrom + " year(s) ";
	document.getElementById("elapsedResults").innerHTML += monthsFrom + " month(s) ";
	document.getElementById("elapsedResults").innerHTML += daysFrom + " day(s) ";
	document.getElementById("elapsedResults").style.color = "black";
	document.getElementById("elapsedResults").style.display = "block";
}

function updateCountdown() {
	var dateToday = new Date();
	var dateFrom = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
	var dateTo = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()); // all launches at 8:00pm UTC
	if ((dateTo - dateFrom) < 86400000) { // clears when less than 1 day or 86400000 milliseconds
		document.getElementById("apptResults").style.display = "none";
	}
	document.getElementById("apptResults").style.display = "block";
	//baseline for calculating days months and years
	var baseline = Math.ceil((dateTo - dateFrom) / 86400000);
	console.log("baseline = " + baseline + " days");
	//years
	var yearsFrom = Math.floor(baseline / 365.25);
	console.log("years from = " + yearsFrom + " years");
	var yearRemain = Math.floor(baseline % 365.25);
	console.log("year remainder =  " + yearRemain + " days");
	//months
	var monthsFrom = Math.floor(yearRemain / 30.44)
	console.log("months from = " + monthsFrom + " months");
	//days
	if(yearsFrom == 0 && monthsFrom == 0) {
		var daysFrom = yearRemain - monthsFrom;
	} else {
		var monthRemain = (yearRemain / 30.44) % monthsFrom;
		console.log("months remainder = " + monthRemain + " days")
		var daysFrom = Math.floor(monthRemain * 30.44);
	}
	console.log("days from =  " + daysFrom + " days");
	document.getElementById("apptCount").innerHTML = "Countdown: " + yearsFrom + " year(s) ";
	document.getElementById("apptCount").innerHTML += monthsFrom + " month(s) ";
	document.getElementById("apptCount").innerHTML += daysFrom + " day(s) ";
	}

//form validation
function validateApptForm() {
	var inputElements = document.querySelectorAll("#apptForm input");
	var fieldsetValidity = true;
	var elementCount = inputElements.length;
	var currentElement;
	try {
		//checks for input values a field is blank this sets fieldsetValidity to false and highlights input fields with a red background
		for (var i = 0; i < elementCount; i++) {
			currentElement = inputElements[i];
			if (currentElement.value ==="") {
				currentElement.style.background = "rgb(255, 225, 225)";
				fieldsetValidity = false;
			} else {
				currentElement.style.background = "rgb(125, 125, 125)";
			}
		}
		if (!fieldsetValidity) {
			throw "Please complete all fields"
		} else if (!firstNameValidity) {
			throw "Please correct first name"
		} else if (!lastNameValidity) {
			throw "Please correct last name"
		} else if (!apptDateValidity) {
			throw "Please correct appointment date"
		} else {
		apptText.style.color = "black";
		apptText.innerHTML = "";
		apptText.style.display = "none";
		addName();
		}
	}
	catch(msg) {
		apptText.style.color = "red";
		apptText.style.display = "block";
		apptText.innerHTML = msg;
	}
}
 // values from appointment form input fields are stored into the appointment object 
function addName() {
	var date = new Date();
	appointment.client.firstName = document.getElementById("firstName").value;
	appointment.client.lastName = document.getElementById("lastName").value;
	appointment.date = document.getElementById("apptDate").value;
	document.getElementById("apptName").innerHTML = "Name: " + appointment.client.firstName + " " + appointment.client.lastName;
	document.getElementById("apptBookedFor").innerHTML = "Appointment date: " + appointment.date;
	document.getElementById("apptBookedOn").innerHTML = "Booked on: " + date.toString();
	updateCountdown();
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("apptDate").value = "";
}

/**************************************************************************/
/*******************************Chapter09***********************************/
/**************************************************************************/

var firstNameValidity = true;
var lastNameValidity = true;
var apptDateValidity = true;

function validateFirstName() {
	var input = document.getElementById("firstName");
	var warning = document.getElementById("apptText");
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
		firstNameValidity = true;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.color = "red";
		warning.innerHTML = msg;
		firstNameValidity = false;
	}
}

function validateLastName() {
	var input = document.getElementById("lastName");
	var warning = document.getElementById("apptText");
	try{
		//tests if field is blank
		if(input.value === "") {
			throw "Last name is required."
			//tests for the last name for only alphabetical characters
		} else if (/[*.\W\d]/.test(input.value) === true) {
			throw "Last name can only contain alphabetical characters.";
		} 
		//resets input field and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		lastNameValidity = true;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.color = "red";
		warning.innerHTML = msg;
		lastNameValidity = false;
	}
}

function validateApptDate() {
	var input = document.getElementById("apptDate");
	var warning = document.getElementById("apptText");
	var dateFormat = /(0?\d{1}|1[0-2])\/([0-2]?\d{1}|3[0-1])\/(19|20)\d{2}/;
	try{
		//tests if field is blank
		if(input.value === "") {
			throw "Appointment date is required."
			//test for correct date format
		} else if (dateFormat.test(input.value) === false) {
			throw "Date must be valid format, mm/dd/yyyy";
		} 
		//resets input field and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		apptDateValidity = true;
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.color = "red";
		warning.innerHTML = msg;
		apptDateValidity = false;
	}
}

function validatePastDate() {
	var input = document.getElementById("pastDate");
	var warning = document.getElementById("elapsedResults");
	var dateFormat = /(0?\d{1}|1[0-2])\/([0-2]?\d{1}|3[0-1])\/\d{4}/;
	try{
		//tests if field is blank
		if(input.value === "") {
			throw "Appointment date is required."
			//test for correct date format
		} else if (dateFormat.test(input.value) === false) {
			throw "Date must be valid format, mm/dd/yyyy";
		} 
		//resets input field and warning
		input.style.background = "rgb(125, 125, 125)";
		warning.style.display = "none";
		warning.innerHTML = "";
		updateCounter();
	}
	catch(msg) {
		//displays error message and show input field red
		input.style.background = "rgb(255, 200, 200)";
		warning.style.display = "block";
		warning.style.color = "red";
		warning.innerHTML = msg;
	}
}

function createNewEventListeners() {
	var firstNameInput = document.getElementById("firstName");
	var lastNameInput = document.getElementById("lastName");
	var apptDateInput = document.getElementById("apptDate");
	if(firstNameInput.addEventListener) {
		firstNameInput.addEventListener("change", validateFirstName, false);
		lastNameInput.addEventListener("change", validateLastName, false);
		apptDateInput.addEventListener("change", validateApptDate, false);
	} else if(usernameInput.attachEvent) {
		firstNameInput.attachEvent("onchange", validateFirstName);
		lastNameInput.attachEvent("onchange", validateLastName);
		apptDateInput.attachEvent("onchange", validateApptDate);
	}
}

if(window.addEventListener) {
	window.addEventListener("load", createNewEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createNewEventListeners);
}
			
/**************************************************************************/
/*******************************Chapter09***********************************/
/**************************************************************************/

function createEventListeners() {
	var dateField = document.getElementById("calendarButton");
	if (dateField.addEventListener) {
		dateField.addEventListener("click", pastCalendar, false);
	} else if (dateField.attachEvent) {
		dateField.attachEvent("onclick", pastCalendar);
	}
	var dateField = document.getElementById("apptDate");
	if (dateField.addEventListener) {
		dateField.addEventListener("click", apptCalendar, false);
	} else if (dateField.attachEvent) {
		dateField.attachEvent("onclick", apptCalendar);
	}
	var dateCells = document.getElementsByTagName("td");
	if (dateCells[0].addEventListener) {
		for (var i = 0; i < dateCells.length; i++) {
			dateCells[i].addEventListener("click", selectDate, false);
		}
	} else if (dateCells[0].attachEvent) {
		for (var i = 0; i < dateCells.length; i++) {
			dateCells[i].attachEvent("onclick", selectDate);
		}
	}
	var closeButton = document.getElementById("close");
	if (closeButton.addEventListener) {
		closeButton.addEventListener("click", hideCalendar, false);
	} else if (closeButton.attachEvent) {
		closeButton.attachEvent("onclick", hideCalendar);
	}
	var prevLink = document.getElementById("prev");
	var nextLink = document.getElementById("next");
	if (prevLink.addEventListener) {
		prevLink.addEventListener("click", prevMo, false);
		nextLink.addEventListener("click", nextMo, false);
	} else if (prevLink.attachEvent) {
		prevLink.attachEvent("onclick", prevMo);
		nextLink.attachEvent("onclick", nextMo);
	}
	var setDate = document.getElementById("apptButton");
	if (setDate.addEventListener) {
		setDate.addEventListener("click", validateApptForm, false);
	} else if (setDate.attachEvent) {
		setDate.attachEvent("onclick", validateApptForm);
	}
	var setDate = document.getElementById("elapsedButton");
	if (setDate.addEventListener) {
		setDate.addEventListener("click", validatePastDate, false);
	} else if (setDate.attachEvent) {
		setDate.attachEvent("onclick", validatePastDate);
	}
}

if(window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}