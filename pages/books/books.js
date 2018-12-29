// pages/books/books.js
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
  onLoad: function (options) {
    var that = this
    that.setData({
      text: options.textData
    })
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
        'type': 'books',
        'text': options.textData,
        'pages': '1'
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res)
        wx.hideToast()
        that.setData({
          title: res.data.books[0],
          desc: res.data.books[1],
          info: res.data.books[2],
          id: res.data.books[3],
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
    var that = this
    var pages = that.data.pages
    var title = that.data.title
    var desc = that.data.desc
    var info = that.data.info
    var id = that.data.id
    var text = that.data.text
    wx.showToast({
      title: '加载更多',
      icon: 'loading',
      duration: 10000
    })
          wx.request({
            url: 'https://tt.inwang.net/api.php',
            data: {
              'type': 'books',
              'text': text,
              'pages': pages
            },
            header: { 'Content-Type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            success: function (res) {
              wx.hideToast()
              that.setData({
                pages: pages - 1 + 2,
                title: title.concat(res.data.books[0]),
                desc: desc.concat(res.data.books[1]),
                info: info.concat(res.data.books[2]),
                id: id.concat(res.data.books[3])
              })
              console.log(pages)
            }
          })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})