// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Mobile dropdown toggle
const dropdown = document.querySelector('.dropdown');
if (window.innerWidth <= 768 && dropdown) {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && href !== '#home' && href !== '#tentang' && href !== '#layanan-website' && href !== '#layanan-ai' && href !== '#layanan-programming' && href !== '#layanan-sistem' && href !== '#layanan-akademik' && href !== '#layanan-desain' && href !== '#layanan-artikel') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Contact form to WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[placeholder="Nama Lengkap"]').value;
        const email = contactForm.querySelector('input[placeholder="Email"]').value;
        const message = contactForm.querySelector('textarea').value;
        const waNumber = '62882007027443';
        const text = `Halo FUADITECH STUDIO,%0A%0ANama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
        window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    });
}

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-links > li > a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
            link.classList.add('active');
        } else if (href && href !== '#') {
            link.classList.remove('active');
        }
    });
});