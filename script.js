document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;
  
    function showSlide() {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[currentSlide].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide();
    }
  
    setInterval(nextSlide, 2000);
  
    showSlide();
  
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
  });