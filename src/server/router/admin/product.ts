import { createAdminRouter, createProtectedRouter } from "../protected-router";
import { z } from "zod";
import { createRouter } from "../context";
import * as trpc from "@trpc/server";

export const adminRouter = createAdminRouter().mutation("createProduct", {
  input: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    salePrice: z.number().nonnegative(),
    price: z.number().nonnegative(),
    featuredImage: z.string(),
    images: z.any().optional(),
    tags: z.any(),
    sizes: z.any(),
    inventory: z.number().nonnegative(),
  }),
  async resolve({ ctx, input }) {
    // const categoryID = new ObjectID().toString();
    const product = await ctx.prisma.product.create({
      data: {
        ...input,
      },
    });
    return { success: true, product };
  },
});
