
import { UserModel } from "../../models/UserModel";
import { ObjectID } from "mongodb";

export const createUser = () => {
    return async (_, args, context) => {
        let {
            userInput
        } = args;
        let user = new UserModel();
        const ObjectId = new ObjectID();
        user._id = ObjectId.toHexString();
        user.name = userInput.name;
        user = await user.save();
        return user;
    }
}