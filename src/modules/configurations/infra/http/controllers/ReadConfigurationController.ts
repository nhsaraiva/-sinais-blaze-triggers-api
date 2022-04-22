import { Request, Response } from "express";
import UserRepository from "../../../../sessions/infra/prisma/UserRepository";
import ReadConfigurationsService from "../../../services/ReadConfigurationService/ReadConfigurationsService";
import ConfigurationRespository from "../../prisma/ConfigurationRespository";

class ReadConfigurationController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { user_id } = request.body;

            const readConfigurationsService = new ReadConfigurationsService(new ConfigurationRespository(), new UserRepository());

            const configuration = await readConfigurationsService.execute(user_id);

            return response.json({ success: true, data: configuration });
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: error.message } });
        }
    }
}

export default ReadConfigurationController;