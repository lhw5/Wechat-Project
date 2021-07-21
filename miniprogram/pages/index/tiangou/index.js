var app = getApp()
const db = wx.cloud.database();
const qinghua = db.collection('tiangou');
Page({
  data: {
    datalist:[]
  },
  onLoad: function (options) {
    db.collection('tiangou').aggregate().sample({size:3}).end().then(
      res=>{
        console.log(res.list[0].data);
        console.log(res.list[0]);
        this.setData({
          datalist:res.list[0].data
        })
      }
    )
  },

})