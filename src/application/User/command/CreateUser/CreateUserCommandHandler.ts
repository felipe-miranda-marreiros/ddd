import { User } from '@/domain'
import { CreateUserCommandRequest, UserCommand } from './CreateUserCommand'
import { UserRepository } from '../../repository/UserRepository'

export class CreateUserCommandHandler implements UserCommand.CreateUserCommand {
  private readonly createUserRepository: UserRepository.CreateUser

  constructor(createUserRepository: UserRepository.CreateUser) {
    this.createUserRepository = createUserRepository
  }

  async create(command: CreateUserCommandRequest): Promise<void> {
    const user = User.create(command.username, command.password)
    await this.createUserRepository.create(user)
  }
}
