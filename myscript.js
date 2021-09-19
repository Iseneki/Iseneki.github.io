var myDemo = document.getElementById("headline") ;

myDemo.setAttribute("style", "color: blue") ;

function headline() {
    var header = document.createTextNode("Please don't touch me!") ;
    document.getElementById("heading").appendChild(header);
}

var mydemotags = document.getElementsByTagName("p") ;
console.log("Number of p tags: "+ mydemotags.length) ;

var mydemotags2 = document.getElementsByTagName("button") ;
console.log("Number of button tags: "+ mydemotags2.length) ;

function info() {

let text;
let name = prompt("Enter your name") ;
if (name == "")
{
    text = "Uhm... okay, lazy bum." ; 
    console.log("Enter your name!")
}
else{
    text = "Good day, " + name ;
    console.log(name);
}
document.getElementById("buttoninfo").innerHTML = text;
}

function morebuttons() {
    var btn = document.createElement("button");
    document.getElementById("buttons1").appendChild(btn);
}

function buttonbutton() {
    var btn = document.createElement("button");
    btn.innerHTML = "I don't do anything if you click on me.";
    document.getElementById("buttons2").appendChild(btn);
}

function textnodes() {
    var t = document.createTextNode("If you keep clicking on me I will fill up the whole page! ");
    document.getElementById("buttons3").appendChild(t);
  }

