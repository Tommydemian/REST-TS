import { User } from "../types/user.interface";
import { Auth } from '../types/auth.interface'
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/handlebcrypt";

const registerNewUser = async (user: User) => {
  const exists = await UserModel.findOne({ email: user.email });
  // checks if the user already exists in the database
  if (exists) return "user already registered";
  // if not, create a new user...
  // 1. Hash password
  const hashedPassword = await encrypt(user.password);
  // 2. create a new user
  const registerNewUser = await UserModel.create({
    email: user.email,
    password: hashedPassword,
    name: user.name,
  });

  return registerNewUser;
};

const loginUser = async (credentials: Auth) => {
    const userExists = await UserModel.findOne({ email: credentials.email });
    // checks if the user already exists in the database
    if (!userExists) return "user not found!";
    // Login user  
    // 1. Compare the stored hash value with the input password
    const verifyPass = await verify(credentials.password, userExists.password);
    // if false
    if (!verifyPass) return "passwords don't match!";
    // else return user
    return userExists      
};

export { registerNewUser, loginUser };
