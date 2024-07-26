export class InvalidOperationError extends Error {
  constructor() {
    super('Invalid operation error')
    this.name = 'InvalidOperationError'
  }
}

export class UnexpectedError extends Error {
  constructor() {
    super('An error occurred')
    this.name = 'UnexpectedError'
  }
}
