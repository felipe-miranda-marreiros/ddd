import { UUID } from '@/domain/helpers'
import { AggregateRoot } from '@/domain/shared'

export class User extends AggregateRoot {
  private readonly _username: string
  private readonly _password: string

  private constructor(username: string, password: string, id?: string) {
    super(id ?? UUID())
    this._username = username
    this._password = password
  }

  static create(username: string, password: string, id?: string): User {
    return new User(username, password, id)
  }

  getUsername(): string {
    return this._username
  }

  getPassword(): string {
    return this._password
  }
}
