'use strict';
/* let friends = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]


const whosOnline = (friends) => {
  let online = [];
  let offline = [];
  let away = [];
for(let i = 0; i < friends.length; i++) {
  if(friends[i].status === 'online' && friends[i].lastActivity <= 10) {
    online.push(friends[i].username)
    console.log(online)
  } else if(friends[i].status === 'offline') {
    offline.push(friends[i].username)
    console.log(offline)
  } else {
    away.push(friends[i].username)
    console.log(away)
  }
  if(online.length>0&&offline.length>0&& away.length>0) return {online, offline, away}
  console.log(1)
  if(online.length>0&&offline.length>0) return {online, offline}
  if(offline.length>0&&away.length) return {offline, away}  
   if(online.length>0&&away.length) return {online, away}
   return {}
}
}

console.log(whosOnline(friends)) */



function numObj(s) {
  let res = {};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    s[i] = (String.fromCharCode(s[i])).toLowerCase();
    console.log(s[i])
    res = Object.assign({}, s[i])
    arr.push(res)
  }

  return arr
  /* let arr =[];
  let res;
  for(let i = 0; i < s.length; i++) {
    if(s.length>0 && typeof  (s[i]  === 'number')){
      let item = s[i];
          res = {
            s[i]: (String.fromCharCode(item)).toLowerCase()
          }
          arr.push(res)
    }
  }
   */
}

console.log(numObj([65, 63, 74]))
function searchLinear(t, arr) {

  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === t) {
      return i
    }
  }
  return null
}
/* console.log(searchLinear(5, [1, 3, 6, 5, 8]))
console.log(count)
 */
/* let count = 0;
function binarySearch(arr, t) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count = count + 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === t) {
      found = true;
      position = middle;
      return position;
    }
    if (t < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return position;
}
console.log(binarySearch([5, 6, 7], 7))
console.log(count) */
/* 
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count += 1
    }
    let temp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = temp;
  }
  return arr;
}
let array = [1, 6, 8, 4, 3]
console.log(selectionSort(array))
console.log(count) */

/* function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
      count += 1;
    }
  }
  return arr
}
console.log(bubbleSort([1, 5, 8, 9]))
console.log(count) */
/* 
function factorial(n){
if(n === 1) {
  return 1;
}
return n * factorial(n-1)
}
console.log(factorial(10)) */

/* function quickSort(arr){
  if(arr.length<=1){
    return arr;
  }
  let pivotIndex = Math.floor(arr.length/2);
  let pivot = arr[pivotIndex];
  let less= []
  let greater = []
  for (let i = 0; i <arr.length; i++) {
    count=count+1
    if (i===pivotIndex) {
      continue
    }
    if(arr[i]<pivot){
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
} */

/* console.log(quickSort([1, 5, 0, 8, 10, -2, 5, 9]))
console.log(count)

function recursiveBinarySearch(array, item, start, end){
  let middle = Math.floor((start - end)/2);
  count +=1;
  if(item===array[middle]){
    return middle
  }
  if((item<array[middle])){
    return recursiveBinarySearch(array, item, 0, middle-1)
  } else {
    return recursiveBinarySearch(array, item, middle+1, end)
  }
}
console.log('hhhh', recursiveBinarySearch([1, 5, 6, 1, 0, 3], 0, 0, 6)) */


/* function User (name, id){
  this.name = name;
  this.id=id;
  this.human=true;
  this.hello = function(){
    console.log(`Hello, ${this.name}`)
  }
}

User.prototype.exit = function(){
  console.log(`The user ${this.name} is exit`)
}
const ivan = new User("Ivan", 25);
const alex = new User("Alex", 30);
console.log(ivan.hello());
console.log(alex.hello());
ivan.exit();

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.distanceX = function (a,b){
  const delta = b.x-a.x;
  return Math.abs(delta);
}
Point.prototype.move = function(dx,dy){
 this.x += dx;
 this.y += dy;
}

const point1 = new Point(0,0);
const point2 = new Point(4.5);
point1.move(3, 2);
console.log(point1);
const dist = Point.distanceX(point1,point2);

console.log(dist);

class PointES6 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move(dx,dy) {
    this.x += dx;
    this.y += dy;
  }
}
const point3 = new PointES6(3, 4);
point3.move(5, 2);
console.log(point3);



function Base(str){
this.str=str;
}

Base.prototype.plus = function(a){
  return this.str + a;
  }

function StringBuilder (str, val){
Base.call(this, str);
this.val = val;
}
StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;
const newString = new StringBuilder('jjj', 'Hello');
console.log(newString.plus('smith')); */

