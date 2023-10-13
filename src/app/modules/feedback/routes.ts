import express from 'express';
import { FeedbackValidations } from './validation';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(FeedbackValidations.createFeedback),
  FeedbackController.createAdmin
);

router.get(
  '/',
  FeedbackController.getFeedbacks
);


export const FeedbackRoutes = router;
