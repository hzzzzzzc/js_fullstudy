// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'try-p91x8'

cloud.init()
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event);
  const userInfo = event.userInfo
  // 连通数据库
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      creatBy: userInfo.openId,
      creatTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
}