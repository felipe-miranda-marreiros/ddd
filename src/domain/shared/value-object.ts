export abstract class ValueObject<T> {
  protected readonly props: T

  constructor(props: T) {
    this.props = props
  }

  public equals(other?: ValueObject<T>): boolean {
    if (!other) {
      return false
    }
    return true
  }
}
