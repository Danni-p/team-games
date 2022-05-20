import useMutations from './useMutations'
import useGetters from './useGetters'

let intRef: ReturnType<typeof setInterval> | null
export default function useActions () {
  const { commitTimeInSec, commitStarted } = useMutations()
  const { getTimeInSec, getActivePlayers } = useGetters()
  function startTimer () {
    if (intRef) return
    commitStarted(true)
    intRef = setInterval(() => {
      console.log('interval running...')
      let remainingTime = getTimeInSec.value - getActivePlayers.value
      if (remainingTime <= 0) {
        remainingTime = 0
        stopTimer()
      }
      commitTimeInSec(remainingTime)
    }, 1000)
  }

  function stopTimer () {
    if (!intRef) return
    clearInterval(intRef)
    intRef = null
    commitStarted(false)
  }
  return {
    startTimer,
    stopTimer
  }
}
