import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const use = () => {
  return {
    ...getters(),
    ...mutations(),
    ...actions()
  }
}

export default use
