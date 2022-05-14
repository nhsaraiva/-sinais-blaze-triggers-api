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
            telegram_channel_id: Joi.number().required(),
            user_id: Joi.string().required(),
            show_placar: Joi.boolean().required()
        }
    }),
    updateController.execute
);

export default configurationsRoutes;