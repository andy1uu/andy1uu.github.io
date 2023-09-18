import express, { Request, Response, Router } from "express";
import path from "path";

const router: Router = express.Router();

router.get("^/$|/index(.html)?", (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

export default router;
