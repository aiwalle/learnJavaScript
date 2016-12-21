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
