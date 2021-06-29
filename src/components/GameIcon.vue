<template>
  <div class="thumbnail-box" @click="onClick">
    <img :src="thumbnail" :alt="alternative">
    <div class="title">
      {{title}}
    </div>
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
      return require(`@/assets/${this.gameData.thumbnail}`);
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
    .title{
      position: relative;
      top: -100px;
      height: 32px;
      color: white;
      background: rgba(0,0,0,0.5);
      font-size: 2.0rem;
      border-radius: 6px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
