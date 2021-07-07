<template>
  <div class="side-bar-box" :class="{open: isOpen}">
    <div class="menu-item">
      <div class="text">メニュー</div>
    </div>
    <div class="menu-item" @click="onClickTwitter">
      <div class="text">Twitter</div>
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
  },
  methods: {
    onClickTwitter() {
      window.open("https://twitter.com/minimo", "_blank");
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-box {
  width: 300px;
  background-color: white;
  position: absolute;
  top: 64px;
  left: -300px;
  transition: 0.2s;

  .menu-item {
    height: 48px;
    border-bottom: #aaaaaa solid 0.5px;
    .text {
      line-height: 3.0rem;
    }
  }
}
.open {
  left: 0;
}
</style>