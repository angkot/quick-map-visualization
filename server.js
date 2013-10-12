var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.post('/update', function(req, res) {
  var cmd = req.body.cmd,
      param = JSON.parse(req.body.param);
  io.sockets.emit('update', {cmd: cmd, param: param});
  res.send({status:'ok'});
});

server.listen(8000);

