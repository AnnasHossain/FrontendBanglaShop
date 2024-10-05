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
        { text: '2. Dropdown Menü', completed: true },
        { text: '3. Menü inhalt korrigieren', completed: true },
        { text: '4. Icon hinzufügen für Menü', completed: true },
        { text: '5. Menü Button funktion, sodass wenn ich auf eins der Kategorien draufklicke, menü autom sich wieder schließt', completed: false },
        { text: '6. Dropdown unterkategorien im Menu', completed: false },
        { text: '7. Warenkorb erstellen', completed: false },
        { text: '8. Warenkorb Icon erstellen', completed: false },
        { text: '9. Warenkorb Funktionalität', completed: false },
        { text: '10. noch mehr Fashhion Seiten desgins und funktionen kopieren', completed: false },
        { text: '11. alten Code kopieren um mit Datensätze Kacheln (Produkte) erstellen', completed: false },
        { text: '12. Code of Conduct (verhaltensregeln, AGBs, LVHM Style kopieren)', completed: false }
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
