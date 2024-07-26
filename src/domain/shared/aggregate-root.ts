import { Entity } from './entity'

export abstract class AggregateRoot extends Entity {
  constructor(id: string) {
    super(id)
  }
}
