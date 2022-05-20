import getters from './useGetters'
import mutations from './useMutations'
import actions from './useActions'

const use = () => {
  return {
    ...getters(),
    ...mutations(),
    ...actions()
  }
}

export default use
