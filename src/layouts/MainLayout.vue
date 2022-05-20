<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{title}}
        </q-toolbar-title>

        <q-btn
          icon="home"
          flat
          @click="gotoHomePage"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Teamspiele
        </q-item-label>

        <game-menu-item
          v-for="item in gameList"
          :key="item.title"
          v-bind="item"
          :title="item.title"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import GameMenuItem from 'src/components/GameMenuItem.vue'

const gameList = [
  {
    title: 'Team Timer',
    caption: 'Zusammen gegen die Zeit',
    icon: 'school',
    page: 'TeamTimer'
  }
]

import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useApp from 'src/modules/app/store'

export default defineComponent({
  name: 'MainLayout',

  components: {
    GameMenuItem
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter()
    const { getTitle } = useApp()

    async function gotoHomePage () {
      await router.push({ name: 'Menu' }).catch((err) => {
        console.log(err)
      })
    }

    return {
      title: getTitle,
      gameList,
      gotoHomePage,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
