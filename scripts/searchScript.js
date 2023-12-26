const links = [
    {
        query: ["лісовик", "ліс"],
        title: "Лісовик",
    },
    {
        query: ["вовкулаку", "вовк"],
        title: "Вовкулаку",
    },
];

document
    .querySelector(".searchBar input")
    .addEventListener("input", (event) => {
        let list = document.querySelector(".searchList");
        let query = event.target.value.toLowerCase();
        let queryArray = query.split(" ");
        if (query.length) {
            let items = [];
            queryArray.forEach((word) => {
                items.push(
                    ...links.filter((el) => {
                        return el.query.find((item) => item == word);
                    })
                );
            });

            if (items.length) list.style.display = "flex";
            else list.style.display = "none";
            list.innerHTML = "";
            if (items.length > 10) items.length = 10;
            items.forEach((el) => {
                let span = document.createElement("span");
                let linkElem = document.createElement("a");
                linkElem.addEventListener("click", () => {
                    document.querySelector(".searchBar input").value = ""
                    list.style.display = "none";
                    openOverlay(el.title);
                });
                linkElem.innerText = el.title;
                span.append(linkElem);
                list.append(span);
            });
        } else {
            list.style.display = "none";
        }
    });
