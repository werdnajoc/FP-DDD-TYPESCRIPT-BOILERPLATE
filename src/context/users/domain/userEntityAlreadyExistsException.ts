import {BadRequestException} from "@shared/domain/exceptions";

import {userEntityType} from "@context/users/domain/userEntityType";

export default (userEntity: userEntityType | null): void => {
    if (userEntity && userEntity && userEntity._id)
        throw BadRequestException('This user already exists.');
};
