// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { productRouter } from "./product";
import { userRouter } from "./user";
import { adminRouter } from "./admin/product";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", productRouter)
  .merge("user.", userRouter)
  .merge("admin.", adminRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
