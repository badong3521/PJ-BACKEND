import sitePage from "../app/controllers/sitePage.js";
import { Router } from "express";
const router = Router();


router.get("/", sitePage.index);

export default router;
