const number1 = Number(prompt('How many dice'));
const number2 = Number(prompt('Type your number'));

let amount = 0;

for(let i = 0; i < 10000; i++){
  let number = 0;
  for(let j = 0; j < number1; j++){
    number += Math.floor(Math.random() * 6) + 1;
  }  
  if(number == number2){
    amount++;
  }
}

document.getElementById("target").innerHTML = Number((amount/10000) * 100.0) + '%';
