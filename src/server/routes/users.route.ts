import {Router} from "express";
import {createUser, getUserByUsername} from "@server/controllers/UserControllers";

export default (router: Router) => {
    router.post(`/users`, createUser);
    router.get(`/users/:username`, getUserByUsername);
};
