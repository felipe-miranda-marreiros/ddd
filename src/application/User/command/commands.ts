export interface CreateUserCommand {
  username: string
  password: string
}

export interface CreateOTPCommand {
  userId: string
}

export namespace UserCommand {
  export interface CreateUser {
    create(command: CreateUserCommand): Promise<void>
  }

  export interface CreateOTP {
    create(command: CreateOTPCommand): Promise<void>
  }
}
