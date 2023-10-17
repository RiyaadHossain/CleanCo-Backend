import express from 'express';
import { ReviewValidations } from './validation';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(ReviewValidations.createReview),
  ReviewController.createAdmin
);

router.get('/', ReviewController.getReviews);

router.get('/:serviceId', ReviewController.getReviewsByServiceId);

router.get('/:id', auth(ENUM_USER_ROLE.CUSTOMER), ReviewController.getReview);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(ReviewValidations.updateReview),
  ReviewController.updateReview
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  ReviewController.deleteReview
);

export const ReviewRoutes = router;
