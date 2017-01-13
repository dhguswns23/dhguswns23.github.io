var LISTEN_PORT = 8000;

var express = require('express');
var app = express();
var server = app.listen(LISTEN_PORT, function(){
    console.log("Express server has started on port "+LISTEN_PORT);
})

app.get('/', function(req, res){
    res.send('Hello World');
});
