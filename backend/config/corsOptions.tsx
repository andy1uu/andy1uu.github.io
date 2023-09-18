import { CorsOptions } from "cors";

import { allowedOrigins } from "./allowedOrigins";

const customOrigin = (
  requestOrigin: string,
  callback: (err: Error | null, requestOrigin: string) => void
) => {
  if (allowedOrigins.indexOf(requestOrigin) !== -1 || !origin) {
    callback(null, requestOrigin);
  } else {
    callback(new Error("Not allowed by CORS"), requestOrigin);
  }
};

export const corsOptions: CorsOptions = {
  origin: customOrigin,
  credentials: true,
  optionsSuccessStatus: 200
};
