const ejs = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apirouter = require('./router/apirouter');
const apioverview = require('./router/apioverview');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/',apioverview);
app.use('/webscraper/data', apirouter);

module.exports = app;