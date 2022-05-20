import state from './state'

export default function useMutations () {
  function commitTimeInSec (time: number) {
    state.timeInSec = time
  }

  function commitStarted (flag: boolean) {
    state.started = flag
  }

  function commitDecreaseActivePlayers () {
    if (state.activePlayers <= 0) return
    state.activePlayers -= 1
  }

  function commitIncreaseActivePlayers () {
    state.activePlayers += 1
  }

  function commitStartTime (time: number) {
    state.startTime = time
  }

  return {
    commitTimeInSec,
    commitStarted,
    commitDecreaseActivePlayers,
    commitIncreaseActivePlayers,
    commitStartTime
  }
}
