const menuBtn = document.querySelector(".header__burger-btn");
const sidebar = document.querySelector(".sidebar");


menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active-btn");
});
