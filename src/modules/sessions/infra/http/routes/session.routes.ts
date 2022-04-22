import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CreateSessionController from "../controllers/CreateSessionController";
import CreateUserController from "../controllers/CreateUserController";

const sessionRoutes = Router();

const createUserController = new CreateUserController();
const createSessionController = new CreateSessionController();

sessionRoutes.post(
    '/users/create',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            confirm_password: Joi.required().equal('password')
        }
    }),
    createUserController.execute
);

sessionRoutes.post(
    '/create',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string(),
        }
    }),
    createSessionController.execute
);


export default sessionRoutes;