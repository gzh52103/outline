// interface IData {

// }
// interface IOptions {
//   method?: string
//   headers?: object
//   dataType?: string
//   responseType?: string
// }

export const baseUrl: string = 'https://api.qfh5.cn'
export const apiUrl: string = baseUrl + '/api'
export default function request(url: string, data: any, options: any = {}) {
  return new Promise((resove, reject) => {
    wx.request({
      ...options,
      url: (url.startsWith('http') ? '' : apiUrl) + url,
      data,
      success(res) {
        resove(res.data)
      },
      fail() {
        reject()
      }
    })

  })
}

request.get = function (url: string, data?: any, options?: any) {
  if(options === undefined){
    options = {}
  }
  options.method = 'get';
  return request(url, data, options)
}
request.post = function (url: string, data?: any, options?: any ) {
  if(options === undefined){
    options = {}
  }
  options.method = 'post';
  return request(url, data, options)
}
request.put = function (url: string, data?: any, options?: any ) {
  if(options === undefined){
    options = {}
  }
  options.method = 'put';
  return request(url, data, options)
}
request.delete = function (url: string, data?: any, options?: any ) {
  if(options === undefined){
    options = {}
  }
  options.method = 'delete';
  return request(url, data, options)
}