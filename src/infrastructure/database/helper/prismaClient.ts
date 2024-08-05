import { PrismaClient } from '@prisma/client'

export const prisma = {
  client: null as unknown as PrismaClient,
  async connect() {
    await this.client.$connect()
    this.client = new PrismaClient()
  },
  disconnect() {
    this.client.$disconnect().then(async (e) => {
      this.client = null as unknown as PrismaClient
      console.error(e)
      process.exit(1)
    })
  }
}
