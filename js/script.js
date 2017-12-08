/*Final Project JavaScript*/
"use strict"

/* Global Variables */
var tutorial = document.getElementById("description");

/* Following functions initially hide submenus, and show with slidedown/slideup animations for each target submenu on hover */
function pageLoad(){
	$("ul.menu li").children("ul").hide();
	$("#test").hide();
	$("#example").hide();
	exampleReset();
}

/* hides code blocks and clears test divs*/
function exampleReset() {
	$("#arrayEx").hide();
	$("#forEx").hide();
	$("#whileEx").hide();
	$("#doEx").hide();
	$("#block1").html("");
	$("#block2").html("");
	$("#block3").html("");
	$("#block4").html("");
}

function displayMenu(event) {
	$(event.currentTarget).children("ul").stop();
	$(event.currentTarget).children("ul").css("box-shadow", "rgb(10, 10, 20) 5px 5px 2px");
	$(event.currentTarget).children("ul").slideDown("fast");
}

function removeMenu(event) {
		$(event.currentTarget).children("ul").slideUp("fast", function(){
			$(event.currentTarget).children("ul").css("box-shadow", "none");
	});
	
}

$("ul.menu li").hover(displayMenu,removeMenu);

/*For single page navigation, when each submenu item is clicked corresponding  text block variables are populated into their respective locations*/
function displayTutorial(event){
	if(event.currentTarget.parentNode.id === "tutorials"){
		if(event.currentTarget.innerHTML === "Arrays") {
			exampleReset();
			$("#test script:last").remove();
			$("#syntaxExample").hide();
			$("article h2").text("Arrays");
			$("#description").children("p").html(arraysTutorial);
			$("#description").css("width", "60%");
			$("#example").children("p").html(arraysExample);
			$("#example").show();
			$("#preEx").html(arraysPre);
			$("#arrayEx").show();
			$("#test").append(arraysScript);
			$("#test").show();
		}else if(event.currentTarget.innerHTML === "For Loops"){
			exampleReset();
			$("#test script:last").remove();
			$("#syntaxExample").hide();
			$("article h2").text("For Loops");
			$("#description").children("p").html(forLoopTutorial);
			$("#description").css("width", "60%");
			$("#example").children("p").html(forLoopExample);
			$("#example").show();
			$("#preEx").html(forLoopPre);
			$("#forEx").show();
			$("#test").append(forLoopScript);
			$("#test").show();
		}else if(event.currentTarget.innerHTML === "While Loops"){
			exampleReset();
			$("#test script:last").remove();
			$("#syntaxExample").hide();
			$("article h2").text("While Loops");
			$("#description").children("p").html(whileLoopTutorial);
			$("#description").css("width", "60%");
			$("#example").children("p").html(whileLoopExample);
			$("#example").show();
			$("#preEx").html(whileLoopPre);
			$("#whileEx").show();
			$("#test").append(whileLoopScript);
			$("#test").show();
		}else if(event.currentTarget.innerHTML === "Do While Loops"){
			exampleReset();
			$("#test script:last").remove();
			$("#syntaxExample").hide();
			$("article h2").text("Do While Loops");
			$("#description").children("p").html(doWhileLoopTutorial);
			$("#description").css("width", "60%");
			$("#example").children("p").html(doWhileLoopExample);
			$("#example").show();
			$("#preEx").html(doWhileLoopPre);
			$("#doEx").show();
			$("#test").append(doWhileLoopScript);
			$("#test").show();
		}
	}else if(event.currentTarget.parentNode.id === "snippets"){
		if(event.currentTarget.innerHTML === "Arrays") {
			exampleReset();
			$("#test").hide();
			$("#example").hide();
			$("#syntaxExample").hide();
			$("article h2").text("Array Code Snippets");
			$("#description").children("p").html(arrayCodeSnippets);
		}else if(event.currentTarget.innerHTML === "Loops"){
			exampleReset();
			$("#test").hide();
			$("#example").hide();
			$("#syntaxExample").hide();
			$("article h2").text("Looping Code Snippets");
			$("#description").children("p").html(loopCodeSnippets);
		}
	}else if(event.currentTarget.parentNode.id === "resources"){
		if(event.currentTarget.innerHTML === "jQuery") {
			window.open("https://jquery.com/").focus();
		}else if(event.currentTarget.innerHTML === "Modernizr"){
			window.open("https://modernizr.com/").focus();
		}else if(event.currentTarget.innerHTML === "plainJS") {
			window.open("https://plainjs.com/").focus();
		}else if(event.currentTarget.innerHTML === "GitHub"){
			window.open("https://github.com/").focus();
		}
	}
}

$("ul.submenu li").click(displayTutorial);

