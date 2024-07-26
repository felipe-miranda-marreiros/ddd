export abstract class ValueObject {
  public equals(other?: ValueObject): boolean {
    if (!other) {
      return false
    }
    return true
  }
}
