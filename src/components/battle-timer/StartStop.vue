<template>
  <div :class="'bg-' + getColorOfWinningTeam" class="q-mx-sm q-mb-sm">
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
import useBattleTimer from 'src/modules/battle-timer/store'

export default defineComponent({
  name: 'StartStop',
  setup () {
    const {
      startTimer,
      stopTimer,
      isStarted,
      getColorOfWinningTeam
      } = useBattleTimer()
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
      getColorOfWinningTeam,
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
