/* const numberOfFilms = +prompt('How many movies have you watched?', '');
const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
const a = prompt('One of last watched movies?','');
const b = prompt('How much do you rate it?','');
const c = prompt('One of last watched movies?','');
const d = prompt('How much do you rate it?','');
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB) */

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

let num = 50;
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