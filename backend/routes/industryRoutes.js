import express from "express";
import { getIndustries } from "../controllers/industryController.js";

const router = express.Router();
router.get("/", getIndustries);

export default router;
