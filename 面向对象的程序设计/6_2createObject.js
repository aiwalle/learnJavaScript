// 6.2创建对象
// 6.2.1工厂模式
// function createPerson(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     alert(this.name);
//   };
//   return o;
// }
// var person1 = createPerson("Nicholas", 29, "Software Engineer");
// var person2 = createPerson("Grey", 27, "Doctor");



// 6.2.2构造函数模式
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     alert(this.name);
//   };
// }
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Grey", 27, "Doctor");

// alert(person1.constructor == Person);
// alert(person2.constructor == Person);

// alert(person1 instanceof Object);
// alert(person1 instanceof Person);
// alert(person2 instanceof Object);
// alert(person2 instanceof Person);

//  6.2.2.1将构造函数当做函数
//  当做构造函数使用
// var person = new Person("Nicholas", 29, "Software Engineer");
// person.sayName();
// //  作为普通函数调用
// Person("Grey", 27, "Doctor");
// window.sayName();
// //  在另一个对象的作用域中调用
// var o = new Object();
// Person.call(o, "Kristen", 25, "Nurse");
// o.sayName();

//  6.2.2.2构造函数问题---以下的代码等于上面构造函数的代码
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = new Function("alert(this.name)");  // 与声明函数在逻辑上是等价的
// }


// alert(person1.sayName == person2.sayName);  //  false


//  在构造函数的代码中，我们创建了两个完成同样任务的Function，实际上完全没有必要，因此有了下面的写法
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = sayName;
// }
//
// function sayName() {
//   alert(this.name);
// }
//
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Grey", 27, "Doctor");

//  现在我们解决了两个对象的sayName为同一个Function,但是出现了新的问题
//  在全局作用域中定义的函数实际上只能被某个对象调用，全局作用域有点名不副实
//  如果对象需要定义很多方法，那么就要定义很多个全局函数，我们自定义的引用类型将丝毫没有封装性可言






//  6.2.3  原型模式
// codeA
// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   alert(this.name);
// };

// var person1 = new Person();
// person1.sayName();
// var person2 = new Person();
// person1.sayName();

// alert(person1.sayName == person2.sayName);  // true

//  6.2.3.1 理解原型对象
/*
1.Person函数会创建一个prototype属性，这个属性指向Person.prototype(原型对象)
2.原型对象会自动获得一个constructor(构造函数)属性
3.constructor中包含一个指向prototype属性所在函数的指针，也就是说这个指针指向Person（Person.prototype.constructor---->Person）
4.原型对象中除了constructor属性以外的其他方法，都是从Object继承来的
5.当我们使用构造函数创建实例的时候，例如使用Person()来创建了person1和person2,person1和person2实例内部会包含一个指针
6.这个指针([prototype]或__proto__)会指向函数的原型对象，也就是Person.prototype
7.[prototype]或__proto__的这个连接存在于person1和Person.prototype之间，也就是实例和构造函数(Person函数)的原型对象之间，而不是person1和Person()之间(实例和构造函数)
*/


// alert(Person.prototype.isPrototypeOf(person1));   // true
// alert(Person.prototype.isPrototypeOf(person1));   // true
// alert(Object.getPrototypeOf(person1) == Person.prototype);  // true
// alert(Object.getPrototypeOf(person1).name);       // "Nicholas"




// codeB
// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   alert(this.name);
// };
//
// var person1 = new Person();
// var person2 = new Person();
// person1.name = "Greg";
// alert(person1.name);          // Greg----来自实例
// alert(person2.name);          // Nicholas----来自原型
//
// delete person1.name;
// alert(person1.name);




// codeC
// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   alert(this.name);
// };
// var person1 = new Person();
// var person2 = new Person();
// alert(person1.hasOwnProperty("name"));    // false
//
// person1.name = "Grey";
// alert(person1.name);                      // Grey----来自实例
// alert(person1.hasOwnProperty("name"));    // true
//
// alert(person2.name);                      // Nicholas
// alert(person2.hasOwnProperty("name"));    // false
//
// delete person1.name;
// alert(person1.name);                      // Nicholas
// alert(person1.hasOwnProperty("name"));    // false



// codeD
// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   alert(this.name);
// };
// var person1 = new Person();
// var person2 = new Person();
// alert(person1.hasOwnProperty("name"));    // false
// alert("name" in person1);                 // true
//
// person1.name = "Grey";
// alert(person1.name);                      // Grey----来自实例
// alert(person1.hasOwnProperty("name"));    // true
// alert("name" in person1);                 // true
//
// alert(person2.name);                      // Nicholas
// alert(person2.hasOwnProperty("name"));    // false
// alert("name" in person2);                 // true
//
// delete person1.name;
// alert(person1.name);                      // Nicholas
// alert(person1.hasOwnProperty("name"));    // false
// alert("name" in person1);                 // true


// codeE
// function hasPropertypeProperty(object, name) {
//   return !object.hasOwnProperty(name) && (name in object);
// }
// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   alert(this.name);
// };
// var person = new Person();
// alert(hasPropertypeProperty(person, "name"));   // true
// person.name = "Greg";
// alert(hasPropertypeProperty(person, "name"));   // false




