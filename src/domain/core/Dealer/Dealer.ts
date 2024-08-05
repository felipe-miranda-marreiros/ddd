import { Entity } from '@/domain/shared'
import { Address } from './Address'

interface DealerModel {
  firstName: string
  lastName: string
  Address: Address
  cpf: string
  rg: string
  birthdate: string
  brand: string
  phone: string
  referenceContact: string
  gender: 'F' | 'M'
}

export class Dealer extends Entity<DealerModel> {
  private constructor(props: DealerModel, id?: string) {
    super(props, id)
  }

  static create(props: DealerModel, id?: string): Dealer {
    return new Dealer(props, id)
  }
}
