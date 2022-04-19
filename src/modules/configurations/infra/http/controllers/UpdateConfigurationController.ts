import { Request, Response } from "express";

class UpdateConfigurationController {
    async execute(request: Request, response: Response): Promise<Response> {
        return response.json({success:true});
    }
}

export default UpdateConfigurationController;