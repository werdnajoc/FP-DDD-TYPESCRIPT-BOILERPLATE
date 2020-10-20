import {composeAsync} from 'ramda-async';
import {
    findByUsername
} from "@context/users/infrastructure/repositories/userRepository";

import {
    setUsername
} from "@context/users/domain/userEntityType";

import userEntityNotFoundException from "@context/users/domain/userEntityNotFoundException";

export default composeAsync(
    userEntityNotFoundException,
    findByUsername,
    setUsername,
);
