// pages/books/books.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: '../images/lib.svg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      id: options.id,
      titles: options.title
    })
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    //内容
    wx.request({
      method: 'GET',
      url: 'https://wechat.inwang.net/douban.php',
      data: {
        'q': options.title,
        'count': '1'
      },
      header: { 'Content-Type': 'json' },
      success: function (res) {
        console.log(res)
        that.setData({
          imgurl: res.data.books[0].images.small
        })
      }
    })

    wx.request({
      method: 'POST',
      url: 'https://tt.inwang.net/api.php',
      data: {
        'type': 'deatil',
        'id': options.id
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        wx.hideToast()
        console.log(res)
        that.setData({
          title: res.data.deatil[0],
          desc: res.data.deatil[1],
          info: res.data.deatil[2]
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