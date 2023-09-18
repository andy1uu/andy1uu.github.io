import { Request, Response } from "express";

import { logEvents } from "./logger";

export const errorHandler = (
  error: { name: string; message: string; stack: unknown },
  request: Request,
  response: Response
) => {
  logEvents(
    `${error.name}: ${error.message}\t${request.method}\t${request.url}\t${request.headers.origin}`,
    "errorLog.log"
  );
  console.log(error.stack);

  const status = response.statusCode ? response.statusCode : 500; // Server Error Code

  response.status(status);

  response.json({ message: error.message });
};
