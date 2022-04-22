import { Router } from "express";
import configurationsRoutes from "../../../modules/configurations/infra/http/routes/configurations.routes";
import sessionRoutes from "../../../modules/sessions/infra/http/routes/session.routes";
import triggersRoutes from "../../../modules/triggers/infra/http/routes/triggers.routes";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const routes = Router()

routes.use('/sessions', sessionRoutes);

const authMiddleware = new AuthMiddleware();

routes.use('/configurations', authMiddleware.execute, configurationsRoutes);
routes.use('/triggers', authMiddleware.execute, triggersRoutes);

export default routes;