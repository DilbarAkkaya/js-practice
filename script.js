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



function numObj(s){
  let res = {};
  let arr = [];
  for(let i = 0; i < s.length; i++) {
    s[i] =  (String.fromCharCode(s[i])).toLowerCase();
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
function searchLinear (t, arr) {
  for(let i =0; i < arr.length; i++) {
    if(arr[i] === t) {
      return i
    }
  }
  return null
}
console.log(searchLinear(5, [1, 3, 6, 5, 8]))