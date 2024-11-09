<template>
  <div class="warenkorb">
    <main class="main-content">
      <section v-if="cartIsEmpty" class="empty-cart">
        <h1>Ihr Warenkorb ist leer</h1>
        <p>Stöbern Sie durch unsere Kategorien und fügen Sie Produkte hinzu.</p>
      </section>

      <section v-else>
        <h2>Warenkorb Produkte</h2>
        <!-- Hier könnten Warenkorb-Items aufgelistet werden -->
      </section>

      <section v-if="cartIsEmpty" class="featured-products">
        <h2>Empfohlene Produkte</h2>
        <div class="product-grid">
          <div class="product-card" v-for="product in featuredProducts" :key="product.id">
            <img :src="product.image" :alt="product.name" class="product-image">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }} €</p>
          </div>
        </div>
      </section>

      <section v-if="cartIsEmpty" class="categories">
        <h2>Kategorien</h2>
        <div class="category-grid">
          <div class="category-card" v-for="category in categories" :key="category.id">
            <img :src="category.image" :alt="category.name" class="category-image">
            <h3>{{ category.name }}</h3>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Beispielhafte Produkte und Kategorien
const featuredProducts = ref([
  { id: 1, name: 'Sommerkleid', price: 49.99, image: 'https://via.placeholder.com/200x250?text=Sommerkleid' },
  { id: 2, name: 'Jeansjacke', price: 79.99, image: 'https://via.placeholder.com/200x250?text=Jeansjacke' },
  { id: 3, name: 'Sneakers', price: 89.99, image: 'https://via.placeholder.com/200x250?text=Sneakers' },
  { id: 4, name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/200x250?text=T-Shirt' }
])

const categories = ref([
  { id: 1, name: 'Damen', image: 'https://via.placeholder.com/300x200?text=Damen' },
  { id: 2, name: 'Herren', image: 'https://via.placeholder.com/300x200?text=Herren' },
  { id: 3, name: 'Accessoires', image: 'https://via.placeholder.com/300x200?text=Accessoires' }
])

// Logik für leeren Warenkorb
const cartIsEmpty = ref(true)
</script>

<style>
/* Stil für leere Warenkorbseite */
.empty-cart {
  text-align: center;
  padding: 50px 0;
}

.empty-cart h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #666;
}
</style>
