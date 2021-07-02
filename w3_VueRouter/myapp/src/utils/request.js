import axios from 'axios';

export const baseUrl = 'http://120.76.247.5:2003'
export const apiUrl = `${baseUrl}/api`
// 创建一个axios实例
const instance = axios.create({
    baseURL:apiUrl
})

export default instance;