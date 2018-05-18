const express = require('express');
const app =express()
app.use(express.static(__dirname+'dist'))
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);