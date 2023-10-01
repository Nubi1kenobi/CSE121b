/* LESSON 3 - Programming Tasks */

/* FUNCTIONS - Function Declaration*/
function add(number1, number2) {
    return number1 + number2 ;
};

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value) ;
    let addNumber2 = Number(document.querySelector('#add2').value) ;
    document.querySelector('#sum').value = add(addNumber1, addNumber2) ;
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers) ;

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2 ;
};

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value) ;
    let subtractNumber2 = Number(document.querySelector('#subtract2').value) ;
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2) ;
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers) ;

/* Arrow Function - Multiply Numbers */

/* just working it out first as normal
function multiply(number1, number2) {
    return number1 * number2 ;
}; */

const multiply = (number1, number2) => number1 * number2 ;

//it feels odd using braces here and having multiple line on the arrow function

let multiplyNumbers = () => { 
    let multiplyNumber1 = Number(document.querySelector('#factor1').value) ;
    let multiplyNumber2 = Number(document.querySelector('#factor2').value) ;
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2) ;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers) ;



/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2 ;

let divideNumbers = () => { 
    let divideNumber1 = Number(document.querySelector('#dividend').value) ;
    let divideNumber2 = Number(document.querySelector('#divisor').value) ;
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers) ;

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear ;

/* ARRAY METHODS - Functional Programming */





/* Output Source Array */
let dumbNumberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let solution1 = dumbNumberArray;
document.querySelector('#array').innerHTML = solution1;

/* Output Odds Only Array */
let solution2 = dumbNumberArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = solution2;

/* Output Evens Only Array */
let solution3 = dumbNumberArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = solution3;

/* Output Sum of Org. Array */
let solution4 = dumbNumberArray.reduce((sum, num) => sum + num);
document.querySelector('#sumOfArray').innerHTML = solution4;

/* Output Multiplied by 2 Array */
let solution5 = dumbNumberArray.map(num => num * 2);
document.querySelector('#multiplied').innerHTML = solution5;

/* Output Sum of Multiplied by 2 Array */
let solution6 = dumbNumberArray.map(num => num * 2).reduce((sum, num) => sum + num);
document.querySelector('#sumOfMultiplied').innerHTML = solution6;

