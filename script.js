/* let numberOfFilms;
function start(){
  numberOfFilms = +prompt('How many movies have you watched?', '');
  while (numberOfFilms='' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies have you watched?', '');
  }
}
start();
const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
function rememberMyFilms(){
  for(let i = 0; i < 2; i++) {
    const a = prompt('One of last watched movies?','').trim(),
          b = prompt('How much do you rate it?','');
          if(a != null && b != null && a != '' && b!='' && a.length <50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
          } else {
            console.log('error');
            i--;
          }
    }
}
rememberMyFilms();
function detectPersonalLevel(){
  if(personalMoviesDB.count < 10) {
    console.log('Watched so little movies')
  } else if (personalMoviesDB.count>=10 && personalMoviesDB.count<30){
   console.log('you are a classic spectator')
  }else if(personalMoviesDB.count >= 30) {
    console.log('you are movieman')
  }else {
    console.log('Error')
  }
}
 detectPersonalLevel();
console.log(personalMoviesDB)  */

/* const num = 50;
switch (num) {
  case 49: 
  console.log('It is\'t right');
  break;
  case 50:
    console.log('It is right!');
    break;
    case 100:
      console.log('NOooo');
      break;
      default:
        console.log('Not this time')
} */

/* const hamburger = 5;
const fries = 3;

if (hamburger && fries) {
  console.log('i am full')
}
console.log(hamburger && fries); */

/* const hamburger = 5;
const fries = 3;
const cola = 0;
if(hamburger === 3 && cola === 1 && fries) {
  console.log('all friends are full')
} else {
  console.log('we go away')
} */

//console.log(hamburger === 3 && cola === 1 && fries);
/* console.log(1 && 0);
console.log(true && true);
console.log(true && false);
console.log(1 && 4 && 0);
console.log(5 && null);
console.log(0 && '');
console.log(undefined && null);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3); */
/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
} */
/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} */
/* const hamburger = 3;
const fries = 0;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries || nuggets) {
   console.log('we stay here')
} else {
  console.log('we are going away')
} */
/* const hamburger = 0;
const fries = 0;
const cola = 0;
const nuggets = null;
 
if (hamburger || cola || fries || nuggets) {
   console.log('we stay here')
} else {
  console.log('we are going away')
}
console.log(hamburger || cola || fries || nuggets); */
/* let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('we are happy');
} else {
  console.log('we are going away')
}
 console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); */
/*  console.log( NaN || 2 || undefined );
 console.log(null || 0 || '' || undefined || 5); */
/* console.log(!0);
console.log( !1 && 2 || !3 );
console.log(!3);
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);
console.log(5 < 3 && 5<7);
console.log(!null);
console.log(!true);
console.log(!null && !false); */

//let num = 50;
/* while(num<=55) {
  console.log(num);
  num++;
} */

/* do{
  console.log(num);
  num++;
} while (num<=55) */

/* for(let i = 0; i<8; i++) {
  console.log(num);
  num++;
} */

/* for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i)
} */
/* for (let i = 1; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i)
} */

/* for(let i = 0; i < 3; i++) {
  console.log(i);
  for(let j = 0; j < 3; j++) {
    console.log(j);
  }
} */
/* 
*
**
***
****
*****
****** */

/* let result = '';
const length = 7;
for(let i = 1; i < length; i++) {
  for(let j = 0; j < i; j++) {
    result = result + "*";
  }
  result = result + '\n';
}
console.log(result) */

/* first: for(let i = 0; i<3; i++) {
  console.log(`First level: ${i}`);
  for(j=0; j<3; j++) {
    console.log(`Second level: ${j}`);
    for(let k=0; k <3; k++) {
      if(k=== 2) continue first
      console.log(`Third level:${k}`)
    }
  }
} */
/* first: for(let i = 0; i<3; i++) {
  console.log(`First level: ${i}`);
  for(j=0; j<3; j++) {
    console.log(`Second level: ${j}`);
    for(let k=0; k <3; k++) {
      if(k=== 2) break first
      console.log(`Third level:${k}`)
    }
  }
} */
//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
/* let i=5;
while(i <= 10) {
  console.log(i);
  i++;
} */

//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
/* for (let i = 20; i >10; --i){
  console.log(i);
  if(i === 13) break;
} */
//При помощи цикла for выведите чётные числа от 2 до 10 включительно
/* for(let i = 2; i<=10;i++) {
  if(i%2===0){
    console.log(i)
  }

} */
//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//Цикл, который нужно переписать:
/*  for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 } */
/* let i=2;
 while(i<=16) {
  if (i%2===0) {
    i++;
    continue;
  } else{
    console.log(i);
  }
  i++;
 } */

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
/*  let arr = [];
 for(let i = 5; i<11; i++) {
  arr[i-5] = i
 }
 console.log(arr) */
/* 
 let i = 3;
 while(i) {
  alert(i--);
 }
 console.log(i) */
/* 
 let i = 0;
while (++i < 5) alert( i ); */

/* let i = 0;
while (i++ < 5) alert( i ); */
/* for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i ); */
/* for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
} */

/* for(let i = 0; i < 3; i++) {
  alert(`number ${i}!`)
} */
/* let i = 0;
while(i < 3) {
  alert (`number ${i}!`);
  i++
} */

