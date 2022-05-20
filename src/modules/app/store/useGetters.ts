import { computed } from 'vue'
import state from './state'

export default function useGetters () {
  return {
    getTitle: computed(() => state.title)
  }
}
