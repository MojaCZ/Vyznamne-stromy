"use strict";
// import {Sequelize} from 'sequelize'
module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return User;
};
