<template>
  <q-dialog
    @before-show="handleBeforeShow()"
    :model-value="$props.show"
    persistent
    full-width
  >
    <q-card>
      <q-card-section>
        <div class="text-h6 text-center">Restliche Zeit</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row">
          <div class="col-6 text-center">
            min
          </div>
          <div class="col-6 text-center">
            sec
          </div>
        </div>
        <div class="row items-center justify-evenly">
          <div class="col-6 row justify-evenly items-center q-mt-md">
            <q-btn
              class="col-3 q-pa-none"
              flat
              size="32px"
              color="warning"
              dense
              @click="handleDecreaseMinAdjust()"
              icon="arrow_left"/>
            <div class="col-6 min-spinner row items-center justify-evenly">
              {{minutes}}
            </div>
            <q-btn
              class="col-3 q-pa-none"
              flat
              size="32px"
              color="warning"
              dense
              @click="handleIncreaseMinAdjust()"
              icon="arrow_right"/>
          </div>
          <div class="col-6 text-center">
            <q-knob
              show-value
              class="text-white q-mx-md q-mt-md"
              v-model="seconds"
              center-color="primary"
              :max="59"
              :thickness="0.3"
              :step="5"
              size="75px"
              color="warning"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          flat
          icon="done"
          size="24px"
          color="positive"
          @click="handleSubmitTime()"
        />
        <q-btn
          flat
          icon="close"
          size="24px"
          color="grey"
          @click="handleClose()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useTeamTimer from 'src/modules/team-timer/store'

export default defineComponent({
  name: 'TimerDialog',
  emits: ['close'],
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup (props, ctx) {
    const { getTimeInSec, commitStartTime, commitTimeInSec } = useTeamTimer()
    const seconds = ref(0)
    const minutes = ref(0)

    function handleDecreaseMinAdjust () {
      if (minutes.value <= 0) return
      minutes.value--
    }

    function handleIncreaseMinAdjust () {
      minutes.value++
    }

    function handleSubmitTime () {
      const totalSec = minutes.value * 60 + seconds.value
      commitStartTime(totalSec)
      commitTimeInSec(totalSec)
      ctx.emit('close')
    }

    function handleClose () {
      ctx.emit('close')
    }

    function handleBeforeShow () {
      const secs = getTimeInSec.value
      minutes.value = Math.floor(secs / 60)
      seconds.value = secs - minutes.value * 60
    }

    return {
      handleBeforeShow,
      seconds,
      minutes,
      handleDecreaseMinAdjust,
      handleIncreaseMinAdjust,
      handleSubmitTime,
      handleClose
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
.min-spinner {
  background-color: $primary;
  color: white;
  font-size: 14pt;
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
</style>
