var app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    navbar: ['二手墙', '发布', '出售管理'],
    currentTab: 0,
    tempImg: [],
    datalist: [{
      imgUrl: '',
      content: '',
      price:'',
      phone:'',
      date: ''
    }]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  // updatalist: function (res) {
  //   console.log(res)
  //   // var cont = res.detail.value.content
  //   // if (res.detail.value.content.length == 0) {
  //   //   wx.showToast({
  //   //     title: '表白内容不能为空!',
  //   //     icon: 'none',
  //   //     duration: 1500
  //   //   })
  //   //   setTimeout(function () {
  //   //     wx.hideToast()
  //   //   }, 2000)
  //   // } else if (res.detail.value.content.length >= 20) {
  //   //   wx.showToast({
  //   //     title: '内容不能超过20字!',
  //   //     icon: 'none',
  //   //     duration: 1500
  //   //   })
  //   //   setTimeout(function () {
  //   //     wx.hideToast()
  //   //   }, 2000)
  //   // }
  //   // let timestamp = Date.parse(new Date());
  //   // let dateTime = new Date(timestamp);
  //   // var Y = dateTime.getFullYear(); //获取年份
  //   // let M = (dateTime.getMonth() + 1 < 10 ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1); //获取月份
  //   // let D = dateTime.getDate() < 10 ? '0' + dateTime.getDate() : dateTime.getDate(); //获取日
  //   // let dayYMD = Y + '-' + M + '-' + D
  //   // wx.showLoading({
  //   //   title: '正在发布中......',
  //   //   mask: "true"
  //   // })

  //   const db = wx.cloud.database()
  //   db.collection("datalist").add({
  //     data: {
  //       "imgUrl":'',
  //       "content": cont,
  //       "date": dayYMD
  //     }
  //   }).then(res => {
  //     console.log(res)
  //     wx.hideLoading()
  //   })
  // },

  uploadImgHandle: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:res=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        this.setData({
          tempImg: tempFilePaths
        })
      }
    })
  },

  submit: function (res) {
        let content = res.detail.value.content
        let price = res.detail.value.price
        let phone = res.detail.value.phone
        if (content.length == 0) {
          wx.showToast({
            title: '物品描述内容不能为空!',
            icon: 'none',
            duration: 1500
          })
          setTimeout(function () {
            wx.hideToast()
          }, 2000)
        }else if(price.length==0){
          wx.showToast({
            title: '请输入售卖的价格!',
            icon: 'none',
            duration: 1500
          })
        }else if(phone.length==0){
          wx.showToast({
            title: '请输入联系方式!',
            icon: 'none',
            duration: 1500
          })
        } else{
          let timestamp = Date.parse(new Date());
          let dateTime = new Date(timestamp);
          var Y = dateTime.getFullYear(); //获取年份
          let M = (dateTime.getMonth() + 1 < 10 ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1); //获取月份
          let D = dateTime.getDate() < 10 ? '0' + dateTime.getDate() : dateTime.getDate(); //获取日
          let dayYMD = Y + '-' + M + '-' + D
          let filePath = this.data.tempImg[0]
          let suffix = /\.[^\.]+$/.exec(filePath)[0];
  
          wx.showLoading({
            title: '提交中...',
          })
          wx.cloud.uploadFile({
            cloudPath:'sell/'+ new Date().getTime() + suffix,
            filePath: filePath, // 文件路径
          }).then(res => {
            console.log(res.fileID)
  
            db.collection('sell').add({
              data: {
                "content": content,
                "price":price,
                "phone":phone,
                "date": dayYMD,
                "imgUrl": res.fileID
              }
            })
            .then(res => {
              console.log(res)
              wx.showToast({
                title: '发布成功',
              })
            })
            .catch(error => {
              console.log(error)
            })
  
        })
        }
   
        
        
  },

  onLoad() {
    var that = this
    const db = wx.cloud.database()
    db.collection('sell').get({
      success(res) {
        //console.log(res.data)
        that.setData({
          datalist: res.data.reverse(),
        })
      }
    })
  },

  onPullDownRefresh() {
    this.onLoad();//需要再次调用接口的函数
    wx.stopPullDownRefresh();
  },

})