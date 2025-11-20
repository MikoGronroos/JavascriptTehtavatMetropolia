let numbers = [];
numbers.push(Number(prompt('First number')));
numbers.push(Number(prompt('Second number')));
numbers.push(Number(prompt('Third number')));
numbers.push(Number(prompt('Fourth number')));
numbers.push(Number(prompt('Fifth number')));

for(let i = numbers.length - 1; i >= 0; i--){

  console.log(numbers[i]);

}
