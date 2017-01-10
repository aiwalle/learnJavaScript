// 数据属性
//  6.1.1.1
// var person = {};
// Object.defineProperty(person, "name", {
//   writable: false,
//   value: "Nicholas"
// });
// alert(person.name);
// person.name = "Grey";
// alert(person.name);


//  6.1.1.2
// var person = {};
// Object.defineProperty(person, "name", {
//   configurable: false,
//   value: "Nicholas"
// });
// alert(person.name);
// delete person.name;
// alert(person.name);



//  6.1.1.3
// var person = {};
// Object.defineProperty(person, "name", {
//   configurable: false,
//   value: "Nicholas"
// });
// //  抛出错误
// Object.defineProperty(person, "name", {
//   configurable: true,
//   value: "Nicholas"
// });



// 访问器属性------只能通过defineProperty来添加
//  6.1.1.4
// var book = {
//   _year: 2004,
//   edition: 1
// };
//
// Object.defineProperty(book, "year", {
//   get: function() {
//     return this._year;
//   },
//   set: function(newValue) {
//     if (newValue > 2004) {
//       this._year = newValue;
//       this.edition += newValue - 2004;
//     }
//   }
// });
// book.year = 2005;
// alert(book.edition);



// 如果不支持ECMAScript5，那么可以使用老的方法
//  6.1.1.5
// var book = {
//   _year: 2004,
//   edition: 1
// };
//
// //  定义访问器的旧有方法
// book.__defineGetter__("year", function() {
//   return this._year;
// });
//
// book.__defineSetter__("year", function(newValue) {
//     if (newValue > 2004) {
//       this._year = newValue;
//       this.edition += newValue - 2004;
//     }
// });
// book.year = 2005;
// alert(book.edition);
//  在不支持Object.defineProperty()方法的浏览器中不能修改configurable和Enumerable



// 定义多个属性----下面的代码中定义了两个数据属性和一个访问器属性
//6.1.2
// var book = {};
// Object.defineProperties(book, {
//   _year: {
//     value: 2004
//   },
//   edition: {
//     value: 1
//   },
//   year: {
//     get: function() {
//       return this._year;
//     },
//     set: function(newValue) {
//       if (newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//       }
//     }
//   }
// });



//  6.1.3   读取属性的特性
// var book = {};
// Object.defineProperties(book, {
//   _year: {
//     value: 2004
//   },
//   edition: {
//     value: 1
//   },
//   year: {
//     get: function() {
//       return this._year;
//     },
//     set: function(newValue) {
//       if (newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//       }
//     }
//   }
// });
// var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
// alert(descriptor.value);
// alert(descriptor.configurable);
// alert(typeof descriptor.get);
//
// var descriptor = Object.getOwnPropertyDescriptor(book, "year");
// alert(descriptor.value);
// alert(descriptor.enumerable);
// alert(typeof descriptor.get);
