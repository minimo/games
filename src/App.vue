<template>
  <div id="app">
    <div id="nav">
      <PageHeader></PageHeader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";

export default {
  name: "app",
  components: {PageHeader},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: {PageHeader}
}
</script>