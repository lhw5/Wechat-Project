// pages/find/index.js
Page({

  data: {
    items:[{
      'url':'/pages/find/xxgk/index',
      'img':'/pages/images/1.png',
      'title':'学校概况',
      'desc':'国家“双高”计划建设单位、国家优质高职院校、国家示范性职业教育集团培育单位牵头单位、省一流高职院校建设单位、省示范性高职院校'
    },
    {
      'url':'/pages/find/jxdw/index',
      'img':'/pages/images/2.png',
      'title':'教学单位',
      'desc':'先进制造技术学院、计算机与设计学院、电子与通信学院、汽车学院、物流学院、经济贸易学院、外语学院'
    },
    {
      'url':'/pages/find/jwglxt/index',
      'img':'/pages/images/4.png',
      'title':'教学管理',
      'desc':'教务处 教务管理系统 定岗实习平台'
    },  
    {
      'url':'https://mp.weixin.qq.com/s/CDb2UU9omfZUWMFQWuHkOw',
      'img':'/pages/images/3.png',
      'title':'招生就业',
      'desc':'招生信息 就业信息'
    },  
    {
      'url':'https://mp.weixin.qq.com/s/CDb2UU9omfZUWMFQWuHkOw',
      'img':'/pages/images/5.png',
      'title':'新闻中心',
      'desc':'学校要闻 校园快讯 通知公告 媒体关注 高职咨询 科研动态'
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