import { Schema, Types, Model, model, Document } from "mongoose";
import bcrypt from "bcrypt";

import { User } from "../types/user.interface";

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "Hello, im the description"
    },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);

export default userModel;
