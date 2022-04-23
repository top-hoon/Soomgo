const { io } = require("../server");
const ledsOb = require("./");
//
const webSocket = require('./websocket');
//
const webScokets = require({ledsOb, io});
//
const services = Object.freeze({webScokets});

module.exports = services;
module.exports = { webScokets};