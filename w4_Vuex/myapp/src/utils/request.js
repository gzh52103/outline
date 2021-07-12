import axios from 'axios';

// process.env.NODE_ENV：环境变量，保存develoment，production
export const baseUrl = 
process.env.NODE_ENV=== 'development' ? // 判断环境
'http://10.3.136.144' // 开发环境接口地址
:
'http://120.76.247.5:2003' // 生产环境接口地址

// 测试环境地址（）

export const apiUrl = `${baseUrl}/api`
// 创建一个axios实例
const instance = axios.create({
    baseURL:apiUrl,
    withCredentials:true,
    // 这里的代码在当前文件被import时执行
    // headers:{
    //     Authorization:null
    // }
});

// 请求拦截（请求发出去前的操作）
instance.interceptors.request.use((config)=>{
    // config：axios的配置参数
    let userInfo = localStorage.getItem("userInfo");
    try {
      userInfo = JSON.parse(userInfo) || {};
    } catch {
      userInfo = {};
    }
    config.headers.Authorization = userInfo.authorization;
    
    // 返回修改后的配置参数
    return config;
})

export default instance;