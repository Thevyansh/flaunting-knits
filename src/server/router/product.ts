import { ObjectID } from "bson";
import { z } from "zod";
import { createRouter } from "./context";

export const productRouter = createRouter()
  // .query("hello", {
  //   input: z
  //     .object({
  //       text: z.string().nullish(),
  //     })
  //     .nullish(),
  //   resolve({ input }) {
  //     return {
  //       greeting: `Hello ${input?.text ?? "world"}`,
  //     };
  //   },
  // })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.product.findMany();
    },
  })
  .query("getProductById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.product.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  });
