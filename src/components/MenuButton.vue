<template>
  <!-- noch nicht eingebettet -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Add a new Foodspot!</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="create-foodspot" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label"> Name </label>
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
</template>
