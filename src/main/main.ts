import { prisma } from '@/infrastructure'

prisma
  .connect()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(5000, () => console.log(`Server running at http://localhost:${5000}`))
  })
  .catch(console.error)
