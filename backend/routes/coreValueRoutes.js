import express from "express";
import { getCoreValues } from "../controllers/coreValueController.js";

const router = express.Router();
router.get("/", getCoreValues);

export default router;
