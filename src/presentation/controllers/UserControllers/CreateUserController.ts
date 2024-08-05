import { CreateUserCommand } from '@/application/modules/User/command/CreateUser/CreateUserCommand'
import { Controller, HttpRequest, HttpResponse } from '../../contracts/controller'
import { Command } from '@/application/contracts/command'

export class CreateUserController implements Controller {
  constructor(private readonly createUserCommand: Command<CreateUserCommand>) {}

  async handle(request: HttpRequest<CreateUserCommand>): Promise<HttpResponse> {
    try {
      if (!request.body)
        return {
          statusCode: 403,
          body: new Error('Fields must not be empty')
        }
      await this.createUserCommand.handle(request.body)
      return {
        statusCode: 200
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: new Error('Server error')
      }
    }
  }
}
