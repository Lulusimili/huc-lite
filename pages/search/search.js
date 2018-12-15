Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  formSubmit: function (e) {
    var that = this
    if (!e.detail.value.text) {
      var text = '挪威的森林';
    } else {
      var text = e.detail.value.text;
    }
    wx.navigateTo({
      url: '/pages/books/books?textData=' + text
    })
  }
})