import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

// Grabs the environment variables.
dotenv.config();

// Creates the express server app.
const app: Express = express();

// Sets the port of the server to the one in the environment variables.
const port = process.env.PORT;

// Makes the default url for the server serve the index.html from the public folder.
app.use("/", express.static(path.join(__dirname, "/public")));

// Change this
app.use("/", express.static(path.join(__dirname, "/public")));

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server is running right now.");
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
