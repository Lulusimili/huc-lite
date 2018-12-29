// pages/config/config.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     id:'0',
    changed :'',
    color:''
  },
  slider4change: function (e) {
    var that = this
    var question = wx.getStorageSync('question')
    var ids = e.detail.value - 1;
      that.setData({
        show: question[ids],
        id: ids,
        answers: '',
        changed: '',
        color: '',
        answer: question[ids].answer
      })
      wx.setStorageSync('id', ids)
      wx.setNavigationBarTitle({
        title: ids - 1 + 2 + ' / ' + question.length
      })
    console.log('slider发生change事件，携带值为', e.detail.value)
  },
  add: function () {
    var that = this
    var question = wx.getStorageSync('question')
    var ids = that.data.id - 1 + 2;
    if (question.length > ids){
    that.setData({
      show: question[ids],
      id: ids,
      answers: '',
      changed: '',
      color: '',
      answer: question[ids].answer
    })
    wx.setStorageSync('id', ids)
    wx.setNavigationBarTitle({
      title: ids - 1 + 2 + ' / ' + question.length
    })
    }else{
      wx.showModal({
        content: '已经是最后一题了！',
        showCancel: false
      });
    }
  },
  minus: function () {
    var that = this
    var question = wx.getStorageSync('question')
    var ids = that.data.id - 1;
    if (ids >= 0) {
    that.setData({
      show: question[ids],
      id: ids,
      answers: '',
      changed: '',
      color: '',
      answer: question[ids].answer
    })
    wx.setStorageSync('id', ids)
    wx.setNavigationBarTitle({
      title: ids - 1 + 2 + ' / ' +question.length
    })
    }else{
      wx.showModal({
        content: '已经是第一题了！',
        showCancel: false
      });
    }
  },
  checkboxChange(e) {
    var that = this
    console.log(e.detail.value)
    that.setData({
      answers: that.data.answer
    })
    if (e.detail.value != that.data.answer){
      that.setData({
        color: '#E64340'
      })
    }else{
      that.setData({
        color: ''
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var show;
    if (wx.getStorageSync('id')) {
      var ids = wx.getStorageSync('id');
    } else {
      var ids = that.data.id;
    }
    if (wx.getStorageSync('question')) {
      var question = wx.getStorageSync('question')
      that.setData({
        show: question[ids],
        id: ids,
        answers: '',
        changed: '',
        color: '',
        length: question.length,
        answer: question[ids].answer
      })
      wx.showNavigationBarLoading()
    }else{
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    }
    wx.request({
      method: 'POST',
      url: 'https://tt.inwang.net/question.php',
      data: {
        'type': 'question'
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data.dataList)
        wx.setStorageSync('question', res.data.dataList)
        that.setData({
          show: res.data.dataList[ids],
          length: res.data.dataList.length,
          answer: res.data.dataList[ids].answer,
          id: ids
        })
        wx.hideNavigationBarLoading()
        console.log(res.data.dataList[ids])
        wx.hideToast()
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