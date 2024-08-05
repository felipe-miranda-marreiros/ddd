export abstract class UnitOfWork {
  abstract operations: Promise<any>[]
  abstract createTransaction(operations: Promise<any>[]): void
  abstract commit(): Promise<boolean>
}
