import { Request, Response } from "express";

class ReadConfigurationController {
    async execute(request: Request, response: Response): Promise<Response> {
        return response.json({success:true});
    }
}

export default ReadConfigurationController;