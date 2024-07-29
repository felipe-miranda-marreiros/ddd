export interface SignUpRequest {
  username: string
  password: string
}

export interface SignUpCommand {
  signup(command: SignUpRequest): Promise<void>
}
