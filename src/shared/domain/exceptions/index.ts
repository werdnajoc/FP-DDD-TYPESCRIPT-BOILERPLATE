import httpStatus from "http-status";

export interface Exception {
    name: string,
    message: string,
    statusCode: number,
    errorCode: string,
    stack: any,
}

export const genericException = (
    message: string,
    statusCode: number = 500,
    errorCode: string = 'internal_error'
): Error => {
    Error.prototype.name = 'GenericError';
    Error.prototype.message = JSON.stringify({
        message,
        statusCode,
        errorCode,
    });

    return new Error();
};

export const BadRequestException = (message: string): Error =>
    genericException(message, httpStatus.BAD_REQUEST, "BAD_REQUEST");

export const NotFoundException = (message: string): Error =>
    genericException(message, httpStatus.NOT_FOUND, "NOT_FOUND");
