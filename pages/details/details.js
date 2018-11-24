//logs.js
import { URL } from "../../utils/util.js";

Page({
    data: {
        userInfo: '',
        userObj: {}
    },
    onReady: function() {

    },
    onLoad: function(pas) {
        var _this = this;
        wx.request({
                url: URL + 'wechat/user.php',
                method: 'GET',
                data: {
                    bid: pas.bid
                },
                header: {
                    'content-type': 'application/json'
                },
                success: function(res) {
                    if (res.data.state) {
                        _this.setData({
                            userObj: res.data.data[0]
                        });
                    }
                }
            })
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
    bindGetUserInfo(e) {},
    //转发功能
    onShareAppMessage: function(options) {
        if (options.from === 'button') {
            // 来自页面内转发按钮
            console.log(options.target)
        }
        return {
            //## 此为转发页面所显示的标题
            //title: '好友代付', 
            //## 此为转发页面的描述性文字
            desc: '江湖救急，还请贵人伸手相助啊!',
            //## 此为转发给微信好友或微信群后，对方点击后进入的页面链接，可以根据自己的需求添加参数
            imageUrl: 'http://www.zhenglinglu.cn/templets/MyBlogs/images/12-2.jpg',
            path: '',
            //## 转发操作成功后的回调函数，用于对发起者的提示语句或其他逻辑处理
            success: function(res) {
                //这是我自定义的函数，可替换自己的操作
                util.showToast(1, '发送成功');
            },
            //## 转发操作失败/取消 后的回调处理，一般是个提示语句即可
            fail: function() {
                util.showToast(0, '朋友代付转发失败...');
            }
        }
    },
})