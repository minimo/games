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
    title: { type: String, default: "タイトルなし" },
    url: { type: String, default: "" },
    thumbnail: { type: String, default: "" },
  },
  data() {
    return {
      alternative: "",
    };
  },
  mounted() {

  },
  methods: {
    onClick() {

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
      color: white;
      background: rgba(0,0,0,0.5);
      font-size: 1.5rem;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
</style>
