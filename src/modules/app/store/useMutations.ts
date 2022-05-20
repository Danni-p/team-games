import state from './state'

export default function useMutations () {
  function commitTitle (title: string) {
    state.title = title
  }

  return {
    commitTitle
  }
}
