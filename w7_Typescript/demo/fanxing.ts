// 算术运算
function add1(a: number, b: number): number {
    return a + b
}
// 字符串拼接
function add2(a: string, b: string): string {
    return a + b;
}

// 函数重载
function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:any,b:any):any{
    return a+b;
}
add(10,20);
add('a','b')
// add(10,'a')


function createNumberArray(item:number,length:number):number[]{
    return Array(length).fill(item);
}
function createStringArray(item:string,length:number):string[]{
    return Array(length).fill(item);
}
createNumberArray(10,3);// [10,10,10]
createStringArray('tt',5);['tt','tt','tt','tt','tt']

// 利用泛型编程一个函数实现以上功能
function createArray<T,U=any>(item:T,length:number):T[]{
    return Array(length).fill(item);
}
createArray(10,3); // 推论泛型
createArray<string>('tt',5); // 指定泛型


// 在类中使用泛型
class Person<T>{
    name:T;
    constructor(name:T){
        this.name = name
    }
}
const p = new Person<string>('laoxie')

// 在接口中使用泛型
interface IProps<C=any,T=string>{
    type:T
    children:C
}

const div:IProps<string,number> = {
    type:10,
    children:'hello'
}
const com:IProps<string,string> = {
    type:'component',
    children:'hello'
}

// 给元素添加事件
const button = document.querySelector('button');
(button as HTMLButtonElement).onclick = function(){

}
