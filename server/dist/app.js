"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = express_1.default();
if (process.env.NODE_ENV === "production") {
    app.use(require("helmet")());
    app.use(require("compression")());
}
else {
    app.use(require("cors")());
}
// var corsOptions = {
//     origin: "http://localhost:8080"
// };
// app.use(cors(corsOptions));
app.use(morgan_1.default('dev'));
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true}));
//ROUTES
app.use("/users", user_routes_1.default);
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
