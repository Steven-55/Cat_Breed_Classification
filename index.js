import express from "express";
import usersRoute from "./routes/UsersRoute.js";
import catsRoute from "./routes/CatsRoute.js";

const port = 3000;
const app = express();

app.use(usersRoute);
app.use(catsRoute);

app.use("/", (req, res) => {
	res.send({
		message: "App Working!",
	});
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

db.authenticate()
	.then(() => {
		console.log("Database Connected!");
	})
	.catch((err) => {
		console.error("Unable to connect! : ", err);
	});
