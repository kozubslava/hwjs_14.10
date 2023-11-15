

const value1 = 5;
const value2 = 4;

const lessValue = function(a,b){


  if(a<b){
    return a;
  }
  return b
}
console.log("lessValue ", lessValue(value1,value2));




const age = 5
const validAge = function(value){
if (value >= 18) {
  return ("Welcom your age is: " + value + " years")
}
  return ("Reject your age is: " + value + " years")
}

console.log(validAge(age));


const calc = function (a,b, symbol) {
  if (typeof a !== "number" || typeof b !== "number" || a===0 || b===0  ) {
    return "error"
  } 
  if (symbol === "+") {
    return (a + b);
  } else if (symbol === "-") {
    return (a - b);
  } else if (symbol === "*") {
    return (a * b);
  } else if (symbol === "/") {
    return (a / b);
  } else {
    return "unknown symbol"
  }
}
console.log(calc(3,2,"+"));
console.log(calc(3,2,"-"));
console.log(calc(3,2,"*"));
console.log(calc(3,2,"&"));
console.log(calc(3,"t","/"));
console.log(calc(3,0,"/"));






















