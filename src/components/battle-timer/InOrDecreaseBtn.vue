<template>
  <div class="q-ma-sm row">
    <div class="bg-primary col text-center row items-center">
          <q-btn
            class="col ull-height"
            color="white"
            size="24pt"
            :disable="$props.direction==='up' && !playersOfTeam1CanBeIncreased"
            @click="handleChangeActivePlayersOfTeam1()"
            flat
            :icon="$props.direction==='up' ? 'add' : 'remove'"
          />
      </div>
      <div class="bg-secondary col caption timer-text text-center row items-center">
        <q-btn
            class="col ull-height"
            color="white"
            size="24pt"
            :disable="$props.direction==='up' && !playersOfTeam2CanBeIncreased"
            @click="handleChangeActivePlayersOfTeam2()"
            flat
            :icon="$props.direction==='up' ? 'add' : 'remove'"
          />
      </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBattleTimer from 'src/modules/battle-timer/store'

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
    const {
      setDecreaseActivePlayersOfTeam1,
      setIncreaseActivePlayersOfTeam1,
      setDecreaseActivePlayersOfTeam2,
      setIncreaseActivePlayersOfTeam2,
      playersOfTeam1CanBeIncreased,
      playersOfTeam2CanBeIncreased
    } = useBattleTimer()

    function handleChangeActivePlayersOfTeam1 () {
      if (props.direction === 'up') {
        setIncreaseActivePlayersOfTeam1()
      } else {
        setDecreaseActivePlayersOfTeam1()
      }
    }

    function handleChangeActivePlayersOfTeam2 () {
      if (props.direction === 'up') {
        setIncreaseActivePlayersOfTeam2()
      } else {
        setDecreaseActivePlayersOfTeam2()
      }
    }

    return {
      handleChangeActivePlayersOfTeam1,
      handleChangeActivePlayersOfTeam2,
      playersOfTeam1CanBeIncreased,
      playersOfTeam2CanBeIncreased
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
