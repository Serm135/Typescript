import express from 'express'
import { router } from '../routes'

const app = express()
app.use(express.json())

const PORT = 8080

app.use(router)

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
})