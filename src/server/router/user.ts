import { createProtectedRouter } from "./protected-router";

// Example router with queries that can only be hit if the user requesting is signed in
export const userRouter = createProtectedRouter()
  .query("getSession", {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .query("getSecretMessage", {
    resolve({ ctx }) {
      return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
    },
  });

//   {
//     "name": "Turquoise blue longline kurti",
//     "slug": "turquoise-blue-longline-kurti",
//     "description":"A Cotton custom designed turquoise kurti for your closet!",
//     "salePrice": 599,
//     "price": 1099,
//     "featuredImage": "https://rukminim1.flixcart.com/image/800/960/l572ufk0/kurta/z/s/w/l-fpkg-s-flauntingknits-original-imagfxjpzhqzfma3.jpeg?q=50",
//     "images":["https://rukminim1.flixcart.com/image/800/960/l572ufk0/kurta/z/s/w/l-fpkg-s-flauntingknits-original-imagfxjpzhqzfma3.jpeg?q=50"],
//     "tags": ["kurti","women","turquoise"],
//     "sizes": ["SM","M","XL"],
//     "inventory": 10
// }
