interface IOptions{
    method?:'get' | 'post' | 'put' | 'delete'
    headers?:any

    [prop:string]:any
}

type DateType = string | number | Date

export class Utils{
    // 格式化时间
    formatDate(date:DateType){

    }

    formatParams(){

    }

    // 静态方法
    static request(url:string,data?:object,options:IOptions={}){
        return fetch(url,{
            ...options
        }).then(res=>res.json())
    }
}

export default new Utils()