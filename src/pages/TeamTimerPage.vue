<template>
  <q-page class="container">
    <timer class="item-a rounded-borders"/>
    <start-stop class="item-b rounded-borders"/>
    <player-display class="item-c rounded-borders"/>
    <in-or-decrease-btn direction="up" class="item-d rounded-borders"/>
    <in-or-decrease-btn direction="down" class="item-e rounded-borders"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import Timer from 'src/components/team-timer/Timer.vue'
import StartStop from 'src/components/team-timer/StartStop.vue'
import PlayerDisplay from 'src/components/team-timer/PlayerDisplay.vue'
import InOrDecreaseBtn from 'src/components/team-timer/InOrDecreaseBtn.vue'
import useApp from 'src/modules/app/store'
import useTeamTimer from 'src/modules/team-timer/store'

export default defineComponent({
  name: 'TeamTimerPage',
  components: {
    Timer,
    StartStop,
    PlayerDisplay,
    InOrDecreaseBtn
  },
  setup () {
    const { commitTitle } = useApp()
    const { stopTimer } = useTeamTimer()
    onMounted(() => {
      commitTitle('Team Timer')
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
    grid-template-rows: 90px 2fr 1.5fr 2fr 90px;
  }

  .item-a {
    grid-row-start: 1;
  }
  .item-b {
    grid-row-start: 5;
  }
  .item-c {
    grid-row-start: 3;
  }
  .item-d {
    grid-row-start: 2;
  }
  .item-e {
    grid-row-start: 4;
  }
</style>
