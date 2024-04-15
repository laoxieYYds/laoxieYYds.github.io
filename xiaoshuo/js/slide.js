//取得一个对象，相当于getElementById()
function $() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if (typeof element == 'string') element = document.getElementById(element);
      Method.Element.apply(element);
      if (arguments.length == 1) return element;
      elements.push(element);
    }
    return elements;
  }
  
  
  //常用函数扩展
  var Method = {
      Element	: function(){
      },
  };
  
  