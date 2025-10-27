import { Router } from "express";
import { districtsController } from "../controller/districts.controller.js";
const router = Router();

router.route("/").get(districtsController.find);
router.route("/:id").get(districtsController.findOne);
router.route("/:id").patch(districtsController.update);
router.route("/:id").delete(districtsController.delete);
router.route("/").post(districtsController.create);

export { router as districtsRouter };
