// 数组类型
// * 元素类型[] ： var arr:number[]
// * 泛型

const arr1: number[] = [10, 20, 30]
const arr2: Array<string> = ['laoxie', 'tiantian']


// 元组Tuple
// 类似于数组，是一个明确元素数量和类型的数组，各元素的类型不必相同，一般用于函数返回值
// let arr3:(string|number|boolean)[] = ['laoxie', 18, false]
let arr3:[string,number,boolean] = ['laoxie',18,false]

// 复杂数据类型
interface IGoodslist{
    name:string
    price:number
    oldPrice?:number
    imgurl:string
    xiajia?:boolean
}
let goodslist:IGoodslist[] = [
    {name:'goods1',price:198,oldPrice:2998,imgurl:'img/goods1.jpg'},
    {name:'goods2',price:1198,imgurl:'img/goods1.jpg'}
]