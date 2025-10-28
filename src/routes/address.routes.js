import { Router } from 'express';
import { addressController } from '../controller/address.controller.js';
const router = Router();

router.route('/').get(addressController.find);
router.route('/:id').get(addressController.findOne);
router.route('/:id').patch(addressController.update);
router.route('/:id').delete(addressController.delete);
router.route('/').post(addressController.create);

export { router as addressRouter };
