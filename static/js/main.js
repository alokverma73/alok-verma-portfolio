document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ACTIVE NAVIGATION LINK
    ================================ */

    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-links a").forEach((link) => {
        const linkPath = new URL(link.href).pathname;

        link.classList.toggle("active", linkPath === currentPath);
    });


    /* ================================
       NAVBAR SCROLL EFFECT
    ================================ */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });


    /* ================================
       SMOOTH INTERNAL SCROLL
    ================================ */

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {

            const targetId = anchor.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    });

});