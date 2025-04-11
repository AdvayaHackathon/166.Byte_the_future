import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signupSchema, signinSchema } from "@dhruvaprasad001/hackathon";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
      };
}>();

// 🔐 POST /signup
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    c.status(411);
    return c.json({ message: "Invalid inputs, Zod validation failed" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.json({ message: "User already exists or invalid data" });
  }
});
// // 🔐 POST /signin
// userRouter.post("/signin", async (c) => {
//   const body = await c.req.json();
//   const parsed = signinSchema.safeParse(body);
//   if (!parsed.success) {
//     c.status(411);
//     return c.json({ message: "Invalid inputs, Zod validation failed" });
//   }
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate())
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: body.email,
//         password: body.password,
//       },
//     });
//     if (!user) {
//       c.status(409);
//       return c.json({ message: "User not found" });
//     }
//     const token = await sign({ id: user.id }, c.env.JWT_SECRET);
//     return c.json({ jwt: token });
//   } catch (e) {
//     c.status(500);
//     return c.json({ message: "Internal server error" });
//   }
// });
// // 🔐 GET /name
// userRouter.get("/name", async (c) => {
//   const token = c.req.header("Authorization") || "";
//   if (!token) {
//     c.status(403);
//     return c.json({ message: "Authorization token missing" });
//   }
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate())
//   try {
//     const payload = await verify(token, c.env.JWT_SECRET) as { id: string };
//     if (!payload || !payload.id) {
//       return c.json({ message: "Invalid or expired token" });
//     }
//     const user = await prisma.user.findUnique({
//       where: { id: payload.id },
//       select: { name: true },
//     });
//     return c.json({ name: user?.name || "Anonymous" });
//   } catch (e) {
//     c.status(401);
//     return c.json({ message: "Token verification failed" });
//   }
// });

// userRouter.get("/signin" , (c)=>{
//     return c.json({
//         message:"hello"
//     })
// })