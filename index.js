const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(4000, () => console.log('express is running on port 4000'))


// var http = require('http').createServer(app);


// http.listen(3000, function(){
//     console.log('listening on *:3000');
//   });
