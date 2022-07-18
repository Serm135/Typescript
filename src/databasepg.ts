import {Pool} from 'pg'

const pool = new Pool ({
  host:"localhost",
  user:"postgres",
  port:5432,
  password:"admin",
  database:"DVD Rental"
})

export default pool
