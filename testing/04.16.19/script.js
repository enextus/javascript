// var user = {
//     firstName: "Вася",
//     sayHi: function (who) {
//         alert(this.firstName + ": Привет, " + who);
//     },
// };

// setTimeout(function () {
//     user.sayHi("Name")
// }, 100); // undefined (не Вася!)

// ........................................................

// function Test(a, b) {
//     alert(this);
//     alert(a + b);
// }

// var g = Test.bind("Context");

// g(1, 2); // Context, затем 3

// const user = {
//     firstName: "Вася",
//     sayHi: function() {
//       alert( this.firstName );
//     }
//   };
  
//   setTimeout(user.sayHi, 100 );
//   setTimeout(user.sayHi.bind(user), 1000); // аналог через встроенный метод

// function ask(question, answer, ok, fail) {
//     let result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
//   }

// ask("Выпустить птичку?", "да", fly, die);

// function fly() {
//   alert( 'улетела :)' );
// }

// function die() {
//   alert( 'птичку жалко :(' );
// }