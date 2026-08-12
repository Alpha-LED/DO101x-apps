const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 3 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/readiness/healthz', function (req, res) {

  
    console.log("ready to serve, successfully passed")

    //send the response to the client
    res.send(response);

});

app.get('/liveness/healthz', function (req, res) {

  
    console.log("live  serving, successfully passed")

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
