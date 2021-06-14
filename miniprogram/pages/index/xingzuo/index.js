// pages/work7/index.js
Page({
  data: {
    content: [
      {
      'name': '白羊座',
      'date':'3.21-4.19',
      'img': '/pages/index/xingzuo/img/by.jpg',
      'bindtap': 'aries'
     },{
      'name': '金牛座',
      'date':'4.20-5.20',
      'img': '/pages/index/xingzuo/img/jn.jpg',
      'bindtap': 'taurus'
    }, 
    {
      'name': '双子座',
      'date':'5.21-6.21',
      'img': '/pages/index/xingzuo/img/szz.jpg',
      'bindtap': 'gemini'
    }, {
      'name': '巨蟹座',
      'date':'6.22-7.22',
      'img': '/pages/index/xingzuo/img/jx.jpg',
      'bindtap': 'cancer'
    },{
      'name': '狮子座',
      'date':'7.23-8.22',
      'img': '/pages/index/xingzuo/img/sz.jpg',
      'bindtap': 'leo'
    }, {
      'name': '处女座',
      'date':'8.23-9.22',
      'img': '/pages/index/xingzuo/img/cn.jpg',
      'bindtap': 'virgo'
    },{
      'name': '天秤座',
      'date':'9.23-10.23',
      'img': '/pages/index/xingzuo/img/tc.jpg',
      'bindtap': 'libra'
    }, {
      'name': '天蝎座',
      'date':'10.24-11.22',
      'img': '/pages/index/xingzuo/img/tx.jpg',
      'bindtap': 'scorpio'
    }, {
      'name': '射手座',
      'date':'11.23-12.21',
      'img': '/pages/index/xingzuo/img/ss.jpg',
      'bindtap': 'sagittarius'
    }, {
      'name': '摩羯座',
      'date':'12.22-1.19',
      'img': '/pages/index/xingzuo/img/mj.jpg',
      'bindtap': 'capricorn'
    },{
      'name': '水瓶座',
      'date':'1.20-2.18',
      'img': '/pages/index/xingzuo/img/sp.jpg',
      'bindtap': 'aquarius'
    }, {
      'name': '双鱼座',
      'date':'2.19-3.20',
      'img': '/pages/index/xingzuo/img/sy.jpg',
      'bindtap': 'pisces'
    }
  ],
    type_1:'',
    type_2:'',
    type_3:'',
    type_4:'',
    type_5:'',
    type_6:'',
    type_7:'',
    type_8:'',
    type_9:'',
    comprehensive:'',
    love:'',
    work:'',
    fortune:'',
    healthy:'',
    luckyColor:'',
    luckyNumber:'',
    NobleMan:'',
    summary:''
  },
 
   //白羊座
   aries(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=aries', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        console.log(res.data.newslist[0].type)
        console.log(res.data.newslist[0].content)
        //console.log(res.data.newslist[1].type)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //金牛座
   taurus(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=taurus', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //双子座
   gemini(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=gemini', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //巨蟹座
   cancer(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=cancer', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //狮子座
   leo(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=leo', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //处女座
   virgo(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=virgo', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //天秤座
   libra(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=libra', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //天蝎座
   scorpio(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=scorpio', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //射手座
   sagittarius(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=sagittarius', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //摩羯座
   capricorn(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=capricorn', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //水瓶座
   aquarius(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=aquarius', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   },
   //双鱼座
   pisces(){
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/star/index?key=fadc3a2367e405cec42cf06c3b28764e&astro=pisces', 
      success: function (res) {
        //console.log(res)
        //console.log(res.data)
        console.log(res.data.newslist)
        //console.log(res.data.newslist[0])
        //console.log(res.data.newslist[0].type)
        //console.log(res.data.newslist[0].content)

        if(res.data.code == 200){
        that.setData({
          type_1:res.data.newslist[0].type+'：',
          type_2:res.data.newslist[1].type+'：',
          type_3:res.data.newslist[2].type+'：',
          type_4:res.data.newslist[3].type+'：',
          type_5:res.data.newslist[4].type+'：',
          type_6:res.data.newslist[5].type+'：',
          type_7:res.data.newslist[6].type+'：',
          type_8:res.data.newslist[7].type+'：',
          type_9:res.data.newslist[8].type+'：',
          comprehensive:res.data.newslist[0].content,
          love:res.data.newslist[1].content,
          work:res.data.newslist[2].content,
          fortune:res.data.newslist[3].content,
          healthy:res.data.newslist[4].content,
          luckyColor:res.data.newslist[5].content,
          luckyNumber:res.data.newslist[6].content,
          NobleMan:res.data.newslist[7].content,
          summary:res.data.newslist[8].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
   }
})