<template>
  <div class="likes">
    <img alt="Vue logo" src="../assets/banglalogo.jpeg">
    <FrauenKatalog msg="Hier sind deine Favouriten!"/>
    <h1> HIER MACHE ICH NOCH EINE LISTE von Produkten die geliked wurden, aber jetzt erstmal FrauenKatalog</h1>
  </div>
</template>

<script>

import FrauenKatalog from '@/components/FrauenKatalog.vue'

export default {
  name: 'LikesView',
  components: {
    FrauenKatalog
  }
}
</script>
