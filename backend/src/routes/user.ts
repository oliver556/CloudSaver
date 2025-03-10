// backend/src/routes/user.ts
import express from "express";
import { userController } from "../controllers/user";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;
