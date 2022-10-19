import routerController from "../app/controllers/topRouteController.js";
import { Router } from "express";
const router = Router();

router.get("/:slug", routerController.details);
router.get("/", routerController.index);

export default router;
