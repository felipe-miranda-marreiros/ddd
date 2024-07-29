import { UserRepository } from '@/application/User'
import { SignUpCommand, SignUpRequest } from './SignUpCommand'
import { User } from '@/domain'

export class SignUpCommandHandler implements SignUpCommand {
  constructor(
    private readonly createUserRepository: UserRepository.CreateUser,
    private readonly userExistsByEmailRepository: UserRepository.ExistsByUsername
  ) {}

  async signup(command: SignUpRequest): Promise<void> {
    const existsByUsername = await this.userExistsByEmailRepository.existsByUsername(
      command.username
    )
    if (existsByUsername) {
      console.log(`Usuário com username ${command.username} já existe.`)
    }
    const user = User.create({ password: command.password, username: command.username })
    await this.createUserRepository.create(user)
  }
}
