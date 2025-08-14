import { Router } from "express";
import { createUser, getUsers, login } from "../controllers/usersControllers";

const router = Router();
router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", login);

export default router;
