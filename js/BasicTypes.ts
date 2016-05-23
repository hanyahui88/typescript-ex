/** 基本类型
 * Created by LENOVO on 2016/4/11.
 */
//boolean
let flag:boolean = false;
//string
let name1:string = "alvin";
//number
let age:number = 22;
// '`'中时使用${} 表达式
let str:string = `hello${name}`;

//array
let arr:string[] = ["1", '2'];
let arr1:number[] = [1, 2, 3];
let arr2:Array<boolean> = [true, false];

//元组 初始化的时候顺序必须正确,
let tuple:[string,number]= ["1", 2];//ok
//let tuple:[string,number]= [1, "2"];//error
tuple = ["1", 2]; //ok
tuple[2]=11;
tuple[2]="23";
//tuple[5]=true;//error
console.info(tuple[2].toString);
//必须每个类型都有的方法才可以调用
//console.info(tuple[2].substr(1)); //error
let tuple1:[string,number,boolean];
tuple1=['2',3,true];


//enum
enum Color {RED,GRENN,BLUE};
let co:Color=Color.BLUE;
//打印下标
console.info("枚举"+co);
//指定下标
enum Color1{RED=3,GREEN=6,BLUE=9};
let co1:Color1=Color1.RED;
let co2:Color1=Color1.BLUE;
let co3:string=Color1[3];
console.info("枚举"+co1);
console.info("枚举"+co2);
console.info("枚举"+co3);

//any

let any1:any=1;
any1="323";
any1=false;
any1=[1,2,"3"];
any1=Color[1];
console.info(any1);

//void
function info():void{
    console.info(11);
    //return "1";//error
};
let vi:void=null;
let vi1:void=undefined;

//类型断言
// 1 使用尖括号
let a1:any="12312";
let a2:string=<string>a1;
console.info(a2.length);
// 2 使用as关键字(如果typescipt跟JSX一起使用，那么只可以使用as 关键字)
let a3:string=a1 as string;
console.info(a3.length);









