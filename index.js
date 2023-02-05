updatePrice = () => {
    let slct = document.getElementsByName("type");
    let selectNow = slct[0];

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (selectNow.value === "2" ? "block" : "none");

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (selectNow.value === "3" ? "block" : "none");

    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(selectNow.value) - 1;
    price = prices.types[priceIndex];
    let propertiesice = document.getElementById("result");

    let options = document.getElementsByName("options");
    let op = 0;
    if (selectNow.value === "2") {
        options.forEach((radio) => {
            if (radio.checked) {
                op = prices.options[radio.value];
            }
        });
    } else {
        options.forEach((radio) => {
            if (radio.checked) {
                radio.checked = false;
            }
        });
    }

    let properties = document.getElementsByName("properties");
    let pr = 0;
    if (selectNow.value === "3") {
        properties.forEach((checkbox) => {
            if (checkbox.checked) {
                pr += prices.properties[checkbox.value];
            }
        });
    } else {
        properties.forEach((checkbox) => {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
    }

    let count = document.getElementsByName("count");
    let regexp = /\D/;
    if (regexp.test(String(count[0].value))) {
        propertiesice.innerHTML = "Введите число";
    } else {
        propertiesice.innerHTML = (price + pr + op) * count[0].value + " рублей";
    }
}


getPrices = () => {
    return {
        options: {
            op1: 10,
            op2: 20
        },
        properties: {
            pr1: 5,
            pr2: 10,
            pr3: 15
        },
        types: [10, 20, 30]
    };
}


window.addEventListener("DOMContentLoaded", (e) => {

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = "none";

    let s = document.getElementsByName("type");
    let select = s[0];

    select.addEventListener("change", updatePrice);

    let options = document.getElementsByName("options");
    options.forEach((radio) => {
        radio.addEventListener("change", updatePrice);
    });

    let properties = document.getElementsByName("properties");
    properties.forEach((checkbox) => {
        checkbox.addEventListener("change", updatePrice);
    });

    let count = document.getElementsByName("count");
    count[0].addEventListener("input", updatePrice);
});