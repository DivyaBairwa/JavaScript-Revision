// function add(x, y) {
//   console.log(arguments);
//   return x + y;
// }
// add(10, 15);

// const add = (x, y) => {
//   console.log(arguments);
//   return x + y;
// };
// add(10, 15);

//------------------`this` binding: In arrow functions, this is inherited from the surrounding context-------------------//
// const person = {
//   name: "Divya",
//   helloFunc: () => {
//     console.log(this.name);
//   },
// };
// person.helloFunc();

// const person = {
//   name: "Divya",
//   helloFunc: function () {
//     console.log(this.name);
//   },
// };
// person.helloFunc();

//------------------Arguments object: Arrow functions do not have their own arguments object.----------------------//

// const arrowFunc = () => {
//   console.log(arguments);
// };
// arrowFunc(1, 2, 3);

function arrowFunc() {
  console.log(arguments);
}
arrowFunc(1, 2, 3);
