import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends mongoose.Document{
    email: string;
    name: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true
    },
    name: {
        type: String,
        required: true, 
    },
      password: {
        type: String,
         required: true,
          select: false
    },
}, { timestamps: true });

const userModel = mongoose.model<IUser>('User', userSchema);

export default userModel;
