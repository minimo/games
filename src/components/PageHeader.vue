<template>
  <div class="headere-bar">
    <MenuButton @open="onMenuOpen" @close="onMenuClose"></MenuButton>
    <img class="logo" src="~@/assets/logo.png">
  </div>
</template>

<script>
import MenuButton from "@/components/MenuButton";
export default {
  name: "PageHeader",
  components: {
    MenuButton
  },
  methods: {
    onMenuOpen() {

    },
    onMenuClose() {

    },
  }
}
</script>

<style lang="scss" scoped>

.headere-bar {
  width: 100%;
  height: 64px;
  background-color: white;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 300;
  box-shadow:
      0 2px 4px -1px rgb(0 0 0 / 20%),
      0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);

  .logo {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
}

</style>