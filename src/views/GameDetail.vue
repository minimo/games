<template>
  <div class="detail-box">
    <div class="title">{{title}}</div>
    <div>
      <iframe class="iframe" :src="gameUrl"></iframe>
    </div>
    <img class="thumbnail" :src="thumbnail" :alt="alternative">
  </div>
</template>

<script>
export default {
  name: "GameDetail",
  computed: {
    title() {
      return this.$store.state.title;
    },
    thumbnail() {
      return require(`@/assets/screenshots/${this.$store.state.thumbnail}`);
    },
    gameUrl() {
      return this.$store.state.url;
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

  .iframe {
    width: 500px;
    height: 500px;
  }
}

</style>