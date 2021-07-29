/**
 * 类型断言： 
 */
let userInfo = localStorage.getItem('userInfo'); // string,null
let user:object;

// const JSON = { 
//     parse(text:string){

//     }
// }

try{
    user = JSON.parse(userInfo as string) || {}
}catch(err){
    user = {}
}

let arr:number[] = [10,20,30]
let num = arr.find(item=>item>10);
let res1 = (num as number) + 1;