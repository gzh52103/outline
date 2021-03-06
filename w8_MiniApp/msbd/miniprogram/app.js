"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
        wx.getUserInfo({
            success: function (res) {
                console.log('res=', res);
            }
        });
        wx.getUserProfile({
            desc: '就想获取你的信息',
            success: function (res) {
                console.log('profile.res', res);
            }
        });
    },
    request: function () {
        console.log(123);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXZCLENBQUM7U0FDRixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsSUFBSSxFQUFDLFVBQVU7WUFDZixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHt9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpe1xuICAgICAgICBjb25zb2xlLmxvZygncmVzPScscmVzKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzon5bCx5oOz6I635Y+W5L2g55qE5L+h5oGvJyxcbiAgICAgIHN1Y2Nlc3MocmVzKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2ZpbGUucmVzJyxyZXMpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHJlcXVlc3QoKXtcbiAgICBjb25zb2xlLmxvZygxMjMpXG4gIH1cbn0pIl19