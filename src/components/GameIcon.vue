<template>
  <div class="thumbnail-box" @click="onClick" ref="box">
    <div v-if="gameData">
      <div class="icon-box">
        <img class="icon" :src="thumbnail" :alt="alternative">
      </div>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameIcon",
  props: {
    gameData: {type: Object, default: null}
  },
  data() {
    return {
      alternative: "",
    };
  },
  mounted() {
    if (this.gameData) {
      console.log(this.gameData);
    } else {
      this.$refs.box.style.cursor = "default";
    }
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
      if (!this.gameData) return;
      this.$store.dispatch("SET_GAME_DATA", this.gameData)
      this.$router.push({ path: "detail" })
      window.scrollTo({top: 0});
    }
  }
}
</script>

<style scoped lang="scss">
  .thumbnail-box {
    width: 25%;
    //height: 170px;
    margin: 20px auto;
    cursor: pointer;
    max-width: 256px;
    min-width: 180px;

    .title{
      height: 32px;
      color: white;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 6px;
      @media screen and (max-width: 500px) {
        font-size: 1.0rem;
      }
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
