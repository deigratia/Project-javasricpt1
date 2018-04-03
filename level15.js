function divide(a,b){
    result_divide = a / b;
    return result_divide;
}

function add(a,b){
  result_add = a + b;
  return result_add;
}

function substract(a,b){
  result_substract = a - b;
  return result_substract;
}

function multiply(a,b){
  result_multiply = a * b;
  return result_multiply;
}

function modulo(a,b){
  result_modulo = a % b;
  return result_modulo;
}

var nilai1 = 20;
var nilai2 = 5;
var result_divide = divide(nilai1, nilai2);
var result_add = add(nilai1,nilai2);
var result_substract = substract(nilai1,nilai2);
var result_multiply = multiply(nilai1,nilai2);
var result_modulo = modulo(nilai1,nilai2);

console.log(result_divide, result_add, result_substract, result_multiply, result_modulo);
