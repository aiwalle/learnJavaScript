var EventUtil = {
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  getEvent: function(event) {
    return event ? event : window.event;
  },
  getTarget: function(event) {
    return event.target || event.srcElement;
  },
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  removeHandler: function(element, type, handler) {
    // 省略的代码
  },
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  getRelatedTarget: function(event) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },
  getButton: function(event) {
    if (document.implementation.hasFeature("MouseEvents", "2.0")) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
            return 0;
        case 2:
        case 6:
            return 2;
        case 4:
            return 1;
      }
    }
  },
  getWheelDelta: function(event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
    } else {
      return -event.detail * 40;
    }
  },
  getCharCode: function(event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  }
}



// 以下的代码为义务逻辑代码


// 确定浏览器是否支持DOM3级时间规定的HTML事件
// var isSupported = document.implementation.hasFeature("UIEvent", "3.0");
//
// // 确定浏览器是否支持DOM2级时间规定的HTML事件
// var isSupported = document.implementation.hasFeature("UIEvent", "2.0");
//
// EventUtil.addHandler(window, "load", function() {
//   var image = document.createElement("img");
//   EventUtil.addHandler(image, "load", function(event) {
//     event = EventUtil.getEvent(event);
//     // alert(EventUtil.getTarget(event).src);
//   });
//   document.body.appendChild(image);
//   image.src = "images/smile.gif";
// });
//
// // resize
// EventUtil.addHandler(window, "resize", function(event) {
//   // alert("Resized");
// });
//
// EventUtil.addHandler(window, "load", function() {
//   var script = document.createElement("script");
//   EventUtil.addHandler(script, "load", function(event) {
//     // alert("Loaded");
//   });
//   script.src = "example.js";
//   document.body.appendChild(script);
// });
//
// // load
// EventUtil.addHandler(window, "load", function() {
//   var link = document.createElement("link");
//   link.type = "text/css";
//   link.rel = "stylesheet";
//   EventUtil.addHandler(link, "load", function(event) {
//     // alert("css loaded");
//   });
//   link.href = "example.css";
//   document.getElementsByTagName("head")[0].appendChild(link);
// });
//
// // unload
// EventUtil.addHandler(window, "unload", function() {
//   // alert("Unloaded");
// });
//
// EventUtil.addHandler(window, "scroll", function(event) {
//   if (document.compatMode == "CSS1Compat") {
//     alert(document.documentElement.scrollTop);
//   } else {
//     alert(document.body.scrollTop);
//   }
// });
//
// // 焦点事件
// var isSupported = document.implementation.hasFeature("FocusEvent", "3.0");


// 获取鼠标事件的坐标信息
// var div = document.getElementById("myDiv");
// EventUtil.addHandler(div, "click", function(event) {
//   event = EventUtil.getEvent(event);
//   alert("Client coordinates: " + event.clientX + "," + event.clientY);
// });