function Product (name, price){
  this.name=name;
  this.price = price;
}
function Food(name,price){
  Product.call(this, name,price);
  this.category = 'food';
}
console.log(new Food('cheese', 5).name);
/* const person = {
  firstName: 'Elvis',
  lastName: 'Presley',
};
const prototype = {
  firstName: 'Daniel',
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
};
Object.setPrototypeOf(person, prototype);
person.age = 100;
console.log(prototype.age); //undefined */

/* 
const person = {
  firstName: 'Elvis',
  lastName: 'Presley',
};
const prototype = {
  firstName: 'Daniel',
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
};
Object.setPrototypeOf(person, prototype);
delete person.getFullName;
console.log(person.getFullName()); //elvis presley */

/* const person = {
  firstName: 'Elvis',
  lastName: 'Presley',
};
const prototype = {
  firstName: 'Daniel',
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
};
Object.setPrototypeOf(person, prototype);
console.log(person.firstName); //elvis
delete person.firstName; */

/* const person = {
  firstName: 'Elvis',
  lastName: 'Presley',
};
const prototype = {
  firstName: 'Daniel',
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
};
Object.setPrototypeOf(person, prototype);

delete person.firstName;
console.log(person.firstName); //daniel

function Base(str){
  this.str=str;
  }
  
  Base.prototype.plus = function(a){
    return this.str + a;
    }
  
  function StringBuilder (str, val){
  Base.call(this, str);
  this.val = val;
  }
  StringBuilder.prototype = Object.create(Base.prototype);
  StringBuilder.prototype.constructor = StringBuilder;
  const newString = new StringBuilder('jjj', 'Hello');
  console.log(newString.__proto__) */

  let user = {
    name: 'John',
    age: 35,
    isAdmin: true,
  }
  let infoName = Object.getOwnPropertyDescriptor(user, 'name');
  let infoAge = Object.getOwnPropertyDescriptor(user, 'age');
  let infoIsAdmin = Object.getOwnPropertyDescriptor(user, 'isAdmin');
  console.log(infoName);
  console.log(infoAge);
  console.log(infoIsAdmin);

  let defineAdmin = Object.defineProperty({}, 'name', {
    value: 'Alex',
    writable: true,
    configurable: true,
  })
  console.log(defineAdmin)
  let infoAdmin = Object.getOwnPropertyDescriptor(defineAdmin, 'name');
  console.log(infoAdmin)
  Object.defineProperty(defineAdmin, 'age', {
    value: '28',
    enumerable: true,
    configurable:true,
  });
    console.log(defineAdmin);

  Object.defineProperties(defineAdmin, {
    name: {value: 'Mark', writable: true, configurable: true},
    age: {value: 25, enumerable: true},
    isMaried: {value: false, writable: true}
  })
  console.log(defineAdmin);

  let employer = Object.defineProperties({}, {
    name: {value: 'Anna', writable: true, enumerable: true, configurable: true},
    age : {value: 40, writable: true, enumerable: true, configurable: true} 
  })


  Object.defineProperty(employer, 'isMarried', {
    value: true, writable:true
  })
  Object.defineProperties(employer, {
    address: {value: 'London', writable: true, enumerable: true},
    children: {value: 2, writable: true}
  })
  console.log(employer);
    let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(employer));
