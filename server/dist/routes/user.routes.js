"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var dbCon_1 = __importDefault(require("../dbCon"));
router.get('/', function (req, res, next) {
    dbCon_1.default.query('SELECT * FROM test', function (err, rows) {
        if (err)
            throw err;
        console.log('Data received from Db:');
        console.log(rows);
        res.status(200).json({
            message: rows
        });
    });
});
router.get('/add', function (req, res, next) {
    dbCon_1.default.query('INSERT INTO test (name, birth) VALUES ("PEJSEK", "1.12.2020")', function (err, result) {
        if (err)
            throw err;
        console.log("1 record inserted", result);
        res.status(200).json({
            message: result
        });
    });
});
module.exports = router;
