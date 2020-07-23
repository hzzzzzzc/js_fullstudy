//  ajax
// wx.request 从本地小程序 -> 服务器 
// localhost:1234 
// fetch  web 做接口请法语的地方 
const bannerEle = document.querySelector('#banner');

fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
  .then(data => data.json())
  .then(data => {
    // console.log(data);
    if (data.code == 200) { //状态码
      const banners = data.banners;
      // console.log(banners, '+++++++');
      // array  -> html DOM 结点 
      /*for(let banner of banners) {
        console.log(banner);
        bannerEle.innerHTML += `<img src="${banner.imageUrl}"/>`
      }*/
      const html = banners.map((banners)=>{
        return '< img src="${banner.imageUrl}" />'
      })
      console.log(html);
      bannerEle.innerHTML = html.json('');
    } else {
      console.log('请求失败')
    }
    //上面就是把imageUrl单独拿出来
  })
