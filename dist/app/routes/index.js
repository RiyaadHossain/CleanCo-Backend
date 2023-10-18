"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../modules/auth/routes");
const routes_2 = require("../modules/user/routes");
const routes_3 = require("../modules/cleaningService/routes");
const routes_4 = require("../modules/category/routes");
const routes_5 = require("../modules/booking/routes");
const routes_6 = require("../modules/review/routes");
const routes_7 = require("../modules/profile/routes");
const routes_8 = require("../modules/feedback/routes");
const routes_9 = require("../modules/cart/routes");
const routes_10 = require("../modules/contentManagement/routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: routes_1.AuthRoutes,
    },
    {
        path: '/users',
        routes: routes_2.UserRoutes,
    },
    {
        path: '/categories',
        routes: routes_4.CategoryRoutes,
    },
    {
        path: '/cleaning-service',
        routes: routes_3.CleaningServiceRoutes,
    },
    {
        path: '/bookings',
        routes: routes_5.BookingRoutes,
    },
    {
        path: '/reviews',
        routes: routes_6.ReviewRoutes,
    },
    {
        path: '/profile',
        routes: routes_7.ProfileRoutes,
    },
    {
        path: '/feedbacks',
        routes: routes_8.FeedbackRoutes,
    },
    {
        path: '/carts',
        routes: routes_9.CartRoutes,
    },
    {
        path: '/content-management',
        routes: routes_10.ContentManagementRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
