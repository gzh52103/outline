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
exports.baseUrl = 'https://api.qfh5.cn';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVYSxRQUFBLE9BQU8sR0FBVyxxQkFBcUIsQ0FBQTtBQUN2QyxRQUFBLE1BQU0sR0FBVyxlQUFPLEdBQUcsTUFBTSxDQUFBO0FBQzlDLFNBQXdCLE9BQU8sQ0FBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQWlCO0lBQWpCLHdCQUFBLEVBQUEsWUFBaUI7SUFDdkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxNQUFNO1FBQ2hDLEVBQUUsQ0FBQyxPQUFPLHVCQUNMLE9BQU8sS0FDVixHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxHQUFHLEdBQUcsRUFDakQsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixDQUFDO1lBQ0QsSUFBSTtnQkFDRixNQUFNLEVBQUUsQ0FBQTtZQUNWLENBQUMsSUFDRCxDQUFBO0lBRUosQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBZkQsMEJBZUM7QUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBVyxFQUFFLElBQVUsRUFBRSxPQUFhO0lBQzVELElBQUcsT0FBTyxLQUFLLFNBQVMsRUFBQztRQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFBO0tBQ2I7SUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QixPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFXLEVBQUUsSUFBVSxFQUFFLE9BQWE7SUFDN0QsSUFBRyxPQUFPLEtBQUssU0FBUyxFQUFDO1FBQ3ZCLE9BQU8sR0FBRyxFQUFFLENBQUE7S0FDYjtJQUNELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFBO0FBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQVcsRUFBRSxJQUFVLEVBQUUsT0FBYTtJQUM1RCxJQUFHLE9BQU8sS0FBSyxTQUFTLEVBQUM7UUFDdkIsT0FBTyxHQUFHLEVBQUUsQ0FBQTtLQUNiO0lBQ0QsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkIsT0FBTyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBVyxFQUFFLElBQVUsRUFBRSxPQUFhO0lBQy9ELElBQUcsT0FBTyxLQUFLLFNBQVMsRUFBQztRQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFBO0tBQ2I7SUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUMxQixPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGludGVyZmFjZSBJRGF0YSB7XHJcblxyXG4vLyB9XHJcbi8vIGludGVyZmFjZSBJT3B0aW9ucyB7XHJcbi8vICAgbWV0aG9kPzogc3RyaW5nXHJcbi8vICAgaGVhZGVycz86IG9iamVjdFxyXG4vLyAgIGRhdGFUeXBlPzogc3RyaW5nXHJcbi8vICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkucWZoNS5jbidcclxuZXhwb3J0IGNvbnN0IGFwaVVybDogc3RyaW5nID0gYmFzZVVybCArICcvYXBpJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM6IGFueSA9IHt9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIHVybDogKHVybC5zdGFydHNXaXRoKCdodHRwJykgPyAnJyA6IGFwaVVybCkgKyB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgcmVzb3ZlKHJlcy5kYXRhKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHJlamVjdCgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH0pXHJcbn1cclxuXHJcbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24gKHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBvcHRpb25zPzogYW55KSB7XHJcbiAgaWYob3B0aW9ucyA9PT0gdW5kZWZpbmVkKXtcclxuICAgIG9wdGlvbnMgPSB7fVxyXG4gIH1cclxuICBvcHRpb25zLm1ldGhvZCA9ICdnZXQnO1xyXG4gIHJldHVybiByZXF1ZXN0KHVybCwgZGF0YSwgb3B0aW9ucylcclxufVxyXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbiAodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG9wdGlvbnM/OiBhbnkgKSB7XHJcbiAgaWYob3B0aW9ucyA9PT0gdW5kZWZpbmVkKXtcclxuICAgIG9wdGlvbnMgPSB7fVxyXG4gIH1cclxuICBvcHRpb25zLm1ldGhvZCA9ICdwb3N0JztcclxuICByZXR1cm4gcmVxdWVzdCh1cmwsIGRhdGEsIG9wdGlvbnMpXHJcbn1cclxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbiAodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG9wdGlvbnM/OiBhbnkgKSB7XHJcbiAgaWYob3B0aW9ucyA9PT0gdW5kZWZpbmVkKXtcclxuICAgIG9wdGlvbnMgPSB7fVxyXG4gIH1cclxuICBvcHRpb25zLm1ldGhvZCA9ICdwdXQnO1xyXG4gIHJldHVybiByZXF1ZXN0KHVybCwgZGF0YSwgb3B0aW9ucylcclxufVxyXG5yZXF1ZXN0LmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgb3B0aW9ucz86IGFueSApIHtcclxuICBpZihvcHRpb25zID09PSB1bmRlZmluZWQpe1xyXG4gICAgb3B0aW9ucyA9IHt9XHJcbiAgfVxyXG4gIG9wdGlvbnMubWV0aG9kID0gJ2RlbGV0ZSc7XHJcbiAgcmV0dXJuIHJlcXVlc3QodXJsLCBkYXRhLCBvcHRpb25zKVxyXG59Il19