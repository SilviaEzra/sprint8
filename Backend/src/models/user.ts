import { DataTypes } from "sequelize"
import  sequelize  from "../db/connections"

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;