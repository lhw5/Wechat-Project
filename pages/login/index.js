var app = getApp()
// 获取云数据库引用
const db = wx.cloud.database();
const admin = db.collection('user'); //注意，这里就是刚才的集合的名字——user

Page({
  data: {
    username: '',
    password: '',
    sex:''
  },

  // 获取输入账号
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  // 获取输入密码 passwordInput是前端绑定的 password是后台定义的， 用于登录比对
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 登录
  login: function () {
    admin.get({
      success: res => {
        for (let i = 0; i < res.data.length; i++) {
          var username = res.data[i].username;
          var password = res.data[i].password;
          var sex = res.data[i].sex;
          if (this.data.username == username) {
            if (this.data.password !== password) {
              wx.showToast({
                title: '密码错误!!',
                icon: 'none',
                duration: 3000
              })
              break
            }else{
              wx.showToast({
                title: '绑定成功!',
                icon: 'success',
                duration: 3000,
              })
              wx.switchTab({
                url: '/pages/index/index'
              })
              break
            }
          }else{
            if (i >= res.data.length - 1){  //遍历结束，找不到账号
              wx.showToast({
                title: '无此账号!!',
                icon: 'none',
                duration: 3000
              })
            }
          }
        }
        
        if (this.data.username.length == 0 || this.data.password.length == 0) {
          wx.showToast({
            title: '账号和密码不能为空!!',
            icon: 'none',
            duration: 3000
          })
        }
        console.log(res.data)
        console.log(username)
        console.log(password)
        console.log(sex)
      }
    })

  }
})