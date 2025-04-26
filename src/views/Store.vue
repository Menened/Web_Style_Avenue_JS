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
      <div class="store_container">
        <h1 class="store_title">SPACE QUIZ</h1>
        <div class="location_dots">
          <span class="location_dot"></span>
          <span class="location_dot"></span>
          <span class="location_dot"></span>
        </div>
        
        <!-- Progress Indicator -->
        <div class="progress_container" v-if="!showResults">
          <div class="progress_bar">
            <div class="progress_fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
          <p class="progress_text">Question {{ currentQuestionIndex + 1 }} of {{ questions.length}}</p>
        </div>

        <!-- Quiz Form -->
        <form @submit.prevent="handleNext" class="quiz_form" v-if="!showResults">
          <div class="quiz_question">
            <h3 class="question_text">{{ currentQuestion.text }}</h3>
            
            <!-- Error message display -->
            <div v-if="errorMessage" class="error_message">
              {{ errorMessage }}
            </div>
            
            <!-- Name input for first question -->
            <input 
              v-if="currentQuestionIndex === 0"
              type="text"
              class="form_input"
              v-model="answers[currentQuestionIndex]"
              required
            >
            
            <!-- Number input for equation question -->
            <input 
              v-else-if="currentQuestion.type === 'number'"
              type="number"
              class="form_input"
              v-model="answers[currentQuestionIndex]"
              required
            >
            
            <!-- Text input for galaxy name question -->
            <input 
              v-else-if="currentQuestion.type === 'text'"
              type="text"
              class="form_input"
              v-model="answers[currentQuestionIndex]"
              :class="{ 'input_error': errorMessage }"
              required
            >
            
            <!-- Checkbox options for multiple choice question -->
            <div v-else-if="currentQuestion.type === 'checkbox'" class="options_container">
              <label v-for="(option, optIndex) in currentQuestion.options" :key="optIndex" class="option_label">
                <input 
                  type="checkbox"
                  :value="option"
                  v-model="answers[currentQuestionIndex]"
                >
                {{ option }}
              </label>
            </div>
            
            <!-- Radio buttons for other questions -->
            <div v-else class="options_container">
              <label v-for="(option, optIndex) in currentQuestion.options" :key="optIndex" class="option_label">
                <input 
                  type="radio"
                  :name="'question' + currentQuestionIndex"
                  :value="option"
                  v-model="answers[currentQuestionIndex]"
                  required
                >
                {{ option }}
              </label>
            </div>
          </div>
          <div class="button_container">
            <button 
              v-if="currentQuestionIndex > 0" 
              @click="handlePrevious" 
              type="button" 
              class="form_button secondary"
            >
              Previous
            </button>
            <button 
              type="submit" 
              class="form_button"
            >
              {{ isLastQuestion ? 'Submit Quiz' : 'Next' }}
            </button>
          </div>
        </form>

        <!-- Results Section -->
        <div v-if="showResults" class="results_container">
          <h2 class="results_title">Quiz Results</h2>
          <p class="results_text">Name: {{ answers[0] }}</p>
          <p class="results_text">Your Score: {{ score }}/14</p>
          <button @click="resetQuiz" class="form_button">Try Again</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Store',
  data() {
    return {
      currentQuestionIndex: 0,
      answers: Array(15).fill('').map((_, index) => {
        if (index === 4) {
          return [];
        }
        return '';
      }),
      showResults: false,
      score: 0,
      errorMessage: '',
      questions: [
        {
          text: "Your name:",
          options: []
        },
        {
          text: "Which planet would you most like to visit?",
          options: ["Mars", "Jupiter", "Saturn", "Venus"],
          correct: "Mars"
        },
        {
          text: "What's your favorite space phenomenon?",
          options: ["Black Holes", "Nebulas", "Supernovas", "Asteroid Belts"],
          correct: "Nebulas"
        },
        {
          text: "Solve the equation: 2x + 5 = 15. What is the value of x?",
          type: "number",
          correct: "5"
        },
        {
          text: "Which of these are gas giants? (Select all that apply)",
          options: ["Jupiter", "Saturn", "Mars", "Uranus", "Neptune"],
          type: "checkbox",
          correct: ["Jupiter", "Saturn", "Uranus", "Neptune"]
        },
        {
          text: "What is the name of our galaxy?",
          type: "text",
          correct: "Milky Way"
        },
        {
          text: "What space technology interests you most?",
          options: ["Telescopes", "Rovers", "Satellites", "Space Suits"],
          correct: "Telescopes"
        },
        {
          text: "Which space mission fascinates you the most?",
          options: ["Apollo 11", "Voyager", "Hubble Telescope", "International Space Station"],
          correct: "Apollo 11"
        },
        {
          text: "Which constellation is your favorite?",
          options: ["Orion", "Ursa Major", "Cassiopeia", "Scorpius"],
          correct: "Orion"
        },
        {
          text: "Which space discovery excites you most?",
          options: ["Exoplanets", "Water on Mars", "Black Hole Images", "Dark Matter"],
          correct: "Exoplanets"
        },
        {
          text: "What space phenomenon would you like to witness?",
          options: ["Solar Eclipse", "Meteor Shower", "Aurora", "Super Moon"],
          correct: "Aurora"
        },
        {
          text: "Which space scientist inspires you most?",
          options: ["Carl Sagan", "Neil deGrasse Tyson", "Stephen Hawking", "Galileo Galilei"],
          correct: "Carl Sagan"
        },
        {
          text: "What's your preferred space exploration method?",
          options: ["Manned Missions", "Robotic Probes", "Telescopes", "Satellites"],
          correct: "Manned Missions"
        },
        {
          text: "Which space mystery intrigues you most?",
          options: ["Dark Matter", "Alien Life", "Wormholes", "Time Travel"],
          correct: "Alien Life"
        },
        {
          text: "What's your favorite space movie?",
          options: ["Interstellar", "Gravity", "The Martian", "Apollo 13"],
          correct: "Interstellar"
        }
      ]
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1;
    },
    progressPercentage() {
      return ((this.currentQuestionIndex) / (this.questions.length - 1)) * 100;
    }
  },
  methods: {
    handleNext() {
      if (!this.validateCurrentQuestion()) {
        return;
      }
      if (this.isLastQuestion) {
        this.submitQuiz();
      } else {
        this.currentQuestionIndex++;
      }
    },
    validateCurrentQuestion() {
      const question = this.currentQuestion;
      const answer = this.answers[this.currentQuestionIndex];
      this.errorMessage = ''; // Reset error message

      if (question.type === 'number') {
        if (!answer || isNaN(answer)) {
          this.errorMessage = 'Please enter a valid number';
          return false;
        }
        return true;
      }

      if (question.type === 'text') {
        if (!answer || answer.trim() === '') {
          this.errorMessage = 'Please enter a valid answer';
          return false;
        }
        // Check for multiple spaces in the answer
        if (answer.split(' ').length > 2) {
          this.errorMessage = 'Answer should contain only one space';
          return false;
        }
        return true;
      }

      if (question.type === 'checkbox') {
        if (!answer || answer.length === 0) {
          this.errorMessage = 'Please select at least one option';
          return false;
        }
        return true;
      }

      return true;
    },
    handlePrevious() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    submitQuiz() {
      this.score = 0;
      // Start from index 1 because index 0 is the name
      for (let i = 1; i < this.questions.length; i++) {
        const question = this.questions[i];
        const answer = this.answers[i];

        if (question.type === 'checkbox') {
          // For checkbox questions, check if all correct answers are selected
          const isCorrect = question.correct.every(correctAnswer => 
            answer.includes(correctAnswer)
          ) && answer.length === question.correct.length;
          if (isCorrect) {
            this.score++;
          }
        } else {
          // For other question types, check exact match
          if (answer === question.correct) {
            this.score++;
          }
        }
      }
      this.showResults = true;
    },
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.answers = Array(15).fill('').map((_, index) => {
        if (index === 4) {
          return [];
        }
        return '';
      });
      this.showResults = false;
      this.score = 0;
    }
  }
}
</script>

