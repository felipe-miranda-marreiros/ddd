import { UUID } from '../../helpers'

export abstract class DomainEvent {
  static EVENT_NAME: string
  readonly aggregateId: string
  readonly eventId: string
  readonly createdAt: number
  readonly eventName: string
  readonly attributes: DomainEventAttributes

  constructor(params: {
    eventName: string
    aggregateId: string
    eventId?: string
    createdAt?: number
  }) {
    this.aggregateId = params.aggregateId
    this.createdAt = params.createdAt ?? Date.now()
    this.eventId = params.eventId ?? UUID()
    this.eventName = params.eventName
  }

  abstract fromPrimitives(params: DomainEventProps): DomainEvent
  abstract toPrimitives(): DomainEventAttributes
}

export interface DomainEventProps {
  eventId: string
  aggregateId: string
  createdAt: number
  eventName: string
  attributes: DomainEventAttributes
}

export type DomainEventParams = Omit<
  DomainEventProps,
  'attributes' | 'eventId' | 'eventName' | 'createdAt'
> &
  Partial<{
    createdAt: number
    eventId: string
    eventName: string
  }>

type DomainEventAttributes = any

export type DomainEventClass = {
  EVENT_NAME: string
  fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DomainEventAttributes
  }): DomainEvent
}
