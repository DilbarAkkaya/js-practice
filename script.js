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
    configurable: false,
  })
  console.log(defineAdmin)
  let infoAdmin = Object.getOwnPropertyDescriptor(defineAdmin, 'name');
  console.log(infoAdmin)
  Object.defineProperty(defineAdmin, 'age', {
    value: '28',
    enumerable: true,
  });
    console.log(defineAdmin);