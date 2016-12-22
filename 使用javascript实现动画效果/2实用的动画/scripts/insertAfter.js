// 在目标标签后面插入新的标签（已封装好）
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
