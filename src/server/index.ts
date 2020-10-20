import 'module-alias/register';
import R from "ramda";
import express,
{
    Application
} from 'express';

import dotenv from 'dotenv';

import bodyParserMiddleware from "./middlewares/bodyParserMiddleware";
import loggingMiddleware from "./middlewares/loggingMiddleware";
import secureHeadersMiddleware from "./middlewares/secureHeadersMiddleware";
import compressionMiddleware from "./middlewares/compressionMiddleware";
import corsMiddleware from "./middlewares/corsMiddleware";
import setExceptionsMiddleware from "./middlewares/exceptionsMiddleware";
import setHttpRoutes from "./routes";

const setConfigAppEnv = () => dotenv.config(),
    getServerPort = (): number => Number(process.env.PORT),
    initExpressApp = (): Application => express();

const setMiddlewarePreRoutes = R.compose(
    corsMiddleware,
    compressionMiddleware,
    secureHeadersMiddleware,
    loggingMiddleware,
    bodyParserMiddleware,
);

const setMiddlewarePostRoutes = R.compose(
    setExceptionsMiddleware,
);

const exposePort = (app: Application) =>
    app.listen(getServerPort(), () => console.log(`Listen port ${getServerPort()}`));

const startHttpServer = R.compose(
    exposePort,
    setMiddlewarePostRoutes,
    setHttpRoutes,
    setMiddlewarePreRoutes,
    initExpressApp,
    setConfigAppEnv
);

startHttpServer();
