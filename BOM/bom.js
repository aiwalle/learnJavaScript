// 确定浏览器窗口的大小
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;


if (typeof pageWidth != "number") {
  if (document.compatMode == "CSS1Compat") {
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;
  } else {
    pageWidth = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}

// 间歇调用和超时调用
// setTimeout(function() {
//   alert("Hello world!");
// }, 1000);

// 设置超时调用
// var timeoutId = setTimeout(function() {
//   alert("Hello world!");
// }, 1000);
// // 注意：把它取消
// clearTimeout(timeoutId);


// 间歇性调用
// setInterval( function() {
//   alert("Hello world!");
// }, 10000);

// 使用间歇性调用示例
// var num = 0;
// var max = 10;
// var intervalId = null;
// function incrementNumber() {
//   num++;
//   if (num == max) {
//     clearInterval(intervalId);
//     alert("Done");
//   }
// }
// intervalId = setInterval(incrementNumber, 500);

//使用超时调用示例
var num = 0;
var max = 10;
function incrementNumber() {
  num++;
  if (num < max) {
    setTimeout(incrementNumber, 500);
  } else {
    alert("Done");
  }
}
setTimeout(incrementNumber, 500);
