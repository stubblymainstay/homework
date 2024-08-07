const action = [`plus`, `minus`, `multiply`, `divide`]; 

function calc(number1, number2, action) {
  if (action === `plus`) {
  return number1+number2;
  } else if (action === `minus`) {
  return number1-number2;
  } else if (action === `multiply`) {
  return number1*number2;
  } else if (action === `divide`) { 
  return number1/number2;
  } 

  return "Отсутсвует нужное дейсвтие"; 
}

const result = calc(6, 3, 'plus');
console.log(result); 

