<style scoped>
.store_container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.store_title {
  font-family: 'Arvo Regular', sans-serif;
  font-size: 2rem;
  color: #000000;
  text-align: center;
  margin-bottom: 1rem;
}

.progress_container {
  margin-bottom: 2rem;
}

.progress_bar {
  width: 100%;
  height: 10px;
  background-color: #F7E3D4;
  border-radius: 5px;
  overflow: hidden;
}

.progress_fill {
  height: 100%;
  background-color: #D87830;
  transition: width 0.3s ease;
}

.progress_text {
  text-align: center;
  margin-top: 0.5rem;
  font-family: 'Arial', sans-serif;
  color: #542B0D;
}

.quiz_form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quiz_question {
  background-color: #F7E3D4;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
}

.question_text {
  font-family: 'Arvo Regular', sans-serif;
  color: #542B0D;
  margin-bottom: 1rem;
}

.options_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.option_label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.option_label:hover {
  background-color: rgba(216, 120, 48, 0.1);
}

.option_label input[type="radio"],
.option_label input[type="checkbox"] {
  margin: 0;
  width: 1.2rem;
  height: 1.2rem;
}

.button_container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.form_button {
  background-color: #D87830;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
}

.form_button.secondary {
  background-color: #F7E3D4;
  color: #542B0D;
}

.form_button:hover {
  background-color: #C66A25;
}

.form_button.secondary:hover {
  background-color: #E6D1C2;
}

.form_input {
  width: 80%;
  max-width: 300px;
  padding: 0.8rem;
  border: 1px solid #D87830;
  border-radius: 4px;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  margin: 0 auto;
  display: block;
}

.form_input:focus {
  outline: none;
  border-color: #C66A25;
  box-shadow: 0 0 0 2px rgba(216, 120, 48, 0.2);
}

.results_container {
  background-color: #F7E3D4;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.results_title {
  font-family: 'Arvo Regular', sans-serif;
  color: #542B0D;
  margin-bottom: 1rem;
}

.results_text {
  font-family: 'Arial', sans-serif;
  color: #542B0D;
  margin-bottom: 0.5rem;
}

.error_message {
  color: #D87830;
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(216, 120, 48, 0.1);
  border-radius: 4px;
  border-left: 3px solid #D87830;
}

.input_error {
  border-color: #D87830;
  background-color: rgba(216, 120, 48, 0.05);
}
</style> 