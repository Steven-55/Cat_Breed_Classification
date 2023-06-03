import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Users = db.define("users", {
	id_user: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	username: {
		type: DataTypes.STRING,
	},
	password: {
		type: DataTypes.STRING,
	},
});

export default Users;
