function popup() {
    alert("I am annoying.");
  }

function display() {
    alert("Hello World!");
 }

var x=5;
var y=6;
var z = x + y;
document.getElementById("variable").innerHTML =
z;


const hour = new Date().getHours(); 
let greeting;

if (hour < 12.00) {
    greeting = "Good morning. It is currently:";
 } else {
    greeting = "Good afternoon. It is currently:"
}

document.getElementById("if").innerHTML = greeting;

const d= new Date();
document.getElementById("time").innerHTML = d;

function info() {

let text;
let name = prompt("Enter your name:", "Your Name");
let age = prompt("Enter your age", "Your Age");
if (name == null || name == "" && age == null || age < 21) 
{
    text = "Sorry, we cannot sell alcohol to people under the age of 21 Open the console for a message.";
    console.log("Sorry, it is illegal")
} 
else {
    text = "Hello " + name + ". Lets get drinking! Open the console for a message";
    console.log("Hi " + name );
}

document.getElementById("start").innerHTML = text;

}    