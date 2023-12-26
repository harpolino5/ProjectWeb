gsap.registerPlugin(ScrollTrigger);
gsap.from(".item", {
    opacity: 0,
    y: "100%",
});

let items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
    gsap.to(items[i], {
        scrollTrigger: {
            trigger: ".tiles",
            start: "top 100%",
            end: "bottom",
            // markers: true,
            // scrub: true,
            toggleActions: "restart pause none pause",
        },
        delay: i * 0.5,
        opacity: 1,
        y: "0",
        duration: 1,
    });
}
