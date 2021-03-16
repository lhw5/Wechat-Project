// pages/find/index.js
Page({

  data: {
    items:[{
      'url':'/pages/test/index',
      'img':'/pages/images/路飞.jpg',
      'title':'学考专题 ',
      'desc':'2021广东机电职业技术学院招生简章'
    },
    {
      'url':'https://mp.weixin.qq.com/s/CDb2UU9omfZUWMFQWuHkOw',
      'img':'/pages/images/banner1.jpg',
      'title':'aasdd',
      'desc':'wfrh'
    },
    {
      'url':'https://mp.weixin.qq.com/s/CDb2UU9omfZUWMFQWuHkOw',
      'img':'/pages/images/banner1.jpg',
      'title':'aasdd',
      'desc':'wfrh'
    },  
    {
      'url':'https://mp.weixin.qq.com/s/CDb2UU9omfZUWMFQWuHkOw',
      'img':'/pages/images/banner1.jpg',
      'title':'aasdd',
      'desc':'wfrh'
    },  
    {
      'url':'https://mp.weixin.qq.com/s/CDb2UU9omfZUWMFQWuHkOw',
      'img':'/pages/images/banner1.jpg',
      'title':'aasdd',
      'desc':'wfrh'
    },  
    ]
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    }),
    wx.switchTab({
      url: '/pages/test/index'
    })
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