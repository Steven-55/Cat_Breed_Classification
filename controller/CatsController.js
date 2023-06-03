import Cats from "../models/CatsModel.js";

export const getCatByID = async (req, res) => {
	try {
		const response = await Cats.findOne({
			where: {
				id_cat: req.params.id_cat,
			},
		});
		if (!response) return res.status(404).json({ msg: "Data Not Found!" });
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};
