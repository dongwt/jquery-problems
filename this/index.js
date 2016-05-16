var obj = {
  name: "tom",
  f1: function () {
    console.log("f1:");
    console.log(this);
    fn();
    //函数fn虽然是在obj.f1内部定义的，但是它仍然是一个普通的函数，this仍然指向window。
    function fn() {
      console.log("fn:");
      console.log(this);
    }
  }
};

obj.f1();


//如果构造函数不返回或返回基本数据类型,则构造函数返回对象本身,
//如果构造函数返回对象,则构造函数返回该对象
function  Person(){
  this.name="tom";
}
console.log("Person");
console.log(new Person());


function  Person1(){
  this.name="tom";
  return {name:"jerry"};
}
console.log("Person1");
console.log(new Person1());


function  Person2(){
  this.name="tom";
  return true;
}
console.log("Person2");
console.log(new Person2());
