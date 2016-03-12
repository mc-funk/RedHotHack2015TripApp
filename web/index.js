var express = require('express');
var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/public');

app.get('/*', function(request, response) {
    var file = request.params[0] || 'index.html';
    response.sendFile(path.join(__dirname, './', file));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
