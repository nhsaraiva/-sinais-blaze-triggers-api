import ICreateUser from "../../domain/entities/ICreateUser";
import IUser from "../../domain/entities/IUser";
import IUserRepository from "../../domain/entities/IUserRepository";
import prisma from "../../../../shared/prisma/prisma";

class UserRepository implements IUserRepository {
  async store(createUserData: ICreateUser): Promise<IUser> {
    const newUser = {
      ...createUserData
    }

    return await prisma.user.create({
      data: newUser
    });
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await prisma.user.findUnique({
      where: {
        email
      }
    });
  }

  async findById(id: string): Promise<IUser | null> {
    return await prisma.user.findUnique({
      where: {
        id
      }
    });
  }
}

export default UserRepository;