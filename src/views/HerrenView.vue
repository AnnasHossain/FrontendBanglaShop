<template>
  <div class="herren">
    <img alt="Vue logo" src="../assets/logo.png">
    <HerrenKatalog msg="Willkommen in unserem Männerkatalog!"/>
    <h1> Warum auch immer will hier darüber nicht das msg auftauchen</h1>
    <h2> (UPDATE: Jetzt taucht es auf in dünner Schrift und kann so besser differenziert werden!) </h2>
  </div>
</template>

<script>

import HerrenKatalog from '@/components/HerrenKatalog.vue'

export default {
  name: 'HerrenView',
  components: {
    HerrenKatalog
  }
}
</script>
