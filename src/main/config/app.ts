import express, { Request, Response } from 'express'
import { createUserControllerFactory } from '../factories/UserControllers/CreateUserControllerFactory'
import { Controller } from '@/presentation/contracts/controller'

const app = express()

app.use(express.json())

function expressRouteAdapter(controller: Controller) {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle({ body: req.body })
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

app.post('/create-user', expressRouteAdapter(createUserControllerFactory()))

export default app
