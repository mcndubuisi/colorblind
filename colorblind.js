// Dependencies required for the app
var express = require('express');
var app = express();
var box = require('./lib/box.js');

// Use port 3000 unless there exists a preconfigured port
app.set('port', process.env.PORT || 3000);

// Static resources middleware
app.use(express.static(__dirname + '/public'));

// Set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');


// Home Page
app.get('/', function(req, res){
    res.render('home', {boxText: box.getBoxText(), 
                        boxColor: box.getBoxColor()});
});

app.listen(app.get('port'), function(){
    console.log("Express is running on http://localhost:" + app.get('port') + "...");
});