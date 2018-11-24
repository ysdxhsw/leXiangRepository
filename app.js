//app.js
import { URL } from "utils/util.js";
App({
    globalData: {
        indexData: {}
    },
    onLaunch: function() {
        console.log('onLaunch');

        var _this = this;
        // 展示本地存储能力
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)


        // // 登录
        // wx.login({
        //     success: res => {
        //         console.log(res);
        //         // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //         wx.request({
        //             url: 'http://localhost/wechat/user.php',
        //             // header: {
        //             //     'content-type': 'application/json'
        //             // },
        //             success: function(res) {
        //                 // var obj = res.parseJSON()
        //                 // var obj = JSON.parse(res); //由JSON字符串转换为JSON对象
        //                 console.log(res);

        //             }
        //         })

        //     }

        // })

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            console.log(res);

                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })

        //扫码功能
        // wx.scanCode({
        //     success(res) {
        //         console.log(res)
        //     }
        // })
        // wx.authorize(Object) {

        // }
        //提示框
        // wx.showToast({
        //     title: '成功',
        //     icon: 'success',
        //     duration: 2000
        // })
        //加载中
        // wx.showLoading({
        //     title: '加载中',
        // })

        // setTimeout(function() {
        //         wx.hideLoading()
        //     }, 2000)
        //模板弹出框
        // wx.showModal({
        //         title: '提示',
        //         content: '这是一个模态弹窗',
        //         success: function(res) {
        //             if (res.confirm) {
        //                 console.log('用户点击确定')
        //             } else if (res.cancel) {
        //                 console.log('用户点击取消')
        //             }
        //         }
        //     })
        // wx.showActionSheet({
        //     itemList: ['A', 'B', 'C'],
        //     success: function(res) {
        //         console.log(res.tapIndex)
        //     },
        //     fail: function(res) {
        //         console.log(res.errMsg)
        //     }
        // })

    },

    globalData: {
        userInfo: null
    }
})