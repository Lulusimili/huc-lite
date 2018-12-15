// pages/heart/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: '2'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    //内容
    wx.login({
      success: function (res) {
        if (res.code) {
    wx.request({
      method: 'POST',
      url: 'https://wechat.inwang.net/grade.php',
      data: {
        'type': 'grade',
        'code': res.code,
        'pages': '1'
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.hideToast()
        console.log(res)
        if (res.data.result == 'false') {
          wx.navigateTo({
            url: '/pages/reg/reg'
          })
        }else{
          console.log(res.data.grade)
          that.setData({
            grade: res.data.grade
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
    var  that = this
    var pages = that.data.pages
    var grade = that.data.grade
    wx.showToast({
      title: '加载更多',
      icon: 'loading',
      duration: 10000
    })
    wx.login({
      success: function (res) {
        if (res.code) {
    wx.request({
      url: 'https://wechat.inwang.net/grade.php',
      data: {
        'type': 'grade',
        'code': res.code,
        'pages': pages
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        wx.hideToast()
        that.setData({
          pages: pages - 1 + 2,
          grade: grade.concat(res.data.grade)
        })
        console.log(pages)
      }
    })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})