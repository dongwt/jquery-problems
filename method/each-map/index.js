//两者的区别
//map()方法会返回一个新的数组。如果在没有必要的情况下使用map，则有可能造成内存浪费。
//each()在回调函数中返回false终止循环,map()则不可以
//map()会返回一个新的数组,each()返回的是原来的数组，并不会新创建一个数组


var arrs = [0, 1, 2, 3, 4];
var obj = {
    name: "tom",
    age: 12,
    degree: 30,
    sex: "男"
}

console.log("================$.map()循环================");
//循环数组
console.log("数组循环");
$.map(arrs, function (item, index) {
    console.log(item + "    " + index);
})

//对象循环
console.log("对象循环");
var newMapArrs = $.map(obj, function (item, key) {
    console.log(item + "    " + key);
    return key;
})
console.log("newMapArrs:" + JSON.stringify(newMapArrs));



console.log("================$.each()循环================");
//循环数组
console.log("数组循环");
$.each(arrs, function (item, index) {
    console.log(item + "    " + index);
})

//对象循环
console.log("对象循环");
var oldEachArrs = $.each(obj, function (item, key) {
    console.log(item + "    " + key);
})
console.log("oldEachArrs:" + JSON.stringify(oldEachArrs));
