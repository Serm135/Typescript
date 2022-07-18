import { Router } from "express";
import filmsRoute from './films'

const rootRouter = Router();

rootRouter.use('/films',filmsRoute)

export {rootRouter as router}