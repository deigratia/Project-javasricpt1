function divide(nilai1,nilai2){
    result_divide = nilai1 / nilai2;
    return result_divide;
}

function add(nilai1,nilai2){
  result_add = nilai1 + nilai2;
  return result_add;
}

function fungsi(nilai1,nilai2){
  result_fungsi = add(nilai1,nilai2) * divide(nilai1,nilai2);
    return result_fungsi;
}

var nilai1 = 20;
var nilai2 = 5;
var result_divide = divide(nilai1, nilai2);
var result_add = add(nilai1,nilai2);
var result_fungsi = fungsi(nilai1,nilai2);

console.log(result_fungsi);
