import { Request, Response } from "express";
import ConfigurationRespository from "../../../../configurations/infra/prisma/ConfigurationRespository";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import CreateTriggerService from "../../../services/CreateTriggerService/CreateTriggerService";
import TriggerRepository from "../../prisma/TriggerRepository";

class CreateTriggerController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { user_id } = request.body;

            const {
                message,
                sequence,
                title,
                win_colors,
                win_message,
                loss_message,
                gales
            } = request.body;

            const createTriggerService = new CreateTriggerService(new TriggerRepository(), new ConfigurationRespository(), new UserRepository());

            const trigger = await createTriggerService.execute({
                user_id,
                message,
                sequence,
                title,
                win_colors,
                win_message,
                loss_message,
                gales
            });

            return response.json({ success: true, data: trigger });
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default CreateTriggerController;