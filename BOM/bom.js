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

//使用超时调用示例--------这个例子和上面的作用相同，只是使用的不同的函数
//最好使用超时调用
// var num = 0;
// var max = 10;
// function incrementNumber() {
//   num++;
//   if (num < max) {
//     setTimeout(incrementNumber, 500);
//   } else {
//     alert("Done");
//   }
// }
// setTimeout(incrementNumber, 500);


//查询字符串参数---感觉这里书上使用逗号不太对呀
// 逗号是对的，这里一次性命名了多个变量
// function getQueryStringArgs() {
//   var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
//   args = {},
//   items = qs.length ? qs.split("&") : [],
//   item = null,
//   name = null,
//   value = null,
//   i = 0,
//   len = items.length;
//
//   for( i = 0; i < len; i++) {
//     item = items[i].split("=");
//     name = decodeURIComponent(item[0]);
//     value = decodeURIComponent(item[1]);
//     if (name.length) {
//       args[name] = value;
//     }
//   }
//   return args;
// }
//
// //使用示例--假设查询字符串是 ?q=javascript&num=10
// var args = getQueryStringArgs();
// alert(args["q"]);                   // javascript
// alert(args["num"]);                 // 10



// 检测插件(在IE中无效)
function hasPlugin(name) {
  name = name.toLowerCase();
  for (var i = 0; i < navigator.plugins.length; i++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
      return true;
    }
  }
  return false;
}

// alert(hasPlugin("Flash"));
// alert(hasPlugin("QuickTime"));


// 检测IE中的插件
function hasIEPlugin(name) {
  try {
    new ActiveXObject(name);
    return true;
  } catch (e) {
    return false;
  }
}
// alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
// alert(hasIEPlugin("QuickTime.QuickTime"));


// 检测所有浏览器中的Flash
function hasFlash() {
  var result = hasPlugin("Flash");
  if (!result) {
    result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
  }
  return result;
}

// 检测所有浏览器中的QuickTime
function hasQuickTime() {
  var result = hasPlugin("QuickTime");
  if (!result) {
    result = hasIEPlugin("QuickTime.QuickTime");
  }
  return result;
}

// 检测Flash
alert(hasFlash());
// 检测QuickTime
alert(hasQuickTime());
