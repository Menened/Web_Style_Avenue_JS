<template>
  <div class="profile-dropdown" v-if="isOpen">
    <div class="profile-dropdown__content">
      <div class="profile-dropdown__header">
        <h3 class="profile-dropdown__title">Profile</h3>
        <button class="profile-dropdown__close" @click="closeDropdown">×</button>
      </div>
      <nav class="profile-dropdown__nav">
        <ul class="profile-dropdown__list">
          <li><a href="#" class="profile-dropdown__link">My Account</a></li>
          <li><a href="#" class="profile-dropdown__link">Orders</a></li>
          <li><a href="#" class="profile-dropdown__link">Wishlist</a></li>
          <li><a href="#" class="profile-dropdown__link">Settings</a></li>
          <li><a href="#" class="profile-dropdown__link">Help</a></li>
          <li><a href="#" class="profile-dropdown__link profile-dropdown__link--logout">Logout</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDropdown',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDropdown() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.profile-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  margin-top: 10px;
}

.profile-dropdown__content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  overflow: hidden;
  animation: dropdownFadeIn 0.2s ease-out;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-dropdown__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f8f9fa;
}

.profile-dropdown__title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.profile-dropdown__close {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 1.2rem;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}

.profile-dropdown__close:hover {
  color: #333;
}

.profile-dropdown__nav {
  padding: 10px 0;
}

.profile-dropdown__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.profile-dropdown__link {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: background-color 0.2s, color 0.2s;
}

.profile-dropdown__link:hover {
  background-color: #f8f9fa;
  color: #D87830;
}

.profile-dropdown__link--logout {
  border-top: 1px solid #e5e5e5;
  color: #dc3545;
}

.profile-dropdown__link--logout:hover {
  background-color: #dc3545;
  color: #fff;
}
</style> 