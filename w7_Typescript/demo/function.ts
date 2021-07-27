// 函数类型
// * 可选参数：?
// * 默认值：与js一致

// 1. 声明式定义函数
// * 参数类型
// * 返回值类型
function sum(a:number,b:number):number{
    // let a,b
    return a+b;
}

sum(10,20);
// sum(10,'20');

// 2.赋值式定义函数
// * 参数类型
// * 返回值类型
// * 变量类型
const getData = function(url:string,page:number=1,size?:number):void{

}

getData('/api/goods',1,10)
getData('/api/goods',1)
getData('/api/goods')

// 剩余参数：与js一致
function add(a:number,...rest:number[]){
    return a + rest.reduce((prev:number,item:number)=>prev+item,0)
}
add(1,2);//3
add(1,2,3) // 6
add(1,2,3,4) // 10