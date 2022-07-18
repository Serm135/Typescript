import express from 'express'
import { filmSchema } from '../schema/film-schema'
import {validateFilm} from '../middleware/validate-request'
import * as filmS from '../services/filmsServices'


const router = express.Router()

router.get('/', filmS.getfilms)
router.get('/:id',filmS.getfilmbyid)
router.post('/new',filmSchema,validateFilm,filmS.newFilm)
router.delete('/:id',filmS.deleteFilm)
router.put('/update',filmS.updateFilm)

export default router