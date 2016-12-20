// window.onload = countBodyChildren();    //这种只能绑定一个方法

// 这种可以解决问题，但是性能不佳
// window.onload = function() {
//   countBodyChildren();
//   prepareGallery();
// }

// 在文档加载时添加的方法（已封装好）--这种比上面两种要好
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  }else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  alert(body_element.childNodes.length);
}

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
	   }
    links[i].onkeypress = links[i].onclick;
  }
}

function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","images/placeholder.gif");
  placeholder.setAttribute("alt","my image gallery");
  var description = document.createElement("p");
  description.setAttribute("id","description");
  var desctext = document.createTextNode("Choose an image");
  description.appendChild(desctext);
  //  第一种方式,不好
  // document.getElementsByTagName("body")[0].appendChild(placeholder);
  // document.getElementsByTagName("body")[0].appendChild(description);

  // 第二种方式，有局限性
  // var gallery = document.getElementById("imagegallery");
  // gallery.parentNode.insertBefore(placeholder, gallery);
  // gallery.parentNode.insertBefore(description, gallery);

  // 第三种方式
  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}

// 在目标标签后面插入新的标签（已封装好）
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
