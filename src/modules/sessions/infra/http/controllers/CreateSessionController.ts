import { Request, Response } from "express";
import CreateSessionService from "../../../services/CreateSessionService";
import CreateUserService from "../../../services/CreateUserService";
import UserRepository from "../../prisma/UserRepository";

class CreateSessionController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body;

            const createUserService = new CreateSessionService(new UserRepository());

            const session = await createUserService.execute({
                email,
                password,
            });

            return response.json({
                success: true,
                data: session
            });

        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default CreateSessionController;