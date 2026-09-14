document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       SCROLL REVEAL ANIMATION
    ================================= */

    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((element) => {
        const pills = element.querySelectorAll(".skill-pill");

        pills.forEach((pill, index) => {
            pill.style.setProperty(
                "--pill-delay",
                `${Math.min(index * 0.05, 0.6)}s`
            );
        });
    });

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
       SCROLL PROGRESS BAR
    ================================= */

    const progressBar = document.querySelector(".scroll-progress");

    if (progressBar) {

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            progressBar.style.width = `${progress}%`;
        };

        updateProgress();

        window.addEventListener(
            "scroll",
            updateProgress,
            { passive: true }
        );
    }


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