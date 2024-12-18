// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// ใช้ global นี้เพื่อป้องกันการสร้าง Prisma Client หลายครั้งในระหว่างการพัฒนา
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export { prisma };