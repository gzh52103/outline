// 对象类型检查
// * 接口interface：一个用于限定对象属性结构的类型

const goods1:{
    name:string
    price:number
} = {
    name:'goods1',
    price:1998
}

interface IGoods{
    // 定义属性
    name:string
    imgurl:string
    // 只读属性
    readonly price:number
    // 可选属性
    smallImgs?:string[]  // Array<string>
    oldPrice?:number  

    // 定义方法
    getPrice?:()=>number
    getImg?():string

    // 任意属性
    [prop:string]:any
}

const goods2:IGoods = {
    name:'goods2',
    price:998,
    imgurl:'img/goods2.jpg',
    // smallImgs:['asdfasd']
    oldPrice:2998,
    // getPrice(){
    //     return this.price;
    // },
    // getImg(){
    //     return 123
    // }
}

// goods2.price = 1998; // 只读属性