// 递归


// 闭包和变量
// function createFunctions() {
//   var result = new Array();
//   for (var i = 0; i < 10; i++) {
//     result[i] = function() {
//       return i;
//     };
//   }
//   return result;
// }
// // 这里return的这个i是唯一的，最终的i为10，result数组中每个返回的数字都为10
//
// createFunctions();


// 对上面的进行改进，改进后的代码每个数组元素都为对应的值
// function createFunctions() {
//   var result = new Array();
//   for (var i = 0; i < 10; i++) {
//     result[i] = function(num) {
//       return function() {
//         return num;
//       };
//     }(i);
//   }
//   return result;
// }
//
// var resultArr = createFunctions();


// 关于this对象
// var name = "The Window";
// var object = {
//   name : "My Object",
//   getNameFunc : function() {
//     return function() {
//       return this.name;
//     };
//   }
// };
//
// alert(object.getNameFunc()());     // The Window

// 在内部保存this
// var name = "The Window";
// var object = {
//   name : "My Object",
//   getNameFunc : function() {
//     var that = this;
//     return function() {
//       return that.name;
//     };
//   }
// };
//
// alert(object.getNameFunc()());      // My Object

// 在特殊情况下，this的值可能会意外的改变
// var name = "The Window";
// var object = {
//   name : "My Object",
//   getName : function() {
//     return this.name;
//   }
// };
//
// object.getName();                     // "My Object"
// (object.getName)();                   // "My Object"
// (object.getName = object.getName());  // "The Window"



// 内存泄漏----下面的代码会产生内存泄漏
// function assignHandler() {
//   var element = document.getElementById("someElement");
//   element.onclick = function() {
//     alert(element.id);
//   }
// }

// 下面的代码不会产生内存泄漏
function assignHandler() {
  var element = document.getElementById("someElement");
  var id = element.id;
  element.onclick = function() {
    alert(id);
  };
  element = null;
}
