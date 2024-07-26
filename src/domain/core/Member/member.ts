import { UUID } from '@/domain/helpers'
import { AggregateRoot } from '@/domain/shared'

export class Member extends AggregateRoot {
  private readonly _name: string
  private readonly _phoneNumber: string

  private constructor(name: string, phoneNumber: string, id?: string) {
    super(id ?? UUID())
    this._name = name
    this._phoneNumber = phoneNumber
  }

  static create(username: string, password: string, id?: string): Member {
    return new Member(username, password, id)
  }

  getName(): string {
    return this._name
  }

  getPassword(): string {
    return this._phoneNumber
  }
}
