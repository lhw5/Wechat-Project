let app = getApp();
//获取云数据库引用
const db = wx.cloud.database();
const admin = db.collection('user');
let name = null;
let password = null;



Page({
  data: {
  // name: '',
  username: '',
  password: ''
  },
  // //获取用户名
  // getName(event) {
  // console.log('获取输入的用户名', event.detail.value)
  // this.setData({
  //  name: event.detail.value
  // })
  // },
  //获取用户账号
  getusername(event) {
  console.log('获取输入的账号', event.detail.value)
  this.setData({
   username: event.detail.value
  })
  },
  // 获取密码
  getpassword(event) {
  console.log('获取输入的密码', event.detail.value)
  this.setData({
   password: event.detail.value
  })
  },
   
  //注册
  zhuce() {
  // let name = this.data.name
  let username = this.data.username
  let password = this.data.password
  let that = this;
  let flag = false  //是否存在 true为存在
  console.log("点击了注册")
  // console.log("name", name)
  // console.log("username", username)
  // console.log("password", password)
  // //校验用户名
  // if (name.length < 2) {
  //  wx.showToast({
  //   icon: 'none',
  //   title: '用户名至少2位',
  //  })
  //  return
  // }
  // if (name.length > 10) {
  //  wx.showToast({
  //   icon: 'none',
  //   title: '用户名最多10位',
  //  })
  //  return
  // }
  //查询用户是否已经注册
  
  //校验账号
  if (username.length < 4) {
   wx.showToast({
    icon: 'none',
    title: '账号最少4位',
   })
   return
  }
  //校验密码
  if (password.length < 4) {
   wx.showToast({
    icon: 'none',
    title: '密码最少4位',
   })
   return
  }
  admin.get({
    success: (res) => {
      let admins = res.data;  //获取到的对象数组数据
       console.log(admins);
      for (let i = 0; i < admins.length; i++) {  //遍历数据库对象集合
        if (username === admins[i].username) { //用户名存在
          flag = true;
            break;
        }
      }
      if (flag === true) {    //已注册
        wx.showToast({
          title: '账号已被注册！',
          icon: 'success',
          duration: 2500
        })
        return title
      } else {   //注册功能的实现
        wx.cloud.database().collection('user').add({
         data: {
          // name: name,
          username: username,
          password: password
         },
         success(res) {
          console.log('注册成功', res)
          wx.showToast({
           title: '注册成功',
          })
          wx.navigateTo({
           url: '../login/index',
          })
         },
         fail(res) {
          console.log('注册失败', res)
         }
        })
      }
    }
  })
 
  }
  })