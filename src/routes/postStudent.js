import postStudent from "../app/controllers/postController.js";
import { Router } from "express";
const router = Router();


router.get("/", postStudent.index);
router.post("/store", postStudent.store);

export default router;
