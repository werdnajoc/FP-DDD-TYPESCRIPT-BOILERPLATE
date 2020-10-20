import {
    Application
} from "express";
import helmet from "helmet";

export default (app: Application) => app.use(helmet());
