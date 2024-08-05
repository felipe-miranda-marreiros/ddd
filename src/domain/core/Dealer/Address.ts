import { ValueObject } from '@/domain/shared'

interface AddressModel {
  zipcode: string
  district: string
  number: number
  complement?: string
  neignborhood: string
  state: string
}

export class Address extends ValueObject<AddressModel> {
  private constructor(props: AddressModel) {
    super(props)
  }

  static create(props: AddressModel): Address {
    return new Address(props)
  }
}
