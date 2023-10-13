import express from 'express';
import { AuthRoutes } from '../modules/auth/routes';
import { UserRoutes } from '../modules/user/routes';
import { CleaningServiceRoutes } from '../modules/cleaningService/routes';
import { CategoryRoutes } from '../modules/category/routes';
import { BookingRoutes } from '../modules/booking/routes';
import { ReviewRoutes } from '../modules/review/routes';
import { ProfileRoutes } from '../modules/profile/routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/cleaning-service',
    routes: CleaningServiceRoutes,
  },
  {
    path: '/bookings',
    routes: BookingRoutes,
  },
  {
    path: '/reviews',
    routes: ReviewRoutes,
  },
  {
    path: '/profile',
    routes: ProfileRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
