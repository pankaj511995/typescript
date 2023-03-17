"use strict";
const numberelement1 = document.getElementById('number1');
const numberelement2 = document.getElementById('number2');
const buttnumber = document.querySelector('#buttonnumber');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ":->" + num2;
    }
}
// const numberResult:number[]=[]
// const stringResult:string[]=[]
const numberResult = [];
const stringResult = [];
function printnumber(obj) {
    console.log(obj.val);
}
buttnumber.addEventListener('click', () => {
    const num1 = numberelement1.value;
    const num2 = numberelement2.value;
    const result = add(+num1, +num2);
    const rstring = add(num1, num2);
    numberResult.push(result);
    stringResult.push(rstring);
    printnumber({ val: result, timespan: new Date() });
    console.log(numberResult, 'number array');
    console.log(stringResult, 'this is string array');
});
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it is working now');
    }, 1000);
});
mypromise.then(result => console.log(result.split(' ')));
