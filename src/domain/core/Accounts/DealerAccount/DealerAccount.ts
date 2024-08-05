import { AggregateRoot } from '@/domain/shared'

type FaceBiometryStatus = 'APPROVED' | 'REJECTED' | 'PENDING'

type RestrictionStatus = 'APPROVED' | 'REJECTED' | 'PENDING'

type RegisterStatus = 'APPROVED' | 'REJECTED' | 'PENDING'

type RejectReason = 'APPROVED' | 'REJECTED' | 'PENDING'

interface DealerAccountModel {
  faceBiometryStatus: FaceBiometryStatus
  restrictionStatus: RestrictionStatus
  registerStatus: RegisterStatus
  rejectReason: RejectReason
  score: number
}

export class DealerAccount extends AggregateRoot<DealerAccountModel> {
  private constructor(props: DealerAccountModel, id?: string) {
    super(props, id)
  }

  static create(props: DealerAccountModel, id?: string): DealerAccount {
    return new DealerAccount(props, id)
  }

  updateFaceBiometryStatus(status: FaceBiometryStatus) {
    this.props.faceBiometryStatus = status
  }

  updateRestrictionStatus(status: RestrictionStatus) {
    this.props.restrictionStatus = status
  }

  updateRegisterStatus(status: RegisterStatus) {
    this.props.registerStatus = status
  }

  updateRejectReason(reason: RejectReason) {
    this.props.rejectReason = reason
  }
}
