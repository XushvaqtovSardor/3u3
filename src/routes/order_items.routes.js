import { Router } from 'express';
import { order_itemsController } from '../controller/order_items.controller.js';
const router = Router();

router.route('/').get(order_itemsController.find);
router.route('/:id').get(order_itemsController.findOne);
router.route('/:id').patch(order_itemsController.update);
router.route('/:id').delete(order_itemsController.delete);
router.route('/').post(order_itemsController.create);

export { router as order_itemsRouter };
