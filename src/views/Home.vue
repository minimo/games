<template>
  <div class="home">
    <GameIcon
        title="Return of Hayabusa"
        url="http://minimo.github.io/ReturnOfHayabusa/"
        :thumbnail="require('@/assets/hayabusa.png')"
    ></GameIcon>
    <GameIcon
        title="KumaKuma☆BangBang"
        url="http://minimo.github.io/KumaBang_origin/"
        :thumbnail="require('@/assets/kumabang_origin.png')"
    ></GameIcon>
    <GameIcon
        title="PlanetBuster"
        url="http://minimo.github.io/PlanetBuster/"
        :thumbnail="require('@/assets/planetbuster.png')"
    ></GameIcon>
    <GameIcon
        title="PlanetBuster 2"
        url="http://minimo.github.io/PlanetBuster2/"
        :thumbnail="require('@/assets/planetbuster2.png')"
    ></GameIcon>
    <GameIcon
        title="The stars my destination"
        url="http://minimo.github.io/TheStarsMyDestinationEx/"
        :thumbnail="require('@/assets/thestarsmydestination.png')"
    ></GameIcon>
    <GameIcon
        title="ひよこは意外と高く空を飛ぶ"
        url="http://minimo.github.io/jsstg-2015spring2/"
        :thumbnail="require('@/assets/kumabang_origin.png')"
    ></GameIcon>
    <GameIcon
        title="PlanetBusterRevision"
        url="http://minimo.github.io/PlanetBusterRevision/"
        :thumbnail="require('@/assets/planetbuster2.png')"
    ></GameIcon>
  </div>
</template>

<script>
// @ is an alias to /src
import GameIcon from "@/components/GameIcon";

export default {
  name: 'Home',
  components: {
    GameIcon
  },
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  text-align: center;
  //display: flex;
  //justify-content: space-between;
}
</style>
