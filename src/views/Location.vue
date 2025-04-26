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
              <img src="/img/cart.png" alt="Cart" class="header__icon">
            </a>
            <a class="header__button">
              <img src="/img/profile.png" alt="Profile" class="header__icon">
            </a>
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
                :class="{ 'error': nameError }"
                required
              >
              <span v-if="nameError" class="error-message">{{ nameError }}</span>
              <input 
                type="tel" 
                class="form_input" 
                placeholder="Phone"
                v-model="form.phone"
                @input="formatPhone"
                :class="{ 'error': phoneError }"
                required
              >
              <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
            </div>
            <input 
              type="email" 
              class="form_email_input" 
              placeholder="Email"
              v-model="form.email"
              @input="validateEmail"
              :class="{ 'error': emailError }"
              required
            >
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
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
      <li><router-link to="/store">STORE</router-link></li>
      <li><router-link to="/location">Location</router-link></li>
		</nav>
		<p class="footer_text">Copyright &copy; 2025  All rights reserved - Style Avenue</p>
	</footer>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      nameError: '',
      phoneError: '',
      emailError: '',
      showModal: false
    }
  },
  methods: {
    validateName() {
      const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
      if (!nameRegex.test(this.form.name)) {
        this.nameError = 'Name should contain only letters and spaces';
      } else {
        this.nameError = '';
      }
    },
    formatPhone() {
      // Get the current value without formatting
      let value = this.form.phone.replace(/\D/g, '');
      
      // If the value is empty, clear the field
      if (!value) {
        this.form.phone = '';
        this.phoneError = '';
        return;
      }
      
      // Format the phone number
      let formatted = value.substring(0, 1);
      if (value.length > 1) {
        formatted += ' (' + value.substring(1, 4);
      }
      if (value.length > 4) {
        formatted += ') ' + value.substring(4, 7);
      }
      if (value.length > 7) {
        formatted += '-' + value.substring(7, 9);
      }
      if (value.length > 9) {
        formatted += '-' + value.substring(9, 11);
      }
      
      // Update the phone number
      this.form.phone = formatted;
      
      // Validate phone number
      const phoneRegex = /^\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (value.length > 0 && !phoneRegex.test(this.form.phone)) {
        this.phoneError = 'Please enter a valid phone number';
      } else {
        this.phoneError = '';
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.emailError = 'Please enter a valid email address';
      } else {
        this.emailError = '';
      }
    },
    handleSubmit() {
      // Validate all fields
      this.validateName();
      this.formatPhone();
      this.validateEmail();

      // Check if there are any errors
      if (this.nameError || this.phoneError || this.emailError) {
        return;
      }

      // If all validations pass, show the modal
      this.showModal = true;
      
      // Reset the form
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        message: ''
      };
      this.nameError = '';
      this.phoneError = '';
      this.emailError = '';
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.error {
  border-color: red !important;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
  display: block;
}

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
</style> 