import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure
    .input(
      z.object({
        take: z.number().min(1).max(1000).default(100),
        skip: z.number().default(0),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.bahnprisma.stop.findMany({
        take: input.take,
        skip: 0,
      });
    }),
});