/* let i;
do{
  i = prompt('Enter a number greater than 100',0);
}while(i<=100&&i);
let n = 10; */
/* let n=10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
} */
//Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
/* let result = [];
const arr = [3, 5, 8, 16, 20, 23, 50];
for(let i=0; i<arr.length; i++) {
result[i] = arr[i]
}
console.log(result) */
//const data = [5, 10, 'Shopping', 20, 'Homework'];
//Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
//Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
/* for (let i = 0; i < data.length; i++) {
  if (typeof (data[i]) === 'number') {
    data[i] = data[i] * 2
  }
  else
    if (typeof (data[i]) === 'string') {
      data[i] = `${data[i]} - done`
    }
}

console.log(data) */
//Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
/* let result = [];
for(let i=0; i<data.length;i++){
  result[i] = data[[data.length-1] - i];
}
console.log(result) */
//let result='';
/* const lines = 5;
for(let i = 0; i<=lines; i++) {
  for(let j = 0; j<lines-i;j++){
result +=" ";
}
for(let j=0; j<2*i +1;j++){
  result+="*";
}
result += "\n";
}
console.log(result) */

/* function showMessage (){
  console.log('hello world')
} */
/* showMessage('hello world');
 function showMessage(text) {
  console.log(text)
 } */
 //1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
/*  function sayHello(str){
  return `Hello, ${str}!`
 } */

 //2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
/*  function returnNeighboringNumbers(num) {
  return [num-1,num,num+1]
 } */

 //3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
//Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
/* function getMathResult (base, times) {
  let result = '';
  if(typeof n !== 'number'||n === 0|| n<0) {
    return base;
  }
  for(let i=1; i<=times;i++){
    if(i === times) {
      res+=`${base*i}`;
    }else {
      res+=`${base*i}---`
    }
  }
} */
//methods of string and number
const str = 'Hello world';
const num = 12.2;
const num1 = 12.8;
const test = '12.8px';
console.log(str.length);//11
console.log(str.indexOf('world'));//6
console.log(str.indexOf('q'));//-1
console.log(str.slice(6, 11));//world
console.log(str.slice(6));//world
console.log(str.slice(0));//Hello world
console.log(str.slice(1, -1));//ello worl
console.log(str.slice(-1,1));//''
console.log(str.substring(6, 11));//world
console.log(str.substring(1,-1))//H
console.log(str.substring(11, 2));//llo world
console.log(Math.round(num))//12
console.log(Math.round(num1))//13
console.log(Math.ceil(num))//13
console.log(Math.ceil(num1))//13
console.log(parseFloat(test));//12.8
console.log(parseInt(test));//12

/*1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'*/
function calculateVolumeAndArea(num){
  if(typeof num === 'number' && num > 0 && Number.isInteger(num)){
    return `Объем куба: ${num*num*num}, площадь всей поверхности: ${6*num*num}`
  }
  return 'При вычислении произошла ошибка'
}

/*Напишите функцию, которая будет определять номер купе по переданному ей номеру места.Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"*/
/* function getCoupeNumber(num){
  if(num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  } else if( !Number.isInteger(num) || num < 0|| typeof num !== 'number') {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else {
    return Math.ceil(num/4)
  }
} */

/* Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены
*/
/* function findMaxNumber(a,b,c,d) {
  if(typeof a !== 'number' ||
     typeof b !== 'number' ||
     typeof c !== 'number' ||
     typeof d !== 'number') {
      return 0
  } return Math.max(a, b, c, d)
} */
/*1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.*/
/* function getTimeFromMinutes(minutesTotal){
  if(typeof minutesTotal !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
return "Ошибкаб проверьте данные"
  }
const hours = Math.floor(minutesTotal /60);
const minutes = minutesTotal % 60;
let hoursStr = '';

switch (hours) {
    case 0: 
        hoursStr = 'часов';
        break;
    case 1:
        hoursStr = 'час';
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = 'часа';
        break;
    default:
        hoursStr = 'часов';
}

return `Это ${hours} ${hoursStr} и ${minutes} минут`;
} */
/*Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.*/
/* function fib(num){
  if(num <=0  || !Number.isInteger(num) || typeof num !== 'number') {
    return "";
  }
  let first = 0;
  let second = 1;
  let result = "";
for (let i = 0; i < num; i++){
  if(i+1===num) {
    result+= `${first}`;
  }else {
    result +=`${first} `;
  }
  let third = first + second;
  first = second;
  second = third;
}
return result;
} */
/* 
function first(){
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}
first();
second();
function learnJS(lang, callback){
  console.log(`I learn: ${lang}`);
  callback();
}

function done(){
  console.log('I pass first lesson');
}
learnJS('Javascript', done); */
/* const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function(){
    console.log("Test");
  }
}
options.makeTest();
const {border, bg} = options.colors;
console.log(border); */
/* console.log(options.name);
//delete options.name;
console.log(options);
for (let key in options) {
  console.log(`Property ${key} has value ${options[key]}`)
} */
/* 
for (let key in options) {
  if(typeof options[key] === 'object') {
    for(let i in options[key]){
      console.log(`Property ${i} has value ${options[key][i]}`)
    }
  } else {
      console.log(`Property ${key} has value ${options[key]}`)
    }
  }
  console.log(Object.keys(options));//['name', 'width', 'height', 'colors']
  console.log(Object.keys(options).length);//4 */
/* const arr = [2, 13, 26, 8, 15];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
  return a-b;
} */
//arr.pop();
//arr.push(6);
//arr.shift();
//arr.unshift();
/* for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

for (let val of arr) {
  console.log(val)
}
arr[99]=0;
console.log(arr.length);
console.log(arr); */
/* arr.forEach(function(item, i, arr){
  console.log(`${i}: ${item} inside array ${arr}`)
});
const string = prompt("","");
const products = string.split(", ");

console.log(products.join('; '));
 */
/* let a =5;
let b = a;
b= b + 5;
console.log(b);
console.log(a);
const obj = {
  a: 5,
  b: 1,
}
const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj); */
/* 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример: showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно */
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js:'20%',
      php:'10%'
    },
    exp: '1 month',
}}

function showExperience(plan){
  const {exp}=plan.skills;
  return exp;
}
