import { User } from './user.model';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(doc: User): Promise<any>;
    find(): Promise<(User & import("mongoose").Document<any, any, User>)[]>;
}
