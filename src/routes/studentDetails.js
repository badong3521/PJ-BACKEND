import infoStudentPage from "../app/controllers/infoStudentPage.js";
import { Router } from "express";
const router = Router();

router.get("/:slug", infoStudentPage.details);
router.get("/", infoStudentPage.index);

export default router;
