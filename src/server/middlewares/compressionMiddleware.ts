import {
    Application
} from "express";
import compression from "compression";

export default (app: Application) => app.use(compression());
