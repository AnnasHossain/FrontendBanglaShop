<template>
  <div class="app">
    <nav class="modern-nav">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">Dein Bangla Shop</router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/damen" class="nav-item">Damen</router-link>
          <router-link to="/herren" class="nav-item">Herren</router-link>
          <router-link to="/about" class="nav-item">Accessoires</router-link>
        </div>
        <div class="nav-rechts">
          <router-link to="/likes" class="nav-item" style="position: relative;">
            <i class="bi bi-heart" style="font-size: 1.5rem; color: red;"></i>
            <span
              v-if="favoritesCount > 0"
              style="position: absolute; top: -5px; right: -10px; background: red; color: white; font-size: 0.8rem; padding: 2px 5px; border-radius: 50%;"> {{ favoritesCount }}
            </span>
          </router-link>
          <!-- Einkaufstaschen-Icon (Warenkorb) -->
          <router-link to="/warenkorb" class="nav-item" style="position: relative;">
            <i class="bi bi-bag" style="font-size: 1.5rem; color: black;"></i>
            <!-- Warenkorb-Zähler -->
            <span
              v-if="cartCount > 0"
              style="position: absolute; top: -5px; right: -10px; background: red; color: white; font-size: 0.8rem; padding: 2px 5px; border-radius: 50%;">
              {{ cartCount }}
            </span>
          </router-link>

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
        <div class="footer-container">
          <!-- Unser Unternehmen -->
          <div class="footer-column">
            <h5>Unser Unternehmen</h5>
            <ul>
              <li><a href="/kontakt">Über uns</a></li>
              <li><a href="/nachhaltigkeit">Nachhaltigkeit</a></li>
              <li><a href="/Lieferantenversprechen">Lieferantenversprechen</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <!-- Hilfe -->
          <div class="footer-column">
            <h5>Hilfe</h5>
            <ul>
              <li><a href="/kundenservice">Kundenservice & Support</a></li>
              <li><a href="/versand">Versandinformationen</a></li>
              <li><a href="/retouren">Retouren</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>

          <!-- Rechtliches -->
          <div class="footer-column">
            <h5>Rechtliches</h5>
            <ul>
              <li><a href="/agb">AGB</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/impressum">Impressum</a></li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
          <p>&copy; 2024 Dein Bangla Shop. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)

const favoritesCount = ref(3) // Bsp.anzahl gesetzt

const cartCount = ref(5) // Beispiel: Anzahl der Artikel im Warenkorb

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
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-rechts {
  display: flex;
  align-items: center;
  gap: 20px; /* Abstand zwischen den Icons */
}

.nav-item i {
  transition: transform 0.2s ease, color 0.2s ease;
}

.nav-item:hover i {
  transform: scale(1.1);
  color: darkred;
}

.nav-item span {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 0.8rem;
  padding: 2px 5px;
  border-radius: 50%;
  font-weight: bold;
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
  justify-content: flex-start; /* Elemente nach links ausrichten */
  align-items: center; /* Vertikal ausrichten */
  padding: 15px 5%;
  max-width: 1200px;
  margin: auto; /* Zentriert die gesamte Navigation */
}

.nav-logo {
  font-size: 1.8rem; /* Größere Schrift für das Logo */
  font-weight: bold;
  color: #137703; /* Hauptfarbe des Logos */
  margin-right: 20px; /* Abstand zwischen Logo und den Kategorien */
}

.nav-links {
  display: flex;
  gap: 20px; /* Abstand zwischen den Links */
  margin-left: 0; /* Entferne Standardabstände */
}

.nav-item {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
}

.nav-item:hover {
  background-color: #f0f0f0;
}

/*.nav-item.router-link-exact-active {
  color: #ffffff;
  background-color: #42b983; !* Hauptfarbe für aktiven Link *!
}*/

/* Hauptinhalt */
.main-content {
  padding-top: calc(80px + env(safe-area-inset-top)); /* Berücksichtigen Sie die Höhe der Navigation und mögliche Safe-Areas auf Mobilgeräten */
  flex-grow:1; /* Ermöglicht dem Hauptinhalt, den verfügbaren Platz einzunehmen */
}

/* Footer */
.footer {
  background-color: #f8f9fa; /* Heller Hintergrund */
  color: #212529; /* Dunkle Schriftfarbe */
  padding: 40px 20px; /* Innenabstand */
  border-top: 1px solid #dee2e6; /* Dezente Trennlinie */
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  gap: 20px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-column h5 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
  font-weight: bold;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-column ul li a:hover {
  color: #42b983; /* Hauptfarbe beim Hover */
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #6c757d;
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
