const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(express.json());
let addition = 0;
app.post('/calculator', function (req, res) {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
        const value = req.body[i];
        addition += value;
    }
    res.end(JSON.stringify({ result: "The given data is saved" }));
})

app.get('/calculator', function (req, res) {
    res.end(JSON.stringify({ result: "The value is " + addition }));
})

var server = app.listen(800, function () {
    var host = server.address().address
    var port = server.address().port
    //console.log("Application listening at http://%s:%s", host, port);
    console.log("service started");
})
app.delete('/calculator', function (req, res) {
    addition = 0;
    res.end(JSON.stringify({ result: "deleted :", addition }));
})