/*     Object.preventExtensions(clone);
    Object.defineProperty(clone, 'aaa', {
      value: 'bbbb', writable: true
    }) */
    Object.seal(clone);
/*         Object.defineProperty(clone, 'aaa', {
      value: 'bbbb', writable: true
    }) */
   // delete clone.name;
    let nameDescr = Object.getOwnPropertyDescriptor(clone, 'name')
  console.log(nameDescr);

  let range = {
    from: 1,
    to:5,
  };

  range[Symbol.iterator] = function(){
    return {
      current: this.from,
      last: this.to,
      next() {
        if(this.current <= this.last) {
          return {
            done: false,
            value: this.current, 
          }
        } else {
          return {
            done: true,
          }
        }
      }
    }
  }
/*   for (let num of range) {
  
  } */

  let numbers = [1, 2, 3, 4, 5];
  let numCopy = [...numbers];
  console.log(numCopy);
  numCopy.push(6);
  console.log(numCopy);
  let nestedArr = [[1, 2], [3, 4]];
  let nestedCopy = [...nestedArr];
  console.log(nestedCopy);
  nestedCopy[0].push(300);
  console.log(nestedArr);
  console.log(nestedCopy);
  let numbersCopyLoop = [];
  for (let i = 0; i < numbers.length; i++){
    numbersCopyLoop[i] = numbers[i];
  }
  let i = 0;
while(++i<numbers.length) {
  numbersCopyLoop[i] = numbers[i];
}
let newClone = numbers.map((x)=> x);
console.log(newClone)
numbers.push(6);
console.log(newClone)
console.log(numbers)
let newCloneFilter = numbers.filter(()=>true);
console.log(newCloneFilter)
let newCloneReduce = numbers.reduce((newarr, el) => {
  newarr.push(el);
  return newarr;
}, []);
console.log(newCloneReduce);
let newCloneSlice = numbers.slice();
console.log(newCloneSlice);
let newCloneConcat = numbers.concat([]);
console.log(newCloneConcat);
let newCloneFrom = Array.from(numbers);
let newCloneDeep = JSON.parse(JSON.stringify(numbers));
let nested = [['a', 'b'], ['c', 'd']]
let newCloneDeepMulti = JSON.parse(JSON.stringify(nested))
console.log(newCloneDeepMulti);
newCloneDeepMulti.push(['e'])
console.log(newCloneDeepMulti);
console.log(nested)

let obj = {
  name: 'Jhon',
  age: 40,
}
let cloneObj = {...obj};
console.log(cloneObj)

let cloneAssign = Object.assign({}, obj);
console.log(cloneAssign);

let cloneDeepObj = JSON.parse(JSON.stringify(obj));
console.log(cloneDeepObj);

let flatten = nested.flat(Infinity);
console.log(flatten);

function flattenArr(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      for(let j=0;j<arr[i].length; j++)
      newArr = [...newArr, arr[i][j]];
    }else {
    newArr = [...newArr, arr[i]];
    }
  }
  return newArr;
}
function flattenConcat(arr){
  return arr.reduce((acc, el) => 
  acc.concat(Array.isArray(el) ? flattenConcat(el):el),[])
}

console.log(flattenArr([[1, 2], [3, 4, 5], 6]))

console.log(flattenConcat([[1, 2], [3, 4, 5], 6]))

function sortArr(arr){
  for(let i = 0; i<arr.length;i++){
    for (let j=i+1; j<arr.length;j++){
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
    return arr
}
console.log(sortArr([1, 3, 2, 7, 4]))

function compare(a,b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0
}
console.log([1, 5, 8, 3].sort(compare))
let number = 5; 

function logNumber() {
  let number = 4; 
  console.log(number);
}
number = 6;
logNumber(); 

function createCounter() {
  let counter = 0;
  const myFunc = function() {
    counter = counter + 1;
    return counter;
  }
  return myFunc;
}

const increment  = createCounter();
console.log(increment)
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3)

const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
];

