//1.变量、函数表达式——变量声明，默认赋值为undefined；
//2.this——赋值；
//3.函数声明——赋值；
//这三种数据的准备情况我们称之为“执行上下文”或者“执行上下文环境”。


function f1(){};

function Person(){
    this.name = "tom";
    this.age = 12;
}

Person.prototype.help = function(){

}

var person = new Person();

console.log("Object.prototype:" + typeof Object.prototype);
console.log("Function.prototype:" + typeof Function.prototype);

//环形结构
console.log("Function.__proto__ == Function.prototype  " + (Function.__proto__ == Function.prototype));
console.log("Function.__proto__ == Object.__proto__  " + (Function.__proto__ == Object.__proto__ ));


function printPrototypeChain(obj){
    var index = 1;
    while((obj = obj.__proto__)){
        console.log(index + ":");
        console.log(obj);
        index++;
    }
}

console.log("---------------new String(dongwt)-------------------");
printPrototypeChain(new String("dongwt"));
console.log("---------------new Array()-------------------");
printPrototypeChain(new Array());
console.log("---------------new Object()-------------------");
printPrototypeChain(new Object());
console.log("---------------Function-------------------");
printPrototypeChain(Function);
console.log("---------------Object-------------------");
printPrototypeChain(Object);

