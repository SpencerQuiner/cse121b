/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1+number2;
}
function addNumbers(addnumber1,addnumber2){
    addnumber1 = Number(document.getElementById("add1").value);
    addnumber2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(addnumber1,addnumber2);
}

document.querySelector("#addNumbers").addEventListener("click",addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){return number1-number2};
const subtractNumbers = function(subtract1, subtract2){
    subtract1 = Number(document.getElementById("subtract1").value);
    subtract2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2)=>{return number1*number2};
const multiplyNumbers = (factor1, factor2) =>{
    factor1 =Number(document.getElementById("factor1").value);
    factor2 =Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(factor1,factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2)=>{return number1/number2};
const divideNumbers = (dividend, divisor) =>{
    dividend =Number(document.getElementById("dividend").value);
    divisor =Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend,divisor);
}
document.querySelector("#divideNumbers").addEventListener("click",divideNumbers);


/* Decision Structure */
function total(subtotal){
    subtotal = Number(document.getElementById("subtotal").value);
    let tax = subtotal*.15;
    let member = document.getElementById("member");
    if (member.checked == true) {
        let fullTotal = subtotal - tax;
        document.querySelector("#total").textContent = `$ ${fullTotal.toFixed(2)}`; 
    } 
    else {
        fullTotal = subtotal;
        document.querySelector("#total").textContent = `$ ${fullTotal.toFixed(2)}`;
    }
}

document.querySelector("#getTotal").addEventListener("click",total);

/* ARRAY METHODS - Functional Programming */
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector("#array").innerHTML = numArray.join(", ");
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numArray.filter((num)=> num % 2 === 1).join(", ");
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numArray.filter((num)=> num % 2 === 0).join(", ");
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numArray.reduce((total,num)=>total + num);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numArray.map((num)=>num*2).join(",");
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numArray.map((num)=>num*2).reduce((sum, num)=>sum + num);