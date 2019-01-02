const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// routes import
const teams = require('./routes/api/teams');
const features = require('./routes/api/feature');
const issues = require('./routes/api/issue');
const tasks = require('./routes/api/tasks');

// body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


//connection file
var connection = require('./config/connection');
// app.disable('etag');

//test route
app.get('/', (req, res) => res.send("hello there !! sos "));

//main routes
app.use('/api/teams', teams);
app.use('/api/features', features);
app.use('/api/issues', issues);
app.use('/api/tasks', tasks);




//ports configuration
app.set('port', process.env.PORT || 3005);
app.listen(app.get('port'));