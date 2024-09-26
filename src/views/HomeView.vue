<template>
  <div class="home">
    <main class="main-content">
      <section class="hero">
        <h1>Willkommen bei Dein Bangla Shop</h1>
        <p>Entdecken Sie die neuesten Modetrends</p>
      </section>

      <section class="featured-products">
        <h2>Ausgewählte Produkte</h2>
        <div class="product-grid">
          <div class="product-card" v-for="product in featuredProducts" :key="product.id">
            <img :src="product.image" :alt="product.name" class="product-image">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }} €</p>
            <button class="add-to-cart">In den Warenkorb</button>
          </div>
        </div>
      </section>

      <section class="categories">
        <h2>Kategorien</h2>
        <div class="category-grid">
          <div class="category-card" v-for="category in categories" :key="category.id">
            <img :src="category.image" :alt="category.name" class="category-image">
            <h3>{{ category.name }}</h3>
          </div>
        </div>
      </section>

      <section class="newsletter">
        <h2>Newsletter abonnieren</h2>
        <p>Erhalten Sie die neuesten Angebote und Trends direkt in Ihren Posteingang</p>
        <form @submit.prevent="subscribeNewsletter">
          <input type="email" v-model="email" placeholder="Ihre E-Mail-Adresse" required>
          <button type="submit">Abonnieren</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

const email = ref('')

const subscribeNewsletter = () => {
  // Hier würde die Logik für das Newsletter-Abonnement implementiert werden
  console.log('Newsletter abonniert mit:', email.value)
  email.value = ''
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

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
  margin: 0 auto;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item:hover {
  background-color: #f0f0f0;
}

.nav-item.router-link-exact-active {
  color: #ffffff;
  background-color: #42b983;
}

.main-content {
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px;
}

.hero {
  text-align: center;
  padding: 50px 0;
  background-color: #f8f8f8;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.featured-products, .categories {
  margin-bottom: 40px;
}

.product-grid, .category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card, .category-card {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.product-card:hover, .category-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.product-image, .category-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.add-to-cart {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #3aa876;
}

.newsletter {
  background-color: #f8f8f8;
  padding: 40px;
  text-align: center;
}

.newsletter form {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.newsletter input[type="email"] {
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
}

.newsletter button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 10px;
  }

  .nav-links {
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-item {
    margin: 5px;
  }

  .main-content {
    padding-top: 120px;
  }

  .product-grid, .category-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .newsletter form {
    flex-direction: column;
    align-items: center;
  }

  .newsletter input[type="email"] {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
