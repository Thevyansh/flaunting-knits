import { createAdminRouter, createProtectedRouter } from "../protected-router";
import { z } from "zod";
import { createRouter } from "../context";
import * as trpc from "@trpc/server";
import { createProductSchema } from "@/schema/product";

export const adminRouter = createAdminRouter().mutation("createProduct", {
  input: createProductSchema,
  async resolve({ ctx, input }) {
    // const categoryID = new ObjectID().toString();
    const product = await ctx.prisma.product.create({
      data: input,
    });
    return { success: true, product };
  },
});
