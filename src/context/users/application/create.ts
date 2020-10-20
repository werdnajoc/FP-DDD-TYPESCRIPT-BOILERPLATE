import {composeAsync} from 'ramda-async';
import {findByUsername} from "@context/users/infrastructure/repositories/userRepository";
import {createUserEntity} from "@context/users/domain/userEntityType";
import {create} from "@context/users/infrastructure/repositories/userRepository";

import userEntityAlreadyExistsException from "@context/users/domain/userEntityAlreadyExistsException";

const validateDataCreate = async (data: any) => {
    const newUserEntity = createUserEntity(data),
        currentUserEntity = await findByUsername(newUserEntity.username);

    userEntityAlreadyExistsException(currentUserEntity);

    return newUserEntity;
};

export default composeAsync(
    create,
    validateDataCreate
);
