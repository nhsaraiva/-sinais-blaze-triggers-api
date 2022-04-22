import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPlayload {
    user_id: string;
}

class AuthMiddleware {
    async execute(request: Request, response: Response, next: NextFunction) {
        const { authorization } = request.headers;

        request.body.user_id = null;

        const token = authorization && authorization.split(" ");

        if (!token) {
            return response.status(401).json({ success: false, data: { message: "Not authorirezed" } });
        }

        if (token.length != 2) {
            return response.status(400).json({ success: false, data: { message: "Invalid token" } });
        }

        if (token[0] != 'Bearer') {
            return response.status(400).json({ success: false, data: { message: "Invalid token" } });
        }

        try {
            const secret = process.env.SECRET as string;

            const { user_id } = jwt.verify(token[1], secret) as UserPlayload;

            if (!user_id) {
                return response.status(400).json({ success: false, data: { message: "Invalid token" } });
            }

            request.body.user_id = user_id;

            return next();
        } catch (error: any) {
            return response.status(400).json({ success: false, data: { message: "Invalid token" } });
        }
    }
}

export default AuthMiddleware;