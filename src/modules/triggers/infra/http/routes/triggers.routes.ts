import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CreateTriggerController from "../controllers/CreateTriggerController";
import DeleteTriggerController from "../controllers/DeleteTriggerController";
import IndexTriggerController from "../controllers/IndexTriggerController";
import ReadTriggerController from "../controllers/ReadTriggerController";
import UpdateTriggerController from "../controllers/UpdateTriggerController";

const triggersRoutes = Router();

const createController = new CreateTriggerController();
const deleteController = new DeleteTriggerController();
const indexController = new IndexTriggerController();
const readController = new ReadTriggerController();
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
    '/read/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    readController.execute
);

triggersRoutes.post(
    '/update/:id',
    celebrate({
        [Segments.BODY]: {
            sequence: Joi.string().required(),
            message_on_trigged: Joi.string().required()
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    updateController.execute
);

export default triggersRoutes;