// window.onload = countBodyChildren();    //这种只能绑定一个方法

// 这种可以解决问题，但是性能不佳
// window.onload = function() {
//   countBodyChildren();
//   prepareGallery();
// }

// 这种比上面两种要好
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

addLoadEvent(prepareGallery);
