/**
 * Created by LENOVO on 2016/4/11.
 */
//boolean
var flag = false;
//string
var name = "alvin";
//number
var age = 22;
// '`'中时使用${} 表达式
var str = "hello" + name;
//array
var arr = ["1", '2'];
var arr1 = [1, 2, 3];
var arr2 = [true, false];
//元组 初始化的时候顺序必须正确,
var tuple = ["1", 2]; //ok
//var tuple:[string,number]= [1, "2"];//error
tuple = ["1", 2]; //ok
tuple[2] = 11;
tuple[2] = "23";
//tuple[5]=true;//error
console.info(tuple[2].toString);
//必须每个类型都有的方法才可以调用
//console.info(tuple[2].substr(1)); //error
var tuple1;
tuple1 = ['2', 3, true];
//enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GRENN"] = 1] = "GRENN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var co = Color.BLUE;
//打印下标
console.info("枚举" + co);
//指定下标
var Color1;
(function (Color1) {
    Color1[Color1["RED"] = 3] = "RED";
    Color1[Color1["GREEN"] = 6] = "GREEN";
    Color1[Color1["BLUE"] = 9] = "BLUE";
})(Color1 || (Color1 = {}));
;
var co1 = Color1.RED;
var co2 = Color1.BLUE;
console.info("枚举" + co1);
console.info("枚举" + co2);
//# sourceMappingURL=BasicTypes.js.map