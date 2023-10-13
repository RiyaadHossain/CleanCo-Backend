import express from 'express';
import { ProfileValidations } from './validation';
import validateRequest from '../../middlewares/validateRequest';
import { ProfileController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get(
  '/me',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.CUSTOMER
  ),
  ProfileController.getProfile
);

router.patch(
  '/update',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.CUSTOMER
  ),
  validateRequest(ProfileValidations.updateProfile),
  ProfileController.updateProfile
);

export const ProfileRoutes = router;
