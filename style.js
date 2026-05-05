const navbar = document.querySelector('.header .navbar');
const loginForm = document.querySelector('.login-form');
const menuBtn = document.querySelector('#menu-btn');
const loginBtn = document.querySelector('#login-btn');

// Close function
function closeAll() {
    navbar?.classList.remove('active');
    loginForm?.classList.remove('active');
}

// Menu toggle
menuBtn?.addEventListener('click', () => {
    navbar?.classList.toggle('active');
    loginForm?.classList.remove('active');
});

// Login toggle
loginBtn?.addEventListener('click', () => {
    loginForm?.classList.toggle('active');
    navbar?.classList.remove('active');
});

// Scroll close
window.addEventListener('scroll', closeAll);

// Swiper
if (document.querySelector(".review-slider")) {
    new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
        },
    });
}

// FAQ accordion
document.querySelectorAll(".faq").forEach((faq) => {
    faq.querySelector(".ques")?.addEventListener("click", () => {
        const isActive = faq.classList.contains("active");

        document.querySelectorAll(".faq").forEach(f => f.classList.remove("active"));

        if (!isActive) {
            faq.classList.add("active");
        }
    });
});
