//variable declations
var express = require('express');
var app = express();
let absolutPath = __dirname + '/views/index.html'
let stylePath = __dirname + '/public/style.css';


//sending files
app.get('/', (req, res) => {
    res.send('Hello Express');
    /*     res.sendFile(absolutPath); */
});


app.use(stylePath, express.static(
    
))



console.log('Hello World');


app.listen(port);

























module.exports = app;