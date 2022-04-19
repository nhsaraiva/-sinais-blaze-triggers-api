import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import ReadConfigurationController from "../controllers/ReadConfigurationController";
import UpdateConfigurationController from "../controllers/UpdateConfigurationController";

const configurationsRoutes = Router();

const readController = new ReadConfigurationController();
const updateController = new UpdateConfigurationController();

configurationsRoutes.post('/read', readController.execute);

configurationsRoutes.post(
    '/update',
    celebrate({
        [Segments.BODY]: {
            bot_token: Joi.string().required(),
            channel_id: Joi.number().required()
        }
    }),
    updateController.execute
);

export default configurationsRoutes;