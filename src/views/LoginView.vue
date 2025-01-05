<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Passwort</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
  <div class="register-container">
    <p>Noch kein Konto? Kein Problem, hier klicken:</p>
  <!-- offcanvas toggle bottom -->
    <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Registieren</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form class="text-start needs-validation" id="create-foodspot" novalidate>
          <div class="mb-3">
            <label for="name" class="form-label"> Vorname </label>
            <input type="text" class="form-control" id="name" v-model="name" required>
            <div class="invalid feedback">
            </div>
          </div>
          <div class="mb-3">
              <label for="name" class="form-label"> Nachname </label>
              <input type="text" class="form-control" id="name" v-model="name" required>
              <div class="invalid feedback">
                Please provide the name of the restaurant.
              </div>
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Kategorie</label>
            <select id="category" class="form-select" v-model="category" required>
              <option value="" selected disabled>Choose...</option>
              <option value="fast food">fast food</option>
              <option value="asiatische Küche">asiatische Küche</option>
              <option value="französische Küche">französische Küche</option>
              <option value="japanische Küche">japanische Küche</option>
              <option value="orientalische Küche">orientalische Küche</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid category.
            </div>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="address" v-model="address" required>
            <div class="invalid-feedback">
              Please provide the address.
            </div>
          </div>
          <div class="mb-3">
            <label for="website" class="form-label">Webseite</label>
            <input type="text" class="form-control" id="website" v-model="website" required>
            <div class="invalid-feedback">
              Please provide the hyperlink of the website.
            </div>
          </div>
          <div class="mb-3">
            <label for="rating" class="form-label">Bewertung</label>
            <input type="text" class="form-control" id="rating" v-model="rating" required>
            <div class="invalid-feedback">
              Please provide the rating.
            </div>
          </div>
          <div class="mt-5">
            <button type="submit" class="btn btn-primary" @click.prevent="createFoodSpot"> Create</button>
            <button type="reset" class="btn btn-danger" >Reset</button>
          </div>
        </form>

      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin () {
  // Login-Logik hier einfügen
  console.log('Login attempted:', email.value, password.value)
}
</script>

<style scoped>

.offcanvas{
  background-color: var(--nav-bg-color); /* Hintergrundfarbe passend zum Darkmode */
  color: var(--text-color); /* Textfarbe */
}

/* Eingabefelder (Light- und Darkmode-Kompatibilität) */
input[type="text"],
input[type="password"],
input[type="email"],
select,
textarea {
  background-color: var(--bg-color); /* Hintergrundfarbe passend zum Modus */
  color: var(--text-color); /* Textfarbe passend zum Modus */
  border: 1px solid var(--text-color); /* Randfarbe */
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Platzhalterfarbe anpassen */
input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.6); /* Heller für Darkmode */
  transition: color 0.3s ease;
}

/* Eingabefelder im Fokus */
input:focus,
select:focus,
textarea:focus {
  border-color: var(--link-hover-color); /* Fokusfarbe */
  outline: none; /* Entfernt den Standard-Fokusrahmen */
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
