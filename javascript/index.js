document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Hamburger Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when any nav link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // 2. Scroll Animation for Sections
  const sections = document.querySelectorAll("main section");
  sections.forEach((sec) => sec.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((sec) => observer.observe(sec));

  // 3. Contact Form Validation & Feedback
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    const statusMsg = document.createElement("p");
    statusMsg.className = "form-status";
    contactForm.appendChild(statusMsg);

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        statusMsg.textContent = "Please fill in all fields before sending.";
        return;
      }

      statusMsg.textContent = `Thank you, ${name}. Your message has been noted.`;
      contactForm.reset();
    });
  }
});