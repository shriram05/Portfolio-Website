document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const target = document.getElementById(targetId);
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      });
  });

  // Interactive portfolio item click
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
      item.addEventListener('click', function() {
          // Implement a lightbox or modal for a detailed view of the project
      });
  });

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      // Simulate form submission, e.g., by displaying a success message
      const successMessage = document.createElement("div");
      successMessage.innerText = "Message sent successfully!";
      successMessage.classList.add("success-message");
      contactForm.parentNode.appendChild(successMessage);
      setTimeout(() => {
          successMessage.style.display = "none";
      }, 3000);
      contactForm.reset();
  });

  // Add other interactive features and animations as needed
});
