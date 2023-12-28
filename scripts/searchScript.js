const links = [
    {
        query: [
            "ліс",
            "лісовик",
            "лісовий істота",
            "чарівне створіння лісу",
            "лісовий дух",
            "лісний захисник",
            "пошук лісовика",
            "міфічний лісний житель",
        ],
        title: "Лісовик",
    },
    {
        query: [
            "вовкулак",
            "людина-вовк",
            "оберіг від вовкулака",
            "перетворення в вовкулака",
            "міф про вовкулака",
            "вовкулак в легендах",
            "як розпізнати вовкулака",
        ],
        title: "Вовкулака",
    },
    {
        query: [
            "чугайстер",
            "міф про Чугайстера",
            "що таке Чугайстер",
            "пошук Чугайстера",
            "Чугайстер в легендах",
            "знаряддя для ловлі Чугайстера",
        ],
        title: "Чугайстер",
    },
    {
        query: [
            "Мавка",
            "українська міфологія Мавка",
            "Мавка в лісових легендах",
            "міфічна створіння Мавка",
            "походження Мавки",
            "Мавка як лісова нимфа",
        ],
        title: "Мавка",
    },
    {
        query: [
            "стратим-птиця",
            "міф про Сирін",
            "що таке Сирін",
            "Сирін у російській міфології",
            "легенди про Сирін",
            "вплив пісень Сирін на людей",
        ],
        title: "Стратим-птиця",
    },
    {
        query: [
            "болотник",
            "болотниця",
            "Болотник у слав'янській міфології",
            "Болотниця в легендах",
            "міф про Болотника та Болотницю",
            "характеристика Болотника",
            "слав'янські легенди про Болотника та Болотницю",
        ],
        title: "Болотник та Болотниця",
    },
    {
        query: [
            "потерчата опис",
            "міф потерчата",
            "потерчата легенди",
            "потерчата українські істоти",
            "потерчата фольклор",
            "потерчата українська міфологія",
            "потерчата казки",
            "потерчата оповідання",
            "потерчата вірування",
            "потерчата традиції",
        ],
        title: "Потерчата",
    },
    {
        query: [
            "гамаюн опис",
            "міф гамаюна",
            "гамаюн легенди",
            "гамаюн українська міфологія",
            "гамаюн фольклор",
            "гамаюн казки",
            "гамаюн оповідання",
            "гамаюн вірування",
            "гамаюн традиції",
        ],
        title: "Гамаюн",
    },
    {
        query: [
            "самодіви",
            "міф самодів",
            "самодіви легенди",
            "самодіви українська міфологія",
            "самодіви фольклор",
            "самодіви казки",
            "самодіви оповідання",
            "самодіви вірування",
            "самодіви традиції",
        ],
        title: "Самодіви",
    },
    {
        query: [
            "домовик",
            "міф домовика",
            "домовик легенди",
            "домовик українська міфологія",
            "домовик фольклор",
            "домовик казки",
            "домовик оповідання",
            "домовик вірування",
            "домовик традиції",
        ],
        title: "Домовик",
    },
    {
        query: [
            "босоркун",
            "міф босоркун",
            "босоркун легенди",
            "босоркун українська міфологія",
            "босоркун фольклор",
            "босоркун казки",
            "босоркун оповідання",
            "босоркун вірування",
            "босоркун традиції",
        ],
        title: "Босоркун",
    },
    {
        query: [
            "польовик",
            "міф польовика",
            "польовик легенди",
            "польовик українська міфологія",
            "польовик фольклор",
            "польовик казки",
            "польовик оповідання",
            "польовик вірування",
            "польовик традиції",
        ],
        title: "Польовик",
    },
    {
        query: [
            "ліс",
            "лісовий",
            "лісовий гриць",
            "міф лісового гриця",
            "лісовий гриць легенди",
            "лісовий гриць українська міфологія",
            "лісовий гриць фольклор",
            "лісовий гриць казки",
            "лісовий гриць оповідання",
            "лісовий гриць вірування",
            "лісовий гриць традиції",
        ],
        title: "Лісовий Гриць",
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
                    document.querySelector(".searchBar input").value = "";
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
