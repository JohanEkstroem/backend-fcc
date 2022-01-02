var express = require('express');
var app = express();
app.get('/', (req, res) => {
    let absolutPath = __dirname + '/views/index.html'
    res.sendFile(absolutPath);
});

































module.exports = app;