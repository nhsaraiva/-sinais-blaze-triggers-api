import { Request, Response } from "express";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import DeleteTriggerService from "../../../services/DeleteTriggerService/DeleteTriggerService";
import TriggerRepository from "../../prisma/TriggerRepository";

class DeleteTriggerController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { user_id } = request.body;

            const { id } = request.params;

            const deleteTriggerService = new DeleteTriggerService(new TriggerRepository(), new UserRepository());

            await deleteTriggerService.execute(user_id, id);

            return response.json({ success: true });
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default DeleteTriggerController;