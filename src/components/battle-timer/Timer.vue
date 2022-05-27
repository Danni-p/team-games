<template>
  <div class="q-mx-sm row">
    <div class="bg-primary col caption timer-text text-center row items-center">
      <div class="col ">
        Erreichte Zeit
        <br>
        <span class="text-white timer-text">{{time1}}</span>
      </div>
    </div>
    <div class="bg-secondary col caption timer-text text-center row items-center">
      <div class="col ">
        Erreichte Zeit
        <br>
        <span class="text-white timer-text">{{time2}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useBattleTimer from 'src/modules/battle-timer/store'

export default defineComponent({
  name: 'Timer',
  setup () {
    const {
      getTimeInMillisOfTeam1,
      setTimeInMillisOfTeam1,
      getTimeInMillisOfTeam2,
      setTimeInMillisOfTeam2,
      isStarted
    } = useBattleTimer()

    const time1 = computed(() => {
      let secs = Math.floor(getTimeInMillisOfTeam1.value / 1000)
      const min = Math.floor(secs / 60)
      secs = secs - min * 60
      const minStr = min < 10 ? `0${min.toString()}` : min.toString()
      const secStr = secs < 10 ? `0${secs.toString()}` : secs.toString()
      return `${minStr}:${secStr}`
    })

    const time2 = computed(() => {
      let secs = Math.floor(getTimeInMillisOfTeam2.value / 1000)
      const min = Math.floor(secs / 60)
      secs = secs - min * 60
      const minStr = min < 10 ? `0${min.toString()}` : min.toString()
      const secStr = secs < 10 ? `0${secs.toString()}` : secs.toString()
      return `${minStr}:${secStr}`
    })

    return {
      time1,
      time2,
      isStarted
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
.edit-btn {
  position: absolute;
  left: 15px;
}
</style>
