//从DOM中删除所有匹配的元素。
//这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。
//与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。


var test = $("#test").find("p").detach();
$("#test1").prepend(test);


//end
//回到最近的一个"破坏性"操作之前。即，将匹配的元素列表变为前一次的状态。
//如果之前没有破坏性操作，则返回一个空集。所谓的"破坏性"就是指任何改变所匹配的jQuery元素的操作。这包括在 Traversing 中任何返回一个jQuery对象的函数--'add', 'andSelf', 'children', 'filter', 'find', 'map', 'next', 'nextAll', 'not', 'parent', 'parents', 'prev', 'prevAll', 'siblings' and 'slice'--再加上 Manipulation 中的 'clone'。


var end = $("#test1").find("p").end();
console.log(end);