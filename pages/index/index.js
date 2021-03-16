const app = getApp()
Page({
  data: {
    //轮播图
    imgurl: [
      "../images/banner1.jpg", 
      "/pages/images/banner2.jpg",
      "/pages/images/banner3.jpg"],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      circular:true,

      msgList:[
        '1.【头条】欢迎使用机电小助手！',
        '2.【热点】学校升本？广东机电大学？！',
        '3.【最新】2021机电学院招生简章。'
      ],
//导航图标
  navBtn: [{
    'url': '/pages/test/index',
    'name': '失物招领',
    'icon': '/pages/images/swzl.png',
    
    'bgc': '#5093D2'
  },{
    'name': '闲置出售',
    'icon': '/pages/images/xzcs.png',
    'url': '/pages/test/index',
    'bgc': '#c883f6'
  },
  {
    'name': '匿名表白',
    'icon': '/pages/images/nmbb.png',
    'url': '/pages/test/index',
    'bgc': '#DA70A0'
  },
  {
    'name': '商家合作',
    'icon': '/pages/images/sjhz.png',
    'url': '/pages/test/index',
    'bgc': '#f5c664'
  },
  {
    'name': '校园新鲜事',
    'icon': '/pages/images/xyxxs.png',
    'url': '/pages/test/index',
    'bgc': '#95B1FA'
  },
  {
    'name': '跑腿代拿',
    'icon': '/pages/images/ptdn.png',
    'url': '/pages/test/index',
    'bgc': '#92e297'
  },
  {
    'name': '宣传活动',
    'icon': '/pages/images/xchd.png',
    'url': '/pages/test/index',
    'bgc': '#ed91f4'
  },
  {
    'name': '更多',
    'icon': '/pages/images/gd.png',
    'url': '/pages/test/index',
    'bgc': '#627eef'
  },
  ],
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    }),
    wx.switchTab({
      url: '/pages/outurl/index'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
