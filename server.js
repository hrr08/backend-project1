var express = require('express');
var app = express()

var port = process.env.port || 8080;

app.get('/:content', function(req, res){
    var time = req.params.content;
    res.json(converttime(time));
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
})

function converttime(time){
    var obj = {
        unix: null,
        natural: null
    }
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];    
    
    var date;
	if (!isNaN(parseInt(time))) {
		date = new Date(parseInt(time*1000));
	} else {
		date = new Date(time)
	}
 

	if (!isNaN(date.getTime())) {    
        obj.unix = date.getTime() / 1000;
        obj.natural = month[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
	}
    return obj;
}