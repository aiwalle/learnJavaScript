// 取得body元素
var body = document.querySelector("body");

var myDiv = document.querySelector("#myDiv");

var selected = document.querySelector(".selected");

var img = document.body.querySelector("img.button");





//  querySelectorAll()

var ems = document.getElementById("myDiv").querySelectorAll("em");

var selecteds = document.querySelectorAll(".selected");



var strongs = document.querySelectorAll("p strong");
// 取得每一个元素
var i, len, strong;
for (i = 0, len = strong.length; i < len; i++) {
  strong = strongs[i];
  strong.className = "important";
}


// matchesSelector
function matchesSelector(element, selector) {
  if (element.matchesSelector) {
    return element.matchesSelector(selector);
  } else if (element.msMatchesSelector) {
    return element.msMatchesSelector(selector);
  } else if (element.mozMatchesSelector) {
    return element.webkitMatchesSelector(selector);
  } else {
    throw new Error("Not support.");
  }
}

if (matchesSelector(document.body, "body.page1")) {
  // 执行操作
}




// 元素遍历
// 这里是旧的方法
var i, len, child = element.firstChild;
while (child != element.lastChild) {
  if (child.nodeType == 1) {
    processChild(child);
  }
  child = child.nextSibling;
}


// 这里是新的方法
// 新增的方法不会返回文本节点和注释，包括空格
var i, len, child = element.firstElementChild;
while (child != element.lastElementChild) {
  processChild(child);
  child = child.nextElementSibling;
}

// 与类相关的扩充
var allCurrentUsernames = document.getElementByClassName("username current");

var selected = document.getElementById("myDiv").getElementByClassName("selected");

// classList属性
// html

// 基于下面的代码我们要删除一个类名user

// <div class = "bd user disabled">hello world</div>
var classNames = div.className.split(/\s+/);

var pos = -1,
    i,
    len;
for (i = 0, len = classNames.length; i < len; i++) {
  if (classNames[i] == "user") {
    pos = i;
    break;
  }
}

classNames.splice(i, i);
div.className = classNames.join(" ");

// 下面我们使用html5新增加的方法，使用该方法上面所有的代码可以总结为一行代码--如下
div.classList.remove("user");


div.classList.remove("disabled");

div.classList.add("current");
div.classList.toggle("user");

if (div.classList.contains("bd") && !div.classList.contains("disabled")) {
  // 执行操作
}

// 迭代类名
for (var i = 0, len = div.classList.length; i < leng; i++) {
  doSomething(div.classList[i]);
}



// 焦点管理
var button = document.getElementById("myButton");
button.focus();
alert(document.activeElement === button);    // true


var button = document.getElementById("myButton");
button.focus();
alert(document.hasFocus());



// HTMLDocument 的变化
// readyState
if (document.readyState == "complete") {
  // 执行操作
}

// 兼容模式
if (document.compatMode == "CSS1Compat") {
  alert("Standards mode");
} else {
  alert("Quirks mode");
}



// head属性
// old
var head = document.head || document.getElementsByTagName("head")[0];

// new
document.head;




// 字符集属性
document.charset = "UTF-8";

// html
// <div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>

var div = document.getElementById("myDiv");
var appId = div.dataset.appId;
var myName = div.dataset.myname;

div.dataset.appId = 23456;
div.dataset.myname = "Michael";
if (div.dataset.myname) {
  alert("Hello, " + div.dataset.myname);
}


// 插入标记

// innerHTML
