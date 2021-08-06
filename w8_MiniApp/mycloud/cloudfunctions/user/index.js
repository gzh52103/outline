// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化
cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

const col = db.collection('users')


// 云函数入口函数
exports.main = async (event, context) => {
  console.log('event=>',event);

  // 在云函数中调用其他云函数
  const {result} = await cloud.callFunction({
    name:'class'
  })

  const {data} = await col.get();



  return {
    data,
    class:result
  }
}