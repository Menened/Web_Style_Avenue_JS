<template>
  <div class="background-slider">
    <div class="background-slider__container">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="background-slider__slide"
        :class="{ 'active': currentIndex === index }"
        :style="{ backgroundImage: `url(${require('@/assets/img/' + image)})` }"
      ></div>
    </div>
  </div>
  <div class="background-slider__controls">
    <button class="background-slider__arrow background-slider__arrow--left" @click="previousSlide">
      <span class="arrow-icon">❮</span>
    </button>
    <button class="background-slider__arrow background-slider__arrow--right" @click="nextSlide">
      <span class="arrow-icon">❯</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BackgroundSlider',
  data() {
    return {
      currentIndex: 0,
      images: [
        'background.avif',
        'background_2.avif',
        'background_3.avif'
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    previousSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
</script>

<style scoped>
.background-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-slider__container {
  width: 100%;
  height: 100%;
  position: relative;
}

.background-slider__slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.background-slider__slide.active {
  opacity: 1;
}

.background-slider__controls {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.background-slider__arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  pointer-events: auto;
}

.background-slider__arrow:hover {
  background: rgba(255, 255, 255, 0.5);
}

.background-slider__arrow--left {
  left: 20px;
}

.background-slider__arrow--right {
  right: 20px;
}

.arrow-icon {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  user-select: none;
}
</style> 