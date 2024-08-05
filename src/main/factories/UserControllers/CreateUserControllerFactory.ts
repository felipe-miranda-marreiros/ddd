import { CreateUserCommandHandler } from '@/application/modules/User/command/CreateUser/CreateUserCommandHandler'
import { CreateUserController } from '@/presentation/controllers/UserControllers/CreateUserController'
import { CreateUserRepository, ExistsByUsernameRepository } from '@/infrastructure'

export function createUserControllerFactory(): CreateUserController {
  const createUserRepository = new CreateUserRepository()
  const existsByUsernameRepository = new ExistsByUsernameRepository()
  const createUser = new CreateUserCommandHandler(createUserRepository, existsByUsernameRepository)
  return new CreateUserController(createUser)
}
