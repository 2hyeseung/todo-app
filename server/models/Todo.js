// Todo 모델

const { DataTypes } = require("sequelize");

// 시퀄라이즈 모델과 mysql todo table 연결
const Todo = function (Sequelize, seqeulize) {
    // Sequelize.define()
    // - param1 : 모델 이름
    // - param2 : 컬럼 정의
    // - param3 : 모델 옵션
    const model = Sequelize.define(
        "todo",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            done: {
                type: DataTypes.TINYINT(1),
                allowNull: false,
                defaultValue: false,
            },
        },
        { tableName: "todo", freezeTableName: true, timestamps: false }
    );
    return model;
};

module.exports = Todo;
