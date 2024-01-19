// ! Включаємо звук сови
document.querySelector("header").addEventListener("click", () => {
    new Audio("assets/audio/owl-hooting-48028.mp3").play(); // браунери не дозволяють автоматично вмикати довелося робити на клік
});

// ! Налаштування анімації виїзду блоків з категоріями
gsap.registerPlugin(ScrollTrigger); // Налаштовуємо плагін GSAP
gsap.from(".item:nth-child(2n+1)", {
    x: "-100vh",
});
// Задаємо початок анімації блоків з категоріями
gsap.from(".item:nth-child(2n)", {
    x: "100vh",
});

gsap.to(".item:nth-child(1), .item:nth-child(2)", {
    // Анімація для перших двох блоків при догортанні до них
    scrollTrigger: {
        trigger: ".item:nth-child(1)", // спрацьовую при догортанні до першого елемента
        start: "top 100%", // влючаємо виїзд блоків як тільки користувач до них догортав
        end: "bottom", // закінчення анімації
        toggleActions: "restart", // подія при повторному догортанні повторити виїзд
    },
    x: "0", //полодення куди переїде блок
    duration: 1, // тривалість анімації в секундах
});

gsap.to(".item:nth-child(3), .item:nth-child(4)", {
    scrollTrigger: {
        trigger: ".item:nth-child(3)",
        start: "top 100%",
        end: "bottom",
        toggleActions: "restart",
    },
    x: "0",
    duration: 1,
});
