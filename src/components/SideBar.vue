<template>
  <div class="side-bar-box" :class="{open: isOpen}">
    <div class="menu-item">
      メニュー
    </div>
    <div class="menu-item">
      Twitter
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    isOpen() {
      return this.$store.state.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.side-bar-box {
  width: 300px;
  background-color: white;
  position: absolute;
  top: 64px;
  left: -300px;
  transition: 0.2s;

  .menu-item {
    height: 64px;
    border: #333333 solid 1px;
  }
}
.open {
  left: 0;
}
</style>