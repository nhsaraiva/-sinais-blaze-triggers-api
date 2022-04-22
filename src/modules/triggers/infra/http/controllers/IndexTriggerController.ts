import { Request, Response } from "express";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import IndexTriggerService from "../../../services/IndexTriggerService/IndexTriggerService";
import TriggerRepository from "../../prisma/TriggerRepository";

class IndexTriggerController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { user_id } = request.body;

            const indexTriggerService = new IndexTriggerService(new TriggerRepository(), new UserRepository());

            const triggers = await indexTriggerService.execute(user_id);

            return response.json({ success: true, data: triggers });
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default IndexTriggerController;