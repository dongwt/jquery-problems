(function($){
    "use strict";


    //set get 访问器

    //方法一
    function Person(){
        var age;
        Object.defineProperty(this,"age",{
            get:function(){
                return new Date().getFullYear() - age;
            },
            set:function(value){
                age = value;
            }
        })
    }

    var p = new Person();
    p.age = 1992;
    console.log("年龄:",p.age);



    //方法二
    function Field(val){
        this.value = val;
    }
    Field.prototype = {
        get value(){
            return this._value;
        },
        set value(val){
            this._value = val;
        }
    };
    var field = new Field("test");
    console.log("field.value= " + field.value);




})(jQuery)