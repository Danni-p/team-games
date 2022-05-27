import { computed } from 'vue'
import state from './state'

export default function useGetters () {
  const getTimeInMillisOfTeam1 = computed(() => state.timeInMillisTeam1)
  const getTimeInMillisOfTeam2 = computed(() => state.timeInMillisTeam2)

  const getLeadingTime = computed(() => {
    let secs = Math.floor(Math.abs(getTimeInMillisOfTeam1.value - getTimeInMillisOfTeam2.value) / 1000)
    const min = Math.floor(secs / 60)
    secs = secs - min * 60
    const minStr = min < 10 ? `0${min.toString()}` : min.toString()
    const secStr = secs < 10 ? `0${secs.toString()}` : secs.toString()
    return `${minStr}:${secStr}`
  })

  const getColorOfWinningTeam = computed(() => {
    const sign = Math.sign(getTimeInMillisOfTeam1.value - getTimeInMillisOfTeam2.value)
    if (sign > 0) {
      return 'primary'
    } else if (sign < 0) {
      return 'secondary'
    } else {
      return 'accent'
    }
  })

  const playersOfTeam1CanBeIncreased = computed(() => state.reset || state.startPlayersTeam1 > state.activePlayersTeam1)
  const playersOfTeam2CanBeIncreased = computed(() => state.reset || state.startPlayersTeam2 > state.activePlayersTeam2)

  return {
    getTimeInMillisOfTeam1,
    getTimeInMillisOfTeam2,
    getLeadingTime,
    getStartPlayersOfTeam1: computed(() => state.startPlayersTeam1),
    getStartPlayersOfTeam2: computed(() => state.startPlayersTeam2),
    isStarted: computed(() => state.started),
    getActivePlayersOfTeam1: computed(() => state.activePlayersTeam1),
    getActivePlayersOfTeam2: computed(() => state.activePlayersTeam2),
    getReset: computed(() => state.reset),
    getColorOfWinningTeam,
    playersOfTeam1CanBeIncreased,
    playersOfTeam2CanBeIncreased
  }
}
