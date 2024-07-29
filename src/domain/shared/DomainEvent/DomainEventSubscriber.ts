import { Container } from 'inversify'
import { DomainEvent, DomainEventClass } from './DomainEvent'

export interface DomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): Array<DomainEventClass>
  on(domainEvent: T): Promise<void>
}

export class DomainEventSubscribers {
  readonly items: DomainEventSubscriber<DomainEvent>[]

  private constructor(items: DomainEventSubscriber<DomainEvent>[]) {
    this.items = items
  }

  static from(container: Container): DomainEventSubscribers {
    const subscriberDefinitions =
      container.getAll<DomainEventSubscriber<DomainEvent>>('DomainEventSubscriber')
    const subscribers: DomainEventSubscriber<DomainEvent>[] = []

    subscriberDefinitions.forEach((domainEventSubscriber) => {
      subscribers.push(domainEventSubscriber)
    })

    return new DomainEventSubscribers(subscribers)
  }
}
