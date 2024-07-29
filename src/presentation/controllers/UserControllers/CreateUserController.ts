import { CreateUserCommand, UserCommand } from '@/application'
import { Controller } from '../../interfaces/controller'

export class CreateUserController implements Controller {
  private readonly createUserCommand: UserCommand.CreateUser

  constructor(createUserCommand: UserCommand.CreateUser) {
    this.createUserCommand = createUserCommand
  }

  async handle(request: CreateUserCommand): Promise<any> {
    try {
      await this.createUserCommand.create(request)
    } catch (error) {
      console.error(error)
    }
  }
}
