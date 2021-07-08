<template>
  <div class="home" ref="home">
    <GameIcon v-for="d in gameData.unfinished" :gameData="d" :key="d.title"></GameIcon>
    <GameIcon v-for="n in 4" :key="n"></GameIcon>
  </div>
</template>

<script>
// @ is an alias to /src
import GameIcon from "@/components/GameIcon";
import GameData from "@/assets/GameData.json";

export default {
  name: 'Unfinished',
  components: {
    GameIcon,
  },
  mounted() {
    this.$store.dispatch('SET_MENU_OPEN', false);
  },
  computed: {
    gameData() {
      return GameData;
    },
  },
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  flex-flow: row wrap;
  justify-content: flex-start;
  transform-origin: top center;
}
</style>
