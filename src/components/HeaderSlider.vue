<template>
  <div class="header-slider" :class="{ 'active': isOpen }">
    <div class="header-slider__header">
      <button class="header-slider__close" @click="closeSlider">×</button>
    </div>
    <nav class="header-slider__nav">
      <ul class="header-slider__list">
        <li><router-link to="/" @click="closeSlider">HOME</router-link></li>
        <li><router-link to="/about" @click="closeSlider">ABOUT</router-link></li>
        <li><router-link to="/store" @click="closeSlider">STORE</router-link></li>
        <li><router-link to="/location" @click="closeSlider">LOCATION</router-link></li>
      </ul>
    </nav>
    <div class="header-slider__actions">
      <a class="header-slider__button">
        <img src="/img/cart.png" alt="Cart" class="header-slider__icon">
      </a>
      <a class="header-slider__button">
        <img src="/img/profile.png" alt="Profile" class="header-slider__icon">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSlider',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeSlider() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.header-slider {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: #D87830;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  visibility: hidden;
}

.header-slider.active {
  right: 0;
  visibility: visible;
}

.header-slider__header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.header-slider__close {
  background: none;
  border: none;
  cursor: pointer;
  color: #F7E3D4;
  font-size: 2rem;
  padding: 0;
  line-height: 1;
}

.header-slider__nav {
  margin-bottom: 20px;
}

.header-slider__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header-slider__list a {
  text-decoration: none;
  color: #F7E3D4;
  font-family: 'Arial', sans-serif;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.header-slider__list a:hover {
  color: #FFF;
}

.header-slider__actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.header-slider__button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-slider__icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}
</style> 