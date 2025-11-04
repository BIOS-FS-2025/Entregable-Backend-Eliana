import { Router } from 'express';
import authRoutes from './auth.routes.js';
import router from './posts.routes.js';

const mainRoutes = Router();

mainRoutes.use("/posts", router);

mainRoutes.use("/auth", authRoutes);

export default mainRoutes;
