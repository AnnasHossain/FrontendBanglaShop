<template>
  <div class="damen">
    <img alt="Vue logo" src="../assets/logo.png">
    <FrauenKatalog msg="Willkommen auf der Frauen Seite des Shops"/>
  </div>
</template>

<script>

import FrauenKatalog from '@/components/FrauenKatalog.vue'
export default {
  name: 'DamenView',
  components: {
    FrauenKatalog
  }
}
</script>
