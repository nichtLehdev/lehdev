import { PrismaClient as OldBahnClient } from "../../prisma/generated/oldBahnClient";
import { PrismaClient as BahnClient } from "../../prisma/generated/bahnClient";
import { type PrismaClient } from "@prisma/client";
import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const bahnPrisma = globalThis as unknown as {
  prisma: BahnClient | undefined;
};

const oldBahnPrisma = globalThis as unknown as {
  prisma: OldBahnClient | undefined;
};

export const bahnprisma =
  bahnPrisma.prisma ??
  new BahnClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

export const oldBahnprisma =
  oldBahnPrisma.prisma ??
  new OldBahnClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") bahnPrisma.prisma = bahnprisma;
if (env.NODE_ENV !== "production") oldBahnPrisma.prisma = oldBahnprisma;
