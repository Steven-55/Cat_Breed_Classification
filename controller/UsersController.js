import Users from "../models/UsersModel.js";

export const getUser = async (req, res) => {
	try {
		const iUsername = req.body.username;
		const iPassword = req.body.password;
		let response = await Users.findOne({
			where: {
				username: iUsername,
				password: iPassword,
			},
		});
		if (!response) return res.send({ message: "User not found!" });
		res.send(response);
		console.log(response.dataValues);
	} catch (error) {
		console.log(error.message);
	}
};

export const addUser = async (req, res) => {
	const iName = req.body.username;
	const iPassword = req.body.password;
	try {
		const users = await Users.create({
			username: iName,
			password: iPassword,
		});
		return res.json(users);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
