<template>
  <div class="q-mx-sm bg-secondary">
    <!-- <div class="q-py-md text-white timer-text">
      {{time}}
    </div> -->
    <q-btn
      class="full-width full-height"
      color="white"
      size="24pt"
      @click="handleChangeActivePlayers()"
      flat
      :icon="$props.direction==='up' ? 'add' : 'remove'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTeamTimer from 'src/modules/team-timer/store'

export default defineComponent({
  name: 'InOrDecreaseBtn',
  props: {
    direction: {
      type: String,
      default: 'up'/* ,
      validator (value: string) {
        return ['up', 'down'].includes(value)
      } */
    }
  },
  setup (props) {
    const { commitIncreaseActivePlayers, commitDecreaseActivePlayers } = useTeamTimer()
    function handleChangeActivePlayers () {
      if (props.direction === 'up') {
        commitIncreaseActivePlayers()
      } else {
        commitDecreaseActivePlayers()
      }
    }
    return {
      handleChangeActivePlayers
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
