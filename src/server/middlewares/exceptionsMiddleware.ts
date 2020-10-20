import {
    Request,
    Response,
    NextFunction, Application
} from "express";
import httpStatus from "http-status";

import {
    checkIfIsValidToJSON
} from "@shared/infrastructure/helpers/commons";

import {
    Exception
} from "@shared/domain/exceptions";

const handleErrors = (error: Exception, request: Request, response: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== "production") console.error("Exception middleware: ", error);
    if (process.env.NODE_ENV !== "development") delete error.stack;

    const errorObject = checkIfIsValidToJSON(error.message) ? JSON.parse(error.message) : error,
        errorString = (errorObject && errorObject.statusCode) ? errorObject : "Oops internal error";

    response.status(errorObject.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json(errorString);
    next();
};

export default (app: Application) => app.use(handleErrors);
