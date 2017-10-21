var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(process.env.PORT || 8080);