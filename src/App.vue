<template>
  <div class="app">
    <nav class="modern-nav">
      <div class="nav-container">
        <!-- Logo -->
        <router-link to="/" class="nav-logo">Bangla Shop</router-link>

        <!-- Kategorien: Direkt rechts neben dem Logo -->
        <div class="nav-links">
          <router-link to="/damen" class="nav-item">Damen</router-link>
          <router-link to="/herren" class="nav-item">Herren</router-link>
          <router-link to="/kontakt" class="nav-item">Accessoires</router-link>
        </div>

        <!-- Icons: Ganz rechts -->
        <div class="nav-rechts">
          <router-link to="/likes" class="nav-item" style="position: relative;">
            <i class="bi bi-heart" style="font-size: 1.5rem; color: red;"></i>
            <span
              v-if="favoritesCount > 0"
              style="position: absolute; top: -5px; right: -10px; background: red; color: white; font-size: 0.8rem; padding: 2px 5px; border-radius: 50%;">
              {{ favoritesCount }}
            </span>
          </router-link>

          <router-link to="/warenkorb" class="nav-item" style="position: relative;">
            <i class="bi bi-bag" style="font-size: 1.5rem; color: var(--text-color);"></i>
            <span
              v-if="cartCount > 0"
              style="position: absolute; top: -5px; right: -10px; background: red; color: white; font-size: 0.8rem; padding: 2px 5px; border-radius: 50%;">
              {{ cartCount }}
            </span>
          </router-link>

          <button class="btn theme-toggle" @click="toggleDarkMode">
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>

          <!-- Login-Button -->
          <router-link to="/login" class="btn btn-primary nav-item">
            Login
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
                <li><router-link to="/kontakt" @click="closeMenu">Accessoires (About)</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
      <section class="newsletter">
        <h2>Newsletter abonnieren</h2>
        <p>Erhalten Sie die neuesten Angebote und Trends direkt in Ihren Posteingang</p>
        <form @submit.prevent="subscribeNewsletter">
          <input type="email" v-model="email" placeholder="Ihre E-Mail-Adresse" required>
          <button type="submit">Abonnieren</button>
        </form>
      </section>
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

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.setAttribute(
    'data-theme',
    isDarkMode.value ? 'dark' : 'light'
  )
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

const email = ref('')

const subscribeNewsletter = () => {
  // Hier würde die Logik für das Newsletter-Abonnement implementiert werden
  console.log('Newsletter abonniert mit:', email.value)
  email.value = ''
}

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

