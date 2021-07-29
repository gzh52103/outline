// 算术运算
function add1(a: number, b: number): number {
    return a + b
}
// 字符串拼接
function add2(a: string, b: string): string {
    return a + b;
}

// function add3(a,b){
//     return a+b;
// }
// add3(10,20);
// add3('a','b')
// add3(10,'a')

const arr11: Array<number> = [10, 20, 30]
const arr12: Array<string> = ['a', 'b', 'c']

// 利用泛型变成实现add1与add2的效果
function add<T>(a: T, b: T): T {
    return a;
}

add<number>(10,20);
add<string>('10','20');