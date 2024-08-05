export interface Command<TCommand> {
  handle(command: TCommand): Promise<void>
}
