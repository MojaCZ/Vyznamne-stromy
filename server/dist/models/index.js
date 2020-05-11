"use strict";
var Sequelize = require("sequelize");
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
var db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    user: require("../models/user.model.js")(sequelize, Sequelize),
    role: require("../models/role.model.js")(sequelize, Sequelize),
    ROLES: ["user", "admin"]
};
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
module.exports = db;
