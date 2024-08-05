import { DomainEvent, DomainEventParams, DomainEventProps } from '@/domain/shared'

interface CreateUserEventAttributes {
  readonly username: string
  readonly password: string
}

export class UserCreatedDomainEvent extends DomainEvent implements CreateUserEventAttributes {
  static readonly EVENT_NAME = 'User.Created'
  readonly username: string
  readonly password: string

  constructor(params: DomainEventParams & CreateUserEventAttributes) {
    super({
      eventName: UserCreatedDomainEvent.EVENT_NAME,
      aggregateId: params.aggregateId
    })
    this.password = params.password
    this.username = params.username
  }

  fromPrimitives(params: DomainEventProps & CreateUserEventAttributes): DomainEvent {
    return new UserCreatedDomainEvent(params)
  }

  toPrimitives(): CreateUserEventAttributes {
    return {
      password: this.password,
      username: this.username
    }
  }
}
