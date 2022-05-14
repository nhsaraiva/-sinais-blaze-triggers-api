import { Request, Response } from "express";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import UpdateTriggerService from "../../../services/UpdateTriggerService/UpdateTriggerService";
import TriggerRepository from "../../prisma/TriggerRepository";

class UpdateTriggerController {
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

            const { id } = request.params;

            const updateTriggerService = new UpdateTriggerService(new TriggerRepository(), new UserRepository());

            const trigger = await updateTriggerService.execute(id, {
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

export default UpdateTriggerController;