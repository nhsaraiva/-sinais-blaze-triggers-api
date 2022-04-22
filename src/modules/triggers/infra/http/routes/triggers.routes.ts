import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CreateTriggerController from "../controllers/CreateTriggerController";
import DeleteTriggerController from "../controllers/DeleteTriggerController";
import IndexTriggerController from "../controllers/IndexTriggerController";
import GetTriggerController from "../controllers/GetTriggerController";
import UpdateTriggerController from "../controllers/UpdateTriggerController";

const triggersRoutes = Router();

const createController = new CreateTriggerController();
const deleteController = new DeleteTriggerController();
const indexController = new IndexTriggerController();
const getController = new GetTriggerController();
const updateController = new UpdateTriggerController();

triggersRoutes.post('/index', indexController.execute);

triggersRoutes.post(
    '/create',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            sequence: Joi.string().required(),
            message: Joi.string().required(),
            user_id: Joi.string().required(),
        }
    }),
    createController.execute
);

triggersRoutes.post(
    '/delete/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    deleteController.execute
);


triggersRoutes.post(
    '/get/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    getController.execute
);

triggersRoutes.post(
    '/update/:id',
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            sequence: Joi.string().required(),
            message: Joi.string().required(),
            user_id: Joi.string().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    updateController.execute
);

export default triggersRoutes;