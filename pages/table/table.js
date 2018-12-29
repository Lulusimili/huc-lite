var that;
var Util = require('../../utils/util.js');
Page({
  data: {
    tabs: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    sliderOffset: 0,
    sliderLeft: 0,
    activeIndex: 0,
    array: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九'],
    zsindex: 0,
    isshow: 0
  },
  bindZsChange(e) {
    var that = this;
    var zsindex = e.detail.value;
    var array = that.data.array;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    that.setData({
      zsindex: zsindex
    })
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: "https://tt.inwang.net/api.php",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
              type: "table",
              code: res.code,
              zc: zsindex - 1 + 2
            },
            complete: function (res) {
              wx.hideToast()
              console.log(res.data.table)
              that.setData({
                info: res.data.result,
                table: res.data.table
              });
                wx.setNavigationBarTitle({
                  title: '第 ' + array[zsindex] + ' 周'
                })
              if (res == null || res.data == null) {
                console.error('网络请求失败');
                return;
              } else if (res.data.result == 'false') {
                wx.navigateTo({
                  url: '/pages/reg/reg'
                })

              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  onLoad: function (options) {
      var that = this;
      var array = that.data.array;
      var zsindex = that.data.zsindex;
      var todayWeek = Util.todayInfo();
      that.setData({ activeIndex: todayWeek })
      var tables = wx.getStorageSync('table')
      if (options.table){
        that.setData({
          table: JSON.parse(options.table)
        })
        that.setData({
          info: tables.data.result,
          table: tables.data.table,
          zsindex: tables.data.zc - 1
        });
      }else{
      if (!tables) {
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 10000
        })
      }else{
        that.setData({
          info: tables.data.result,
          table: tables.data.table,
          zsindex: tables.data.zc - 1
        });
        wx.showNavigationBarLoading()
      }
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.request({
              url: "https://tt.inwang.net/api.php",
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              data: { 
                type: "table", 
                code: res.code 
                },
              complete: function (res) {
                wx.hideToast()
                that.setData({
                  info: res.data.result,
                  table: res.data.table,
                  zsindex: res.data.zc - 1
                });
                wx.hideNavigationBarLoading()
                wx.setStorageSync('table', res)
                if (res == null || res.data == null) {
                  console.error('网络请求失败');
                  return;
                } else if(res.data.result == 'false') {
                  wx.navigateTo({
                    url: '/pages/reg/reg'
                  })
                } else if (res.data.result == 'noinfo') {
                  wx.showModal({
                    content: '教务系统维护ing...',
                    showCancel: false
                  });

                }
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
      }
    },
  onToastChanged: function () {
    that.setData({ toastHidden: true });
  },
tabClick: function (e) {
        this.setData({
          sliderOffset: e.currentTarget.offsetLeft,
          activeIndex: e.currentTarget.id
        });
},
  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      isshow: 1
    });
    wx.stopPullDownRefresh();
  },
onShareAppMessage: function () {
  var that = this
  return {
      title: '当日课表',
      path: '/pages/table/table?table=' + JSON.stringify(that.data.table)
  }
  }
});
