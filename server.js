const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var routes = require('./api/routes/gitHubRoutes'); //importing route
routes(app); //register the route

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 5000;

// catch errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => `Server running on port ${port}`);