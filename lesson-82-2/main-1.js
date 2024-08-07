const numbers = [43, 9, 10, 3, 82, 4];

function checkNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
}

checkNumbers(numbers);


