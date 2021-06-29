<template>
  <div class="thumbnail-box" @click="onClick">
    <div class="icon-box">
      <img class="icon" :src="thumbnail" :alt="alternative">
    </div>
    <div class="title">{{title}}</div>
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
    console.log(this.gameData);
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
      this.$router.push({ path: "detail" });
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
    min-width: 200px;

    .title{
      height: 32px;
      color: black;
      //background: rgba(0,0,0,0.6);
      font-size: 1.4rem;
      border-radius: 6px;
    }
    .icon-box {
      background: rgba(0,0,0,0.2);
      width: 128px;
      height: 128px;
      border-radius: 10px;
      margin: 10px auto;
      .icon {
        width: 128px;
        height: 128px;
        object-fit: contain;
        image-rendering: crisp-edges;
        border-radius: 10px;
      }
    }
  }
</style>
