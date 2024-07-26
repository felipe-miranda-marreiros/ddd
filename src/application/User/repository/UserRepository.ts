import { User } from '@/domain'

export namespace UserRepository {
  export interface CreateUser {
    create(user: User): Promise<void>
  }
}
