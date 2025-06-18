<template>
  <div class="body_profile">
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
    <main class="about_main">
      <div class="about_container">
        <h1 class="about_title">ABOUT</h1>
        <div class="location_dots">
          <span class="location_dot"></span>
          <span class="location_dot"></span>
          <span class="location_dot"></span>
        </div>
        <table class="table">
          <tbody>
            <tr class="table_row">
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td rowspan="5" class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
            <tr class="table_row">
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
            <tr class="table_row">
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
            <tr class="table_row">
              <td rowspan="2" class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
            <tr class="table_row">
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
            <tr class="table_row">
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
            <tr class="table_row">
              <td class="table_cell"></td>
              <td class="table_cell"></td>
              <td colspan="2" class="table_cell"></td>
              <td class="table_cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
  <footer class="footer">
		<nav class="footer_nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Store">Store</router-link></li>
        <li><router-link to="/location">Location</router-link></li>
		</nav>
		<p class="footer_text">Copyright &copy; 2025  All rights reserved - Style Avenue</p>
	</footer>
</template>

<script>
import ProfileDropdown from '@/components/ProfileDropdown.vue'

export default {
  name: 'About',
  components: {
    ProfileDropdown
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