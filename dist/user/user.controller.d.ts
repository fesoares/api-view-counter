/// <reference types="mongoose" />
import { UserService } from './user.service';
import { User } from './user.model';
export declare class UserController {
    private service;
    constructor(service: UserService);
    getAll(): Promise<(User & import("mongoose").Document<any, any, User>)[]>;
    create(user: User): Promise<any>;
}
