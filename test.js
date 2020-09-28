const Stack = require('.');
const stack = require('./index');

const s = new stack();


s.push(5);
console.log(s);

s.push(7);
console.log(s);

const popped = s.pop();
console.log(`${popped} , length : ${s.size()}`);