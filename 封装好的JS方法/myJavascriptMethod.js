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

// 在目标标签后面插入新的标签（已封装好）
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
