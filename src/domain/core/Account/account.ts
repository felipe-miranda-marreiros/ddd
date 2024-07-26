import { UUID } from '@/domain/helpers'
import { AggregateRoot } from '@/domain/shared'

export class Account extends AggregateRoot {
  private readonly _userId: string

  private constructor(userId: string, id?: string) {
    super(id ?? UUID())
    this._userId = userId
  }

  static create(userId: string, id?: string): Account {
    return new Account(userId, id)
  }

  getUserId(): string {
    return this._userId
  }
}
