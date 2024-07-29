import { DomainEvent } from './DomainEvent/DomainEvent'
import { Entity } from './entity'

export abstract class AggregateRoot<T> extends Entity<T> {
  private domainEvents: DomainEvent[] = []

  getEvents(): DomainEvent[] {
    const domainEvents = this.domainEvents.slice()
    this.domainEvents = []
    return domainEvents
  }

  addEvent(event: DomainEvent): void {
    this.domainEvents.push(event)
  }

  clearEvents() {
    this.domainEvents = []
  }
}
