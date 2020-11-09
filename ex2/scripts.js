//turn different statements into arrow functions
// function multiply(num1, num2) {
//     return num1 * num2;
//  }
 
//  function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//  }
 
//  // This function returns a string padded with leading zeros
//  function padZeros(num, totalLen) {
//     var numStr = num.toString();
//     var numZeros = totalLen - numStr.length;
//     for (var i = 1; i <= numZeros; i++) {
//        numStr="0" + numStr; 
//        } 
//     return numStr;
//   } 
 
//  function power(base, exponent) { 
//     var result=1; 
//     for (var i=0; i < exponent; i++) { 
//           result *=base; 
//     } 
//     return result;
//  } 
 
//  function greet(who) {
//      console.log("Hello " + who);
//  }


//statement 1
let multiply = (num1,num2) => {
    return num1 * num2;
}

console.log(multiply(2,6));

//statement 2
let toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

console.log(toCelsius(50));

//statement 3
//This function returns a string padded with leading zeros
let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;

    for (let i= 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

console.log(padZeros(6,10));

//statement 4
let power = (base, exponent) => {
    let result = 1;
    for (let i= 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(5,9));

//statement 5
let greet = (who) => {
    console.log(`Hello ${who}`);
}

greet("Clarissa");