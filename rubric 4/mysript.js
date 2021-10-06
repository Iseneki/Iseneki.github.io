function load() {
    alert("Hello, thank you for visiting.");
}
function exit() {
    alert("Please don't leave...");
}

var numberofbuttons = document.getElementsByTagName("button");
console.log("Number of button tags: " + numberofbuttons.length);

var button = document.getElementsByTagName("button");

button.onmouseover = function() {hover()};

function hover() {
button[0].style.backgroundColor = "gray";
button[1].style.backgroundColor = "gray";
button[2].style.backgroundColor = "gray";
button[3].style.backgroundColor = "gray";
}

button.onmouseout = function() {out()};

function out() {
button[0].style.backgroundColor = "white";
button[1].style.backgroundColor = "white";
button[2].style.backgroundColor = "white";
button[3].style.backgroundColor = "white";
}

document.getElementById("clickme")

function clickme() {
    alert("I am a button disguised as a p tag")
}