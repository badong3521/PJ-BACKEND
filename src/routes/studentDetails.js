import infoStudentPage from "../app/controllers/infoStudentPage.js";
import {
    Router
} from "express";
const router = Router();

router.get("/", infoStudentPage.index);
router.get("/:slug", infoStudentPage.details);
// router.post("/", infoStudentPage.index);


export default router;