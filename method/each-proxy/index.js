//jQuery.proxy( function, context )
/**function将要改变上下文语境的函数。
 ** context函数的上下文语境(`this`)会被设置成这个 object 对象。
 **/
//jQuery.proxy( context, name )
/**context函数的上下文语境会被设置成这个 object 对象。
 **name将要改变上下文语境的函数名(这个函数必须是前一个参数 ‘context’ **对象的属性)
 **/


function Person() {
  this.name = "tom";
}
Person.prototype.doSomething = function () {
  console.log("doSomething: " + this.name);
}

var person  = new Person();

$.proxy(person,"doSomething")();

$(document).on("click", "[evt='click-me']", function (event) {
  setTimeout($.proxy(function () {
    if ($(this).hasClass("btn-primary")) {
      $(this).addClass("btn-danger");
      $(this).removeClass("btn-primary");
    } else {
      $(this).removeClass("btn-danger");
      $(this).addClass("btn-primary");
    }
  }, this), 1)
});

$.fn.doSomething = function(){
  var $this = this;
  return $this.each(function(){
    setTimeout(function(){
      $this.html("doSomething");
    },1000);
  })
}

$.fn.doOtherthing = function(){
  var $this = this;
  return $this.each(function(){
    setTimeout(function(){
      $this.html("doOtherthing");
    },2000);
  })
}

$('[evt="each"]').doSomething().doOtherthing();
