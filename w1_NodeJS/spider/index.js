const request = require('request')
const cheerio = require('cheerio');
const path = require('path')
const fs = require('fs')


let dir = path.join(__dirname, `img/`);

//如果目录不存在，则创建
if (!fs.accessSync(dir)) {
    fs.mkdirSync(dir)
}

// 请求地址，获取html内容
request({
    url: 'https://www.wbiao.cn/list-97.html',
    headers: {
        // ':authority': 'www.wbiao.cn',
        // ':method': 'GET',
        // ':path': '/list-97.html',
        // ':scheme': 'https',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'cookie': 'OZ_1U_2037=vid=v99db2c5c0b106.0&ctime=1503507140&ltime=0; WBIAOID=fee01e3d0da8c342b0de56e82347007f29bbf6e9%7Ef2031346363c8b8807ab7be46c2b09d7; NTKF_T2D_CLIENTID=guest8B459F5E-9418-A43B-AED3-100253872D6F; _ga=GA1.2.872240365.1503507142; wbiaoid=610335433b8829cb6219916ac2b25eb4; wbiaoid.sig=uU8RwfR6pEcgmMUG6JAeizOaW1jCk37sIllx9ZxEyqI; acw_tc=b7f0b1a316240748062677778ed6b46c9134dca07d70c5105f771f8645; wTk=J--lr9ClPvlc3Nng3qrgYaVd; w_info=eyJlbnYiOiJwcm9kIn0=; showNum=0; Hm_lvt_d8e95c635d8135c55060c556fd69e039=1624074807; nTalk_CACHE_DATA={uid:wx_1000_ISME9754_guest8B459F5E-9418-A4,tid:1624074807681448}; _gid=GA1.2.1726424282.1624074808; Hm_lpvt_d8e95c635d8135c55060c556fd69e039=1624074817; showMark=0',
        'pragma': 'no-cache',
        'referer': 'https://www.wbiao.cn/',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': 1,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
    }
}, (error, response, body) => {
    // console.log(body)
    const $ = cheerio.load(body);
    const goodslist = []
    $('#s_goods_list li').each((idx, li) => {
        const $li = $(li);
        const goods = {
            id: $li.attr('goods-code'),
            name: $li.find('.s_goods_name').text(),
            price: $li.find('.s_price').text().replace('￥', ''),
            sales_num: $li.find('.s_sale_num').text().replace('销量', ''),
            imgurl: $li.find('.s_goods_img img').data('wpl')
        }

        goodslist.push(goods);

        // 下载图片到本地
        let filename = path.basename(goods.imgurl);
       
        const filePath = path.join(dir, filename)
        request('http:' + goods.imgurl).pipe(fs.createWriteStream(filePath))
    });
    console.log('goodslist=', goodslist);

});