/* Text Blocks */
var arraysTutorial = "Arrays in javascript are similar to Arrays in other programming languages the main difference being that in javascript multiple data types may be stored within an Array. They are useful for organizing multiple variables by condensing into a  single variable.<br><br>Array syntax looks like this:<br><br>var <b>variableName</b> = [<b>arrayLength</b>];<br><br>Where <b>variableName</b> is the variable name you choose and <b>arrayLength</b> is the number of items to be stored within the Array. Instantiating the Array like this will predetermine the length of the array. You can declare the Array similar to a regular variable to be defined later in the script.<br><br>Another useful way to instantiate an Array is to include the Array data in the declaration.<br>The syntax would be similar to this:<br>var <b>variableName</b> = [<b>item1, item2, item3, item4,...</b>];<br>Where <b>variableName</b> is the variable name you choose and each <b>Item</b> is the data to be stored within the array.<br><br>To call Array data you use the syntax variableName[<b>value</b>], <b>value</b> being the identifier corresponding to the location where the data you stored is. Array data identifiers always start with 0, using the example above, variableName[0] would be item1, variableName[1] would be item2, and so on.<br><br>This becomes particularly useful when combining with for loops. With each passing iteration of the for loop each item within the Array can be accessed by using variableName[<b>i</b>], with <b>i</b> being the instantiated counter in the for loop.(<i>for loops are described in another tutorial</i>)"

var arraysExample = "<b>Declare an Array with the name data and define with a length of 4.</b><br>var data = [4];<br><br><b>To store data into each Array location you can use this:</b><br>data[0] = item1;<br>data[1] = item2;<br>data[2] = item3;<br>data[3] = item4;<br>// <i>Even though the data Array is a length of 4 you always start with 4 the end of an Array is always -1 of the total length.</i><br><br><b>An alternate way to instantiate an array is this:</b><br>var data = [item1, item2, item3, item4];"

var arraysPre = "This section of code will create a variable named <b>metalBands</b> and by adding <b>= [ ]</b> makes it an Array, which will have a preset length of <b>4</b>.<br>Since Arrays beginning data set starts at 0 the first item we will store will be in <b>metalBands[0]</b> this will also be used when retreiving the data from that specific location."

var arraysScript = "<script>function displayEx(){var metalBands = [];metalBands[0] = 'In Flames';metalBands[1] = 'Trivium';metalBands[2] = 'Amon Amarth';metalBands[3] = 'Children of Bodom';document.getElementById('block1').innerHTML = metalBands[0];document.getElementById('block2').innerHTML = metalBands[1];document.getElementById('block3').innerHTML = metalBands[2];document.getElementById('block4').innerHTML = metalBands[3];}</script>"

var forLoopTutorial = "The For Loop is probably the most useful loop you can use. This allows for multiple iterations of code to loop for a specified number of times.<br><br>Here is an example of For Loop syntax:<br><br><b>for</b>(<b>var i = 0</b>; <b>i < 5</b>; <b>i++</b>){<br>   <b>do something</b>;<br>}<br><br>The For Loop parameters begin with a variable declaration which is <b>var i</b> and is instantiated to 0 which is typical but can be any integer. The next section after the <q><b>;</b></q> is the condition the loop will continue to iterate, the above example has variable <b>i < 5</b> which mean that the loop will repeat until <b>i</b> is greater than or equal to <b>5</b>. The value of <b>5</b> can be any integer or this can have a variable in it's place so the loop repitition can be defined at an earlier part of the code. Following the next <q><b>;</b></q> is the incrementer <b>i++</b> which increases the value of <b>i</b> by 1, you can also use the decrementer <b>i--</b>. Within the curly braces where <b>do something;</b> is, is the code you want to loop. This is also a good place to use arrays, you can insert an array with <b>[i]</b>. So everytim the loop iterates it will pull each set of data from the array. You can either set other objects with the information contained in the Array or <q>construct</q> the Array with data.";

var forLoopExample = "<b>This loop will repeat 5 times when i becomes 0 it exits the loop</b><br><br>for(var i = 5; i > 0; i--){<br>   console.log(i);<br>}<br><br><b>The output to the console would look like this:</b><br><br>5<br>4<br>3<br>2<br>1<br>// <i>The <b>i--</b> decreases the variable <b>i</b> by 1 with each iteration of the loop.<i/>";

var forLoopPre = "For Loop with the Array from the Arrays tutorial.<br>Here we have the variable <b>i</b> set to 0 and the looping condition set to stop when <b>i</b> becomes greater then the total length of the array represented as <b>metalBands.length</b>.<br>Inside the For Loop we use the same DOM selector statement with <b><q>block</q> + (i + 1)</b>. since block is the root word for each div id we place it inside quotations and add <b>i</b>, but since the div ids start at 1 we add <b>+ 1</b> to conpensate for starting at 0.<br>Even though iterating 4 lines of code to do the same thing as this For Loop, it's extremely easy to add on, and when working with large numbers of iteration for loops can help reduce the size of overall code.";

