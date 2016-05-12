function f1(){};

function Person(){
    this.name = "tom";
    this.age = 12;
}

Person.prototype.help = function(){

}

var person = new Person();

//原型对象 其实就是 普通对象（Function.prototype除外,它是函数对象，但它很特殊，他没有prototype属性（前面说道函数对象都有prototype属性））
console.log("Object.prototype:" + typeof Object.prototype);
console.log("Function.prototype:" + typeof Function.prototype);


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

