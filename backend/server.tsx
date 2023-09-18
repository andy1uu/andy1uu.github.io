import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import router from "./routes/root";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import { corsOptions } from "./config/corsOptions";

// Grabs the environment variables.
dotenv.config();

// Creates the express server app.
const app: Express = express();

// Sets the port of the server to the one in the environment variables.
const port = process.env.PORT;

// Allows the app to create logs.
app.use(logger);

// Allows the app to use cors to only allow certain domains to connect to our
// server.
app.use(cors(corsOptions));

// Allows the app to parse json data.
app.use(express.json());

// Allow the app to parse cookies.
app.use(cookieParser());

// Makes the default url for the server serve the index.html from the public
// folder.
app.use("/", express.static(path.join(__dirname, "public")));

// Makes the default url use the router to get the different paths.
app.use("/", router);

// Makes the app serve 404 pages for anything that does not exist.
app.all("*", (request: Request, response: Response) => {
  response.status(404);
  if (request.accepts("html")) {
    response.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (request.accepts("json")) {
    response.json({ message: "404 Not Found" });
  } else {
    response.type("txt").send("404 Not Found");
  }
});

// Allows the app to log errors.
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
