//1、相同点:
//    a） 产生的效果或作用完全相同；
//    b） 至少有一个参数；
//    c） 第一个参数必须有且是一个对象（Object），因为就是这个家伙偷懒。
//2、不同点: 传递参数的方式。


function  Animal(){
    this.name = "Animal";
    this.showName = function(x,y){
        console.log(this.name + ": (" + x + "," + y + ")");
    }
}


function  Cat(){
    this.name = "Cat";
}

var animal = new Animal();
var cat = new Cat();

animal.showName.call(cat,1,2);

animal.showName.apply(cat,[1,2]);