import ICreateUser from "../domain/entities/ICreateUser";
import IUser from "../domain/entities/IUser";
import IUserRepository from "../domain/entities/IUserRepository";
import bcrypt from 'bcrypt';
import ICreateSession from "../domain/entities/ICreateSession";
import ISession from "../domain/entities/ISession";
import jwt from "jsonwebtoken";

class CreateSessionService {
    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(createSessionData: ICreateSession): Promise<ISession> {
        const user = await this.userRepository.findByEmail(createSessionData.email);

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(createSessionData.password, user.password);

        if (!checkPassword) {
            throw new Error("Invalid password");
        }

        const secret = process.env.SECRET as string;

        const token = jwt.sign({
            user_id: user.id
        }, secret);

        return { 
            token: token,
            user: {
                id: user.id,
                email: user.email
            }
        };
    }
}

export default CreateSessionService;