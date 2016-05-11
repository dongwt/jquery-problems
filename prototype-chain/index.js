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

