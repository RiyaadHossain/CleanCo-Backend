"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_1 = require("./validation");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(validation_1.AuthValidations.signUp), controllers_1.AuthController.signUp);
router.post('/signin', (0, validateRequest_1.default)(validation_1.AuthValidations.signIn), controllers_1.AuthController.signIn);
exports.AuthRoutes = router;
