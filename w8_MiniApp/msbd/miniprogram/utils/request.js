"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = exports.baseUrl = void 0;
exports.baseUrl = 'http://120.76.247.5:2001';
exports.apiUrl = exports.baseUrl + '/api';
function request(url, data, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resove, reject) {
        wx.request(__assign(__assign({}, options), { url: (url.startsWith('http') ? '' : exports.apiUrl) + url, data: data,
            success: function (res) {
                resove(res.data);
            },
            fail: function () {
                reject();
            } }));
    });
}
exports.default = request;
request.get = function (url, data, options) {
    if (options === undefined) {
        options = {};
    }
    options.method = 'get';
    return request(url, data, options);
};
request.post = function (url, data, options) {
    if (options === undefined) {
        options = {};
    }
    options.method = 'post';
    return request(url, data, options);
};
request.put = function (url, data, options) {
    if (options === undefined) {
        options = {};
    }
    options.method = 'put';
    return request(url, data, options);
};
request.delete = function (url, data, options) {
    if (options === undefined) {
        options = {};
    }
    options.method = 'delete';
    return request(url, data, options);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVYSxRQUFBLE9BQU8sR0FBVywwQkFBMEIsQ0FBQTtBQUM1QyxRQUFBLE1BQU0sR0FBVyxlQUFPLEdBQUcsTUFBTSxDQUFBO0FBQzlDLFNBQXdCLE9BQU8sQ0FBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQWlCO0lBQWpCLHdCQUFBLEVBQUEsWUFBaUI7SUFDdkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxNQUFNO1FBQ2hDLEVBQUUsQ0FBQyxPQUFPLHVCQUNMLE9BQU8sS0FDVixHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxHQUFHLEdBQUcsRUFDakQsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixDQUFDO1lBQ0QsSUFBSTtnQkFDRixNQUFNLEVBQUUsQ0FBQTtZQUNWLENBQUMsSUFDRCxDQUFBO0lBRUosQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBZkQsMEJBZUM7QUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBVyxFQUFFLElBQVUsRUFBRSxPQUFhO0lBQzVELElBQUcsT0FBTyxLQUFLLFNBQVMsRUFBQztRQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFBO0tBQ2I7SUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QixPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFXLEVBQUUsSUFBVSxFQUFFLE9BQWE7SUFDN0QsSUFBRyxPQUFPLEtBQUssU0FBUyxFQUFDO1FBQ3ZCLE9BQU8sR0FBRyxFQUFFLENBQUE7S0FDYjtJQUNELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFBO0FBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQVcsRUFBRSxJQUFVLEVBQUUsT0FBYTtJQUM1RCxJQUFHLE9BQU8sS0FBSyxTQUFTLEVBQUM7UUFDdkIsT0FBTyxHQUFHLEVBQUUsQ0FBQTtLQUNiO0lBQ0QsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkIsT0FBTyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBVyxFQUFFLElBQVUsRUFBRSxPQUFhO0lBQy9ELElBQUcsT0FBTyxLQUFLLFNBQVMsRUFBQztRQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFBO0tBQ2I7SUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUMxQixPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGludGVyZmFjZSBJRGF0YSB7XHJcblxyXG4vLyB9XHJcbi8vIGludGVyZmFjZSBJT3B0aW9ucyB7XHJcbi8vICAgbWV0aG9kPzogc3RyaW5nXHJcbi8vICAgaGVhZGVycz86IG9iamVjdFxyXG4vLyAgIGRhdGFUeXBlPzogc3RyaW5nXHJcbi8vICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovLzEyMC43Ni4yNDcuNToyMDAxJ1xyXG5leHBvcnQgY29uc3QgYXBpVXJsOiBzdHJpbmcgPSBiYXNlVXJsICsgJy9hcGknXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9uczogYW55ID0ge30pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgdXJsOiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/ICcnIDogYXBpVXJsKSArIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICByZXNvdmUocmVzLmRhdGEpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgcmVqZWN0KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfSlcclxufVxyXG5cclxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbiAodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG9wdGlvbnM/OiBhbnkpIHtcclxuICBpZihvcHRpb25zID09PSB1bmRlZmluZWQpe1xyXG4gICAgb3B0aW9ucyA9IHt9XHJcbiAgfVxyXG4gIG9wdGlvbnMubWV0aG9kID0gJ2dldCc7XHJcbiAgcmV0dXJuIHJlcXVlc3QodXJsLCBkYXRhLCBvcHRpb25zKVxyXG59XHJcbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uICh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgb3B0aW9ucz86IGFueSApIHtcclxuICBpZihvcHRpb25zID09PSB1bmRlZmluZWQpe1xyXG4gICAgb3B0aW9ucyA9IHt9XHJcbiAgfVxyXG4gIG9wdGlvbnMubWV0aG9kID0gJ3Bvc3QnO1xyXG4gIHJldHVybiByZXF1ZXN0KHVybCwgZGF0YSwgb3B0aW9ucylcclxufVxyXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uICh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgb3B0aW9ucz86IGFueSApIHtcclxuICBpZihvcHRpb25zID09PSB1bmRlZmluZWQpe1xyXG4gICAgb3B0aW9ucyA9IHt9XHJcbiAgfVxyXG4gIG9wdGlvbnMubWV0aG9kID0gJ3B1dCc7XHJcbiAgcmV0dXJuIHJlcXVlc3QodXJsLCBkYXRhLCBvcHRpb25zKVxyXG59XHJcbnJlcXVlc3QuZGVsZXRlID0gZnVuY3Rpb24gKHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBvcHRpb25zPzogYW55ICkge1xyXG4gIGlmKG9wdGlvbnMgPT09IHVuZGVmaW5lZCl7XHJcbiAgICBvcHRpb25zID0ge31cclxuICB9XHJcbiAgb3B0aW9ucy5tZXRob2QgPSAnZGVsZXRlJztcclxuICByZXR1cm4gcmVxdWVzdCh1cmwsIGRhdGEsIG9wdGlvbnMpXHJcbn0iXX0=