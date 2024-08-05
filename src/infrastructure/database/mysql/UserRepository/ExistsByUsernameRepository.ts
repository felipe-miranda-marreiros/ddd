import { UserRepository } from '@/application'

export class ExistsByUsernameRepository implements UserRepository.ExistsByUsername {
  async existsByUsername(username: string): Promise<boolean> {
    console.log(username)
    return true
  }
}
