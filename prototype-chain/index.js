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

