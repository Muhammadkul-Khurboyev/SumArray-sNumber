var numbers = [-5, -6, 8, 9.2, 12, 12.78, -20];
var sum = 0;
function sumNumbers(arrNumbers){
  for (var number of arrNumbers) {
    sum += Math.abs(Math.round(number));
  }
  return console.log(sum);
}

sumNumbers(numbers);