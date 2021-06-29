<template>
  <div class="home">
    <GameIcon v-for="d in gameData" :gameData="d"></GameIcon>
  </div>
</template>

<script>
// @ is an alias to /src
import GameIcon from "@/components/GameIcon";
import GameData from "@/assets/GameData.json";

export default {
  name: 'Home',
  components: {
    GameIcon,
  },
  computed: {
    gameData() {
      return GameData;
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  text-align: center;
  //display: flex;
  //justify-content: space-between;
}
</style>
