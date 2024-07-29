import { UUID } from '../helpers/uuid'

export abstract class Entity<T> {
  private readonly _id: string
  protected readonly props: T

  constructor(props: T, id?: string) {
    this._id = id ?? UUID()
    this.props = props
  }

  get id() {
    return this._id
  }

  equals(other?: Entity<T>): boolean {
    if (!other || !(other instanceof Entity)) {
      return false
    }

    return other.id === this._id
  }
}
