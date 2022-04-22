import { Request, Response } from "express";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import UpdateConfigurationsService from "../../../services/UpdateConfigurationService/UpdateConfigurationsService";
import ConfigurationRespository from "../../prisma/ConfigurationRespository";

class UpdateConfigurationController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { user_id } = request.body;

            const { telegram_channel_id } = request.body;

            const readConfigurationsService = new UpdateConfigurationsService(new ConfigurationRespository(), new UserRepository());

            const configuration = await readConfigurationsService.execute(telegram_channel_id, user_id);

            return response.json({ success: true, data: configuration });
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default UpdateConfigurationController;