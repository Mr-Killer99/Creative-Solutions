/* =============================================
   PORTFOLIO — AHMADOU DOUCOURÉ
   script.js — JavaScript principal
   (barre de progression, spotlight, navigation,
   machine à écrire, reveal, skill bars, tilt 3D,
   formulaire de contact + toast)
   ============================================= */

'use strict';

/* Accès rapide aux traductions FR/EN (i18n.js est chargé avant) */
function t(key) {
    return (window.AD_I18N && window.AD_I18N.t(key)) || '';
}

/* -----------------------------------------------
   1. Barre de progression de lecture
----------------------------------------------- */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const docEl = document.documentElement;
        const scrolled = docEl.scrollTop || document.body.scrollTop;
        const total = docEl.scrollHeight - docEl.clientHeight;
        const pct = total > 0 ? (scrolled / total) * 100 : 0;
        bar.style.width = pct + '%';
    }, { passive: true });
}

/* -----------------------------------------------
   2. Cursor Spotlight (desktop uniquement)
----------------------------------------------- */
function initCursorSpotlight() {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Lerp (interpolation linéaire) pour un effet fluide
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        spotlight.style.left = currentX + 'px';
        spotlight.style.top = currentY + 'px';
        rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));
}

/* -----------------------------------------------
   3. Navigation : hide/show au scroll + lien actif
----------------------------------------------- */
function initNavigation() {
    const navContainer = document.getElementById('nav-container');
    if (!navContainer) return;

    let lastScrollY = window.scrollY;

    // Hide/show navbar
    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;

        if (currentY > 80) {
            if (currentY > lastScrollY) {
                // Scroll vers le bas → cacher
                navContainer.style.transform = 'translateY(-150%)';
            } else {
                // Scroll vers le haut → montrer
                navContainer.style.transform = 'translateY(0)';
            }
        } else {
            navContainer.style.transform = 'translateY(0)';
        }
        lastScrollY = currentY;
    }, { passive: true });

    // Lien actif selon la section visible
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(section => sectionObserver.observe(section));
}

/* -----------------------------------------------
   4. Menu Mobile
----------------------------------------------- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    if (!btn || !menu) return;

    function closeMenu() {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');
        }
        btn.setAttribute('aria-label', t('aria.close_menu') || 'Fermer le menu');
        btn.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-bars-staggered');
            icon.classList.add('fa-xmark');
        }
        btn.setAttribute('aria-label', t('aria.open_menu') || 'Ouvrir le menu');
        btn.setAttribute('aria-expanded', 'true');
    }

    btn.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    links.forEach(link => link.addEventListener('click', closeMenu));

    // Fermer en cliquant en dehors
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            if (!menu.classList.contains('hidden')) closeMenu();
        }
    });
}

/* -----------------------------------------------
   5. Typewriter (effet machine à écrire)
----------------------------------------------- */
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    // Les textes suivent la langue active (FR/EN)
    function currentTexts() {
        const texts = t('hero.typewriter');
        return Array.isArray(texts) && texts.length ? texts : ['Développeur Web'];
    }

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timerId = null;

    function type() {
        const texts = currentTexts();
        // Garder les index dans les bornes si la liste change de taille
        if (textIndex >= texts.length) textIndex = 0;
        const currentText = texts[textIndex];

        if (!isDeleting) {
            charIndex += 1;
            el.textContent = currentText.slice(0, charIndex);
            if (charIndex === currentText.length) {
                isDeleting = true;
                timerId = setTimeout(type, 2200);
                return;
            }
            // Légère variation pour effet naturel
            timerId = setTimeout(type, 90 + Math.random() * 40);
        } else {
            charIndex -= 1;
            el.textContent = currentText.slice(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                timerId = setTimeout(type, 400);
                return;
            }
            timerId = setTimeout(type, 45);
        }
    }

    // Reprise propre quand l'utilisateur change de langue
    document.addEventListener('langchange', () => {
        clearTimeout(timerId);
        textIndex = 0;
        charIndex = 0;
        isDeleting = false;
        el.textContent = '';
        timerId = setTimeout(type, 300);
    });

    timerId = setTimeout(type, 1000);
}

