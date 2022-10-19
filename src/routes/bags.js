import bagCollections from "../app/controllers/bagControllers.js";
import { Router } from "express";
const router = Router();


router.get("/", bagCollections.index);

export default router;
