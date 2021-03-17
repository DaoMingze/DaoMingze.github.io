/*抓取一言文本，给予出处和链接*/
fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
      var hitofrom = document.getElementById('hitofrom');
      hitofrom.innerText = "——" + data.from; 
	  var hitoid = document.getElementById('hitoid');
	  hitoid.setAttribute('href', 'https://hitokoto.cn?id='+ data.id);
    })
    .catch(function (err) {
      console.error(err);
    })<link rel="stylesheet" href="/css/markmap.css" type="text/css">