import { UserCreatedDomainEvent } from '@/domain/core/User/events/UserCreatedDomainEvent'
import { DomainEventClass, DomainEventSubscriber } from '@/domain/shared'

export class UserCreatedDomainEventHandler
  implements DomainEventSubscriber<UserCreatedDomainEvent>
{
  subscribedTo(): Array<DomainEventClass> {
    throw new Error('Method not implemented.')
  }

  async on(domainEvent: UserCreatedDomainEvent): Promise<void> {
    console.log(domainEvent)
  }
}
