<template>
  <div class="q-ma-sm bg-primary row items-center justify-evenly">
    <div class="caption timer-text text-center">
      Restliche Zeit
      <br>
      <span class="text-white timer-text">{{time}}</span>
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
    <div v-show="!isStarted" class="edit-btn">
      <q-btn
        flat
        size="16px"
        class="q-pa-sm"
        color="warning"
        icon="edit"
        @click="handleEditTimer()"
      />
    </div>
    <timer-dialog
      :show="showDlg"
      @close="showDlg = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import TimerDialog from 'src/components/team-timer/TimerDialog.vue'
import useTeamTimer from 'src/modules/team-timer/store'

export default defineComponent({
  name: 'Timer',
  components: {
    TimerDialog
  },
  setup () {
    const { getTimeInSec, commitTimeInSec, isStarted, getStartTime } = useTeamTimer()
    const time = computed(() => {
      let secs = getTimeInSec.value
      const min = Math.floor(secs / 60)
      secs = secs - min * 60
      const minStr = min < 10 ? `0${min.toString()}` : min.toString()
      const secStr = secs < 10 ? `0${secs.toString()}` : secs.toString()
      return `${minStr}:${secStr}`
    })

    const showDlg = ref(false)

    function handleResetTimer () {
      if (isStarted.value) return
      commitTimeInSec(getStartTime.value)
    }

    function handleEditTimer () {
      showDlg.value = true
    }

    return {
      showDlg,
      time,
      handleResetTimer,
      handleEditTimer,
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
