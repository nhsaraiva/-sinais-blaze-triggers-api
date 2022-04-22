import ICreateUser from "../domain/entities/ICreateUser";
import IUser from "../domain/entities/IUser";
import IUserRepository from "../domain/entities/IUserRepository";
import bcrypt from 'bcrypt';
import { empty } from "@prisma/client/runtime";

class CreateUserService {
    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(createUserData: ICreateUser): Promise<IUser> {
        const user = await this.userRepository.findByEmail(createUserData.email);

        if (user) {
            throw new Error("Email has been created");
        }

        const salt = await bcrypt.genSalt(12);

        createUserData.password = await bcrypt.hash(createUserData.password, salt);

        return await this.userRepository.store(createUserData);
    }
}

export default CreateUserService;