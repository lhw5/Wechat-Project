// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"cloud1-0ghc24yocefc0cb0"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const bb = db.collection('biaobaiqiang').get()

  return {
    bb,event
  }
}