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
  mounted() {
    this.$store.dispatch('SET_MENU_OPEN', false);
    window.addEventListener("resize", this.resize);
    this.resize();
  },
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
  methods: {
    resize() {
      const height = window.innerHeight - 100;
      const width = window.innerWidth;
      this.$refs.gameFrame.style.height = `${height}px`;
      if (this.gameData.orientation === "square") {
        this.$refs.gameFrame.style.width = `${height}px`;
        if (width < height) {
          this.$refs.gameFrame.style.width = `${width - 100}px`;
          this.$refs.gameFrame.style.height = `${width - 100}px`;
        }
      }
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