"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.status(200).json({
        message: "USERS GET ROOT"
    });
});
module.exports = router;
