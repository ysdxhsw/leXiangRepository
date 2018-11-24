//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        logs: []
    },
    onLoad: function(options) {
        let data1 = options.data1;
        let data2 = options.data2;
        console.log(data1); //输出的结果是  1
        console.log(data2); //输出的结果是  2
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
    }
})