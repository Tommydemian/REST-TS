import { User } from "../types/user.interface";
import UserModel from '../models/user.model'

const registerNewUser = async (authUser: User) => {
    const exists = await UserModel.findOne({ email: authUser.email })
    // checks if the user already exists in the database
    if (exists) return 'user already registered'
    // if not, create a new user...
    const registerNewUser = await UserModel.create(authUser.email, authUser.password, authUser.name)
    return registerNewUser
};

const loginUser = () => {

};

export {registerNewUser, loginUser};