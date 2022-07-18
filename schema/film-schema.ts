import { body } from "express-validator";

const schema = [
  body('title').exists({checkFalsy:true}).isString().withMessage('title error'),
  body('description').exists({checkFalsy:true}).isString().withMessage('description error'),
  body('release_year').exists({checkFalsy:true}).isNumeric().withMessage('release year error'),
  body('rental_duration').exists({checkFalsy:true}).isNumeric().withMessage('rental duration error'),
  body('rental_rate').exists({checkFalsy:true}).isNumeric().withMessage('rental rate error'),
  body('length').exists({checkFalsy:true}).isNumeric().withMessage('length error'),
  body('replacement_cost').exists({checkFalsy:true}).isNumeric().withMessage('replacement cost error'),
  body('rating').exists({checkFalsy:true}).withMessage('rating error'),
  body('last_update').exists({checkFalsy:true}).isString().withMessage('last update error'),
  body('special_features').exists({checkFalsy:true}).withMessage('special features error'),
  body('fulltext').exists({checkFalsy:true}).withMessage('full text error'),
]

export {schema as filmSchema}