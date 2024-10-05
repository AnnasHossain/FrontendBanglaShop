<template>
  <div class="app">
    <nav class="modern-nav">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">Dein Bangla Shop</router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/about" class="nav-item">About</router-link>
          <router-link to="/damen" class="nav-item">Damen</router-link>
          <router-link to="/herren" class="nav-item">Herren</router-link>
          <router-link to="/kontakt" class="nav-item">Kontakt</router-link>

          <!-- Menü Button mit Icon -->
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" @click="toggleMenu">
            <i :class="['fas', isMenuOpen ? 'fa-times' : 'fa-bars', { rotate: isMenuOpen }]"></i>
          </button>

          <!-- Offcanvas Menü -->
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasMenuLabel">Menü</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul>
                <li><router-link to="/damen" @click="closeMenu">Damenmode</router-link></li>
                <li><router-link to="/herren" @click="closeMenu">Herrenmode</router-link></li>
                <li><router-link to="/about" @click="closeMenu">Accessoires (About)</router-link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view/>
    </main>

    <footer class="footer">
      <p>&copy; 2024 Dein Bangla Shop. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu () {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu () {
  isMenuOpen.value = false
}

// Event-Handler für das Öffnen und Schließen des Menüs
function onMenuOpen () {
  isMenuOpen.value = true
}

function onMenuClose () {
  isMenuOpen.value = false
}

// Registriere die Bootstrap-Events
onMounted(() => {
  const offcanvasElement = document.getElementById('offcanvasMenu')
  offcanvasElement.addEventListener('shown.bs.offcanvas', onMenuOpen)
  offcanvasElement.addEventListener('hidden.bs.offcanvas', onMenuClose)
})

// Entferne die Event-Listener beim Unmount
onBeforeUnmount(() => {
  const offcanvasElement = document.getElementById('offcanvasMenu')
  offcanvasElement.removeEventListener('shown.bs.offcanvas', onMenuOpen)
  offcanvasElement.removeEventListener('hidden.bs.offcanvas', onMenuClose)
})
</script>

<style scoped>
.offcanvas {
  width: 250px; /* Breite des Offcanvas-Menüs */
}

.rotate {
  transition: transform 0.3s ease;
  transform: rotate(90deg);
}

.offcanvas {
  width: 250px; /* Breite des Offcanvas-Menüs */
}

.rotate {
  transition: transform 0.3s ease;
  transform: rotate(90deg);
}

.offcanvas {
  width: 250px; /* Breite des Offcanvas-Menüs */
}

/* Allgemeine Schriftarten und Farben */
html, body {
  height: 100%; /* Stellen Sie sicher, dass html und body die volle Höhe des Viewports einnehmen */
  margin: 0; /* Entfernen Sie Standard-Margin */
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Stellen Sie sicher, dass die App mindestens die Höhe des Viewports hat */
}

/* Navigation */
.modern-nav {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  max-width: 1200px;
  margin: auto; /* Verwenden Sie auto für zentrierten Abstand */
}

.nav-logo {
  font-size: 1.8rem; /* Größere Schrift für das Logo */
  font-weight: bold;
  color: #137703; /* Verwenden Sie die Hauptfarbe für das Logo */
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: #333;
  text-decoration: none;
  font-weight: bold; /* Fettgedruckt für bessere Lesbarkeit */
  padding: 10px; /* Größeres Padding für mehr Klickfläche */
}

.nav-item:hover {
  background-color: #f0f0f0; /* Leichter Hover-Effekt */
}

.nav-item.router-link-exact-active {
  color: #ffffff;
  background-color: #42b983; /* Hauptfarbe für aktiven Link */
}

/* Hauptinhalt */
.main-content {
  padding-top: calc(80px + env(safe-area-inset-top)); /* Berücksichtigen Sie die Höhe der Navigation und mögliche Safe-Areas auf Mobilgeräten */
  flex-grow:1; /* Ermöglicht dem Hauptinhalt, den verfügbaren Platz einzunehmen */
}

/* Footer */
.footer {
  text-align: center;
  padding: 0;
  background-color: #565050; /* Dunkler Hintergrund für den Footer */
  color: white; /* Weiße Schrift im Footer */
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column; /* Vertikale Anordnung auf kleinen Bildschirmen */
    padding:10px;
    align-items:flex-start; /* Links ausrichten auf kleinen Bildschirmen */
    gap:10px; /* Abstand zwischen Logo und Links erhöhen */
  }

  .nav-links {
    margin-top:10px;
    justify-content:flex-start;
  }

  .main-content {
    padding-top: calc(120px + env(safe-area-inset-top)); /* Anpassen des oberen Abstands auf kleinen Bildschirmen */
  }
}
</style>
