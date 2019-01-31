
import { UserModel } from "../../models/UserModel";

export const users = () => {
    return async () => {
        let usersData = await UserModel.find({});
        return usersData;
    }
}