document.querySelector("header").addEventListener("click", () => {
    new Audio("assets/audio/owl-hooting-48028.mp3").play();
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".item:nth-child(2n+1)", {
    x: "-100vh",
});
gsap.from(".item:nth-child(2n)", {
    x: "100vh",
});

gsap.to(".item:nth-child(1), .item:nth-child(2)", {
    scrollTrigger: {
        trigger: ".item:nth-child(1)",
        start: "top 100%",
        end: "bottom",
        // markers: true,
        // scrub: true,
        toggleActions: "restart pause reverse pause",
    },
    x: "0",
    duration: 1,
});

gsap.to(".item:nth-child(3), .item:nth-child(4)", {
    scrollTrigger: {
        trigger: ".item:nth-child(3)",
        start: "top 100%",
        end: "bottom",
        // markers: true,
        // scrub: true,
        toggleActions: "restart pause reverse pause",
    },
    x: "0",
    duration: 1,
});
