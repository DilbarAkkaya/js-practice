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
console.log(1 && 0);
console.log(true && true);
console.log(true && false);
console.log(1 && 4 && 0);
console.log(5 && null);
console.log(0 && '');
console.log(undefined && null);
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
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
console.log(!0);
console.log( !1 && 2 || !3 );
console.log(!3);
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);
console.log(5 < 3 && 5<7);
console.log(!null);
console.log(!true);
console.log(!null && !false);