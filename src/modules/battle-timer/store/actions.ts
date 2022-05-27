import mutations from './mutations'
import getters from './getters'

let intRefTeam1: ReturnType<typeof setInterval> | null
let intRefTeam2: ReturnType<typeof setInterval> | null

export default function useActions () {
  const {
    setTimeInMillisOfTeam1,
    setTimeInMillisOfTeam2,
    setStarted,
    setReset,
    setStartPlayersOfTeam1,
    setStartPlayersOfTeam2
  } = mutations()
  const {
    getTimeInMillisOfTeam1,
    getTimeInMillisOfTeam2,
    getActivePlayersOfTeam1,
    getStartPlayersOfTeam1,
    getActivePlayersOfTeam2,
    getStartPlayersOfTeam2,
    getReset,
    hasTeam1Lost,
    hasTeam2Lost
  } = getters()

  function startTimer () {
    const oldReset = getReset.value
    if (oldReset) {
      setStartPlayersOfTeam1(getActivePlayersOfTeam1.value)
      setStartPlayersOfTeam2(getActivePlayersOfTeam2.value)
    }
    startTimerOfTeam1()
    startTimerOfTeam2()
    setStarted(true)
    setReset(false)
    console.log('interval running...')
  }

  function startTimerOfTeam1 () {
    if (intRefTeam1) return
    intRefTeam1 = setInterval(() => {
      // if ((getActivePlayersOfTeam1.value === 0 && getActivePlayersOfTeam2.value === 0)) {
      if (hasTeam1Lost.value || hasTeam2Lost.value) {
        stopTimerOfTeam1()
        return
      }

      const oldTime = getTimeInMillisOfTeam1.value
      const diff = getStartPlayersOfTeam1.value === 0 ? 0 : 1000 * (getActivePlayersOfTeam1.value / getStartPlayersOfTeam1.value)
      const newTime = Math.floor(oldTime + diff)
      setTimeInMillisOfTeam1(newTime)
    }, 1000)
  }

  function startTimerOfTeam2 () {
    if (intRefTeam2) return
    intRefTeam2 = setInterval(() => {
      // if (getActivePlayersOfTeam1.value === 0 && getActivePlayersOfTeam2.value === 0) {
      if (hasTeam1Lost.value || hasTeam2Lost.value) {
        stopTimerOfTeam2()
        return
      }

      const oldTime = getTimeInMillisOfTeam2.value
      const diff = getStartPlayersOfTeam2.value === 0 ? 0 : 1000 * (getActivePlayersOfTeam2.value / getStartPlayersOfTeam2.value)
      const newTime = Math.floor(oldTime + diff)
      setTimeInMillisOfTeam2(newTime)
    }, 1000)
  }

  function stopTimer () {
    stopTimerOfTeam1()
    stopTimerOfTeam2()
  }

  function stopTimerOfTeam1 () {
    if (!intRefTeam1) return
    clearInterval(intRefTeam1)
    intRefTeam1 = null
    setStarted(false)
  }

  function stopTimerOfTeam2 () {
    if (!intRefTeam2) return
    clearInterval(intRefTeam2)
    intRefTeam2 = null
    setStarted(false)
  }

  return {
    startTimer,
    stopTimer
  }
}
