<template>
  <q-page class="row items-center justify-evenly">
    Menu
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useApp from 'src/modules/app/store'

export default defineComponent({
  name: 'TeamTimerPage',
  components: {},
  setup () {
    const { commitTitle } = useApp()
    onMounted(() => {
      commitTitle('Hauptmenü')
    })
    return { }
  }
})
</script>
