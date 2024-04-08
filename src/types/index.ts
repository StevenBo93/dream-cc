export interface LottoGrid {
  cols: number
  maxFields: number
  maxSelections: number
  additionalFields?: boolean
  additionalCols?: number
  maxAdditionalFields?: number
  maxAdditionalSelections?: number
}

export interface EurojackpotState {
  numbers: number[]
  additionalNumbers: number[]
}
