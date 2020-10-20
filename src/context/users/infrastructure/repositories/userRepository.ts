import database from "@shared/infrastructure/database";
import model from "@context/users/infrastructure/models/userModel";

import {
    userEntityType,
    usernameType,
    createUserEntityDTO
} from "@context/users/domain/userEntityType";

export const findByUsername = async (username: usernameType): Promise<userEntityType | null> => {
    await database.connect();
    const result = await model.findOne({username});
    await database.disconnect();
    const userEntity = createUserEntityDTO(result);
    return userEntity && userEntity._id ? userEntity : null;
};

export const create = async (payload: userEntityType): Promise<userEntityType> => {
    await database.connect();
    const result = await model.create(payload);
    await database.disconnect();
    return createUserEntityDTO(result);
};
