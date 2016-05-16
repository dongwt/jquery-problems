//typeof vs instanceof
//1.typeof用以获取一个变量或者表达式的类型，typeof一般只能返回如下几个结果：
//  number,boolean,string,function（函数）,object（NULL,数组，对象）,undefined。
//2.instanceof用于判断一个变量是否某个对象的实例

//对于值类型，你可以通过typeof判断，string/number/boolean都很清楚，
//但是typeof在判断到引用类型的时候，返回值只有object/function，
//你不知道它到底是一个object对象，还是数组，还是new Number等等。
//这个时候就需要用到instanceof


//Instanceof运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B。
//Instanceof的判断队则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，
//如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。

//instanceof表示的就是一种继承关系，或者原型链的结构

console.log("typeof");
console.log("undefined:" + typeof undefined);
console.log("NULL:" + typeof null);
console.log("Array:" + typeof new Array());
console.log("Object:" + typeof new Object());
console.log("function:" + typeof function () {
    });
console.log("a:" + typeof a);
console.log("$('input').val():" + typeof($('input').val()));
console.log("0:" + typeof(0));

console.log("instanceof");
console.log("new Array() instanceof Array:" + (new Array() instanceof Array));
console.log("new Array() instanceof Array:" + (new Array() instanceof Object));


console.log("Object instanceof Function:" + (Object instanceof Function));
console.log("Function instanceof Object:" + (Function instanceof Object));
console.log("Function instanceof Function:" + (Function instanceof Function));



