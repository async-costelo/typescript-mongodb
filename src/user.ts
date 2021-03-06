import mongoose from "mongoose";

const uri: string = "mongodb://mongo:27017/";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

export interface IUser extends mongoose.Document {
    username: string;
    password: string;
    name: string;
    email: string;
    suspendFlag: boolean;
}

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    suspendFlag: { type: Boolean, required: false }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;