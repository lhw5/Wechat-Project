const db = wx.cloud.database()
var app = getApp()
Page({
  data: {
    navbar: ['丢失墙', '发布', '拾到墙'],
    currentTab: 0,
    index: 0,
    isChecked: true,
    isChecksd: false,
    item: './images/upic.png',
    tempImg: [],
    datalist: [{
      imgUrl: '',
      content: '',
      phone: '',
      date: ''
    }],
    datalist1: [{
      imgUrl: '',
      content: '',
      phone: '',
      date: ''
    }],
  },

  diushi: function () {
    this.setData({
      isChecksd: false,
      isChecked: true,
      labels: "丢失日期"
    })
  },

  jiandao: function () {
    this.setData({
      isChecked: false,
      isChecksd: true,
      labels: "捡到日期"
    })
  },

  submit: function (res) {
    let content = res.detail.value.content
    let phone = res.detail.value.phone

    if (content.length == 0) {
      wx.showToast({
        title: '描述内容不能为空!',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (phone.length == 0) {
      wx.showToast({
        title: '请填写联系方式!',
        icon: 'none',
        duration: 1500
      })
    }else if(this.data.isChecked){
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
        cloudPath: 'shiwuZL/' + new Date().getTime() + suffix,
        filePath: filePath, // 文件路径
      }).then(res => {
        console.log(res.fileID)
        db.collection('shiwuZL').add({
            data: {
              "content": content,
              "phone": phone,
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
    } else  {
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
        cloudPath: 'shiwuZL1/' + new Date().getTime() + suffix,
        filePath: filePath, // 文件路径
      }).then(res => {
        console.log(res.fileID)
        db.collection('shiwuZL1').add({
            data: {
              "content": content,
              "phone": phone,
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

  uploadImgHandle: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        this.setData({
          tempImg: tempFilePaths
        })
      }
    })
  },


  onLoad: function () {
    var that = this
    const db = wx.cloud.database()
    db.collection('shiwuZL').get({
      success(res) {
        //console.log(res.data)
        that.setData({
          datalist: res.data.reverse(),
        })
      }
    })

    db.collection('shiwuZL1').get({
      success(res) {
        //console.log(res.data)
        that.setData({
          datalist1: res.data.reverse(),
        })
      }
    })
  },
  onPullDownRefresh() {
    this.onLoad(); //需要再次调用接口的函数
    wx.stopPullDownRefresh();
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
})