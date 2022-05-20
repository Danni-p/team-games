import { computed } from 'vue'
import state from './state'

export default function useGetters () {
  return {
    getTimeInSec: computed(() => state.timeInSec),
    getStartTime: computed(() => state.startTime),
    isStarted: computed(() => state.started),
    getActivePlayers: computed(() => state.activePlayers)
  }
}
