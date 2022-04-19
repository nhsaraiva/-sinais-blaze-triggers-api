import { Request, Response } from "express";

class IndexTriggerController {
    async execute(request: Request, response: Response): Promise<Response> {
        return response.json({success:true});
    }
}

export default IndexTriggerController;