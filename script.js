document.querySelector("header").addEventListener("click", ()=>{
  new Audio("assets/audio/owl-hooting-48028.mp3").play()
})

gsap.registerPlugin(ScrollTrigger) 
gsap.to(".item", {
    scrollTrigger: {
        trigger: ".item",
        start: "top 80%",
        end: "bottom",
        markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause"
    },
    x: "50vw",
    backgroundColor: "red",
    duration: 3,
    // rotation: 180,
    // ease: "elastic.inOut(1,0.4)"
  });







