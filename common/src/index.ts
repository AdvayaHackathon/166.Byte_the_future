import { z } from 'zod'

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  name: z.string(),
})

export type SignupInput = z.infer<typeof signupSchema>

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})

export type SigninInput = z.infer<typeof signinSchema>

export const lessonUploadSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  className: z.string().min(1),  
  subject: z.string().min(1), 
})

export type LessonUploadInput = z.infer<typeof lessonUploadSchema>

export const lessonUpdateSchema = z.object({
  id: z.string().cuid(),
  summary: z.string().optional(),
  translation: z.string().optional(),
  quiz: z.any().optional(), 
  audioUrl: z.string().url().optional(),
 
})

export type LessonUpdateInput = z.infer<typeof lessonUpdateSchema>