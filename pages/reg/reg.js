// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  formSubmit: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var pass = e.detail.value.pass;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.login({
      success: function (res) {
        if (res.code) {
    wx.request({
      method: 'POST',
      url: 'https://wechat.inwang.net/api.php', //接口地址
      data: {
        'type': 'reg',
        'name': name,
        'pass': pass,
        'code': res.code
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if (res.data.result == 'success') {
          wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function () {
            wx.reLaunch({
              url: '/pages/index/index'
            })
          }, 1000)
        } else if (res.data.result == 'false') {
          wx.showToast({
            title: '信息错误',
            icon: 'success',
            image: '../images/false.png', 
            duration: 1000
          })
        }
        
      },
      fail: function (res) {
        console.log('cuowu' + ':' + res)
      }
    })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})