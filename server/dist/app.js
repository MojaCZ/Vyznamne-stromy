"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var users_1 = __importDefault(require("./routes/users"));
var mysql_1 = __importDefault(require("mysql"));
var app = express_1.default();
// move this to .env
var con = mysql_1.default.createConnection({
    host: "176.222.224.212",
    user: "moja",
    password: "4Th,u8U(*]ygE~7G",
    database: "stromy"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
con.query('SELECT * FROM test', function (err, rows) {
    if (err)
        throw err;
    console.log('Data received from Db:');
    console.log(rows);
});
app.use(morgan_1.default('dev'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//ROUTES
app.use("/users", users_1.default);
app.use(function (req, res, next) {
    var error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;