/* -----------------------------------------------
   6. Scroll Reveal via IntersectionObserver
----------------------------------------------- */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* -----------------------------------------------
   7. Skill Bars — animation au scroll
----------------------------------------------- */
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
}

/* -----------------------------------------------
   8. Card Tilt 3D (effet de perspective sur les cartes)
----------------------------------------------- */
function initCardTilt() {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* -----------------------------------------------
   9. Formulaire de Contact — Validation + Toast
----------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submit-btn');
    if (!form || !btn) return;

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fields = ['name', 'email', 'subject', 'message']
        .map(name => form.querySelector('[name="' + name + '"]'))
        .filter(Boolean);
    const defaultBtnHTML = btn.innerHTML;
    let toastTimer = null;

    // L'erreur disparaît dès que l'utilisateur saisit du texte
    fields.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.classList.remove('input-error');
            }
        });
    });

    function validate() {
        let isValid = true;

        fields.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('input-error');
                isValid = false;
            }
        });

        const email = form.querySelector('[name="email"]');
        if (email && email.value.trim() && !EMAIL_RE.test(email.value.trim())) {
            email.classList.add('input-error');
            isValid = false;
        }

        return isValid;
    }

    function showToast(type) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        const iconBox = document.getElementById('toast-icon');
        const icon = document.getElementById('toast-icon-i');
        const title = document.getElementById('toast-title');
        const msg = document.getElementById('toast-msg');

        if (type === 'success') {
            toast.classList.remove('border-l-red-400');
            toast.classList.add('border-l-brand-400');
            if (iconBox) iconBox.className = 'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-500/20 text-brand-400';
            if (icon) icon.className = 'fa-solid fa-check';
            if (title) title.textContent = t('toast.success_title');
            if (msg) msg.textContent = t('toast.success_msg');
        } else {
            toast.classList.remove('border-l-brand-400');
            toast.classList.add('border-l-red-400');
            if (iconBox) iconBox.className = 'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-red-500/20 text-red-400';
            if (icon) icon.className = 'fa-solid fa-envelope';
            if (title) title.textContent = t('toast.error_title');
            if (msg) msg.textContent = t('toast.error_msg');
        }

        toast.classList.add('show');

        // Masquage automatique
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (btn.disabled) return;
        if (!validate()) return;

        // Loading state (spinner + libellé traduit)
        btn.disabled = true;
        btn.innerHTML = '<span class="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin-slow" aria-hidden="true"></span> ' + (t('form.sending') || 'Envoi en cours…');

        /* Simulation d'envoi (1,5 s) — cette version statique n'a pas de backend.
           Pour brancher une vraie API, remplacez ce bloc par un fetch, par ex. :
           try {
               const response = await fetch('https://votre-api.example/contact', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({
                       name: form.name.value,
                       email: form.email.value,
                       subject: form.subject.value,
                       message: form.message.value
                   })
               });
               if (!response.ok) throw new Error('Erreur serveur');
               showToast('success');
           } catch {
               showToast('error');
           }
        */
        await new Promise(resolve => setTimeout(resolve, 1500));

        form.reset();
        fields.forEach(input => input.classList.remove('input-error'));
        btn.disabled = false;
        btn.innerHTML = defaultBtnHTML;

        showToast('success');
    });
}

/* -----------------------------------------------
   10. Smooth Scroll pour les ancres
----------------------------------------------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

/* -----------------------------------------------
   INIT — Lancement de tous les modules
----------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initCursorSpotlight();
    initNavigation();
    initMobileMenu();
    initTypewriter();
    initScrollReveal();
    initSkillBars();
    initCardTilt();
    initContactForm();
    initSmoothScroll();
});
