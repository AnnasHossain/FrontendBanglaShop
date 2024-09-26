<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Hier mache ich meine ToDo List:</p>

    <!-- ToDo Liste -->
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <span :style="{ textDecoration: item.completed ? 'line-through' : 'none' }">
          {{ item.text }}
        </span>
        <button @click="toggleComplete(index)">Erledigt</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoList: [
        { text: '1. Navigations Bar', completed: true },
        { text: '2. Dropdown Menü', completed: false },
        { text: '3. keine Ahnung mehr, Fashhion Seiten kopieren', completed: false }
      ]
    }
  },
  methods: {
    toggleComplete (index) {
      this.todoList[index].completed = !this.todoList[index].completed
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
}
ul {
  list-style-type: none;
  padding-left: 0; /* optional: Entfernt den linken Einzug der Liste */
}

</style>
