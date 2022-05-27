import { reactive } from 'vue'

export interface TeamTimerStateInterface {
  timeInMillisTeam1: number
  timeInMillisTeam2: number
  startPlayersTeam1: number
  startPlayersTeam2: number
  started: boolean
  activePlayersTeam1: number
  activePlayersTeam2: number
  reset: boolean
}

const state = reactive({
  timeInMillisTeam1: 0,
  timeInMillisTeam2: 0,
  startPlayersTeam1: 10,
  startPlayersTeam2: 10,
  started: false,
  activePlayersTeam1: 10,
  activePlayersTeam2: 10,
  reset: true
} as TeamTimerStateInterface)

export default state
