var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile( __dirname + '/index.html');
  console.log('Do I work?')
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
  console.log('Wuuurk');
});
