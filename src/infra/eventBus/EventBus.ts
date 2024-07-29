import { DomainEvent, DomainEventSubscribers } from '@/domain/shared'

export interface EventBus {
  publish(events: Array<DomainEvent>): Promise<void>
  addSubscribers(subscribers: DomainEventSubscribers): void
}
