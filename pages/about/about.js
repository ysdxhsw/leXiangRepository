//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        userInfo: ''
    },
    onReady: function() {
        // 查看是否授权
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function(res) {
                            console.log(res.userInfo)
                        }
                    })
                }
            }
        })
    },
    onLoad: function() {
        // 查看是否授权
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function(res) {
                            console.log(res.userInfo)
                        }
                    })
                }
            }
        })
    },
    bindGetUserInfo(e) {}
})