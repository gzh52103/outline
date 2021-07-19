export const baseUrl = process.env.NODE_ENV === 'production' ? 
'http://120.76.247.5:2002/'  // 生产环境
: 
'http://120.76.247.5:2002' // 开发环境

export const apiUrl = baseUrl + '/api';

function request(url,data={},config={}){
    url = (url.startsWith('http') ? '' : apiUrl) + url;
    
    if(config.method === undefined){
        config.method = 'get';
    }
    config.method = config.method.toLowerCase();

    // get,delete通过url传参
    if(['get','delete'].includes(config.method)){
        const params = [];
        for(let key in data){
            params.push(`${key}=${data[key]}`)
        }
        url = url + (url.includes('?') ? '&' : '?') + params.join('&')
    }
    // 通过请求体传参
    else if(['post','put','patch'].includes(config.method)){
        config.body = JSON.stringify(data);
        if(config.headers === undefined){
            config.headers = {}
        }
        config.headers['Content-type'] = 'application/json'
    }

    return fetch(url,{
        ...config,
    }).then(res=>{
        return res.json(); // res.json()得到promise对象
    })
}

request.post = function(url,data,config={}){
    config.method = 'post';
    return request(url,data,config);
}
request.delete = function(url,data,config={}){
    config.method = 'delete';
    return request(url,data,config);
}
request.put = function(url,data,config={}){
    config.method = 'put';
    return request(url,data,config);
}
request.patch = function(url,data,config={}){
    config.method = 'patch';
    return request(url,data,config);
}
request.get = function(url,data,config){
    return request(url,data,config);
}

// request('/class')
// request('/class',{},{method:'post'})
// request.post('/class')
// request('http://120.76.247.5:200/api/class?')

export default request;