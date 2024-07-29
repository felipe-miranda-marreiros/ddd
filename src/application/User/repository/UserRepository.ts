import { User } from '@/domain'

export namespace UserRepository {
  export interface CreateUser {
    create(user: User): Promise<void>
  }

  export interface IsPhoneNumberConfirmed {
    isConfirmed(userId: string): Promise<boolean>
  }

  export interface CreateOTP {
    create(userId: string): Promise<void>
  }

  export interface GetById {
    getById(userId: string): Promise<User>
  }

  export interface ExistsByUsername {
    existsByUsername(username: string): Promise<boolean>
  }
}
