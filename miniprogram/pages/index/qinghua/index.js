var app = getApp()
const db = wx.cloud.database();
const qinghua = db.collection('qinghua');
Page({
  data: {
    list:[],
  },
  // getQinghua(){
  //   qinghua.get({
  //     success:res=>{
  //         // /console.log(res)
  //         this.setData({
  //           datalist:res.data[0].data
  //         })
  //       // console.log(res.data[1])
  //       // console.log(res.data[0].data)
  //       // console.log(res.data.length)
        
  //     },
      
  //   })
  // },
  onLoad: function (options) {
    db.collection('qinghua').aggregate().sample({size:1}).end().then(
      res=>{
        //console.log(res);
        //console.log(res.list);
        console.log(res.list[0].data);
        this.setData({
          list:res.list[0].data
        })
      }
    )
   // this.getQinghua()
  },

})