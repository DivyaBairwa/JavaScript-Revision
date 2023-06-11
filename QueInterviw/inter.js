// var a = [];
// var b = [];
// console.log(a == b);
// console.log(a === b);
//memory allocation is different for both the aarays

// var a = [];
// var b = a;
// console.log(a == b);
// console.log(a === b);

// var a = [1, 2, 3, 4];
// var z = [2, 3, 4];
// console.log(...a);
// this is called destrutring and this will return all the value of array a

// console.log(typeof NaN);
// NaN is different type of number in js

// var out = 10 - -10;
// console.log(out);

// const out = new Set([1, 1, 2, 3, 4]);
// console.log(out);

// let data = { name: "divya" };
// console.log(delete data.name);

// let data = { name: "divya" };
// console.log(delete data);

// const data = ["divya", "kajal", "khushi"];
// const [y] = data;
// console.log(y);

// const data = ["divya", "kajal", "khushi"];
// const [y, z, x] = data;
// console.log(y, z, x);

// const data = ["divya", "kajal", "khushi"];
// const [, x] = data;
// console.log(x);

// const data = { name: "divya", age: 25, work: "developer" };
// const {age} = data;
// console.log(age);
// we can find the data from the object from name

// const data = { name: "divya", age: 25, work: "developer" };
// const info = { x: "a", y: 20, z: "b" };
// const out = { ...data, ...info };
// console.log(out);
//merge two object

// const result = false || 20 || {} || null;
// console.log(result);

// let data = [1, 2, 3, 4, 5];
// data.shift();
// console.log(data);
// shift remove the first element from the array

// let data = [1, 2, 3, 4, 5];
// data.pop();
// console.log(data);
// shift remove the last element from the array

//difference between map and forEach
// map always return something but forEach not return

// let data = ["divya", "kajal", "khushi"];
// delete data[1];
// console.log(data);

// let a = 20;
// setTimeout(() => {
//   console.log(a);
// }, 0);
// a = 200;

// let a = 5;
// let b = 4;
// console.log(--a === b);

// let a = 1;
// let b = 2;
// let c = 1;
// console.log((a === --b) === c);

for (var i = 0; i < 3; i++) {}
setTimeout(() => {
  console.log(i), 1;
});
