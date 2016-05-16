//javascript在执行一个代码段之前，都会进行这些“准备工作”来生成执行上下文。
//这个“代码段”其实分三种情况——全局代码，函数体，eval代码。

//javascript没有块级作用域

//执行上下文：
//1.变量、函数表达式——变量声明，默认赋值为undefined；
//2.this——赋值；
//3.函数声明——赋值；

//函数在定义的时候（不是调用的时候），就已经确定了函数体内部自由变量的作用域
var a = 10;
function f1() {
  console.log(a);
}

function bar() {
  var a = 100;
  f1();
}

bar();


function f2(name) {
  console.log(arguments);
  console.log(name);
}

f2("tom");