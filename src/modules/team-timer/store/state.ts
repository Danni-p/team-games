import { reactive } from 'vue'

export interface TeamTimerStateInterface {
  timeInSec: number
  startTime: number
  started: boolean
  activePlayers: number
}

const state = reactive({
  timeInSec: 600,
  startTime: 600,
  started: false,
  activePlayers: 10
} as TeamTimerStateInterface)

export default state
