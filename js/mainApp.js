const menuBtn = document.querySelector(".header__burger-btn");
const sidebar = document.querySelector(".sidebar");

const btnRegistration = document.querySelectorAll(".link-registration");
const btnSign = document.querySelectorAll(".link-sign-in");


menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active-btn");
});

// Итерируем, так как кнопки регистрации и войти содержат один и тот же класс но в разных
// элементах
btnRegistration.forEach(btnRegistration => {
    btnRegistration.addEventListener("click", function() {
        console.log("Hello 1");
    })
});

btnSign.forEach(btnSign => {
    btnSign.addEventListener("click", function() {
        console.log("Hello 2");
    })
});