import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 1000,
  interval: "min",
  fireImmediately: true,
});
