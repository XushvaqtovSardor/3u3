import { Router } from 'express';
import { customersController } from '../controller/customers.controller.js';
const router = Router();

router.route('/').get(customersController.find);
router.route('/:id').get(customersController.findOne);
router.route('/:id').patch(customersController.update);
router.route('/:id').delete(customersController.delete);
router.route('/').post(customersController.create);

export { router as customersRouter };
