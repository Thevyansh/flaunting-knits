import z from "zod";

export const createProductSchema = z.object({
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
});

export type CreateProductInput = z.TypeOf<typeof createProductSchema>;
