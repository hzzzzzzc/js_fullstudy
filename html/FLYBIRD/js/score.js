var pics = new Array()
pics[0] = "url(img/0.jpg)"
pics[1] = "url(img/1.jpg)"
pics[2] = "url(img/2.jpg)"
pics[3] = "url(img/3.jpg)"
pics[4] = "url(img/4.jpg)"
pics[5] = "url(img/5.jpg)"
pics[6] = "url(img/6.jpg)"
pics[7] = "url(img/7.jpg)"
pics[8] = "url(img/8.jpg)"
pics[9] = "url(img/9.jpg)"



for (var i = 0; i < 10; i++) {
    scoreImg2.style.backgroundImage = pics[i]
    if (i == 9) {
      i = 0
      var j = 1
      scoreImg1.style.backgroundImage = pics[j]
      j = j + 1
      }
    }