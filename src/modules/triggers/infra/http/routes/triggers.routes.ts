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

triggersRoutes.post('/create', createController.execute);
triggersRoutes.post('/delete', deleteController.execute);
triggersRoutes.post('/index', indexController.execute);
triggersRoutes.post('/read', readController.execute);
triggersRoutes.post('/update', updateController.execute);

export default triggersRoutes;