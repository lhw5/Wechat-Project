var app = getApp()
const db = wx.cloud.database();
const xiaohua = db.collection('xiaohua');
Page({
  data: {
    datalist:[]
  },
  onLoad: function (options) {
    db.collection('xiaohua').aggregate().sample({size:6}).end().then(
      res=>{
        console.log(res.list);
        console.log(res.list[0].data);
        //console.log(res.list[0]);
        this.setData({
          datalist:res.list[0].data
        })
      }
    )
  },

})