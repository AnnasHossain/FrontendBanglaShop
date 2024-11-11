<template>
  <div class="likes">
    <img alt="Vue logo" src="../assets/banglalogo.jpeg">
    <LikePage msg="Hier sind deine Favouriten!"/>
    <h1> HIER MACHE ICH NOCH EINE LISTE von Produkten die geliked wurden </h1>
    <h2> Hier mache ich mehrere Componenten wie zum Beispiel weitere empfohlene Produkte ? Kategorien nochmal?</h2>
  </div>
</template>

<script>

import LikePage from '@/components/LikePage.vue'

export default {
  name: 'LikesView',
  components: {
    LikePage
  }
}
</script>
