(function () {
    //'use strict';
    //1.全局变量
    //在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。
    i = 0;

    //2.eval作用域
    //正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。
    //正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。
    var x = 2;
    console.log(eval("var x = 5;"));
    console.log(x);


    //3.禁止this关键字指向全局对象
    function getThis(){
        //因为"this"指向全局对象，"!this"就是false
        console.log("no use strict: " + !this);
    }

    function  getThisUseStrict(){
        "use strict";
        //因为严格模式下，this的值为undefined，所以"!this"为true。
        console.log("use strict: " + !this);
    }


    getThis();
    getThisUseStrict();


    //使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。
    function ThisObj(){
        //"use strict";
        this.a = 1;
    }


    ThisObj();


    //禁止在函数内部遍历调用栈
    function f1(){
        //"use strict";
        f1.caller; // 报错
        f1.arguments; // 报错
    }
    f1();


    //严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除。
    function f2(){
        //"use strict";
        var x;
        delete x; // 语法错误
        var o = Object.create(null, {'x': {
            value: 1,
            configurable: true
        }});
        delete o.x; // 删除成功
    }
    f2();

    //正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。
    function f3(){
        //"use strict";
        var o = {};
        Object.defineProperty(o, "v", { value: 1, writable: false });
        o.v = 2; // 报错
    }
    f3();


    //严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。
    function f4(){
        "use strict";
        var o = {
            get v() { return 1; }
        };
        //o.v = 2; // 报错
    }
    f4();

    //严格模式下，对禁止扩展的对象添加新属性，会报错。
    function f5(){
        //"use strict";
        var o = {};
        Object.preventExtensions(o);
        o.v = 1; // 报错
    }
    f5();

    //严格模式下，删除一个不可删除的属性，会报错。
    function f6(){
        //"use strict";
        delete Object.prototype; // 报错
    }
    f6();


    //正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。
    function f7(){
        //"use strict";
        var o = {
            p: 1,
            p: 2
        }; // 语法错误
    }
    f7();


    //正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。
    function f8(){
        //"use strict";
        function f(a, a, b) { // 语法错误
            return ;
        }
    }
    f8();


    //正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示法，整数第一位为0，将报错。
    function f9(){
        //"use strict";
        var n = 0100; // 语法错误
    }
    f9();


    //函数必须声明在顶层
    //将来Javascript的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。
    function f10(){
        //"use strict";
        if (true) {
            function f() { } // 语法错误
        }
        for (var i = 0; i < 5; i++) {
            function f2() { } // 语法错误
        }
    }
    f10();


    //保留字
    //为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。
    function package(protected) { // 语法错误
        //"use strict";
        var implements; // 语法错误
    }




})(jQuery);