/** 基本类型
 * Created by LENOVO on 2016/4/11.
 */
//boolean
var flag = false;
//string
var name1 = "alvin";
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
//let tuple:[string,number]= [1, "2"];//error
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
var co3 = Color1[3];
console.info("枚举" + co1);
console.info("枚举" + co2);
console.info("枚举" + co3);
//any
var any1 = 1;
any1 = "323";
any1 = false;
any1 = [1, 2, "3"];
any1 = Color[1];
console.info(any1);
//void
function info() {
    console.info(11);
    //return "1";//error
}
;
var vi = null;
var vi1 = undefined;
//类型断言
// 1 使用尖括号
var a1 = "12312";
var a2 = a1;
console.info(a2.length);
// 2 使用as关键字(如果typescipt跟JSX一起使用，那么只可以使用as 关键字)
var a3 = a1;
console.info(a3.length);
//# sourceMappingURL=BasicTypes.js.map