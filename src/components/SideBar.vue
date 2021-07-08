<template>
  <div class="side-bar-box" :class="{open: isOpen}">
    <div class="menu-item">
      <div class="spacer"></div>
      <div class="text">minimoのゲーム置き場</div>
    </div>
    <div v-if="$route.path !== '/'">
      <div class="menu-item" @click="onClickMainMenu">
        <div class="spacer"></div>
        <div class="text">メインページへ</div>
      </div>
      <div class="menu-item" @click="onClickBefore">
        <div class="spacer"></div>
        <div class="text">いっこまえにもどる</div>
      </div>
    </div>
    <div class="menu-item" @click="onClickGithub">
      <div class="spacer"></div>
      <img src="../assets/iconGithub.svg" class="icon">
      <div class="text">GitHub</div>
    </div>
    <div class="menu-item" @click="onClickTwitter">
      <div class="spacer"></div>
      <img src="../assets/iconTwitter.svg" class="icon">
      <div class="text">Twitter</div>
    </div>
    <div v-if="$route.path !== '/unfinished'">
      <div class="menu-item" @click="onClickUnfinished">
        <div class="spacer"></div>
        <img src="../assets/iconMikan.png" class="icon">
        <div class="text">みかん星人</div>
      </div>
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
    onClickMainMenu() {
      this.closeMenu();
      this.$router.push({name: "Home"});
    },
    onClickBefore() {
      this.closeMenu();
      history.back();
    },
    onClickGithub() {
      this.closeMenu();
      window.open("https://github.com/minimo", "_blank");
    },
    onClickTwitter() {
      this.closeMenu();
      window.open("https://twitter.com/minimo", "_blank");
    },
    onClickUnfinished() {
      this.closeMenu();
      this.$router.push({name: "Unfinished"});
    },
    closeMenu() {
      this.$store.dispatch('SET_MENU_OPEN', false);
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
  //margin: 20px auto;

  .menu-item {
    height: 48px;
    border-top: #aaaaaa solid 0.5px;
    border-bottom: #aaaaaa solid 0.5px;
    cursor: pointer;
    display: flex;
    .spacer {
      width: 40px;
    }
    .icon {
      width: 30px;
      height: 30px;
      margin: auto 0px;
    }
    .text {
      margin: auto 10px;
    }
  }
}
.open {
  left: 0;
}
</style>