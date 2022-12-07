"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"]; //config.json의 development
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
// seqeulize 객체 선언시 매개변수로 "DB명, 사용자, 비번, 설정정보 전체" 정보를 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db. = {"sequelize":sequelize, "Sequelize": Sequelize}

db.Todo = require("./Todo")(sequelize, Sequelize);
// db = { "sequelize" : sequelize, "Sequelize" : Sequelize, "Todo" : Todo }
// models: models/Todo.js에서 Todo가 반환하고 있는 model이 db.Todo에 들어감

module.exports = db;
