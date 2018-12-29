// test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    test: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  
  onLoad: function () {
    var that = this;
    that.setData({
      test: JSON.stringify(that.data.test)
    })
    
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
var that;
var Util = require('../../utils/util.js');