function calculatorModule() {
    const result = document.querySelector(".calculating__result span");
    let gender, height, weight, age, ratio;

    function initStartSettings(key, value, variable) {
        if (localStorage.getItem(key)) {
            variable = localStorage.getItem(key)
        } else {
            variable = value;
            localStorage.setItem(key, value);
        }
    }

    initStartSettings("gender", "female", gender);
    initStartSettings("ratio", 1.375, ratio);



    // if (localStorage.getItem("gender")) {
    // 	gender = localStorage.getItem("gender");
    // } else {
    // 	gender = "female";
    // 	localStorage.setItem("gender", "female");
    // }

    // if (localStorage.getItem("ratio")) {
    // 	ratio = localStorage.getItem("ratio");
    // } else {
    // 	ratio = 1.375;
    // 	localStorage.setItem("ratio", 1.375);
    // }


    function calcTotal() {
        if (!gender || !height || !weight || !age || !ratio) {
            result.textContent = "______";
            return;
        }

        if (gender === "female") {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else if (gender === "male") {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        } else {
            result.textContent = "_____";
        }
    }

    calcTotal();

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);

            if (elem.getAttribute("id") === localStorage.getItem("gender")) {
                elem.classList.add(activeClass);
            }

            if (elem.dataset.ratio === localStorage.getItem("ratio")) {
                elem.classList.add(activeClass);
            }
        })
    }

    initLocalSettings("#gender div", "calculating__choose-item_active");
    initLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener("click", (e) => {
                if (e.target.dataset.ratio) {
                    ratio = parseFloat(e.target.dataset.ratio);
                    localStorage.setItem("ratio", parseFloat(e.target.dataset.ratio));
                } else {
                    gender = e.target.getAttribute("id");
                    localStorage.setItem("gender", e.target.getAttribute("id"));
                }

                elements.forEach(elem => elem.classList.remove(activeClass));
                e.target.classList.add(activeClass);
                calcTotal();
            });
        })
    }

    getStaticInformation("#gender div", "calculating__choose-item_active");
    getStaticInformation(".calculating__choose_big div", "calculating__choose-item_active");

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener("input", () => {
            if (input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = "none";
            }

            switch (input.getAttribute("id")) {
                case "height":
                    height = parseFloat(input.value);
                    break;
                case "weight":
                    weight = parseFloat(input.value);
                    break;
                case "age":
                    age = parseFloat(input.value);
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation("#height");
    getDynamicInformation("#weight");
    getDynamicInformation("#age");
}
module.exports = calculatorModule;