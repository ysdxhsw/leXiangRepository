//index.js
//获取应用实例
const app = getApp();
import { URL } from "../../utils/util.js";
Page({
    data: {
        type: '', //类别
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        isShow: false,
        dataList: [{
            message: 'foo',
        }, {
            message: 'bar'
        }]
    },

    onLoad: function(options) {
        var _this = this;
        wx.request({
            url: URL + 'wechat/user.php',
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res);
                if (res.data.state) {
                    _this.setData({
                        dataList: res.data.data
                    });
                }
                console.log(res.data.data);
            }
        })
    },
    //事件处理函数
    bindViewTap: function() {
        // wx.navigateTo({
        //     url: '../logs/logs'
        // })
    },
    handleIsShow: function() {
        console.log('sdrg');

        this.setData({
            isShow: !this.isShow
        });
    },
    //转发功能
    onShareAppMessage: function(e) {
        if (e.from === 'button') {
            // 来自页面内转发按钮
            console.log(e.target)
        }
    },
    //转发功能
    // onShareAppMessage: function(e) {
    //     if (e.from === 'button') {
    //         // 来自页面内转发按钮
    //         console.log(e.target)
    //     }
    // },

})