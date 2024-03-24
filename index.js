'use strict'


//**********************Заадача1************************** */
let x = 20;
let y = 20;
let z = 20;
let sum = (x+y+z);
console.log(sum);


//**********************Заадача2************************** */
let secForMinet = 60;
let minetForHour = 60;
let hourForDay = 24;
let dayForYear = 365;
let myAgeInSecond =((((31*dayForYear)*hourForDay)*minetForHour)*secForMinet);
console.log(myAgeInSecond);


//**********************Заадача3************************** */
let count = 42;
let userName = '42';
let countForString = String(count);
let userNameForNaber = Number(userName);
console.log(countForString, userNameForNaber);


//**********************Заадача4************************** */
let a = 1;
let b = 2;
let c = 'белых медведей';
let sumABC = String(`${a}${b} ${c}`);
console.log(sumABC);


//**********************Заадача5************************** */
let h = 'доступ';
let j = 'морпех';
let k = 'наледь';
let l = 'попрек';
let g = 'рубило';
let lengthWords = (h+j+k+l+g).length;
console.log(lengthWords)


//**********************Заадача6************************** */
let number = 17101992;
console.log(`Variable: ${number} have type: ${typeof number}`);


let string = "teach";
console.log(`Variable: ${string} have type: ${typeof string}`);


let nullVarib = null;
console.log(`Variable: ${nullVarib} have type: ${typeof nullVarib}`);


//**********************Заадача7************************** */
// let names = prompt("Имя");
// let age = parseFloat(prompt("Возраст:"));
// console.log(`Ваше имя, ${names}! Вам ${age} лет.`);

           //  ПРОДВИНУТЫЙ УРОВЕНЬ 

//**********************Заадача8************************** */

let r = 4;
let f = 3;

r = r + f;
f = r - f; 
r = r - f;
console.log(r,f);
 

//**********************Заадача9************************** */
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log(cipher)