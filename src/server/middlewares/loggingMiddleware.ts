import {
    Application
} from "express";
import morgan from "morgan";

export default (app: Application) =>
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
