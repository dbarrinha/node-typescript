"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 3333;
app.get('/', function (req, res) {
    return res.send('Hello');
});
app.listen(PORT, function () {
    console.log("Listening on " + PORT);
});
