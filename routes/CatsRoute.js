import express from "express";
import { getCatByID } from "../controller/CatsController.js";

const catsRoute = express.Router();

catsRoute.post("/cat", getCatByID);

export default catsRoute;
