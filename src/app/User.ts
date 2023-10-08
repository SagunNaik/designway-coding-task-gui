import { GENDER } from "./constant";

export interface User {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: GENDER;
    age: number;
}