import ICreateUser from "./ICreateUser";
import IUser from "./IUser";

interface IUserRepository {
    store(createUserData: ICreateUser): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser | null>;
}

export default IUserRepository;