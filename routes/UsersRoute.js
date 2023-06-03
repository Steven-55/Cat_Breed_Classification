import express from "express";
import { addUser, getUser } from "../controller/UsersController.js";

const usersRoute = express.Router();

usersRoute.post("/login", getUser);
usersRoute.post("/regis", addUser);

export default usersRoute;
