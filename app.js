let a = 5;
let b = 5.6;
console.log(typeof a); // number
console.log(typeof b); // number

a = "String";
console.log(typeof a); // string

let isAdmin = false;
console.log(typeof isAdmin); // boolean

let x;
console.log(typeof x); // undefined
x = 55;
console.log(typeof x); // number

let cb = null;
console.log(typeof cb); // object

let fg = null;
console.log(typeof (fg == null)); // boolean, because step 1 - check in brackets, step 2 - check type
console.log(typeof fg == null); // boolean, because step 1 - check in brackets, step 2 - check type