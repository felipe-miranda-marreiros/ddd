import { UnitOfWork } from '@/infrastructure/uow/UnitOfWork'

export class PrismaUnitOfWork extends UnitOfWork {
  private readonly operations: Promise<any>[] = []
  private readonly database

  constructor()
}
