function insertParagraph(text) {
  var str = "<p>";
  str += text;
  str += "</p>";
  document.write(str);
}

// 直接插入innerHTML
// window.onload = function() {
//   var testdiv = document.getElementById("testdiv");
//   // alert(testdiv.innerHTML);
//   testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }

// 查看p标签的nodeName和nodeType
// window.onload = function() {
//   var para = document.createElement("p");
//   var info = "nodeName: ";
//   info += para.nodeName;
//   info += " nodeType: ";
//   info += para.nodeType;
//   alert(info);
// }

// 创建及插入p标签及内容
// window.onload = function() {
//   var para = document.createElement("p");
//   var testdiv = document.getElementById("testdiv");
//   testdiv.appendChild(para);
//   var txt = document.createTextNode("Hello world");
//   para.appendChild(txt);
// }

// 创建更多
window.onload = function() {
  var para = document.createElement("p");
  var txt1 = document.createTextNode("This is ");
  para.appendChild(txt1);
  var emphasis = document.createElement("em");
  var txt2 = document.createTextNode("my");
  emphasis.appendChild(txt2);
  para.appendChild(emphasis);
  var txt3 = document.createTextNode(" content.");
  para.appendChild(txt3);
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
}
