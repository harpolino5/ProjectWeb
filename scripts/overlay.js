let data = [
    {
        name: "Лісовик",
        img: "../assets/images/Лісові_міфічні_істоти.png",
        text: `<h2>Звір цікавий</h2>
        <p>Або ж ні</p>
        `,
    },
    {
        name: "Вовкулаку",
        img: "../assets/images/Лісові_міфічні_істоти.png",
        text: "dssdfsdf",
    },
];

document.querySelector(".closeBtn").addEventListener("click", () => {
    gsap.to(".overlay", {
        opacity: "0",
        x: "-100vw",
        duration: 0.3,
    });
    setTimeout(
        () => (document.querySelector(".overlay").style.display = "none"),
        1000
    );
});

document.querySelectorAll(".item").forEach((el) => {
    el.addEventListener("click", (e) => {
        let item = e.target.parentElement;
        if (e.target.classList.contains("item")) item = e.target;
        let name = item.querySelector("h2").innerHTML;
        let info = data.find((i) => i.name == name);
        if (info) {
            document.querySelector(".overlay").style.display = "flex";
            document.querySelector(".overlay .name").innerHTML = info.name;
            document.querySelector(".overlay .overImg").src = info.img;
            document.querySelector(".overlay .text").innerHTML = info.text;
            gsap.from(".overlay", {
                opacity: "0",
                x: "-100vw",
            });
            gsap.to(".overlay", {
                opacity: "1",
                x: "0",
                duration: 0.5,
            });
        }
    });
});
