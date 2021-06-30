<template>
  <div class="detail-box">
    <div class="title">{{title}}</div>
    <div>
      <iframe
          class="iframe"
          :class="{square: isSquare, portrait: isPortrait, landscape: isLandscape}"
          :src="gameUrl"
      ></iframe>
    </div>
    <img class="thumbnail" :src="thumbnail" :alt="alternative">
  </div>
</template>

<script>
export default {
  name: "GameDetail",
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
    orientation() {
      return this.gameData.orientation;
    },
    isSquare() {
      return this.orientation === 'square';
    },
    isPortrait() {
      return this.orientation === 'portrait';
    },
    isLandscape() {
      return this.orientation === 'landscape';
    },
  }
}
</script>

<style scoped lang="scss">

.detail-box {
  .title {
    margin: 20px auto;
    font-size: 3.0rem;
    font-weight: bold;
  }

  .iframe {
  }
  .square {
    width: 500px;
    height: 500px;
  }
  .portrait {
    width: 290px;
    height: 500px;
  }
  .landscape {
    width: 500px;
    height: 290px;
  }
}

</style>