class Slider {
    constructor() {
        this.slider = document.querySelector('.profile-slider');
        this.profileButton = document.querySelector('.header__actions a:last-child');
        this.closeButton = document.querySelector('.profile-slider__close');
        
        this.init();
    }

    init() {
        this.profileButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.openSlider();
        });

        this.closeButton.addEventListener('click', () => {
            this.closeSlider();
        });

        document.addEventListener('click', (e) => {
            if (!this.slider.contains(e.target) && e.target !== this.profileButton) {
                this.closeSlider();
            }
        });
    }

    openSlider() {
        this.slider.classList.add('active');
    }

    closeSlider() {
        this.slider.classList.remove('active');
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Slider();
}); 