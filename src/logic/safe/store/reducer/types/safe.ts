import { SafeRecord, SafeRecordProps } from 'src/logic/safe/store/models/safe'
import { Map } from 'immutable'

export type SafesMap = Map<string, SafeRecord>

export interface SafeReducerState {
  safes: SafesMap
  latestMasterContractVersion: string
  selectedCurrency: string
}

interface SafeReducerStateJSON {
  safes: Record<string, SafeRecordProps>
  latestMasterContractVersion: string
  selectedCurrency: string
}

export interface SafeReducerMap extends Map<string, any> {
  toJS(): SafeReducerStateJSON
  get<K extends keyof SafeReducerState>(key: K): SafeReducerState[K]
}
