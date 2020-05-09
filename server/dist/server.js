"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./app"));
require("dotenv/config");
var port = process.env.PORT || 3000;
console.log("PORT: ", process.env.PORT);
var server = http_1.default.createServer(app_1.default);
server.listen(port);
