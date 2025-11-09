//lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
document.querySelectorAll(".thumbnail").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src.replace("100", "600");
    lightbox.style.display = "flex";
  });
});
lightbox.addEventListener("click", () => lightbox.style.display = "none");
// ===== Enquiry Form Validation =====
document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.getElementById("enquiryForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent submission to validate first

      // Collect values
      const name = document.getElementById("full-name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const zip = document.getElementById("zip");
      const country = document.getElementById("country");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      
  // Error display elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");
  const phoneError = document.getElementById("phoneError");
  const zipError = document.getElementById("zipError");
  const countryError = document.getElementById("countryError");

  
  // Reset errors
  [nameError, emailError, subjectError, messageError,phoneError,zipError,countryError].forEach(el => el.textContent = "");
  [name, email, subject, message].forEach(id => document.getElementById(id)?.classList.remove("error-border"));
  successMessage.textContent = "";

  


      // Validation regex patterns
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9+ ]{8,15}$/;
      const zipPattern = /^[0-9]{4,6}$/;

      // Error tracking
      let valid = true;

      // Reset any previous highlights
      document.querySelectorAll("input, select, textarea").forEach(el => el.style.borderColor = "");

      // Validation logic
      if (name.value.trim() === "") {
        alert("Please enter your full name.");
        name.style.borderColor = "red";
         nameError.textContent = "Please enter your name.";
        document.getElementById("name").classList.add("error-border");
        valid = false;
      } else if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.style.borderColor = "red";
          emailError.textContent = "Please enter your email.";
          document.getElementById("email").classList.add("error-border");
        valid = false;
      } else if (!phonePattern.test(phone.value)) {
        alert("Please enter a valid phone number (digits only, e.g., +27 79 123 4567).");
        phone.style.borderColor = "red";
          phoneError.textContent = "Please enter a valid phone number.";
          document.getElementById("phone").classList.add("error-border");
        valid = false;
      } else if (!zipPattern.test(zip.value)) {
        alert("Please enter a valid postal code (4–6 digits).");
        zip.style.borderColor = "red";
          zipError.textContent = "Please enter a valid postal code.";
           document.getElementById("zip").classList.add("error-border");
        valid = false;
      } else if (country.value === "") {
        alert("Please select your country.");
        country.style.borderColor = "red";
          countryErrorError.textContent = "Please select your country.";
          document.getElementById("country").classList.add("error-border");
        valid = false;
      } else if (subject.value === "") {
        alert("Please select a subject.");
        subject.style.borderColor = "red";
          subjectError.textContent = "Please select a subject.";
    document.getElementById("subject").classList.add("error-border");
        valid = false;
      } else if (message.value.trim().length < 10) {
        alert("Your message must be at least 10 characters long.");
        message.style.borderColor = "red";
        valid = false;
      }

      // If all valid
      if (valid) {
        alert("✅ Thank you! Your enquiry has been submitted successfully.");
        enquiryForm.reset();
      }
    });
  }
});
// ===== Accordion Functionality =====
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(acc => {
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
// ===== Live Time and Date =====
document.addEventListener("DOMContentLoaded", () => {
  const dateTimeElement = document.getElementById("date-time");

  function updateDateTime() {
    const now = new Date();

    // Format time and date
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const formattedDate = now.toLocaleDateString('en-GB', optionsDate);
    const formattedTime = now.toLocaleTimeString('en-GB', optionsTime);

    // Display in footer
    dateTimeElement.innerHTML = `<span>${formattedDate} | ${formattedTime}</span>`;
  }

  // Update every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initialize immediately
});

