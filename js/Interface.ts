/** 接口
 * Created by LENOVO on 2016/4/15.
 */

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj:LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
//let myObj = {size: 10, label: 1};
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config:SquareConfig):{color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.info(newSquare);
    return newSquare;
}

let mySquare = createSquare({color: "black"});
createSquare({color: "black", width: 100});

/////////Excess Property Checks 接口中的属性/////////////
function createSquare1(config:SquareConfig):{color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.info(newSquare);
    return newSquare;
}

//createSquare1({colour: "black",width:100});//正常会报错
createSquare1({colour: "red", width: 1001} as SquareConfig);//转换下不会报错了，但是只有配置的字段才会有用 {color: "white", area: 1002001}
createSquare1({a: "red", b: 1002} as SquareConfig);//转换下 {color: "white", area: 100}

////////function type 接口中的方法////////
interface SearchFunc {
    (source:string, subString:string): boolean;
}
let mySearch:SearchFunc;
mySearch = function (source:string, subString:string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
//实现接口可以修改参数名称
let mySearch1:SearchFunc;
mySearch1 = function (src:string, sub:string):boolean {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.info(mySearch1("12345", "355"));
//实现接口可以不写参数类型
let mySearch2:SearchFunc;
mySearch2 = function (src, sub) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}

///////////接口中的数组//////////
//index的类型签名可以描述常用的数组或者是‘dictionary’（字典序）模式，这点会强制所有的属性都需要和其返回值匹配

//数组
interface StringArray {
    [index: number]: string;
}

let myArray:StringArray;
myArray = ["Bob", "Fred"];

//字典
interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    //name: string;      // error, the type of 'name' is not a subtype of the indexer
    a:number;
    b:number
}
let myArray1:NumberDictionary;
myArray1 = {
    "length": 1,
    "a": 2,
    "b": 3,
    "e": 4
}
console.info(myArray1);
//console.info(myArray1.e); //虽然报错但是可以执行 ，但是尽量不要这样
console.info(myArray1.a, myArray1['b']);

//类

interface  ClockInterface {
    currentDate:Date;
}
class ClockClass implements ClockInterface {
    currentDate:Date;

    constructor(date:Date) {
        this.currentDate = date;
        console.info(this.currentDate);
    }
}
let clock = new ClockClass(new Date());
console.info(clock);

interface ClockInterface1 {
    currentDate:Date;
    setTime(date:Date, str:string);
}
class ClockClass2 implements ClockInterface1 {
    currentDate:Date;

    setTime(date:Date, str:string) {
        console.info(str + ":" + date);
        console.info(this.currentDate > date);
    }
}
let clock1 = new ClockClass2();
clock1.setTime(new Date(), "现在");
//当我们使用类和接口，需要知道类是存在静态和实例的，这也就意味着如果你的接口如果存在构造方法并且需要一个类去实现，
// 那么你将会看到错误信息，比如下面这段。
//interface ClockConstructor {
//    new (hour: number, minute: number);
//}
//
//class Clock implements ClockConstructor {
//    currentTime: Date;
//    constructor(h: number, m: number) { }
//}
interface ClockConstructor1 {
    new (hour:number, minute:number);
}
class Clock3 {
    currentTime:Date;
    constructor(h:number, m:number) {
    }
}
let cc:ClockConstructor1 = Clock3;
let clock3=new cc(1,2);//给接口传入参数

interface ClockConstructor5 {
    new (hour: number, minute: number): ClockInterface5;
}
interface ClockInterface5 {
    tick();
}

function createClock(ctor: ClockConstructor5, hour: number, minute: number): ClockInterface5 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface5 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface5 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 7, 32);
analog.tick();

//Extending Interfaces  接口继承
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

interface Shape1 {
    color: string;
}

interface PenStroke1 {
    penWidth: number;
}

interface Square1 extends Shape1, PenStroke1 {
    sideLength: number;
}

let square1 = <Square1>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;

//Hybrid Types  混合类型  既是一个函数也是一个对象
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// Interfaces Extending Classes  接口扩展类

