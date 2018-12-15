// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: 'https://wechat.inwang.net/img/index.png',
    list: [{
      name: '更新日志',
      ico: 'notice',
      url: '../notice/notice'
      }, {
        name: '考场查询',
        ico: 'exam',
        url: '../exam/exam'
      }, {
      name: '商大地图',
      ico: 'map',
      url: '../map/map'
      }, {
        name: '商大校历',
        ico: 'calendar',
        url: '../calendar/calendar'
      }, {
      name: 'OpenAPI',
      ico: 'openapi',
      url: '../openapi/openapi'
      }, {
      name: '待解锁',
      ico: 'lock',
      url: ''
    }, {
      name: '待解锁',
      ico: 'lock',
      url: ''
    }, {
      name: '待解锁',
      ico: 'lock',
      url: ''
    }, {
      name: '待解锁',
      ico: 'lock',
      url: ''
    }]
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