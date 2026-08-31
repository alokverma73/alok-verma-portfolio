document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE NAVIGATION
    ================================= */

    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (navbar && menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navbar.classList.toggle("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            document.body.classList.toggle(
                "menu-is-open",
                isOpen
            );
        });


        /* Close menu after clicking a link */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navbar.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "menu-is-open"
                );
            });

        });


        /* Close menu with Escape */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navbar.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "menu-is-open"
                );
            }

        });

    }


    /* ================================
       NAVBAR SCROLL EFFECT
    ================================= */

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 30) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        };

        updateNavbar();

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );
    }


    /* ================================
       ACTIVE NAV LINK
    ================================= */

    const currentPath =
        window.location.pathname.replace(/\/$/, "") || "/";

    document.querySelectorAll(
        ".nav-link, .mobile-link"
    ).forEach((link) => {

        const href = link.getAttribute("href");

        if (!href || href.startsWith("#")) {
            return;
        }

        const linkPath =
            href.replace(/\/$/, "") || "/";

        if (linkPath === currentPath) {
            link.classList.add("active");
        }

    });


    /* ================================
       CONTACT FORM
    ================================= */

    const contactForm =
        document.getElementById("contactForm");

    const formStatus =
        document.getElementById("formStatus");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                if (formStatus) {

                    formStatus.textContent =
                        "Thanks! Your message is ready to send.";

                }

                const name =
                    document.getElementById("name")?.value || "";

                const email =
                    document.getElementById("email")?.value || "";

                const subject =
                    document.getElementById("subject")?.value ||
                    "Portfolio enquiry";

                const message =
                    document.getElementById("message")?.value || "";

                const body =
                    `Name: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `${message}`;

                const mailto =
                    `mailto:alokv7373@gmail.com` +
                    `?subject=${encodeURIComponent(subject)}` +
                    `&body=${encodeURIComponent(body)}`;

                window.location.href = mailto;

            }
        );

    }

});