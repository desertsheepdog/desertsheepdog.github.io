/*Final Project JavaScript*/
"use strict"

function pageLoad(){
	$("ul.menu li").children("ul").hide();
}

function displayMenu(event) {
	$(event.currentTarget).children("ul").stop();
	$(event.currentTarget).css("background-color", "rgb(74, 72, 75)");
	$(event.currentTarget).children("ul").css("box-shadow", "rgb(10, 10, 20) 5px 5px 2px");
	$(event.currentTarget).children("ul").slideDown("fast");
}

function removeMenu(event) {
		$(event.currentTarget).children("ul").slideUp("fast", function(){
			$(event.currentTarget).children("ul").css("box-shadow", "none");
			$(event.currentTarget).css("background-color", "rgb(36, 37, 43)");
	});
	
}
	
$("ul.menu li").hover(displayMenu,removeMenu);

if (window.addEventListener) {
	window.addEventListener("load", pageLoad, false); 
} else if (window.attachEvent)  {
	window.attachEvent("onload", pageLoad);
}