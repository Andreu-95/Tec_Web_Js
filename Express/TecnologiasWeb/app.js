var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
    res.send('Con Get!');
})

app.post('/TecnologiasWeb', function(req, res) {
    res.send('Con Post!');
})

app.put('/TecnologiasWeb', function(req, res) {
    res.send('Con Put!');
})

app.listen(5050, function () {
    console.log('Example app!');
})