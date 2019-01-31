
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    "_id": String,
    "name": {
        "type": String,
        "required": true
    }
});

export const UserModel = mongoose.model("User", userSchema);

mongoose.Types.ObjectId.prototype.toJson = function() {
    return this.toHexString();
}