import { Router } from 'express';
import { paymentsController } from '../controller/payments.controller.js';
const router = Router();

router.route('/').get(paymentsController.find);
router.route('/:id').get(paymentsController.findOne);
router.route('/:id').patch(paymentsController.update);
router.route('/:id').delete(paymentsController.delete);
router.route('/').post(paymentsController.create);

export { router as paymentsRouter };