.rotate {
  transition: transform 0.3s ease;
  transform: rotate(90deg);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.theme-toggle:hover .fas.fa-moon {
  background: none; /* Mond bleibt ungefüllt beim Hover */
  color: var(--link-hover-color); /* Mondfarbe wechselt beim Hover */
}
.theme-toggle:hover .fas.fa-sun {
  background: none; /* Mond bleibt ungefüllt beim Hover */
  color: var(--link-hover-color); /* Mondfarbe wechselt beim Hover */
}

.offcanvas {
  background-color: var(--nav-bg-color); /* Hintergrundfarbe passend zum Darkmode */
  color: var(--text-color); /* Textfarbe */
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

/* Standard-Button-Stile */
.btn-primary {
  background-color: transparent; /* Grüner Hintergrund */
  color: #42b983; /* Weißer Text */
  border: none;
  border-radius: 0; /* Abgerundete Ecken */
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

/* Hover-Effekt */
.btn-primary:hover {
  background-color: transparent;
  color: var(--bg-color); /* Text wird grün */
}

/* Standardfarbe des Menü-Icons */
.btn-primary i {
  color: var(--text-color); /* Textfarbe des Icons */
  font-size: 1.5rem; /* Größe des Icons */
  transition: color 0.3s ease; /* Sanfter Übergang beim Hover */
}

/* Hover-Effekt für das Menü-Icon */
.btn-primary:hover i {
  color: var(--link-hover-color); /* Farbe beim Hover (grün im Darkmode) */
}

/* farbige Reaktion beim Rübergehen mit der Maus, funktioniert aber nicht */
.nav-item:hover .bi-heart {
  color: red;
}

/* farbige Reaktion beim Rübergehen mit der Maus, funktioniert aber nicht */
.nav-item:hover .bi-bag{
  color: var(--text-color)
}

.nav-item i {
  transition: transform 0.2s ease, color 0.2s ease;
}

.nav-item:hover i {
  transform: scale(1.1);
  color: darkred;
}

.nav-item span {
  position: relative;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 0.8rem;
  padding: 2px 5px;
  border-radius: 50%;
  font-weight: bold;
}

/* Navigationsbar */
.modern-nav {
  background-color: var(--nav-bg-color);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 80px;
  transition: background-color 0.3s ease;
}

.nav-container {
  display: flex;
  justify-content: space-between; /* Elemente nach links ausrichten */
  align-items: center; /* Vertikal ausrichten */
  padding: 15px 5%;
  max-width: 1200px;
  margin: auto; /* Zentriert die gesamte Navigation */
}

.nav-logo {
  font-size: 1.8rem; /* Größere Schrift für das Logo */
  font-weight: bold;
  color: var(--text-color); /* Hauptfarbe des Logos */
  margin-right: 20px; /* Abstand zwischen Logo und den Kategorien */
}

.nav-rechts {
  display: flex;
  justify-content: flex-end; /* Icons nach rechts ausrichten */
  align-items: center;
  gap: 20px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px; /* Abstand zwischen den Links */
  /*
  margin-left: 0; !* Entferne Standardabstände *!
  */
}

.nav-item.router-link-exact-active {
  color: var(--link-hover-color);
}

.nav-item {
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--link-hover-color);
}

.icon {
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
}

.icon:hover {
  color: #42b983;
}

/* Hauptinhalt */
.main-content {
  padding-top: calc(80px + env(safe-area-inset-top)); /* Berücksichtigen Sie die Höhe der Navigation und mögliche Safe-Areas auf Mobilgeräten */
  //flex-grow:1; /* Ermöglicht dem Hauptinhalt, den verfügbaren Platz einzunehmen */
}

.newsletter {
  background-color: var(--footer-bg-color);
  padding: 40px;
  text-align: center;
  color: var(--text-color); /* Textfarbe anpassen */
}

.newsletter form {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.newsletter input[type="email"] {
  padding: 10px;
  width: 300px;
  border: 1px solid var(--text-color);
  background-color: var(--bg-color); /* Hintergrund passend zum Design */
  color: var(--text-color); /* Textfarbe anpassen */
  border-radius: 5px; /* Abgerundete Ecken */
}

.newsletter input[type="email"]::placeholder {
  color: var(--text-color); /* Platzhalter-Farbe für Darkmode */
}

.newsletter button {
  padding: 10px 20px;
  background-color: var(--link-hover-color);
  color: var(--bg-color);
  border: none;
  cursor: pointer;
  border-radius: 5px; /* Abgerundete Ecken */
}

 .newsletter button:hover {
  background-color: #2f986e; /* Hover-Farbe */
  color: var(--bg-color);  /* Textfarbe beim Hover */
 }

/* Footer */
.footer {
  background-color: var(--footer-bg-color); /* Heller Hintergrund */
  color: var(--link-hover-color); /* Dunkle Schriftfarbe */
  padding: 40px 20px; /* Innenabstand */
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Dezente Trennlinie */
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
  color: var(--text-color);
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
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-column ul li a:hover {
  color: var(--link-hover-color); /* Hauptfarbe beim Hover */
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
}

.login-container h1 {
  font-size: 1.5rem; /* Überschrift skalieren */
  text-align: center; /* Zentrierte Ausrichtung */
}

html {
  font-size: 16px; /* Standard für größere Bildschirme */
}

/* Responsive Design */
@media (max-width: 768px) {

  html {
      font-size: 14px; /* Kleinere Schriftgröße für mobile Geräte */
  }

  .modern-nav {
    position: relative;
    height: 100px; /* Navigation höher auf mobilen Geräten */
  }

  .nav-container {
    flex-direction: column; /* Vertikale Anordnung auf kleinen Bildschirmen */
    padding:10px;
    justify-content: space-between;
    align-items:center; /* Links ausrichten auf kleinen Bildschirmen */
    gap:10px; /* Abstand zwischen Logo und Links erhöhen */
    max-width: 100%;
  }

  .nav-links {
    margin-top:10px;
    justify-content:flex-start;
  }

  .nav-rechts {
    display: flex;
    justify-content: flex-end; /* Icons nach rechts ausrichten */
    align-items: center;
    gap: 20px;
  }

  .main-content {
    padding-top: calc(120px + env(safe-area-inset-top)); /* Anpassen des oberen Abstands auf kleinen Bildschirmen */
  }

  .login-container {
    padding: 10px; /* Weniger Abstand bei kleineren Bildschirmen */
  }

  .login-container h1 {
    font-size: 1.2rem; /* Kleinere Schriftgröße für Überschriften */
  }

}
</style>
