  // Get references to the prev, next buttons and the carousel container
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const carouselContainer = document.querySelector('.carousel-container');
  
  let index = 0; // Initialize the index of the current carousel item
  
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  // Function to move to the previous item
  prevButton.addEventListener('click', () => {
    if (index > 0) {
      index--; // Move left
    } else {
      index = totalItems - 1; // Loop back to the last item
    }
    updateCarousel();
  });

  // Function to move to the next item
  nextButton.addEventListener('click', () => {
    if (index < totalItems - 1) {
      index++; // Move right
    } else {
      index = 0; // Loop back to the first item
    }
    updateCarousel();
  });

  // Update the carousel position based on the current index
  function updateCarousel() {
    const offset = -index * 100; // Move the container by 100% per item
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  // Optional: Auto slide functionality (you can remove this if you prefer manual control only)
  let autoSlide = setInterval(() => {
    nextButton.click(); // Automatically click the next button every 3 seconds
  }, 3000);

  // Optionally: Pause the carousel on hover
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });

  carouselContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      nextButton.click();
    }, 3000); // Auto slide every 3 seconds
  });
