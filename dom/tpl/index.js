var tpl = '<p><span></span><a></a></p>';
var __list1 = $('[dwt-data="list1"]');

__list1.append("==========list1==========");
for(var i=0; i<5; i++){
    var __tpl = $(tpl);
    if(i%2 == 0){
        __tpl.find("a").append("偶数");
    }else{
        __tpl.find("span").append("奇数");
    }
    __list1.append(__tpl);
}



var __list2 = $('[dwt-data="list2"]');
__list2.append("==========list2==========");
for(var i=0; i<5; i++){
    var item = document.createElement('p');
    var span = document.createElement('span');
    var a = document.createElement('a');
    if(i%2 == 0){
        $(a).append("偶数");
    }else{
        $(span).append("奇数");
    }
    $(item).append(a);
    $(item).append(span);
    __list2.append(item);
}