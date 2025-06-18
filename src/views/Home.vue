<template>
  <div class="body">
    <BackgroundSlider />
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
              <img src="@/assets/img/cart.png" alt="Cart" class="header__icon">
            </a>
            <div class="header__profile-container">
              <a class="header__button" @click="toggleDropdown">
                <img src="@/assets/img/profile.png" alt="Profile" class="header__icon">
              </a>
              <ProfileDropdown :isOpen="isDropdownOpen" @close="closeDropdown" />
            </div>
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
  </div>
</template>

<script>
import ProfileDropdown from '@/components/ProfileDropdown.vue'
import BackgroundSlider from '@/components/BackgroundSlider.vue'

export default {
  name: 'Home',
  components: {
    ProfileDropdown,
    BackgroundSlider
  },
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    closeDropdown() {
      this.isDropdownOpen = false
    }
  }
}
</script>

<style scoped>
.header__button {
  cursor: pointer;
}

.header__profile-container {
  position: relative;
}
</style> 