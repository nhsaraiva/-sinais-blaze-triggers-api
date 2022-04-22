import { Request, Response } from "express";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import GetTriggerService from "../../../services/GetTriggerService/GetTriggerService";
import TriggerRepository from "../../prisma/TriggerRepository";

class ReadTriggerController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { user_id } = request.body;

            const { id } = request.params;

            const getTriggerService = new GetTriggerService(new TriggerRepository(), new UserRepository());

            const trigger = await getTriggerService.execute(user_id, id);

            return response.json({ success: true, data: trigger });
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default ReadTriggerController;