// pages/config/config.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  changeSwitch: function (e) {
    wx.setStorageSync('isChecked', e.detail.value)
  },

  clean: function () {
    var that = this
    wx.showToast({
      title: '清理中',
      icon: 'loading',
      duration: 10000
    })
    wx.removeStorageSync('table')
        wx.showToast({
          title: '已完成',
          icon: 'success',
          duration: 1000
        })
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (wx.getStorageSync('isChecked')) {
      that.setData({
        isChecked: wx.getStorageSync('isChecked')
      })
    }
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