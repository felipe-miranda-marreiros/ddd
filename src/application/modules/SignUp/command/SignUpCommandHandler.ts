import { UserRepository } from '@/application/modules/User'
import { SignUpCommand } from './SignUpCommand'
import { User } from '@/domain'
import { DealerAccountRepository } from '../../Dealer/contracts/DealerAccountRepository'
import { DealerAccount } from '@/domain/core/Accounts/DealerAccount/DealerAccount'
import { Command } from '@/application/contracts/command'
import { DealerAccountArchives } from '@/domain/core/Accounts/DealerAccount/DealerAccountArchives'

export class SignUpCommandHandler implements Command<SignUpCommand> {
  constructor(
    private readonly createUserRepository: UserRepository.CreateUser,
    private readonly existsByUsernameRepository: UserRepository.ExistsByUsername,
    private readonly createAccountRepository: DealerAccountRepository.CreateAccount
  ) {}

  async handle(command: SignUpCommand): Promise<void> {
    const existsByUsername = await this.existsByUsernameRepository.existsByUsername(
      command.username
    )

    if (existsByUsername) {
      console.log(`Usuário com username ${command.username} já existe.`)
    }

    const user = User.create({ password: command.password, username: command.username })

    await this.createUserRepository.create(user)

    const dealerAccount = DealerAccount.create({
      faceBiometryStatus: 'PENDING',
      registerStatus: 'PENDING',
      rejectReason: 'PENDING',
      restrictionStatus: 'PENDING',
      score: 0
    })

    const dealerAccountArchives = DealerAccountArchives.create(
      {
        answers: [],
        backRgHash: null,
        cnhHash: null,
        frontRgHash: null
      },
      dealerAccount.id
    )

    await this.createAccountRepository.create(dealerAccount, dealerAccountArchives)
  }
}
