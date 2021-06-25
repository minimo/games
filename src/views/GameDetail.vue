<template>
  <div>
  <div class="title">{{title}}</div>
  <img :src="thumbnail" :alt="alternative">
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
      return require(`@/assets/${this.$store.state.thumbnail}`);
    }
  }
}
</script>

<style scoped lang="scss">
.title {
}
</style>