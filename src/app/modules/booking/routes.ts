import express from 'express';
import { BookingValidations } from './validation';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(BookingValidations.createBooking),
  BookingController.createAdmin
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookingController.getBookings
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookingController.getBooking
);

router.patch(
  '/update-status/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(BookingValidations.updateBookingStatus),
  BookingController.updateBookingStatus
);

export const BookingRoutes = router;
