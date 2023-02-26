import { atom } from "recoil";

export const userRoleState = atom({
    key: 'role',
    default: 'user',
})