import { AggregateRoot } from '@/domain/shared'

interface DealerAccountArchivesModel {
  backRgHash: string | null
  frontRgHash: string | null
  cnhHash: string | null
  answers: string[]
}

export class DealerAccountArchives extends AggregateRoot<DealerAccountArchivesModel> {
  private constructor(props: DealerAccountArchivesModel, id?: string) {
    super(props, id)
  }

  static create(props: DealerAccountArchivesModel, id?: string): DealerAccountArchives {
    return new DealerAccountArchives(props, id)
  }

  updateBackRgHash(hash: string) {
    this.props.backRgHash = hash
  }

  updateFrontRgHash(hash: string) {
    this.props.frontRgHash = hash
  }

  updateCNHHash(hash: string) {
    this.props.cnhHash = hash
  }
}