const budget = [5000, 1000, 10000]
const map = new Map();
shops.forEach((shop,i) => {
  map.set(shop, budget[i]);
})
console.log(map);
console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
/* map.delete(shops[2]);
//map.clear();
map.size
console.log(map.size) */
const goods = [];
for (let shop of map.keys()){
  goods.push(Object.keys(shop)[0])
}
console.log(goods)

const bujetsSum = [];
for (let price of map.values()) {
  console.log(price)
  bujetsSum.push(price)
}
console.log(bujetsSum)

for (let [budget, shop] of map.entries()) {
  console.log(budget, shop)
}

map.forEach((item, i, map) => {
  console.log(item, i)
})

const arrNum = [1, 1, 3, 55, 55, 9];
const set = new Set(arrNum);
set.add(9);
set.add(6)
console.log(set);

function showName() {
/*   console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]); */
  for (let arg of arguments) {
    console.log(arg)
  }
}
showName('Yulia', 'Ilya')

console.log(this);

function showThis(a, b){
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum())
}
showThis(4, 5)

const objThis = {
  a: 5,
  b: 2,
  sum: function(){
    function shout(){
      console.log(this);
    }
shout()
  }
}
objThis.sum()

function User(name,id){
  this.name =name;
  this.id = id;
  this.hello = function(){
    console.log('hello' + this.name)
  }
}
let ivan = new User('Ivan', 23)
console.log(ivan.hello())

function sayName(surname){
  console.log(this);
  console.log(this.name +surname);
}

const userName = {
  name: 'John'
}
sayName.call(userName, 'smith');
sayName.apply(userName, ['smith']);

/* function count(num) {
  return this*num;
}

const double = count.bind(2)
console.log(double(3))

!function() {
  alert("Hello from IIFE!");
}(); */

let userIvan = {
  name: 'Ivan',
  age: 28,
  sayHi(){
    console.log(`Hi, ${this.name}`);
  }
}
/* setTimeout(function(){
  userIvan.sayHi()
}, 5000); */

/* function func() {
  console.log(`Hi, ${this.name}`);
}
let funcUserIvan = func.bind(userIvan);
//funcUserIvan()
let userIvanMethod = userIvan.sayHi.bind(userIvan);
userIvanMethod();

function curry(f) {
  return function(a){
    return function(b) {
      return f(a, b);
    }
  }
}

function sum(a, b) {
  return a + b;
}

let currySum = curry(sum);
console.log(currySum(1)(2))

class Users {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value){
    if (value.length < 4) {
      alert ("bvz hy")
      return;
    }
    this._name = value;
  }
}

let userDima = new Users('Dima');
alert(userDima.name);
userDima= new Users('') */

const arrFlat = [1, 2, 3, [2, 5]];
//console.log(arrFlat.myFlat());
function myFlat() {
  const result = [];
  function getFlatten(arr) {
    for(let i = 0; i <arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getFlatten(arr[i])
    } else {
      result.push(arr[i])
    }
    }
  }
getFlatten(this);
return result;
}
Array.prototype.myFlat = myFlat;
console.log(arrFlat.myFlat())

function objCreate(proto){
  function F(){};
  F.prototype = proto;
  return new F();
}
const a = {
  x: 10,
  y: 20,
}

const b = objCreate(a);
console.log(b.x);

function repeating(str, n) {
  let res = '';
  for (let i = 0; i< n; i++) {
    res += str;
  }
  return res;
}
console.log(repeating('hello', 3))

let person = {
  firstName: 'jhon',
}
function myBind(){
  console.log(this.firstName)
}
let logName = myBind.bind(person)
logName()

Function.prototype.myBind = function(context, ...outerArgs){
  const fn = this;
  return function(...args){
    return fn.apply(context, [...outerArgs, ...args]);  
  }
}

function myBindES6(fn, context, ...rest){
  return function(...args){
    return fn.apply(context, [...rest, ...args])
  }
}
function printName(age){
  console.log(this.firstName + this.firstName + age)
}
myBindES6(printName, person, 25)();

