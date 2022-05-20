import { reactive } from 'vue'

export interface AppStateInterface {
  title: string
}

const state = reactive({
  title: ''
} as AppStateInterface)

export default state
