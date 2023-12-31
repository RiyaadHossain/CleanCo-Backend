import express from 'express';
import { CleaningServiceValidations } from './validation';
import validateRequest from '../../middlewares/validateRequest';
import { CleaningServiceController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CleaningServiceValidations.createService),
  CleaningServiceController.createCleaningService
);

router.get(
  '/',
  CleaningServiceController.getCleaningServices
);

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CleaningServiceController.getCleaningService
);

router.patch(
  '/:id',
  validateRequest(CleaningServiceValidations.updateService),
  CleaningServiceController.updateCleaningService
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CleaningServiceController.deleteCleaningService
);

export const CleaningServiceRoutes = router;
