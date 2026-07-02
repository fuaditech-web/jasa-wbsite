// ===== TYPING EFFECT =====
var typingText = document.getElementById('typingText');
if (typingText) {
    var words = ['💻 Jasa Website Profesional', '🤖 AI Chatbot Canggih', '⚡ Joki Coding Murah', '📊 Sistem Informasi Modern'];
    var i = 0, j = 0, isDeleting = false;

    function typeEffect() {
        var currentWord = words[i];
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
var counters = document.querySelectorAll('.counter-number');
counters.forEach(function(counter) {
    function updateCount() {
        var target = parseInt(counter.getAttribute('data-target'));
        var count = parseInt(counter.innerText);
        var increment = Math.ceil(target / 200);
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
var countdownEl = document.getElementById('countdown');
if (countdownEl) {
    function updateCountdown() {
        var targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);
        targetDate.setHours(0, 0, 0, 0);
        var now = new Date();
        var diff = targetDate - now;
        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = '<div class="countdown-item">Promo Berakhir!</div>';
            return;
        }
        var days = Math.floor(diff / 86400000);
        var hours = Math.floor((diff % 86400000) / 3600000);
        var minutes = Math.floor((diff % 3600000) / 60000);
        var seconds = Math.floor((diff % 60000) / 1000);
        document.getElementById('days').innerHTML = String(days).padStart(2, '0');
        document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// ===== BACK TO TOP =====
var backToTop = document.getElementById('backToTop');
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
        var href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== HAMBURGER =====
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}
