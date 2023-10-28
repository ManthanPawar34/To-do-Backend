import express from "express";

import { register, login, getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// fpr print all user
// router.get("/all",getAllUser);


router.post("/new", register);

router.post("/login", login);


router.get("/me", isAuthenticated, getMyProfile);
// router.get("/username/:name",getUserName);

// router.put("/username/:name",updateUser);

// router.put("/username/:name",deleteUser);

router.get("/logout", logout);



export default router;
