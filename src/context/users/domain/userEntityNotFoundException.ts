import {NotFoundException} from "@shared/domain/exceptions";
import {isEmpty} from "@shared/domain/helpers/commons";

import {userEntityType} from "@context/users/domain/userEntityType";

export default (userEntity: userEntityType): userEntityType => {
    if (!userEntity || isEmpty(userEntity) || !userEntity._id)
        throw NotFoundException('Username not found');

    return userEntity;
};
