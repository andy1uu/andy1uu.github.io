"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const root_1 = __importDefault(require("./routes/root"));
const logger_1 = require("./middleware/logger");
const errorHandler_1 = require("./middleware/errorHandler");
const corsOptions_1 = require("./config/corsOptions");
// Grabs the environment variables.
dotenv_1.default.config();
// Creates the express server app.
const app = (0, express_1.default)();
// Sets the port of the server to the one in the environment variables.
const port = process.env.PORT;
// Allows the app to create logs.
app.use(logger_1.logger);
// Allows the app to use cors to only allow certain domains to connect to our
// server.
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
// Allows the app to parse json data.
app.use(express_1.default.json());
// Allow the app to parse cookies.
app.use((0, cookie_parser_1.default)());
// Makes the default url for the server serve the index.html from the public
// folder.
app.use("/", express_1.default.static(path_1.default.join(__dirname, "public")));
// Makes the default url use the router to get the different paths.
app.use("/", root_1.default);
// Makes the app serve 404 pages for anything that does not exist.
app.all("*", (request, response) => {
    response.status(404);
    if (request.accepts("html")) {
        response.sendFile(path_1.default.join(__dirname, "views", "404.html"));
    }
    else if (request.accepts("json")) {
        response.json({ message: "404 Not Found" });
    }
    else {
        response.type("txt").send("404 Not Found");
    }
});
// Allows the app to log errors.
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
