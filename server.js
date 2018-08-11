const express = require('express');

const app = express();

var routes = require('./api/routes/gitHubRoutes'); //importing route
routes(app); //register the route

const port = 5000;

// catch errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => `Server running on port ${port}`);