import {isValidCharacterLimitOfString} from "@shared/domain/helpers/commons";

import {
    BadRequestException
} from "@shared/domain/exceptions";

export type idType = string;
export type usernameType = string;
export type passwordType = string;
export type firstNameType = string;
export type lastNameType = string;

export type userEntityType = {
    _id: idType,
    username: usernameType,
    password: passwordType,
    firstName: firstNameType,
    lastName: lastNameType,
}

export const setUsername = (value: usernameType): usernameType => {
    if (!isValidCharacterLimitOfString(value, 5, 20))
        throw BadRequestException('Username must be min 5 characters and max 20 characters');

    return value;
};

export const setPassword = (value: passwordType): passwordType => {
    if (!isValidCharacterLimitOfString(value, 8, 12))
        throw BadRequestException('Password must be min 8 characters and max 12 characters');

    return value;
};

export const setFirstName = (value: firstNameType): firstNameType => {
    if (!isValidCharacterLimitOfString(value, 2, 50))
        throw BadRequestException('First name must be min 2 characters and max 50 characters');

    return value;
};

export const setLastName = (value: lastNameType): lastNameType => {
    if (!isValidCharacterLimitOfString(value, 2, 50))
        throw BadRequestException('Last name must be min 2 characters and max 50 characters');

    return value;
};

export const createUserEntityDTO = (data: any): userEntityType => {

    return {
        _id: data?._id,
        username: data?.username,
        password: data?.password,
        firstName: data?.firstName,
        lastName: data?.lastName,
    };
};

export const createUserEntity = (data: userEntityType): userEntityType => {
    return {
        _id: data?._id,
        username: setUsername(data?.username),
        password: setPassword(data?.password),
        firstName: setFirstName(data?.firstName),
        lastName: setLastName(data?.lastName),
    };
};
