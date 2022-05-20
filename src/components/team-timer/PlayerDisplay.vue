<template>
  <div class="q-ma-sm bg-primary row items-center justify-evenly">
    <div class="items-center justify-evenly">
      <div class="caption timer-text text-center">
        Anzahl aktiver Spieler
        <br>
        <span class="text-white timer-text">{{getActivePlayers}}</span>
      </div>
    </div>
    <!-- <div class="col-auto row items-center justify-evenly">
      <div class="text-white timer-text">
        {{getActivePlayers}}
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTeamTimer from 'src/modules/team-timer/store'

export default defineComponent({
  name: 'PlayerDisplay',
  setup () {
    const { getActivePlayers } = useTeamTimer()

    return {
      getActivePlayers
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
