<template>
  <div class="game-frame-box">
    <iframe
        class="game-frame"
        :src="gameUrl"
        ref="gameFrame"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "GameFrame",
  computed: {
    gameData() {
      return this.$store.state.gameData;
    },
    title() {
      return this.gameData.title;
    },
    thumbnail() {
      return require(`@/assets/screenshots/${this.gameData.thumbnail}`);
    },
    gameUrl() {
      return this.gameData.url;
    },
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
  methods: {
    resize() {
      const height = window.innerHeight - 100;
      this.$refs.gameFrame.style.height = height + "px";
    }
  }
}
</script>

<style lang="scss" scoped>
.game-frame-box {
  width: 100%;
  height: 100%;
  margin: 10px auto;

  .game-frame {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>