// ==============================
// Login & Register Modals
// ==============================
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");

// Open modals
loginBtn.onclick = () => loginModal.style.display = "flex";
registerBtn.onclick = () => registerModal.style.display = "flex";

// Close modals
closeLogin.onclick = () => loginModal.style.display = "none";
closeRegister.onclick = () => registerModal.style.display = "none";

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
};

// Simple redirect simulation after login/register
document.querySelectorAll(".modal form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Redirecting to dashboard/home...");
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  });
});

// ==============================
// Contact Form Popup
// ==============================
const contactForm = document.querySelector('.contact-form');
const popup = document.getElementById('popupMessage');

if (contactForm && popup) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // Show popup
    popup.classList.add('show');

    // Clear form
    contactForm.reset();

    // Hide popup after 3 seconds
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  });
}

// ==============================
// Hamburger Menu Toggle
// ==============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle'); // Animate hamburger to X
  });
}

// ==============================
// FAQ Accordion
// ==============================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    // Toggle active state
    q.classList.toggle('active');

    // Toggle the answer
    const answer = q.nextElementSibling;
    if (q.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
