<template>
  <div class="menu-button" @click='onClick'>
    <span class="line line-01" :class="{'line-01-cross': isActive}"></span>
    <span class="line line-02" :class="{'line-02-cross': isActive}"></span>
    <span class="line line-03" :class="{'line-03-cross': isActive}"></span>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    onClick() {
      this.isActive =! this.isActive;
      this.$store.dispatch('SET_MENU_OPEN', this.isActive);
      if (this.isActive) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.menu-button {
  width: 64px;
  height: 64px;
  cursor: pointer;

  .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 24px;
    height: 2px;
    background: #333333;
    text-align: center;
  }

  .line-01 {
    top: 24px;
    transition: 0.4s ease;
  }

  .line-02 {
    top: 32px;
    transition: 0.4s ease;
  }

  .line-03 {
    top: 40px;
    transition: 0.4s ease;
  }
}

.line-01-cross {
  transform: translateY(8px) rotate(-45deg);
  transition: 0.4s ease;
}
.line-02-cross {
  transition: 0.4s ease;
  opacity: 0;
}
.line-03-cross {
  transform: translateY(-8px) rotate(45deg);
  transition: 0.4s ease;
}

</style>