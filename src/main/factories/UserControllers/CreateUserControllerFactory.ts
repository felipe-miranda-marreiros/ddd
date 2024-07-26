import { CreateUserCommandHandler } from '@/application/User/command/CreateUser/CreateUserCommandHandler'
import { CreateUserController } from '@/presentation/controllers/UserControllers/CreateUserController'
import { CreateUserRepository } from '@/infra'

export function createUserControllerFactory() {
  const createUserRepository = new CreateUserRepository()
  const createUser = new CreateUserCommandHandler(createUserRepository)
  return new CreateUserController(createUser)
}
