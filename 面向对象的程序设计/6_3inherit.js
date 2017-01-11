//6.3.1 原型链-----具体参考印象笔记第5条
// function SuperType() {
//   this.property = true;
// }
//
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// };
//
// function SubType() {
//   this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();
//
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// };
//
//
// var instance = new SubType();
// alert(instance.getSuperValue());     // true
//
// //  当调用instance.getSuperValue() 会经历三个搜索步骤：
// //  1.搜索实例
// //  2.搜索SubType.prototype
// //  3.搜索SuperType.prototype,最后一步才会找到该方法
//
//
//
//
// //  确定原型和实例的关系
// alert(instance instanceof Object);      // true
// alert(instance instanceof SuperType);   // true
// alert(instance instanceof SubType);     // true
//
// alert(Object.prototype.isPrototypeOf(instance));        // true
// alert(SuperType.prototype.isPrototypeOf(instance));     // true
// alert(SubType.prototype.isPrototypeOf(instance));       // true


//  6.3.3 谨慎的定义方法
// function SuperType() {
//   this.property = true;
// }
//
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// };
//
// function SubType() {
//   this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();
//
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// };
//
// //  重写超类型中的方法
// SubType.prototype.getSuperValue = function() {
//   return false;
// };
//
// var instance = new SubType();
// alert(instance.getSuperValue());     // false





// warn: 不能使用对象字面量创建原型方法
// function SuperType() {
//   this.property = true;
// }
//
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// };
//
// function SubType() {
//   this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();
//
// SubType.prototype = {
//   getSubValue : function() {
//     return this.subproperty;
//   },
//   someOtherMethod : function() {
//     return false;
//   }
// };
// // 现有的原型包含一个Object的实例，而不是SuperType的实例，因此原型链被切断了，SubType和SuperType没关系了
//
// var instance = new SubType();
// alert(instance.getSuperValue());     // error



//  原型链存在的问题-----在这里修改了instance1，instance2的属性也发生了改变
//  子类型不能向超类型传递参数
// function SuperType() {
//   this.colors = ["red", "blue", "green"];
// }
// function SubType() {
//
// }
//
// // 继承了SuperType
// SubType.prototype = new SuperType();
//
// var instance1 = new SubType();
// instance1.colors.push("black");
// alert(instance1.colors);          //red,blue,green,black
//
// var instance2 = new SubType();
// alert(instance2.colors);          //red,blue,green,black



// 6.3.2 借用构造函数实现继承--------这种技术很少单独使用
// function SuperType() {
//   this.colors = ["red", "blue", "green"];
// }
// function SubType() {
//   //  基础了SuperType
//   SuperType.call(this);
// }
//
// // 继承了SuperType
// SubType.prototype = new SuperType();
//
// var instance1 = new SubType();
// instance1.colors.push("black");
// alert(instance1.colors);          //red,blue,green,black
//
// var instance2 = new SubType();
// alert(instance2.colors);          //red,blue,green


// 6.3.2.1传递参数
// function SuperType(name) {
//   this.name = name;
// }
// function SubType() {
//   // 继承了SuperType，同时还传递了参数
//   SuperType.call(this, "Nicholas");
//
//   // 实例属性
//   this.age = 29;
// }
//
// var instance = new SubType();
// alert(instance.name);           // Nicholas
// alert(instance.age);            // 29






//6.3.3  组合继承--------javascript中最常用的继承模式
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
//
// SuperType.prototype.sayName = function() {
//   alert(this.name);
// };
//
// function SubType(name, age) {
//   // 继承属性
//   SuperType.call(this, name);
//   this.age = age;
// }
//
// // 继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function() {
//   alert(this.age);
// };
//
// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// alert(instance1.colors);                    // red,blue,green,black
// instance1.sayName();                        // Nicholas
// instance1.sayAge();                         // 29
//
// var instance2 = new SubType("Grey", 27);
// alert(instance2.colors);                    // red,blue,green
// instance2.sayName();                        // Grey
// instance2.sayAge();                         // 27



// 6.3.4 原型式继承
// 下面的这种方法已过期
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
//
// var anotherPerson = object(person);
// anotherPerson.name = "Grey";
// anotherPerson.friends.push("Rob");
//
// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// alert(person.friends);


// 6.3.4.1原型式继承creat
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
//
// var anotherPerson = Object.create(person);
// anotherPerson.name = "Grey";
// anotherPerson.friends.push("Rob");
//
// var yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// alert(person.friends);


// 6.3.4.2
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
// var anotherPerson = Object.create(person, {
//   name: {
//     value: "Grey"
//   }
// });
//
// alert(anotherPerson.name);        // Grey



// 6.3.5寄生式继承
// object方法已过期
// function createAnother(original) {
//   var clone = object(original);
//   clone.sayHi = function() {
//     alert("hi");
//   };
//   return clone;
// }
//
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
//
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi();



// 6.3.6寄生组合式继承
function SuperType(name) {
  this.name = name;
  thiscolors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
  alert(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);                    // 第二次调用SuperType()
  this.age = age;
}

// SubType.prototype = new SuperType();            // 第一次调用SuperType()
// SubType.prototype.constructor = SubType;
inheritProtorype(SubType, SuperType);
SubType.prototype.sayAge = function() {
  alert(this.age);
};

function inheritProtorype(subType, superType) {
  var prototype = object(superType.prototype);    // 创建对象
  prototype.constructor = subType;                // 增强对象
  subType.prototype = prototype;                  // 指定对象
}
