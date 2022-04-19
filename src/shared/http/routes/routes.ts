import { Router } from "express";
import configurationsRoutes from "../../../modules/configurations/infra/http/routes/configurations.routes";
import triggersRoutes from "../../../modules/triggers/infra/http/routes/triggers.routes";

const routes = Router()

routes.use('/configurations', configurationsRoutes);
routes.use('/triggers', triggersRoutes);

export default routes;