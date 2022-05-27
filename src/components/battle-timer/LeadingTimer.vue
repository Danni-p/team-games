<template>
  <div class="q-ma-sm row">
    <div :class="'bg-' + getColorOfWinningTeam" class="col caption timer-text text-center row items-center">
      <div class="col ">
        Führung
        <br>
        <span class="text-white timer-text">{{getLeadingTime}}</span>
      </div>
      <div v-show="!isStarted" class="reset-btn">
        <q-btn
          flat
          size="20px"
          class="q-pa-sm"
          color="warning"
          icon="restart_alt"
          @click="handleResetTimer()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBattleTimer from 'src/modules/battle-timer/store'

export default defineComponent({
  name: 'LeadingTimer',
  setup () {
    const {
      isStarted,
      getLeadingTime,
      setTimeInMillisOfTeam1,
      setTimeInMillisOfTeam2,
      setReset,
      getColorOfWinningTeam
    } = useBattleTimer()

    /* const time = computed(() => {
      let secs = Math.floor(Math.abs(getTimeInMillisOfTeam1.value - getTimeInMillisOfTeam2.value) / 1000)
      const min = Math.floor(secs / 60)
      secs = secs - min * 60
      const minStr = min < 10 ? `0${min.toString()}` : min.toString()
      const secStr = secs < 10 ? `0${secs.toString()}` : secs.toString()
      return `${minStr}:${secStr}`
    }) */

    function handleResetTimer () {
      if (isStarted.value) return
      setTimeInMillisOfTeam1(0)
      setTimeInMillisOfTeam2(0)
      setReset(true)
    }

    return {
      getLeadingTime,
      handleResetTimer,
      isStarted,
      getColorOfWinningTeam
    }
  }
})
</script>
<style lang="scss" scoped>
.timer-text {
  font-size: 18pt;
  font-weight: bold;
}
.caption {
  font-size: 10pt;
  font-weight: normal;
  color: lightgray;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
.reset-btn {
  position: absolute;
  right: 15px;
}
</style>
