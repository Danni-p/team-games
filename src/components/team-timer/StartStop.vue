<template>
  <div class="q-ma-sm bg-primary">
    <!-- <div class="q-py-md text-white timer-text">
      {{time}}
    </div> -->
    <q-btn
      class="full-width full-height"
      color="white"
      size="18pt"
      @click="handleStartStopTimer()"
      flat
      :icon="btnText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useTeamTimer from 'src/modules/team-timer/store'

export default defineComponent({
  name: 'StartStop',
  setup () {
    const { startTimer, stopTimer, isStarted } = useTeamTimer()
    const btnText = computed(() => {
      return isStarted.value ? 'pause' : 'play_arrow'
    })
    function handleStartStopTimer () {
      console.log('btn clicked...')
      if (isStarted.value) {
        stopTimer()
      } else {
        startTimer()
      }
    }

    return {
      handleStartStopTimer,
      btnText
    }
  }
})
</script>
<style lang="scss" scoped>
.timer-text {
  font-size: 18pt;
  font-weight: bold;
}
</style>
