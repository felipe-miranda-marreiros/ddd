import express from 'express'
import { createUserControllerFactory } from '../factories/UserControllers/CreateUserControllerFactory'

const app = express()

app.use(express.json())

app.post('/create-user', async (req, res) => {
  createUserControllerFactory().handle(req.body)
  res.status(200).json({ ok: '200' })
})

export default app