var forLoopScript = "<script>function displayEx(){var metalBands = ['In Flames', 'Trivium', 'Amon Amarth', 'Children of Bodom'];for(var i = 0; i < metalBands.length; i++){document.getElementById('block' + (i + 1)).innerHTML = metalBands[i];}}</script>"

var whileLoopTutorial = "The While Loop is a simpler concept that it only uses one condition and loops until that condition become false.<br>The syntax for the While loop looks like this:<br><br>while (<b>condition</b>){<br>   <b>loop this until condition is true;</b><br>}<br><br>The conditional statment might look like (<b>variable &lt; 10</b>) meaning that the loop will repeat until variable becomes equal to or greater than 10 (<i>which makes the statement true</i>). As with all loops you must becareful with your conditional statement. Looking at the previous condition, if you don't increment the variable in some way this could loop an infinite number of times, stopping your code completely.";

var whileLoopExample = "<b>Say we already have an array with a length of 100 and we want to default them all to 0.<br>We can use the following:</b><br><br>var count = 0;<br>while(count &lt; array.length){<br>array[count] = 0;<br>count++;<br>}<br><br><b>This While Loops condition is loop until variable count becomes equal or greater to the length of the array. This loop will repeat through all 100 of the array storage locations and initialize them all to 0. Don't forget the incrementer which is count++, in this example, or the loop can repeat infinitely.</b>";

var whileLoopPre = "This While Loop utilizes the same <b>metalBands</b> Array and creates a variable <b>i</b> and set to 0. the condition is that the loop will repeat as long as <b>i</b> is less than the total length of the array. Before the closing bracket <b>i++</b> is added to increment the counter variable and prevent an infinite loop.";

var whileLoopScript = "<script>function displayEx(){var metalBands = ['In Flames', 'Trivium', 'Amon Amarth', 'Children of Bodom'];var i = 0;while(i < metalBands.length){document.getElementById('block' + (i + 1)).innerHTML = metalBands[i];i++;}}</script>";

var doWhileLoopTutorial = "The Do While Loop is similar to the While Loop but has the code body before <b>while</b> and includesthe <b>do</b> header.<br>The syntax looks like this:<br><br>do{<br><b>looping statement;</b><br>}while (<b>condition</b>);<br><br>Inside the brackets is the code you want to repeat as long as the condition remains true. Where this differs from the While Loop is that the <b>looping statement</b> will iterate at least once even if the condition is false to begin with.";

var doWhileLoopExample = "<b>This example will shoiw how a while loop works when the condition is already false.</b><br><br>var count = 10;<br>do{<br>console.log(<q>Hello World!</q>);<br>count++;<br>}while (count &lt; 10);<br><br><b>The condition here is repeat as long as count is less than 10, which in this case is false because count is already equal to 10. So instead of just doing nothing the loop will iterate once by logging <q>Hello World!</q> into the console.</b>";

var doWhileLoopPre = "This looks almost the same as our While Loop, except the order has changed and the inclusion of the <b>do</b> header at the beginning. Whether the statement was true or false the the first iteration would take place and the <b><q>block1</q></b> div will always display <b><q>In Flames</q></b>.";

var doWhileLoopScript = "<script>function displayEx(){var metalBands = ['In Flames', 'Trivium', 'Amon Amarth', 'Children of Bodom'];var i = 0;do{document.getElementById('block' + (i + 1)).innerHTML = metalBands[i];i++;}while(i < metalBands.length);}</script>";

var arrayCodeSnippets = "<b>Creating an Array with data:</b><br><br>arrayName = [data1, data2, data3, data4,...];<br><br><b>Setting data in an array, or adding to an Array in an unused location:</b><br><br>arrayName[location] = value;<br><i>//location must be an integer.</i><br><br><b>Setting a variable to the data in an Array:</b><br><br>variableName = arrayName[location];<br><i>//location must be an integer.</i>";

var loopCodeSnippets = "<b>Typical For Loop syntax counting up:</b><br><br>for(var i = 0; i < value; i++){<br>looping statement;<br>}<br><i>//value can be anything you want, in this case setting this would tell the loop how many times to repeat.</i><br><br><b>Typical For Loop syntax counting down:</b><br><br>for(var i = value; i > 0; i--){<br>looping statement;<br>}<br><i>//<q>value</q> would be a value that you want the count to start at, so that as ling as i is greater than 0 the loop will repeat.</i><br><br><b>While loop:</b><br><br>while(condition){<br>looping statement;<br>}<br><br><b>Do While Loop:</b><br><br>do{<br>looping statement;<br>}while (condition);";

if (window.addEventListener) {
	window.addEventListener("load", pageLoad, false); 
} else if (window.attachEvent)  {
	window.attachEvent("onload", pageLoad);
}
