const btnRegistration_Sign = document.querySelectorAll(".header__other__item-link");

const btnRegistration = btnRegistration_Sign[0];
const btnSign = btnRegistration_Sign[1];


btnRegistration.addEventListener("click", function() {
    console.log("Hello 1");
});

btnSign.addEventListener("click", function() {
    console.log("Hello 2");
});

