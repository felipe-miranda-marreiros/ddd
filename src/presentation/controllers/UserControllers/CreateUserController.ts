import { CreateUserCommandRequest, UserCommand } from '@/application'
import { Controller } from '../../interfaces/controller'

export class CreateUserController implements Controller {
  private readonly createUserCommand: UserCommand.CreateUserCommand

  constructor(createUserCommand: UserCommand.CreateUserCommand) {
    this.createUserCommand = createUserCommand
  }

  async handle(request: CreateUserCommandRequest): Promise<any> {
    try {
      await this.createUserCommand.create(request)
    } catch (error) {
      console.error(error)
    }
  }
}
