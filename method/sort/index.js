var arr = [1,3,2,9,5,4,7,0];

console.log("before:" + arr);

arr.sort(function(a,b){
    console.log("a=" + a + "; b=" + b + "  a-b=" + (a-b));
    return a-b;
})

console.log("after:" + arr);