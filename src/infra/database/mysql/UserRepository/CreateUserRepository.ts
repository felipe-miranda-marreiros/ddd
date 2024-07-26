import { UserRepository } from '@/application'
import { User } from '@/domain'
import { prisma } from '../../helper/prismaClient'

export class CreateUserRepository implements UserRepository.CreateUser {
  async create(user: User): Promise<void> {
    await prisma.client.user.create({
      data: {
        password: user.getPassword(),
        username: user.getUsername()
      }
    })
  }
}
