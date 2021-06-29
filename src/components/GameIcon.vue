<template>
  <div class="thumbnail-box" @click="onClick">
    <div class="title">{{title}}</div>
    <img :src="thumbnail" :alt="alternative">
  </div>
</template>

<script>
export default {
  name: "GameIcon",
  props: {
    gameData: {type: Object}
  },
  data() {
    return {
      alternative: "",
    };
  },
  mounted() {
    console.log(this.gameData)
  },
  computed: {
    title() {
      return this.gameData.title;
    },
    thumbnail() {
      return require(`@/assets/screenshots/${this.gameData.thumbnail}`);
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch("SET_GAME_DATA", this.gameData)
      this.$router.push({ path: "detail" })
      // window.open(this.gameData.url, "_blank");
    }
  }
}
</script>

<style scoped lang="scss">
  .thumbnail-box {
    width: 25%;
    height: 256px;
    margin: 20px auto;
    cursor: pointer;
    max-width: 300px;
    .title{
      position: relative;
      top: calc(50% + 16px);
      height: 32px;
      color: white;
      background: rgba(0,0,0,0.6);
      font-size: 1.4rem;
      border-radius: 6px;
      margin: 0 5px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      image-rendering: crisp-edges;
    }
  }
</style>
