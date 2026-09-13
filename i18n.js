/* =============================================
   PORTFOLIO — AHMADOU DOUCOURÉ · Creative Solutions
   i18n.js — Internationalisation FR / EN
   -----------------------------------------------
   - data-i18n        → remplace le 1er nœud texte
   - data-i18n-html   → remplace innerHTML (clé avec <strong>)
   - data-i18n-attr   → attributs ("attr:clé;attr2:clé2")
   - Choix mémorisé dans localStorage ("ad-lang")
   ============================================= */

'use strict';

(function () {

    /* ---------------------------------------------
       1. Dictionnaire complet FR / EN
    ----------------------------------------------- */
    var DICT = {

        /* ===================== FRANÇAIS ===================== */
        fr: {
            meta: {
                title: "Ahmadou Doucouré | Portfolio — Creative Solutions",
                description: "Portfolio d'Ahmadou Doucouré — Développeur Web & Administrateur Réseau, étudiant en L2 Informatique de Gestion à l'ISTAG, Bamako.",
                og_title: "Ahmadou Doucouré | Portfolio",
                og_description: "Développeur Web & Administrateur Réseau — Étudiant en L2 Informatique de Gestion à l'ISTAG, Bamako."
            },

            nav: {
                home: "Accueil",
                about: "À propos",
                skills: "Compétences",
                projects: "Projets",
                contact: "Contact"
            },

            aria: {
                logo_home: "AD Creative Solutions — Retour à l'accueil",
                open_menu: "Ouvrir le menu",
                close_menu: "Fermer le menu",
                view_project: "Voir le projet",
                view_code: "Voir le code",
                back_top: "Retour en haut"
            },

            mobile: { contact: "Me contacter" },

            hero: {
                badge: "Disponible pour de nouveaux projets",
                greeting: "Salut, je suis",
                typewriter: ["Développeur Web", "Administrateur Réseau", "Étudiant ISTAG", "Créateur de solutions"],
                desc: "Étudiant en L2 Informatique de Gestion à l'ISTAG (Bamako). Je crée des expériences numériques élégantes et conçois des infrastructures fiables, du web aux réseaux.",
                cta_work: "Explorer mon travail",
                cta_contact: "Me contacter",
                edu_label: "Formation"
            },

            about: {
                kicker: "01. Parcours",
                title: "À propos de ",
                accent: "Moi",
                h3: "L'art de résoudre des problèmes par la technologie.",
                p1: "Je m'appelle Ahmadou Doucouré, un esprit curieux et pragmatique. Actuellement en <strong class=\"text-brand-300 font-normal\">Informatique de Gestion (L2) à l'ISTAG</strong>, je me spécialise dans la création de ponts entre le code pur et les besoins concrets des entreprises.",
                p2: "Que ce soit pour architecturer une base de données, designer une interface fluide en Tailwind CSS, ou configurer une topologie réseau sur Packet Tracer, j'aborde chaque projet avec rigueur et créativité. Mon objectif ? Devenir un ingénieur polyvalent, capable de superviser un projet de bout en bout.",
                stat1: "Projets réalisés",
                stat2: "Années de code",
                t1_title: "L2 Informatique de Gestion",
                t1_desc: "Développement orienté objet, bases de données avancées (MySQL), administration système & réseaux, gestion de projet.",
                t2_title: "L1 Informatique de Gestion",
                t2_desc: "Fondamentaux de l'algorithmique, initiation au développement web (HTML/CSS/JS), modélisation Merise et principes de gestion.",
                t3_period: "Pratique & Autonomie",
                t3_title: "Projets Indépendants & Réseaux",
                t3_desc: "Réalisation d'applications web (TechStore, AFRINEXA), topologies réseaux sous Cisco Packet Tracer, et prototypage Arduino."
            },

            skills: {
                kicker: "02. Expertise",
                title: "Mes ",
                accent: "Compétences",
                frontend: "Frontend",
                backend: "Backend",
                tools: "Outils & Infra"
            },

            skill: { react: "React.js (Notions)" },

            projects: {
                kicker: "03. Portfolio",
                title: "Projets ",
                accent: "Récents"
            },

            proj1: {
                title: "TechStore E-commerce",
                desc: "Plateforme e-commerce complète développée pour la vente de matériel informatique. Intègre un catalogue, un panier dynamique, et un panneau d'administration sécurisé pour la gestion des stocks (Projet ISTAG)."
            },
            proj2: {
                title: "AFRINEXA Chatbot",
                desc: "Interface web et landing page interactive conçues pour un service d'automatisation WhatsApp B2B en Afrique. Focus sur la conversion et l'expérience utilisateur.",
                collab: "En collaboration avec <strong class='text-slate-300 font-medium'>Al-Amin GUEYE</strong>"
            },
            proj3: {
                title: "Mindly",
                desc: "Plateforme éducative propulsée par l'intelligence artificielle, conçue pour adapter l'apprentissage aux besoins réels de chaque apprenant. Design immersif et expérience utilisateur soignée.",
                collab: "En collaboration avec <strong class='text-slate-300 font-medium'>Aboubakar TCHASSANTI</strong>"
            },
            proj4: {
                title: "Jeune Stylé App",
                desc: "Application web de gestion d'inventaire et vitrine pour une boutique de prêt-à-porter, intégrant un système de filtrage avancé des articles."
            },

            contact: {
                kicker: "04. Contact",
                title: "Discutons de votre ",
                accent: "projet",
                h4: "Restons connectés",
                p: "Une opportunité de stage, une mission freelance ou simplement échanger sur le code et les réseaux ? Mon canal de communication est ouvert.",
                location: "Localisation",
                email: "Email",
                whatsapp: "WhatsApp"
            },

            form: {
                name: "Nom",
                email: "Email",
                subject: "Sujet",
                message: "Message",
                subject_ph: "Proposition de projet",
                message_ph: "Votre message ici...",
                submit: "Envoyer le message",
                sending: "Envoi en cours…"
            },

            toast: {
                success_title: "Message transmis !",
                success_msg: "Je vous recontacte dans les plus brefs délais.",
                error_title: "Échec de l'envoi",
                error_msg: "Une erreur est survenue. Merci de réessayer dans un instant."
            },

            footer: { rights: "© 2026 Mr Doucouré. Tous droits réservés." }
        },

        /* ===================== ENGLISH ===================== */
        en: {
            meta: {
                title: "Ahmadou Doucouré | Portfolio — Creative Solutions",
                description: "Ahmadou Doucouré's portfolio — Web Developer & Network Administrator, L2 Business Informatics student at ISTAG, Bamako.",
                og_title: "Ahmadou Doucouré | Portfolio",
                og_description: "Web Developer & Network Administrator — L2 Business Informatics student at ISTAG, Bamako."
            },

            nav: {
                home: "Home",
                about: "About",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact"
            },

            aria: {
                logo_home: "AD Creative Solutions — Back to home",
                open_menu: "Open menu",
                close_menu: "Close menu",
                view_project: "View project",
                view_code: "View code",
                back_top: "Back to top"
            },

            mobile: { contact: "Contact me" },

            hero: {
                badge: "Available for new projects",
                greeting: "Hi, I'm",
                typewriter: ["Web Developer", "Network Administrator", "ISTAG Student", "Solutions Builder"],
                desc: "L2 Business Informatics student at ISTAG (Bamako). I craft elegant digital experiences and design reliable infrastructure — from the web to networks.",
                cta_work: "Explore my work",
                cta_contact: "Contact me",
                edu_label: "Education"
            },

            about: {
                kicker: "01. Journey",
                title: "About ",
                accent: "Me",
                h3: "The art of solving problems through technology.",
                p1: "My name is Ahmadou Doucouré, a curious and pragmatic mind. Currently in my <strong class=\"text-brand-300 font-normal\">L2 of Business Informatics at ISTAG</strong>, I specialize in building bridges between pure code and real business needs.",
                p2: "Whether it's architecting a database, designing a fluid interface with Tailwind CSS, or setting up a network topology in Packet Tracer, I approach every project with rigor and creativity. My goal? To become a versatile engineer, able to oversee a project from end to end.",
                stat1: "Projects completed",
                stat2: "Years of coding",
                t1_title: "L2 Business Informatics",
                t1_desc: "Object-oriented development, advanced databases (MySQL), system & network administration, project management.",
                t2_title: "L1 Business Informatics",
                t2_desc: "Fundamentals of algorithms, introduction to web development (HTML/CSS/JS), Merise modeling and management principles.",
                t3_period: "Practice & Autonomy",
                t3_title: "Independent Projects & Networking",
                t3_desc: "Building web applications (TechStore, AFRINEXA), network topologies with Cisco Packet Tracer, and Arduino prototyping."
            },

            skills: {
                kicker: "02. Expertise",
                title: "My ",
                accent: "Skills",
                frontend: "Frontend",
                backend: "Backend",
                tools: "Tools & Infra"
            },

            skill: { react: "React.js (Basics)" },

            projects: {
                kicker: "03. Portfolio",
                title: "Recent ",
                accent: "Projects"
            },

            proj1: {
                title: "TechStore E-commerce",
                desc: "Full e-commerce platform built for selling computer hardware. Features a product catalog, a dynamic cart, and a secure admin panel for inventory management (ISTAG project)."
            },
            proj2: {
                title: "AFRINEXA Chatbot",
                desc: "Web interface and interactive landing page designed for a B2B WhatsApp automation service in Africa. Focused on conversion and user experience.",
                collab: "In collaboration with <strong class='text-slate-300 font-medium'>Al-Amin GUEYE</strong>"
            },
            proj3: {
                title: "Mindly",
                desc: "AI-powered educational platform designed to adapt learning to each learner's real needs. Immersive design and carefully crafted user experience.",
                collab: "In collaboration with <strong class='text-slate-300 font-medium'>Aboubakar TCHASSANTI</strong>"
            },
            proj4: {
                title: "Jeune Stylé App",
                desc: "Web application for inventory management and storefront for a ready-to-wear shop, featuring an advanced product filtering system."
            },

            contact: {
                kicker: "04. Contact",
                title: "Let's discuss your ",
                accent: "project",
                h4: "Stay connected",
                p: "An internship opportunity, a freelance mission, or simply talking about code and networks? My communication channel is open.",
                location: "Location",
                email: "Email",
                whatsapp: "WhatsApp"
            },

            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                subject_ph: "Project proposal",
                message_ph: "Your message here...",
                submit: "Send message",
                sending: "Sending…"
            },

            toast: {
                success_title: "Message sent!",
                success_msg: "I'll get back to you as soon as possible.",
                error_title: "Sending failed",
                error_msg: "Something went wrong. Please try again in a moment."
            },

            footer: { rights: "© 2026 Mr Doucouré. All rights reserved." }
        }
    };

    var current = 'fr';

    /* ---------------------------------------------
       2. Accès à une clé "a.b.c" du dictionnaire
    ----------------------------------------------- */
    function t(key) {
        var value = key.split('.').reduce(function (node, part) {
            return (node && node[part] !== undefined) ? node[part] : undefined;
        }, DICT[current]);
        if (value === undefined) {
            value = key.split('.').reduce(function (node, part) {
                return (node && node[part] !== undefined) ? node[part] : undefined;
            }, DICT.fr);
        }
        return value;
    }

    /* ---------------------------------------------
       3. Remplace le 1er nœud texte non vide
       (préserve les <span>, <strong>, <br> internes)
    ----------------------------------------------- */
    function setText(el, value) {
        var nodes = el.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeType === 3 && nodes[i].textContent.trim()) {
                nodes[i].textContent = value;
                return;
            }
        }
        el.textContent = value;
    }

    function setMeta(selector, attr, value) {
        var el = document.querySelector(selector);
        if (el) el.setAttribute(attr, value);
    }

    /* ---------------------------------------------
       4. Application de la langue sur tout le DOM
    ----------------------------------------------- */
    function apply(lang, persist) {
        current = DICT[lang] ? lang : 'fr';

        document.documentElement.setAttribute('lang', current);
        document.title = t('meta.title');
        setMeta('meta[name="description"]', 'content', t('meta.description'));
        setMeta('meta[property="og:title"]', 'content', t('meta.og_title'));
        setMeta('meta[property="og:description"]', 'content', t('meta.og_description'));
        setMeta('meta[property="og:locale"]', 'content', current === 'fr' ? 'fr_FR' : 'en_US');
        setMeta('meta[name="twitter:title"]', 'content', t('meta.og_title'));
        setMeta('meta[name="twitter:description"]', 'content', t('meta.og_description'));

        // Textes simples
        var textEls = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < textEls.length; i++) {
            var key = textEls[i].getAttribute('data-i18n');
            var value = t(key);
            if (typeof value === 'string') setText(textEls[i], value);
        }

        // Textes avec HTML interne (gras, liens…)
        var htmlEls = document.querySelectorAll('[data-i18n-html]');
        for (var j = 0; j < htmlEls.length; j++) {
            var htmlKey = htmlEls[j].getAttribute('data-i18n-html');
            var htmlValue = t(htmlKey);
            if (typeof htmlValue === 'string') htmlEls[j].innerHTML = htmlValue;
        }

        // Mots accentués des titres de section
        var accents = { 't-about-accent': 'about.accent', 't-skills-accent': 'skills.accent', 't-projects-accent': 'projects.accent', 't-contact-accent': 'contact.accent' };
        Object.keys(accents).forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.textContent = t(accents[id]);
        });

        // Attributs (placeholder, aria-label, title…)
        var attrEls = document.querySelectorAll('[data-i18n-attr]');
        for (var k = 0; k < attrEls.length; k++) {
            var spec = attrEls[k].getAttribute('data-i18n-attr');
            spec.split(';').forEach(function (pair) {
                var parts = pair.split(':');
                if (parts.length !== 2) return;
                var attrName = parts[0].trim();
                var attrKey = parts[1].trim();
                var attrValue = t(attrKey);
                if (typeof attrValue === 'string') attrEls[k].setAttribute(attrName, attrValue);
            });
        }

        // État visuel des boutons de langue
        var btns = document.querySelectorAll('.lang-btn');
        for (var m = 0; m < btns.length; m++) {
            btns[m].classList.toggle('active', btns[m].getAttribute('data-lang') === current);
        }

        if (persist) {
            try { localStorage.setItem('ad-lang', current); } catch (e) { /* mode privé */ }
        }

        // Notifier les autres modules (machine à écrire…)
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: current } }));
    }

    /* ---------------------------------------------
       5. Initialisation : préférence mémorisée,
          sinon langue du navigateur (fallback FR)
    ----------------------------------------------- */
    function init() {
        var saved = null;
        try { saved = localStorage.getItem('ad-lang'); } catch (e) { /* rien */ }

        var initial = saved;
        if (initial !== 'fr' && initial !== 'en') {
            var nav = (navigator.language || 'fr').toLowerCase();
            initial = nav.indexOf('en') === 0 ? 'en' : 'fr';
        }

        apply(initial, false);

        var btns = document.querySelectorAll('.lang-btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                apply(this.getAttribute('data-lang'), true);
            });
        }
    }

    /* API publique */
    window.AD_I18N = {
        t: t,
        apply: apply,
        init: init,
        get lang() { return current; }
    };

    document.addEventListener('DOMContentLoaded', init);

})();
