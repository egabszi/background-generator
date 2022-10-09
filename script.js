var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button")


var random1 = randomColorNumForInput()
var random2 = randomColorNumForInput()

body.style.background = 
	"linear-gradient(to right, rgb("
	+ random1[0] + "," + random1[1] + "," + random1[2] + "), "
	+ "rgb(" + random2[0] + "," + random2[1] + "," + random2[2] + ")"

color1.value = ConvertRGBtoHex(random1[0], random1[1], random1[2])
color2.value = ConvertRGBtoHex(random2[0], random2[1], random2[2])
css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function randomColorNumForInput() {
  var randomNum1 = Math.ceil(Math.random()*255);
  var randomNum2 = Math.ceil(Math.random()*255);
  var randomNum3 = Math.ceil(Math.random()*255);
  var randomColorIs = [
    randomNum1,
    randomNum2,
    randomNum3
    ]
  return randomColorIs
}

function randomColor() {
	var colorNum1 = randomColorNumForInput()
	var colorNum2 = randomColorNumForInput()
	body.style.background =
	"linear-gradient(to right, rgb("
	+ colorNum1[0] + "," + colorNum1[1] + "," + colorNum1[2] + "), "
	+ "rgb(" + colorNum2[0] + "," + colorNum2[1] + "," + colorNum2[2] + ")"
	css.textContent = body.style.background + ";";
	color1.value = ConvertRGBtoHex(colorNum1[0], colorNum1[1], colorNum1[2])
	color2.value = ConvertRGBtoHex(colorNum2[0], colorNum2[1], colorNum2[2])
}

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

btn.addEventListener("click", randomColor)

function Vicike() {
	alert("Szia Vicike")
}



