document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       SCROLL REVEAL ANIMATION
    ================================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const triggerPoint = window.innerHeight * 0.85;

        revealElements.forEach((element) => {
            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                element.classList.add("active");
            }
        });
    };

    revealOnScroll();

    window.addEventListener(
        "scroll",
        revealOnScroll,
        { passive: true }
    );


    /* ================================
       HERO PARALLAX EFFECT
    ================================= */

    const hero = document.querySelector(".hero");
    const glowOne = document.querySelector(".glow-one");
    const glowTwo = document.querySelector(".glow-two");

    if (hero && glowOne && glowTwo) {

        hero.addEventListener("mousemove", (event) => {

            const x =
                event.clientX / window.innerWidth - 0.5;

            const y =
                event.clientY / window.innerHeight - 0.5;

            glowOne.style.transform =
                `translate(${x * 35}px, ${y * 35}px)`;

            glowTwo.style.transform =
                `translate(${x * -25}px, ${y * -25}px)`;

        });

    }

});