const number1 = prompt('Type number 1.');
const number2 = prompt('Type number 2.');
const number3 = prompt('Type number 3.');

const numbe4 = Number(number1) + Number(number2) + Number(number3); 
const numbe5 = Number(number1) * Number(number2) * Number(number3); 
const numbe6 = (Number(number1) + Number(number2) + Number(number3)) / 3; 

document.getElementById("target").innerHTML = numbe4 + ', ' + numbe5 + ', ' + numbe6
