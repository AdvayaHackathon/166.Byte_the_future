import { z } from 'zod';
export declare const signupSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
}, {
    email: string;
    password: string;
    name: string;
}>;
export type SignupInput = z.infer<typeof signupSchema>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninInput = z.infer<typeof signinSchema>;
export declare const lessonUploadSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    className: z.ZodString;
    subject: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    className: string;
    subject: string;
}, {
    title: string;
    content: string;
    className: string;
    subject: string;
}>;
export type LessonUploadInput = z.infer<typeof lessonUploadSchema>;
export declare const lessonUpdateSchema: z.ZodObject<{
    id: z.ZodString;
    summary: z.ZodOptional<z.ZodString>;
    translation: z.ZodOptional<z.ZodString>;
    quiz: z.ZodOptional<z.ZodAny>;
    audioUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    summary?: string | undefined;
    translation?: string | undefined;
    quiz?: any;
    audioUrl?: string | undefined;
}, {
    id: string;
    summary?: string | undefined;
    translation?: string | undefined;
    quiz?: any;
    audioUrl?: string | undefined;
}>;
export type LessonUpdateInput = z.infer<typeof lessonUpdateSchema>;