function muBindES6Concat(fn, context, ...rest){
  return function(...args){
    return fn.apply(context, rest.concat(args));
  }
}
muBindES6Concat(printName, person, 40)();

function makeNum(num, fn){
  return fn ? fn(num) : num;
}
function five(fn){
  return makeNum(5, fn);
}
function seven(fn){
  return makeNum(7, fn);
}
function three(fn){
  return makeNum(3, fn);
}

function plus(right) {
  return function(left) {
    return left + right;
  }
}
 function minus(right){
  return function(left) {
    return left -right;
  }
 }

console.log(five(plus(seven(minus(three())))));

/* class MyElement extends HTMLElement {
  constructor() { super();  }
  connectedCallback() { /}
  disconnectedCallback() { }
  static get observedAttributes() { return []; }
  attributeChangedCallback(name, oldValue, newValue) { }
  adoptedCallback() {  }
 }
customElements.define('my-element', MyElement); */


const student = {
  name: 'Anna',
  age: 25,
  isActive: true,
}
let key = 'age';
console.log('age' in student)
console.log(key in student)
console.log(student.prop)
for(let key in student){
  console.log(key)
}

const cloneStudent = {};
for(let prop in student) {
  cloneStudent[prop] = student[prop]
}
console.log(cloneStudent);
let cloneA = {};
Object.assign(cloneA, student)
console.log(cloneA);
console.log(cloneA.sizes === student.sizes);
cloneA.prop = 'lkfldkf'
console.log(cloneA)
console.log(student)
console.dir([1, 2, 3])

const soldier = {
  health: 400,
  armor: 100,
}
const john ={
  health: 200,
}

//john.__proto__= soldier;
//Object.setPrototypeOf(john, soldier)

const adam = Object.create(soldier)
console.log(adam.armor);

function Student(name, id){
  this.name = name,
  this.id=id,
  this.sayHi = function() {
    console.log(`Hello, ${this.name}`)
  }
}
const yulia = new Student('Yulia', 28);
console.log(yulia);
yulia.sayHi();
Student.prototype.exit = function() {
  console.log(`Good bye, ${this.name}`)
}
yulia.exit()

//myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
function myConcat1(separator) {
  let argsArr = [...arguments];
  console.log(argsArr)
  const args = argsArr.slice(1);
  console.log(args)
  return args.join(separator);
}
console.log(myConcat1('!', 4, -10, 34, 0));
console.log(myConcat('!', 4, -10, 34, 0));
//add(5)(9)(-4)(1) -> 11. How to implement?
function add(a, b, c, d){
  return a + b + c + d
}

function curry(f) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d){
          return f(a, b, c, d);
        };
      };
    };
  };
};

let carriedAdd = curry(add);
console.log(carriedAdd(5)(9)(-4)(1));
console.log(add(5, 9, -4, 1));

// periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms)

function periodOutput(period) {
  let i = 0;
  setInterval(()=>{
    i += period;
    console.log(`${i}(after 100 ms)`)
  }, period)
}
//periodOutput(100)
console.log(soldier.__proto__)
console.log(soldier.prototype)
let age = 18;
let arr =[];
let arr1 = [];
console.log(age.__proto__=== Student.prototype);
console.log(arr.__proto__ === arr1.__proto__)
console.log(arr.__proto__)
console.log(arr1.__proto__)
console.log(age.prototype)
console.log(Object.getPrototypeOf(age));
let objWithoutProt = Object.create(null);
objWithoutProt.__proto__= "test";
objWithoutProt.name = "Yana";
console.log(objWithoutProt);
//alert(objWithoutProt)
console.log(Object.getPrototypeOf(objWithoutProt))
console.log(Object.getPrototypeOf(yulia));
console.log(Object.getPrototypeOf(soldier));
Object.setPrototypeOf(objWithoutProt, Student);
console.log(Object.getPrototypeOf(objWithoutProt));
let dima = Object.create(Student, {name: {value: 'Dima', writable: false}});
console.log(dima.name = 'Yana')