/**
 * 형변환
 * 묵시적 / 명시적
 */

// 1. 묵시적 형변환
// -> js 엔진이 알아서 형 변환 하는것
let num = 10;
let str = "20";
const result = num + str; // num이 string으로 묵시적 형변환이 됨
console.log(result);

// 2. 명시적 형변환
// -> 내장함수 등을 이용해서 직접 형변환을 명식

// 문자 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
// let strToNum2 = Number(str2);
let strToNum2 = parseInt(str2);
console.log(strToNum2);

// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1);
