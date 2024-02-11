// ---- Hamburger ----
const hamburger = document.querySelector(".hamburger");
const closedHamburger = document.querySelector(".closed-hamburger");
const navItems = document.querySelector(".nav-items");
const navItem = document.getElementsByClassName("nav-item");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("nav-open");
  hamburger.classList.toggle("fa-xmark");
});

function openContactModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}

function validateAndSubmitForm() {
  // Retrieve values from input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Validate form fields
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    message.trim() === ""
  ) {
    alert("All fields are required. Please fill them out.");
    return;
  }

  // Create formData object
  var formData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  console.log(formData);

  // Use emailjs to send the form
  emailjs
    .sendForm(
      "service_abm1ywd",
      "template_o1a3ks4",
      "#contactForm",
      "AocCMv7v3U36VvuDA"
    )
    .then(
      function () {
        // Show success message using alert (you can replace this with your preferred UI)
        alert("Form submitted successfully!");
        closeContactModal();
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

function submitForm() {
  closeContactModal();
}

function submitForm() {
  const form = document.getElementById("contactForm");

  const formData = new FormData(form);

  emailjs
    .sendForm(
      "service_your_emailjs_service_id",
      "template_your_emailjs_template_id",
      formData
    )
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
      },
      function (error) {
        console.error("Error sending email:", error);
      }
    );
}

function openConsultationModal() {}

document
  .getElementById("bookConsultation")
  .addEventListener("click", function () {
    var calendlyUsername = "YOUR_CALENDLY_USERNAME";

    var eventType = "YOUR_EVENT_TYPE";

    Calendly.initInlineWidgets({
      url: "https://calendly.com/" + calendlyUsername + "/" + eventType,
      parentElement: document.getElementById("bookConsultation"),
    });
  });

for (let item of navItem) {
  item.addEventListener("click", () => {
    navItems.classList.toggle("nav-open");
    hamburger.classList.toggle("fa-xmark");
  });
}

// -- Initialize Swiper 1 --
var swiper1 = new Swiper(".mySwiper", {
  centeredSlides: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// -- Initialize Swiper 2 --
var swiper2 = new Swiper(".mySwiper2", {
  centeredSlides: false,
  slidesPerView: 5,
  spaceBetween: 10,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    2000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    3000: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// -- Initialize Swiper 3 --
var swiper3 = new Swiper(".mySwiper3", {
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    2000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    2500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const testimonials = document.querySelectorAll(".customer .rated-person");
let currentIndex = 0;

// const dummyComments = [
//   "Incredible team! They added immense value to our project. From ideation to delivery, their expertise shone through. Highly recommend!",
//   "Working with them was a game-changer for our development needs. The team's dedication and skillset ensured a seamless and successful project delivery",
//   "Exceptional service! Their commitment to quality and attention to detail set them apart. Trustworthy partners in the software development journey.",
//   "Impressed by their proficiency and collaborative approach. They truly understand the client's vision and bring it to life. A pleasure to work with!",
//   "Reliable, efficient, and innovative! Our project flourished under their guidance. They are our go-to for all software development endeavors. 5 stars!"
// ];

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active-rated-person");
    if (i === index) {
      testimonial.classList.add("active-rated-person");
    }
  });

  const commentParagraph = document.querySelector(".review p");
  commentParagraph.textContent = dummyComments[index];
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Automatically move to the next testimonial every 1 second
const intervalId = setInterval(nextTestimonial, 2000);

// Pause the interval on left and right arrow click
document.getElementById("leftArrow").addEventListener("click", function () {
  // clearInterval(intervalId);
  prevTestimonial();
});

document.getElementById("rightArrow").addEventListener("click", function () {
  // clearInterval(intervalId);
  nextTestimonial();
});

// Contact us
