import { User } from '@/domain'
import { UserRepository } from '../../contracts/UserRepository'
import { Command } from '@/application/contracts/command'
import { CreateUserCommand } from './CreateUserCommand'

export class CreateUserCommandHandler implements Command<CreateUserCommand> {
  constructor(
    private readonly createUserRepository: UserRepository.CreateUser,
    private readonly existsByUsernameRepository: UserRepository.ExistsByUsername
  ) {}

  async handle(command: CreateUserCommand): Promise<void> {
    const existsByUsername = await this.existsByUsernameRepository.existsByUsername(
      command.username
    )
    if (existsByUsername) {
      return
    }
    const user = User.create(command)
    await this.createUserRepository.create(user)
  }
}
