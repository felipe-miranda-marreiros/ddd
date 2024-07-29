import { User } from '@/domain'
import { UserRepository } from '../../repository/UserRepository'
import { CreateUserCommand, UserCommand } from '../commands'

export class CreateUserCommandHandler implements UserCommand.CreateUser {
  constructor(
    private readonly createUserRepository: UserRepository.CreateUser,
    private readonly getByIdRepository: UserRepository.GetById
  ) {}

  async create(command: CreateUserCommand): Promise<void> {
    const user = await this.getByIdRepository()
    const user = User.create(command)
    await this.createUserRepository.create(user)
  }
}
