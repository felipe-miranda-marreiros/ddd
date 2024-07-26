export interface CreateUserCommandRequest {
  username: string
  password: string
}

export namespace UserCommand {
  export interface CreateUserCommand {
    create(command: CreateUserCommandRequest): Promise<void>
  }
}
