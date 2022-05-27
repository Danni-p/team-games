<template>
  <q-page class="container">
    <leading-timer class="item-a rounded-borders"/>
    <timer class="item-b rounded-borders"/>
    <in-or-decrease-btn direction="up" class="item-c rounded-borders"/>
    <player-display class="item-d rounded-borders"/>
    <in-or-decrease-btn direction="down" class="item-e rounded-borders"/>
    <start-stop class="item-f rounded-borders"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import LeadingTimer from 'src/components/battle-timer/LeadingTimer.vue'
import Timer from 'src/components/battle-timer/Timer.vue'
import StartStop from 'src/components/battle-timer/StartStop.vue'
import PlayerDisplay from 'src/components/battle-timer/PlayerDisplay.vue'
import InOrDecreaseBtn from 'src/components/battle-timer/InOrDecreaseBtn.vue'
import useApp from 'src/modules/app/store'
import useBattleTimer from 'src/modules/battle-timer/store'

export default defineComponent({
  name: 'BattleTimerPage',
  components: {
    LeadingTimer,
    Timer,
    StartStop,
    PlayerDisplay,
    InOrDecreaseBtn
  },
  setup () {
    const { commitTitle } = useApp()
    const { stopTimer } = useBattleTimer()
    onMounted(() => {
      commitTitle('Battle Timer')
    })

    onUnmounted(() => {
      stopTimer()
    })
    return { }
  }
})
</script>
<style lang="scss" scoped>
  .container {
    background-color: lightblue;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .item-a {
    grid-row-start: 1;
  }
  .item-b {
    grid-row-start: 2;
  }
  .item-c {
    grid-row-start: 3;
  }
  .item-d {
    grid-row-start: 4;
  }
  .item-e {
    grid-row-start: 5;
  }
  .item-f {
    grid-row-start: 6;
  }
</style>
