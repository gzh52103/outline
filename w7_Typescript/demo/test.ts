let price = 10;

// price = '100' // 报错

function sum(a:number, b:number):number {
    return a + b;
}

const res:number = sum(10,20);// 30
// 以下代码报错
// sum(10,'20');
// sum(10,20,30)
// sum(10)
