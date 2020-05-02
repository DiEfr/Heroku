var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(process.cwd(), 'source/index.html')));
console.log(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);