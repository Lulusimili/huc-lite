// pages/heart/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    var that = this
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    //内容
    wx.request({
      method: 'POST',
      url: 'https://tt.inwang.net/api.php',
      data: {
        'type': 'heart',
        'pages': '1'
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.hideToast()
        that.setData({
          axis: res.data.axis,
          pages: 2
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   
  onShow: function () {

  },
*/
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
    var that = this
    var pages = that.data.pages
    var axis = that.data.axis
    wx.showToast({
      title: '加载更多',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: 'https://tt.inwang.net/api.php',
      data: {
        'type': 'heart',
        'pages': pages
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        wx.hideToast()
        console.log(res.data.axis)
        console.log(axis)
        that.setData({
          pages: that.data.pages -1 + 2,
          axis: axis.concat(res.data.axis)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})