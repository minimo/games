<template>
  <div class="detail-box">
    <div class="title">{{title}}</div>
    <img class="thumbnail" :src="thumbnail" :alt="alternative">
    <div class="play-button-box">
      <button class="play-button" @click="onClickPlay">PLAY</button>
    </div>
    <div class="play-button-box">
      <button class="return-button" @click="onClickReturn">戻る</button>
    </div>
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
    alternative() {
      return "";
    },
    isMobile: () => {
      if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) return true;
      return false;
    }
  },
  methods: {
    onClickPlay() {
      if (this.isMobile) {
        window.open(this.gameUrl, "_blank");
      } else {
        this.$router.push({path: "frame"});
      }
    },
    onClickReturn() {
      history.back();
    }
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
  .thumbnail {
    width: 320px;
  }

  .play-button-box {
    margin: 20px auto;
    .play-button {
      width: 200px;
      height: 48px;
      color: #2c3e50;
      font-size: 1.2rem;
      font-weight: bold;
      border: #ff7f1e solid 4px;
      border-radius: 24px;
      background-color: #ffc43e;
    }
    .return-button {
      width: 200px;
      height: 48px;
      color: #2c3e50;
      font-size: 1.2rem;
      font-weight: bold;
      border: #ff7f1e solid 4px;
      border-radius: 24px;
      background-color: #ffc43e;
    }
  }
}

</style>