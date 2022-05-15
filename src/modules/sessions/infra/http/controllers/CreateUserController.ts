import { Request, Response } from "express";
import CreateUserService from "../../../services/CreateUserService";
import UserRepository from "../../prisma/UserRepository";

class CreateUserController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password, api_token } = request.body;

            if (!api_token || api_token != process.env.API_TOKEN) {
                return response.status(400).json({ success: false, data: { message: 'Not authenticated' } });
            }

            const createUserService = new CreateUserService(new UserRepository());

            await createUserService.execute({
                email,
                password,
            });

            return response.json({
                success: true
            });

        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default CreateUserController;