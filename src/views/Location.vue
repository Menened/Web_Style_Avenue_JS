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
    <main class="main">
      <div class="location_container">
        <h1 class="location_title">LOCATION</h1>
        <div class="location_dots">
          <span class="location_dot"></span>
          <span class="location_dot"></span>
          <span class="location_dot"></span>
        </div>
        <div class="location_content">
          <div class="location_info">
            <div class="location_item">
              <p class="location_item-text">Manhattan, New York, NY, United States</p>
            </div>
            <div class="location_item">
              <a class="location_item-text-link" href="#">+1 234 567 8900</a>
            </div>
            <div class="location_item">
              <a class="location_item-text-link" href="#">info@styleavenue.com</a>
            </div>
            <div class="location_item">
              <p class="location_item-text">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="location_form">
            <div class="form_row">
              <input 
                type="text" 
                class="form_input" 
                placeholder="Name"
                v-model="form.name"
                @input="validateName"
                @blur="validateName"
                required
              >
              <input 
                type="tel" 
                class="form_input" 
                placeholder="Phone"
                v-model="form.phone"
                @input="formatPhone"
                @blur="validatePhone"
                maxlength="19"
                required
              >
            </div>
            <input 
              type="email" 
              class="form_email_input" 
              placeholder="Email"
              v-model="form.email"
              @input="validateEmail"
              @blur="validateEmail"
              required
            >
            <textarea 
              class="form_textarea" 
              placeholder="Message"
              v-model="form.message"
              required
            ></textarea>
            <button type="submit" class="form_button">CONTACT US</button>
          </form>
        </div>
      </div>
    </main>

    <!-- Modal Window -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>Thank you!</h2>
        <p>Your message has been sent successfully.</p>
        <button @click="closeModal" class="modal-button">Close</button>
      </div>
    </div>
  </div>
 <footer class="footer">
		<nav class="footer_nav">
			<li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/store">Store</router-link></li>
      <li><router-link to="/location">Location</router-link></li>
		</nav>
		<p class="footer_text">Copyright &copy; 2025  All rights reserved - Style Avenue</p>
	</footer>
</template>

<script>
import ProfileDropdown from '@/components/ProfileDropdown.vue'

export default {
  name: 'Location',
  components: {
    ProfileDropdown
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      showModal: false,
      isDropdownOpen: false
    }
  },
  methods: {
    handleSubmit(event) {
      // Get the form element
      const form = event.target;
      
      // Check if the form is valid
      if (form.checkValidity()) {
        this.showModal = true;
        this.resetForm();
      } else {
        // Trigger browser's default validation UI
        form.reportValidity();
      }
    },
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        message: ''
      };
    },
    closeModal() {
      this.showModal = false;
    },
    validateName(event) {
      const input = event.target;
      const name = input.value.trim();
      
      // Check if name contains only letters and spaces
      const nameRegex = /^[A-Za-z\s]+$/;
      
      if (name === '') {
        input.setCustomValidity('Name is required');
      } else if (!nameRegex.test(name)) {
        input.setCustomValidity('Name can only contain letters and spaces');
      } else {
        input.setCustomValidity('');
      }
    },
    validatePhone(event) {
      const input = event.target;
      const phone = input.value.trim();
      
      // Remove all non-digit characters to count digits
      const digitsOnly = phone.replace(/\D/g, '');
      
      if (phone === '') {
        input.setCustomValidity('Phone number is required');
      } else if (digitsOnly.length !== 11) {
        input.setCustomValidity('Phone number must contain exactly 11 digits');
      } else {
        input.setCustomValidity('');
      }
    },
    validateEmail(event) {
      const input = event.target;
      const email = input.value.trim();
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (email === '') {
        input.setCustomValidity('Email is required');
      } else if (!emailRegex.test(email)) {
        input.setCustomValidity('Please enter a valid email address');
      } else {
        input.setCustomValidity('');
      }
    },
    formatPhone(event) {
      const input = event.target;
      let phone = input.value.replace(/\D/g, '');
      
      // Limit to 11 digits
      if (phone.length > 11) {
        phone = phone.substring(0, 11);
      }
      
      // Format +Y (ABC) XXX-XX-XX
      let formatted = '';
      if (phone.length > 0) {
        formatted = '+' + phone.substring(0, 1); 
        if (phone.length > 1) {
          formatted += ' (' + phone.substring(1, 4); // Region code
          if (phone.length > 4) {
            formatted += ') ' + phone.substring(4, 7); // First part of local number
            if (phone.length > 7) {
              formatted += '-' + phone.substring(7, 9); // Second part
              if (phone.length > 9) {
                formatted += '-' + phone.substring(9, 11); // Last part
              }
            }
          }
        }
      }
      
      input.value = formatted;
      this.form.phone = formatted;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.modal-content h2 {
  color: #542B0D;
  margin-bottom: 1rem;
}

.modal-content p {
  margin-bottom: 1.5rem;
}

.modal-button {
  background-color: #D87830;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
}

.modal-button:hover {
  background-color: #C66A25;
}

.form_input_wrapper {
  position: relative;
  width: 100%;
}

.form_errors {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.header__button {
  cursor: pointer;
}

.header__profile-container {
  position: relative;
}
</style> 