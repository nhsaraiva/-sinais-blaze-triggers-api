import { Router } from "express";
import ReadConfigurationController from "../controllers/ReadConfigurationController";
import UpdateConfigurationController from "../controllers/UpdateConfigurationController";

const configurationsRoutes = Router();

const readController = new ReadConfigurationController();
const updateController = new UpdateConfigurationController();

configurationsRoutes.post('/read', readController.execute);
configurationsRoutes.post('/update', updateController.execute);

export default configurationsRoutes;