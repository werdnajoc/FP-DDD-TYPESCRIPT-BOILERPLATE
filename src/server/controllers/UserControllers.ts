import {Request, Response} from "express";

import getByUsername from "@context/users/application/getByUsername";
import create from "@context/users/application/create";

export const createUser = async (request: Request, response: Response) => {
    const user = await create(request.body);
    response.status(200).json(user);
};

export const getUserByUsername = async (request: Request, response: Response) => {
    const user = await getByUsername(request.params.username);
    response.status(200).json(user);
};
