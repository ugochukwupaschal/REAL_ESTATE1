function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}



const videos = document.querySelectorAll('.video');
let current = 0;
const duration = 10000; 

setInterval(() => {
  const currentVideo = videos[current];
  currentVideo.pause();
  currentVideo.classList.remove('active');

  current = (current + 1) % videos.length;
  const nextVideo = videos[current];
  nextVideo.classList.add('active');
  nextVideo.currentTime = 0;
  nextVideo.play();
}, duration);

let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
let hideTimeout = null;

window.addEventListener('scroll', function() {
  if (!header) return;

  // If scrolling up
  if (window.scrollY < lastScrollY) {
    header.classList.remove('hide-on-scroll');
    header.classList.add('show-bg');

    // Clear any previous timeout
    if (hideTimeout) clearTimeout(hideTimeout);

    // Hide header after 3 seconds
    hideTimeout = setTimeout(() => {
      header.classList.add('hide-on-scroll');
      header.classList.remove('show-bg');
    }, 3000);

  } else if (window.scrollY > lastScrollY && window.scrollY > 50) {
    // If scrolling down and past 50px from the top
    header.classList.add('hide-on-scroll');
    header.classList.remove('show-bg');
  }

  lastScrollY = window.scrollY;
});



// caro small
const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
const card = document.querySelector(".carousel-card");
const gap = 16;

let index = 0;
let scrollAmount = card.offsetWidth + gap;

// Move carousel to current index
function updateCarousel() {
  track.style.transform = `translateX(-${index * scrollAmount}px)`;
}

// Button Navigation
nextBtn.addEventListener("click", () => {
  if (index < track.children.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Auto Slide Every 4 seconds
setInterval(() => {
  index = (index + 1) % track.children.length;
  updateCarousel();
}, 4000);

// Swipe Navigation
let startX = 0;

track.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true }
);

track.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0 && index < track.children.length - 1) {
      index++;
    } else if (diff < 0 && index > 0) {
      index--;
    }
    updateCarousel();
  }
});







$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 10800,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
});



// home form 
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Simple validation
  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simulate form submission
  const submitBtn = document.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
});

// Add smooth focus animations
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "translateY(-2px)";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "translateY(0)";
  });
});

// Property Listing Page


     function toggleFaq(element) {
       const faqItem = element.parentElement;
       const isActive = faqItem.classList.contains("active");

       // Close all other FAQ items
       document.querySelectorAll(".faq-item").forEach((item) => {
         if (item !== faqItem) {
           item.classList.remove("active");
         }
       });

       // Toggle current FAQ item
       if (isActive) {
         faqItem.classList.remove("active");
       } else {
         faqItem.classList.add("active");
       }
     }

     // Add smooth scroll behavior and initial animation
     document.addEventListener("DOMContentLoaded", function () {
       const faqItems = document.querySelectorAll(".faq-item");
       faqItems.forEach((item, index) => {
         item.style.animationDelay = `${index * 0.1}s`;
         item.classList.add("fade-in");
       });
     });

     // Close FAQ when clicking outside
     document.addEventListener("click", function (event) {
       if (!event.target.closest(".faq-item")) {
         document.querySelectorAll(".faq-item").forEach((item) => {
           item.classList.remove("active");
         });
       }
     });