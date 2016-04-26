var empty1 = {};
var obj1 = {"name":"tom","age":12,"sex":"男"};
var obj2 = {"name":"jerry","age":18,"sex":"女"};

var result1 = $.extend(empty1,obj1,obj2);
console.log("empty1:" + JSON.stringify(empty1));
console.log("result1:" + JSON.stringify(result1));




var empty2 = {};
var obj3 = {"name":"tom","age":12,"sex":"男",address:{a:"a",b:"b",c:"c",d:"f"}};
var obj4 = {"name":"jerry","age":18,"sex":"女",address:{a:"a",b:"b",c:"c"},'sport':undefined};

var result2 = $.extend(true,empty2,obj3,obj4);
console.log("empty2:" + JSON.stringify(empty2));
console.log("result2:" + JSON.stringify(result2));



var obj5 = {"name":"jerry","age":18,"sex":"女",address:{a:"a",b:"b",c:"c"},'sport':undefined};
var result3 = $.extend(obj5);
console.log("result3:" + JSON.stringify(result3));
console.log("$.name:" + $.name);