//  codeF
// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   alert(this.name);
// };
// var keys = Object.keys(Person.prototype);
// alert(keys);            // "name,age,job,sayName"
//
// var p1 = new Person();
// p1.name = "Rob";
// p1.age = 31;
// var p1keys = Object.keys(p1);
// alert(p1keys);          // "name,age"
//
// var keys = Object.getOwnPropertyNames(Person.prototype);
// alert(keys);            // "constructor,name,age,job,sayName"



// codeG      ---更简单的原型语法
// function Person() {
//
// }
// Person.prototype = {
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName : function() {
//     alert(this.name);
//   }
// };
//
// var friend = new Person();
// alert(friend instanceof Object);      // true
// alert(friend instanceof Person);      // true
// alert(friend.constructor == Person);  // false
// alert(friend.constructor == Object);  // true

//  由于上面我们完全重写的Person.prototype，因此constructor属性不在指向Person
//  新的constructor指向Object构造函数Object()


//  codeH       ----我们把constructor加上去
// function Person() {
//
// }
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName : function() {
//     alert(this.name);
//   }
// };
//
// var friend = new Person();
// alert(friend instanceof Object);      // true
// alert(friend instanceof Person);      // true
// alert(friend.constructor == Person);  // true
// alert(friend.constructor == Object);  // false


//  上面的代码又存在一个问题，通过这种方法重设constructor属性会导致会导致它的Enumerable被设为true
//  但是原生的constructor为不可枚举的



//  codeI       ----重设constructor的Enumerable
// function Person() {
//
// }
// Person.prototype = {
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName : function() {
//     alert(this.name);
//   }
// };
//
// Object.defineProperty(Person.prototype, "constructor", {
//   enumerable: false,
//   value: Person
// });



// 原型的动态性
// function Person() {
//
// }
//
// var friend = new Person();
//
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName: function() {
//     alert(this.name);
//   }
// };
//
// friend.sayName();

// 上面的代码重写过原型对象以后，Person.prototype和friend实例的[prototype]和__proto__指向的原型对象是不同的




//  原型对象存在的问题
// function Person() {
//
// }
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   friends: ["Shelby", "Court"],
//   sayName: function() {
//     alert(this.name);
//   }
// };
//
// var person1 = new Person();
// var person2 = new Person();
// person1.friends.push("Van");
// alert(person1.friends);       //  "Shelby,Court,Van"
// alert(person2.friends);       //  "Shelby,Court,Van"
// alert(person1.friends == person2.friends);    // true

//  改变了person1的friends，但是person2的friends也发生了变化，这样非常不好



//  6.2.4 组合使用构造函数模式和原型模式
//  这种构造函数和原型混成的模式，是目前使用最广泛，认同度最高的一种
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.friends = ["Shelby", "Court"];
// }
//
// Person.prototype = {
//   constructor: Person,
//   sayName: function() {
//     alert(this.name);
//   }
// }
//
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Grey", 27, "Doctor");
//
// person1.friends.push("Van");
// alert(person1.friends);                       //  "Shelby,Court,Van"
// alert(person2.friends);                       //  "Shelby,Court"
// alert(person1.friends === person2.friends);   //  false
// alert(person1.sayName === person2.sayName);   // true



// 6.2.5动态原型模式
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   // 方法
//   if (typeof this.sayName != "function") {
//     Person.prototype.sayName = function() {
//       alert(this.name);
//     };
//   }
// }
// var friend = new Person("Nicholas", 29, "Software Engineer");
// friend.sayName();

//  使用动态原型模式时，不能使用对象字面量重写原型，否则会切断现有实例和新原型之间的联系，具体代码参考codeG



//  6.2.6寄生构造函数模式

// function Person(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.sayName = function() {
//     alert(this.name);
//   };
//   return o;
// }
//
// var friend = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Grey", 27, "Doctor");
// alert(friend.sayName == person2.sayName);     // false
// friend.sayName();   // Nicholas

//  这个模式可以再特殊的情况系用来为对象创建构造函数
// function SpecialArray() {
//   var values = new Array();
//   values.push.apply(values, arguments);
//   values.toPipedString = function() {
//     return this.join("|");
//   };
//   return values;
// }
//
// var colors = new SpecialArray("red", "blue", "green");
// alert(colors.toPipedString());        // "red|blue|green"


// 6.2.7稳妥构造函数模式
// 适合在一些安全的环境中使用，这些环境中禁止使用this和new
// 使用这种方法创建的对象与构造函数之间没有什么关系
// function Person(name, age, job) {
//   // 创建要返回的对象
//   var o = new Object();
//   // 可以再这里定义私有变量和函数
//
//   // 添加方法
//   o.sayName = function() {
//     alert(name);
//   };
//
//   // 返回对象
//   return o;
// }
//
// var friend = new Person("Nicholas", 29, "Software Engineer");
// friend.sayName();   // Nicholas
