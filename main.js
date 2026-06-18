// ============================================
// FUADITECH STUDIO - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ---------- NAVBAR SCROLL ----------
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ---------- HAMBURGER MENU ----------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = hamburger?.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    // ---------- MOBILE DROPDOWN ----------
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    }

    // Reset dropdown on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && dropdown) {
            dropdown.classList.remove('active');
        }
    });

    // ---------- SMOOTH SCROLL ----------
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ---------- ACTIVE NAV LINK ----------
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)');

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollY = window.scrollY + 120;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href && href.substring(1) === current) {
                link.classList.add('active');
            } else if (href && href !== '#') {
                link.classList.remove('active');
            }
        });
    });

    // ---------- CONTACT FORM ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[placeholder="Nama Lengkap"]')?.value || '';
            const email = this.querySelector('input[placeholder="Email"]')?.value || '';
            const message = this.querySelector('textarea')?.value || '';
            const waNumber = '62882007027443';
            const text = `Halo FUADITECH STUDIO,%0A%0ANama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
            window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
        });
    }

    // ---------- ANIMATE ON SCROLL (simple) ----------
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(function(el) {
        observer.observe(el);
    });

    console.log('🚀 FUADITECH STUDIO loaded successfully!');
});
