import { Router } from 'express';
import { delivery_stuffController } from '../controller/delivery_stuff.controller.js';

const router = Router();

router.route('/').get(delivery_stuffController.find);
router.route('/:id').get(delivery_stuffController.findOne);
router.route('/:id').patch(delivery_stuffController.update);
router.route('/:id').delete(delivery_stuffController.delete);
router.route('/').post(delivery_stuffController.create);

export { router as delivery_stuffRouter };
