"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        newlist: [],
        hotlist: []
    },
    bindViewTap: function (e) {
        console.log(e);
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                request_1.default.get('/iq', { total: false }).then(function (data) {
                    console.log('await data', data);
                    _this.setData({
                        newlist: data.data
                    });
                });
                request_1.default.get('/iq', { total: false, sort: 'hot' }).then(function (data) {
                    _this.setData({
                        hotlist: data.data
                    });
                });
                return [2];
            });
        });
    },
    getUserProfile: function () {
        var _this = this;
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            }
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    gotoDetail: function (e) {
        var iqid = e.currentTarget.dataset.iqid;
        wx.navigateTo({
            url: '/pages/iq/iq?iqid=' + iqid
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQU16QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUMsRUFBRTtRQUNWLE9BQU8sRUFBQyxFQUFFO0tBQ1g7SUFFRCxXQUFXLEVBQVgsVUFBWSxDQUFLO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0ssTUFBTSxFQUFaOzs7O2dCQXVCQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxPQUFPLEVBQUUsSUFBWSxDQUFDLElBQUk7cUJBQzNCLENBQUMsQ0FBQTtnQkFFSixDQUFDLENBQUMsQ0FBQTtnQkFDRCxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7b0JBQ25ELEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsT0FBTyxFQUFFLElBQVksQ0FBQyxJQUFJO3FCQUMzQixDQUFDLENBQUE7Z0JBRUosQ0FBQyxDQUFDLENBQUE7Ozs7S0FFSDtJQUNELGNBQWM7UUFBZCxpQkFZQztRQVZDLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVSxZQUFDLENBQUM7UUFDSCxJQUFBLElBQUksR0FBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBM0IsQ0FBMkI7UUFDdEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxvQkFBb0IsR0FBQyxJQUFJO1NBQzlCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0J1xuXG4vLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG5ld2xpc3Q6W10sXG4gICAgaG90bGlzdDpbXVxuICB9LFxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoZTphbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncycsXG4gICAgfSlcbiAgfSxcbiAgYXN5bmMgb25Mb2FkKCkge1xuXG5cbiAgICAvLyDlj5HotbdhamF46K+35rGCXG4gICAgLy8gY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy8gZmV0Y2goKVxuICAgIC8vIGxvY2FsU3RvcmFnZS5nZXRJaXRlbSgpXG4gICAgLy8gd3gucmVxdWVzdCh7XG4gICAgLy8gICB1cmw6J2h0dHA6Ly8xMjAuNzYuMjQ3LjU6MjAwMS9hcGkvaXEnLFxuICAgIC8vICAgZGF0YTp7XG4gICAgLy8gICAgIHNpemU6MTAsXG4gICAgLy8gICAgIHRvdGFsOmZhbHNlXG4gICAgLy8gICB9LFxuICAgIC8vICAgc3VjY2VzcyhyZXMpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzPScscmVzKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuXG4gICAgLy8gLy8gYXBwLnJlcXVlc3QoKTtcbiAgICAvLyByZXF1ZXN0LmdldCgnL2lxJykudGhlbihkYXRhPT57XG4gICAgLy8gICBjb25zb2xlLmxvZygnZGF0YT0nLGRhdGEpO1xuICAgIC8vIH0pXG5cbiAgIHJlcXVlc3QuZ2V0KCcvaXEnLHt0b3RhbDpmYWxzZX0pLnRoZW4oZGF0YT0+e1xuICAgICBjb25zb2xlLmxvZygnYXdhaXQgZGF0YScsZGF0YSk7XG4gICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgbmV3bGlzdDooZGF0YSBhcyBhbnkpLmRhdGFcbiAgICAgfSlcblxuICAgfSlcbiAgICByZXF1ZXN0LmdldCgnL2lxJyx7dG90YWw6ZmFsc2Usc29ydDonaG90J30pLnRoZW4oZGF0YT0+e1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaG90bGlzdDooZGF0YSBhcyBhbnkpLmRhdGFcbiAgICAgIH0pXG5cbiAgICB9KVxuXG4gIH0sXG4gIGdldFVzZXJQcm9maWxlKCkge1xuICAgIC8vIOaOqOiNkOS9v+eUqHd4LmdldFVzZXJQcm9maWxl6I635Y+W55So5oi35L+h5oGv77yM5byA5Y+R6ICF5q+P5qyh6YCa6L+H6K+l5o6l5Y+j6I635Y+W55So5oi35Liq5Lq65L+h5oGv5Z2H6ZyA55So5oi356Gu6K6k77yM5byA5Y+R6ICF5aal5ZaE5L+d566h55So5oi35b+r6YCf5aGr5YaZ55qE5aS05YOP5pi156ew77yM6YG/5YWN6YeN5aSN5by556qXXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIC8vIOS4jeaOqOiNkOS9v+eUqGdldFVzZXJJbmZv6I635Y+W55So5oi35L+h5oGv77yM6aKE6K6h6IeqMjAyMeW5tDTmnIgxM+aXpei1t++8jGdldFVzZXJJbmZv5bCG5LiN5YaN5by55Ye65by556qX77yM5bm255u05o6l6L+U5Zue5Yy/5ZCN55qE55So5oi35Liq5Lq65L+h5oGvXG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICB9KVxuICB9LFxuICBnb3RvRGV0YWlsKGUpe1xuICAgIGNvbnN0IHtpcWlkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6Jy9wYWdlcy9pcS9pcT9pcWlkPScraXFpZFxuICAgIH0pXG4gIH1cbn0pXG4iXX0=