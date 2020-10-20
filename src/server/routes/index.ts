import {Application, Router} from "express";
require("express-async-errors");
import glob from "glob";
import path from "path";

export default (app: Application): Application => {
    const router = Router();
    const routes = glob.sync(`${__dirname}/**/*.route.*`);
    routes.forEach((routePath) => {
        const registerRoute = require(path.resolve(routePath)).default;
        registerRoute(router);
        app.use(router);
    });

    return app;
};
