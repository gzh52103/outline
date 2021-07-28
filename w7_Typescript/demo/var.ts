// 1. 基本类型
const username:string = 'laoxie';
const isDanshen:boolean = false;

// 2.联合类型
// let index:number|string = 1;
// let idx:number|string = 1;

// 4. 类型别名
type ns = number | string;
let index:ns = 1;
let idx:ns = 1;

// 3.字面量
// let age:number =18;
let age:18 = 18; // 等效于：const age:number=18
// age = 20;
// let gender:string = '男'; 
// let gender:'男'|'女'|'未知' = '男'; 
// gender = '未知'


// 5. 类型推论：ts会根据数据自动推断出变量的类型
let num1 = 100; // 等效于：let num1:number = 100;
// num1 = '100';

// 6. any类型：当声明一个变量不指定类型，也不赋值时，会得到any类型
// any类型变量不进行类型检查（与js一致）
let num2; // 
num2 = 1
num2 = '10'
num2 = true;

// 7. 特殊类型： void
function add():void{}
let a:void = undefined; // undefined
let b:null = null;
let c:undefined = undefined;

// let timer:null = null
// timer = setTimeout(()=>{}) ; // 报错
function forEach():never{
    // while(true){
    // }
    if(true){
        throw Error()
    }
}

forEach();

// 8. 枚举类型

enum Gender{
    Male='男',
    Female='女',
    Undefined='未知'
}


enum Code{
    Success=200,
    Fail=400,
    NoAccess=401,
}

let code:Code = Code.Success;
let gender:Gender