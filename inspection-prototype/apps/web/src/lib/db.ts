import { PrismaClient } from "@prisma/client";
import { env } from "@/lib/env";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton = () =>
  new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL
      }
    }
  });

export const db = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
