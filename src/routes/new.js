import newControllers from "../app/controllers/newControllers.js";
import { Router } from "express";
const router = Router();

router.get("/:routeDetails", newControllers.details);
router.get("/", newControllers.index);

export default router;
