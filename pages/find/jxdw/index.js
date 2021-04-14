var app = getApp()
Page({
  data: {
    navbar: [
     '人智',
     '电信',
     '设计',
     '计算机',
     '外语',
     '先进',
     '电气',
     '汽车'
      ],
    currentTab: 0
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
