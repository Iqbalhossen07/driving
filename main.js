// Initialize AOS
AOS.init({
  duration: 900, // Animation duration
  once: false, // Whether animation should happen only once - while scrolling down
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Image slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove("bg-white/50", "hover:bg-course-primary/70");
      dot.classList.add(
        "bg-course-primary",
        "scale-125",
        "shadow-lg",
        "shadow-course-orange/50"
      );
    } else {
      dot.classList.remove(
        "bg-course-primary",
        "scale-125",
        "shadow-lg",
        "shadow-course-orange/50"
      );
      dot.classList.add("bg-white/50", "hover:bg-course-primary/70");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Auto advance slides
setInterval(nextSlide, 5000);

// Manual navigation
document.getElementById("next-slide").addEventListener("click", nextSlide);
document.getElementById("prev-slide").addEventListener("click", prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Testimonial slider functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle("active", i === index);
  });
  testimonialDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove("bg-course-primary/30", "hover:bg-course-orange/60");
      dot.classList.add(
        "bg-gradient-to-r",
        "from-course-orange",
        "to-course-accent",
        "scale-125",
        "shadow-lg",
        "shadow-course-orange/50"
      );
    } else {
      dot.classList.remove(
        "bg-gradient-to-r",
        "from-course-orange",
        "to-course-accent",
        "scale-125",
        "shadow-lg",
        "shadow-course-orange/50"
      );
      dot.classList.add("bg-course-primary/30", "hover:bg-course-orange/60");
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

// Auto advance testimonials
setInterval(nextTestimonial, 6000);

// Manual navigation
document
  .getElementById("next-testimonial")
  .addEventListener("click", nextTestimonial);
document
  .getElementById("prev-testimonial")
  .addEventListener("click", prevTestimonial);

// Dot navigation
testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Back to top functionality
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show/hide back to top button based on scroll
window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.opacity = "0.6";
  }
});

// Close mobile menu when clicking on links
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const faqItems = document.querySelectorAll(".faq-item");

//   faqItems.forEach((item) => {
//     const questionButton = item.querySelector(".faq-question");
//     const answerPanel = item.querySelector(".faq-answer");
//     const icon = questionButton.querySelector("i");
//     const answerContent = answerPanel.querySelector("p"); // Get the paragraph inside answerPanel

//     questionButton.addEventListener("click", () => {
//       const isOpen = item.classList.toggle("active");
//       icon.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";

//       if (isOpen) {
//         // Set max-height to the scrollHeight of the content + padding
//         answerPanel.style.maxHeight =
//           answerContent.scrollHeight + 2 * 16 + "px"; // Adding ~2rem (32px) for p-6 padding
//         item.style.boxShadow = "0 10px 25px -5px rgba(249, 115, 22, 0.2)"; // Add shadow on open
//         answerPanel.style.paddingBottom = "1.5rem"; // Apply padding when open
//       } else {
//         answerPanel.style.maxHeight = "0px"; // Collapse
//         item.style.boxShadow = ""; // Remove shadow on close
//         answerPanel.style.paddingBottom = "0"; // Remove padding when closed
//       }
//     });
//   });
// });
