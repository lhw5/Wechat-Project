var app = getApp()
Page({
  data: {
    navbar: ['丢失的物品', '捡到的物品','发布通缉'],
    currentTab: 0,
    items:[{
      'url':'',
      'img':'/pages/shiwu/images/1.png',
      'title':'我是谁',
      'desc':'丢失如下物品',
      'wenben':'我在g1-311丢失了一个李小龙同志,请捡到李小龙同志的同学拨打110联系 ',
      'tupian':'/pages/shiwu/images/1.jpg'
    },{
      'url':'/',
      'img':'/pages/shiwu/images/1.png',
      'title':'我是谁',
      'desc':'丢失如下物品',
      'wenben':'我在g1-311丢失了一个李小龙同志,请捡到李小龙同志的同学拨打110联系',
      'tupian':'/pages/shiwu/images/1.jpg'
    },{
      'url':'/',
      'img':'/pages/shiwu/images/1.png',
      'title':'我是谁',
      'desc':'丢失如下物品',
      'wenben':'我在g1-311丢失了一个李小龙同志,请捡到李小龙同志的同学拨打110联系 ',
      'tupian':'/pages/shiwu/images/1.jpg'
    }
    ],
    items2:[{
      'url':'/',
      'img':'/pages/shiwu/images/2.png',
      'title':'我是谁',
      'desc':'捡到如下物品',
      'wenben':'我在g1-311捡到了一个李小龙同志,请丢失李小龙同志的同学拨打110联系 ',
      'tupian':'/pages/shiwu/images/2.jpg'
    },{
      'url':'',
      'img':'/pages/shiwu/images/2.png',
      'title':'我是谁',
      'desc':'捡到如下物品',
      'wenben':'我在g1-311捡到了一个李小龙同志,请丢失李小龙同志的同学拨打110联系',
      'tupian':'/pages/shiwu/images/2.jpg'
    },{
      'url':'',
      'img':'/pages/shiwu/images/2.png',
      'title':'我是谁',
      'desc':'捡到如下物品',
      'wenben':'我在g1-311捡到了一个李小龙同志,请丢失李小龙同志的同学拨打110联系 ',
      'tupian':'/pages/shiwu/images/2.jpg'
    }
    ]
   }, 
    navbarTap: function(e){
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    }
  },
)


