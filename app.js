//function sumDigits(number) {
        //number = Math.abs(number);
        //number = Math.trunc(number); // gets rid of the fractional part
    //do {

    //} while

//console.log(sumDigits(123));
//=====================================================================================

let strNum1 = "123";
let strNum2 = '9';
console.log(strNum1 + strNum2); //=> 1239
console.log(strNum1 - strNum2); //=> 114
console.log(strNum1 > strNum2); //=> false
//conversion from string to number 
let num1 = +strNum1;
let num2 = +strNum2;
console.log(num1 + num2); //=> 132
console.log(num1 - num2); //=> 114
console.log(num1 > num2); //=> true
let strNumstr = "123ab";
let numStr = +strNumstr;
//conversion from Morse code to number
// symbol "." > 0
// symbol "-" > 1 
function fromMorseToNumber(morseCode) {
    let result = 0;
    for (let i = 0; i < morseCode.length; i++) {
    let code = morseCode[i] == "." ? 0 : 1;
    result = result * 2 + code;
    }
    return result;
}
console.log(fromMorseToNumber("-.-."));


function fromNumberToMorse(number) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % 2;
        let symbol = digit == 0 ? "." : "-";
        res = symbol + res;
        number = Math.trunc(number / 2);
        
    } while ( number != 0);
    return res;
}
console.log(fromNumberToMorse(10));



//HW 
function fromNumberToString(number, base) {
    //TODO
}
//getting code from symbol
console.log("abc".charCodeAt(2))

//getting symbol from code
console.log(String.fromCharCode(99))
