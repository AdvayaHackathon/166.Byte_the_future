"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonUpdateSchema = exports.lessonUploadSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
    name: zod_1.z.string(),
});
exports.signinSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
});
exports.lessonUploadSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    content: zod_1.z.string().min(10),
    className: zod_1.z.string().min(1),
    subject: zod_1.z.string().min(1),
});
exports.lessonUpdateSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    summary: zod_1.z.string().optional(),
    translation: zod_1.z.string().optional(),
    quiz: zod_1.z.any().optional(),
    audioUrl: zod_1.z.string().url().optional(),
});
