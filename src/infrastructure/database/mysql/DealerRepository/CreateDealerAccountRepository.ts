import { DealerAccountRepository } from '@/application/modules/Dealer/contracts/DealerAccountRepository'
import { DealerAccount } from '@/domain/core/Accounts/DealerAccount/DealerAccount'
import { DealerAccountArchives } from '@/domain/core/Accounts/DealerAccount/DealerAccountArchives'

export class CreateDealerAccountRepository implements DealerAccountRepository.CreateAccount {
  create(
    dealerAccount: DealerAccount,
    DealerAccountArchives: DealerAccountArchives
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
