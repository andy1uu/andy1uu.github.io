import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { v4 } from "uuid";

const fsPromises = fs.promises;

const uuid = v4;

export const logEvents = async (message: string, logFileName: string) => {
  const dateTime = `${format(new Date(), "MM/dd/yyyy\tHH:mm:ss")}`;

  const logMessage = `[${dateTime}\t${uuid()}]\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logMessage
    );
  } catch (error) {
    console.log(error);
  }
};

export const logger = (
  request: Request,
  response: Response,
  next: () => void
) => {
  logEvents(
    `${request.method}\t${request.url}\t${request.headers.origin}`,
    "requestLog.log"
  );
  console.log(`${request.method} ${request.path}`);
  next();
};
