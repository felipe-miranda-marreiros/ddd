import { DealerAccount } from '@/domain/core/Accounts/DealerAccount/DealerAccount'
import { DealerAccountArchives } from '@/domain/core/Accounts/DealerAccount/DealerAccountArchives'

export namespace DealerAccountRepository {
  export interface CreateAccount {
    create(
      dealerAccount: DealerAccount,
      DealerAccountArchives: DealerAccountArchives
    ): Promise<void>
  }

  export interface GetById {
    getById(id: string): Promise<DealerAccount>
  }
}
