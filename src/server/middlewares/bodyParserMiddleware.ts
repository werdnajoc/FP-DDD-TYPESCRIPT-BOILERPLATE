import R from "ramda";
import {
    Application
} from "express";
import bodyParser from "body-parser";

export default R.compose(
    (app: Application) => app.use(bodyParser.urlencoded({extended: false})),
    (app: Application) => app.use(bodyParser.json()),
);
