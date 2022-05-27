<template>
<div class="q-mx-sm row">
      <div class="bg-primary col caption timer-text text-center row items-center">
        <div class="col ">
          Aktive Spieler 
          <br>
          <span class="text-white timer-text">{{getActivePlayersOfTeam1}}</span>
        </div>
      </div>
      <div class="bg-secondary col caption timer-text text-center row items-center">
        <div class="col ">
          Aktive Spieler 
          <br>
          <span class="text-white timer-text">{{getActivePlayersOfTeam2}}</span>
        </div>
      </div>
</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBattleTimer from 'src/modules/battle-timer/store'

export default defineComponent({
  name: 'PlayerDisplay',
  setup () {
    const { getActivePlayersOfTeam1, getActivePlayersOfTeam2 } = useBattleTimer()

    return {
      getActivePlayersOfTeam1,
      getActivePlayersOfTeam2
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
</style>
