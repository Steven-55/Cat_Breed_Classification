import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Cats = db.define("cats", {
	id_cat: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	cat_race: {
		type: DataTypes.STRING,
	},
	cat_desc: {
		type: DataTypes.TEXT,
	},
});

export default Cats;
