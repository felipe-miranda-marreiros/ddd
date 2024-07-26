import { PrismaClient } from '@prisma/client'

export const prisma = {
  client: new PrismaClient(),
  async connect() {
    await this.client.$connect()
  },
  disconnect() {
    this.client.$disconnect().then(async (e) => {
      console.error(e)
      await this.client.$disconnect()
      process.exit(1)
    })
  }
}
