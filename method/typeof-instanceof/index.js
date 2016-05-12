//typeof vs instanceof
//1.typeof用以获取一个变量或者表达式的类型，typeof一般只能返回如下几个结果：
//  number,boolean,string,function（函数）,object（NULL,数组，对象）,undefined。
//2.instanceof用于判断一个变量是否某个对象的实例

//对于值类型，你可以通过typeof判断，string/number/boolean都很清楚，
//但是typeof在判断到引用类型的时候，返回值只有object/function，
//你不知道它到底是一个object对象，还是数组，还是new Number等等。
//这个时候就需要用到instanceof

console.log("typeof");
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



