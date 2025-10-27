import { Router } from "express";
import { ordersController } from "../controller/orders.controller.js";
const router = Router();

router.route("/").get(ordersController.find);
router.route("/:id").get(ordersController.findOne);
router.route("/:id").patch(ordersController.update);
router.route("/:id").delete(ordersController.delete);
router.route("/").post(ordersController.create);

export { router as ordersRouter };
