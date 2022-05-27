import state from './state'

export default function useMutations () {
  function setTimeInMillisOfTeam1 (time: number) {
    state.timeInMillisTeam1 = time
  }

  function setTimeInMillisOfTeam2 (time: number) {
    state.timeInMillisTeam2 = time
  }

  function setStarted (flag: boolean) {
    state.started = flag
  }

  function setDecreaseActivePlayersOfTeam1 () {
    if (state.activePlayersTeam1 <= 0) return
    state.activePlayersTeam1 -= 1
  }

  function setIncreaseActivePlayersOfTeam1 () {
    if (state.reset || state.startPlayersTeam1 > state.activePlayersTeam1) {
      state.activePlayersTeam1 += 1
    }
  }

  function setDecreaseActivePlayersOfTeam2 () {
    if (state.activePlayersTeam2 <= 0) return
    state.activePlayersTeam2 -= 1
  }

  function setIncreaseActivePlayersOfTeam2 () {
    if (state.reset || state.startPlayersTeam2 > state.activePlayersTeam2) {
      state.activePlayersTeam2 += 1
    }
  }

  function setStartPlayersOfTeam1 (players: number) {
    state.startPlayersTeam1 = players
  }

  function setStartPlayersOfTeam2 (players: number) {
    state.startPlayersTeam2 = players
  }

  function setReset (reset: boolean) {
    state.reset = reset
  }

  return {
    setTimeInMillisOfTeam1,
    setTimeInMillisOfTeam2,
    setStarted,
    setDecreaseActivePlayersOfTeam1,
    setIncreaseActivePlayersOfTeam1,
    setDecreaseActivePlayersOfTeam2,
    setIncreaseActivePlayersOfTeam2,
    setStartPlayersOfTeam1,
    setStartPlayersOfTeam2,
    setReset
  }
}
