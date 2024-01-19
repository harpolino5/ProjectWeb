gsap.registerPlugin(ScrollTrigger); // Реєструємо плагін 
// Задаємо стартове положення блоків
gsap.from(".item", {
    opacity: 0, // робимо прозорими на початку
    y: "100%", // опускаємо донизу на всю їх висоту
});

let items = document.querySelectorAll(".item"); // знаходимо всі блоки окремо
for (let i = 0; i < items.length; i++) { // для поступово спрацювання анімації почергово задаємо їм затримку
    gsap.to(items[i], { // беремо по одному елементу
        scrollTrigger: {
            trigger: ".tiles", // спрацьвують як догортається до всіх блоків
            start: "top 100%", // на їх початку
            end: "bottom",
            toggleActions: "restart pause none pause", // Дії при входженні та виходженні з видимої області
        },
        delay: i * 0.5, // Затримка для кожного блоку
        opacity: 1, // Зміна прозорості до значення 1 (повна видимість)
        y: "0", // Переміщення блоку в вертикальному напрямку до положення "0"
        duration: 1, // Тривалість анімації
    });
}
