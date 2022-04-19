import { Request, Response } from "express";

class CreateTriggerController {
    async execute(request: Request, response: Response): Promise<Response> {
        return response.json({success:true});
    }
}

export default CreateTriggerController;