function positionMessage() {
  if (!document.getElementById) return false;
  if (!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  // movement = setTimeout("moveMessage()", 5000);
  moveElement("message", 555, 555, 10);

  if (!document.getElementById("message2")) return false;
  var elem2 = document.getElementById("message2");
  elem2.style.position = "absolute";
  elem2.style.left = "50px";
  elem2.style.top = "50px";
  moveElement("message2", 300, 200, 20);
}

function moveMessage() {
  if (!document.getElementById) return false;
  if (!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  // elem.style.left = "200px";
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == 200 && ypos == 100) {
    return true;
  }
  if (xpos < 200) {
    xpos++;
  }
  if (xpos > 200) {
    xpos--;
  }
  if (ypos < 100) {
    ypos++;
  }
  if (ypos > 100) {
    ypos--;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  movement = setTimeout("moveMessage()", 10);
}



addLoadEvent(positionMessage);
// addLoadEvent(moveMessage);
