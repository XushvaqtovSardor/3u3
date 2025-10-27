import { Router } from "express";
import { water_productsController } from "../controller/water_products.controller.js";
const router = Router();

router.route("/").get(water_productsController.find);
router.route("/:id").get(water_productsController.findOne);
router.route("/:id").patch(water_productsController.update);
router.route("/:id").delete(water_productsController.delete);
router.route("/").post(water_productsController.create);

export { router as water_productsRouter };
