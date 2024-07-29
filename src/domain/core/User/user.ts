import { AggregateRoot } from '@/domain/shared'
import { UserCreatedDomainEvent } from './events/UserCreatedDomainEvent'
import { UUID } from '@/domain/helpers'

interface UserProps {
  username: string
  password: string
  memberId?: string
  adminId?: string
}

export class User extends AggregateRoot<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  static create(props: UserProps, id?: string): User {
    const user = new User(props, id)
    user.addEvent(
      new UserCreatedDomainEvent({
        aggregateId: user.id,
        username: user.values.username,
        password: user.values.password
      })
    )
    return user
  }

  createMemberProfile() {
    if (this.props.memberId) {
      return new Error('Usuário já possui um perfil de administrador')
    }
    this.props.memberId = UUID()
    return this.props.memberId
  }

  get values(): UserProps {
    return this.props
  }
}
