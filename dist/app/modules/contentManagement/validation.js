"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManagementValidators = void 0;
const zod_1 = require("zod");
const interface_1 = require("./interface");
const createContent = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        status: zod_1.z
            .enum(Object.values(interface_1.ENUM_CONTENT_VISIBILITY_STATUS))
            .optional(),
    }),
});
exports.ContentManagementValidators = { createContent };
