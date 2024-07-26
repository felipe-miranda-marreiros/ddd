import { UUID } from '../helpers/uuid'

export abstract class Entity {
  private readonly _id: string

  constructor(id?: string) {
    this._id = id ?? UUID()
  }

  get id() {
    return this._id
  }

  equals(other?: object): boolean {
    if (!other || !(other instanceof Entity)) {
      return false
    }

    return (other as Entity).id === this._id
  }
}
