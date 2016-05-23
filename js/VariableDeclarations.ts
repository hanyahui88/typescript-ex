/** 结构
 * Created by LENOVO on 2016/4/13.
 */
//以前js使用 var关键字来声明变量，，但这个有很多问题，比如作用域
function f(shouldInitialize:boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}
for (var i = 0; i < 10; i++) {
    //setTimeout(function() {console.log(i); }, 100 * i);
}
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        //setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
//let 关键字和var一样，但是语义更加符合

function ff(input:string) {
    let a = 10;
    if (input) {
        let b = a + 1;
        return b;
    }
    //return b;//b在if作用域中，外面不能访问
}
try {
    throw "oh no!";

} catch (e) {
    //console.error(e);
}
//console.info(e);// error
//a++;  //必须先声明才能使用
//let a;

let x = 10;
//let x=20;// 不能重复声明
/**
 * 内外层循环用的不是同一个变量名
 * @param matrix
 * @returns {number}
 */
function sumMatrix(matrix:number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        //console.info("outer"+i);
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
            //console.info("inner"+i);
        }
    }

    return sum;
}
sumMatrix([[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]]);

function theCityThatAlwaysSleeps() {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }
    //for (let i = 0; i < 10 ; i++) {
    //    setTimeout(function() {console.log(i); }, 100 * i);
    //}
    return getCity();
}
theCityThatAlwaysSleeps();

//const
const numLivesForCat = 9;
//numLivesForCat=10;//值类型不能被重复赋值  引用类型不能修改引用，但是可以修改属性的值
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error//不能被重复赋值
//kitty = {
//    name: "Danielle",
//    numLives: numLivesForCat
//};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

console.info(kitty);
////////////////Array destructuring//////////////////
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];

[first, second] = [second, first]; //交换数据

console.log(first); // outputs 2
console.log(second); // outputs 1
function fff([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
//let param=[0,2];//error
let param:[number,number] = [0, 2];
fff(param);

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first2] = [1, 2, 3, 4];
console.log(first2); // outputs 1
let [, second1, , fourth] = [1, 2, 3, 4];
console.info(second1);
//////////////////Object destructuring/////////////////////
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
console.info('a:' + o.a + 'b:' + o.b + "c:" + o.c);
let {a, b} = o; //复制o对象中，对应的属性
console.info(a, b);

({a, b} = {a: "baz", b: 101});  //给a，b重新赋值
console.info(a, b);
//Property renaming

let {a:newName1,b:newName2}=o;//把o对象的a，b属性给重命名  //无效
console.info(o);
let newNamea = o.a;
let newNameb = o.b;
console.info(o);
///////Default values//////   b是可有可无
function keepWholeObject(wholeObject:{a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
    let {a:aa,b:bb}=wholeObject; // 无效
    console.info(wholeObject);
}
//字段名称必须一致
keepWholeObject({a: "1", b: 2});
keepWholeObject({a: "1"});

////////////Function declarations///////////////////
type C={a:string,b?:number};
function fun({a,b}:C):void {
    console.info(a, b);
}
fun({a: "1"});
fun({a: "1", b: 1});

function fun1({a,b}={a:"1", b:"3"}):string {
    return a + b;
}
console.info(fun1());
console.info(fun1({a:"1",b:"2"}));

function fun2({a, b = 0} = {a: ""}): void {

}
fun2({a: "yes"}) // ok, default b = 0
fun2() // ok, default to {a: ""}, which then defaults b = 0
//fun2({}) // error, 'a' is required if you supply an argument

