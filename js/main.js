/* ========================================
   FUADITECH STUDIO - JAVASCRIPT GLOBAL
   Digunakan untuk SEMUA halaman
   ======================================== */

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// ===== TYPING EFFECT (Hanya di Home) =====
const typingText = document.getElementById('typingText');
if (typingText) {
    const words = ['💻 Jasa Website Profesional', '🤖 AI Chatbot Canggih', '⚡ Joki Coding Murah', '📊 Sistem Informasi Modern'];
    let i = 0,
        j = 0,
        isDeleting = false;

    function typeEffect() {
        const currentWord = words[i];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, j - 1);
            j--;
        } else {
            typingText.textContent = currentWord.substring(0, j + 1);
            j++;
        }
        if (!isDeleting && j === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter-number');
counters.forEach(function(counter) {
    function updateCount() {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = Math.ceil(target / 200);
        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
});

// ===== COUNTDOWN TIMER =====
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
    function updateCountdown() {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);
        targetDate.setHours(0, 0, 0, 0);
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = '<div class="countdown-item">Promo Berakhir!</div>';
            return;
        }
        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        document.getElementById('days').innerHTML = String(days).padStart(2, '0');
        document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    }
});

// ===== LOGO SLIDER =====
const logoSlider = document.getElementById('logoSlider');
if (logoSlider) {
    logoSlider.innerHTML += logoSlider.innerHTML;
}

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#contactForm input[placeholder="Nama Lengkap"]').value;
        const email = document.querySelector('#contactForm input[placeholder="Email"]').value;
        const message = document.querySelector('#contactForm textarea').value;
        const waNumber = '62882007027443';
        const text = 'Halo FUADITECH STUDIO,%0A%0ANama: ' + name + '%0AEmail: ' + email + '%0APesan: ' + message;
        window.open('https://wa.me/' + waNumber + '?text=' + text, '_blank');
    });
}
