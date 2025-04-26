<template>
  <div class="body">
    <header class="header">
      <div class="header_container">
        <h1 class="header_logo">Style Avenue</h1>
        <div class="header__right">
          <nav class="header_nav">
            <ul class="header__list">
              <li><router-link to="/">HOME</router-link></li>
              <li><router-link to="/about">ABOUT</router-link></li>
              <li><router-link to="/store">STORE</router-link></li>
              <li><router-link to="/location">LOCATION</router-link></li>
            </ul>
          </nav>
          <div class="header__actions">
            <a class="header__button">
              <img src="/img/cart.png" alt="Cart" class="header__icon">
            </a>
            <a class="header__button" @click="toggleSlider">
              <img src="/img/profile.png" alt="Profile" class="header__icon">
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="box">
        <div class="box__content">
          <h2 class="box__title">Unleash Your Style</h2>
          <div class="box__line"></div>
          <p class="box__text">Shop the Hottest Trends</p>
        </div>
      </div>
    </main>
    <HeaderSlider :isOpen="isSliderOpen" @close="closeSlider" />
  </div>
</template>

<script>
import HeaderSlider from '@/components/HeaderSlider.vue'

export default {
  name: 'Home',
  components: {
    HeaderSlider
  },
  data() {
    return {
      isSliderOpen: false
    }
  },
  methods: {
    toggleSlider() {
      this.isSliderOpen = !this.isSliderOpen
    },
    closeSlider() {
      this.isSliderOpen = false
    }
  }
}
</script>

<style scoped>
.header__button {
  cursor: pointer;
}
</style> 