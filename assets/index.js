

// 1. Створити функцію, яка буде знаходити найменьше з двох чисел
const value1 = 5;
const value2 = 4;

const lessValue = function(a,b){


  if(a<b){
    return a;
  }
  return b
}
console.log("lessValue ", lessValue(value1,value2));



// 2.Створити функцію, яка буде отимувати вік людини і казати, повнолітня вона, чи ні
const age = 5
const validAge = function(value){
if (value >= 18) {
  return ("Welcom your age is: " + value + " years")
}
  return ("Reject your age is: " + value + " years")
}

console.log(validAge(age));

// 3. Створити функцію - калькулятор, яка буде приймати два числа та оператор (+, -, /, *) і буде повертати результат вказаної операції над числами. Зробити варіант або на if...else або на switch...case

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


// 4. Bonus
const calcBonus = function (a,b, symbol){
  if (typeof a !== "number" || typeof b !== "number" || a===0 || b===0 ){
    return "error"
  }
  switch (symbol) {
    case "+": {
      return (a + b);
    }
    case "-": {
      return (a - b);
    }
    case "*": {
      return (a * b);
    }
    case "/": {
      return (a / b);
    }
    default: return "unknown symbol"
      break;
  }
}
console.log(calcBonus(3,2,"+"));
console.log(calcBonus(3,2,"-"));
console.log(calcBonus(3,2,"*"));
console.log(calcBonus(3,2,"/"));
console.log(calcBonus(3,2,"&"));
console.log(calcBonus(3,"t","/"));
console.log(calcBonus(3,0,"/"));




















