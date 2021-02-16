const body = document.querySelector("body");

const menuBtn = document.querySelector(".header__burger-btn");
const headerOther = document.querySelector(".header__other");
const sidebar = document.querySelector(".sidebar");

const btnsRegistration = document.querySelectorAll(".link-registration");
const btnsSign = document.querySelectorAll(".link-sign-in");
const closeBtnRegistration_Sign = document.querySelector(".window-registration-close-btn");

let block_is_lockingPaddings = document.querySelectorAll(".lock-padding");

const windowRegistration = document.querySelector(".window-registration");

let timeout = 600;


menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active-btn");
});

check_WindowResize_for_HeaderOther()

window.addEventListener("resize", check_WindowResize_for_HeaderOther);

// Итерируем, так как кнопки регистрации и войти содержат один и тот же класс но в разных элементах
btnsRegistration.forEach(btnRegistration => {
    btnRegistration.addEventListener("click", function() {
        const lockPaddingScroll = window.innerWidth - document.querySelector(".window-registration").offsetWidth + "px";

        windowRegistration.classList.toggle("registration-open");

        if (block_is_lockingPaddings.length > 0) {
            for (let index = 0; index < block_is_lockingPaddings.length; index++) {
                const elementLock = block_is_lockingPaddings[index];
                elementLock.style.paddingRight = lockPaddingScroll;
            };
        };

        body.style.paddingRight = lockPaddingScroll;
        body.classList.add("lock");
    });
});

btnsSign.forEach(btnSign => {
    btnSign.addEventListener("click", function() {
        console.log("Hello 2");
    });
});

closeBtnRegistration_Sign.addEventListener("click", function() {
    windowRegistration.classList.toggle("registration-open");

    setTimeout(clearRightPadding, timeout);
});


function check_WindowResize_for_HeaderOther() {
    if (window.innerWidth < 821) {
        headerOther.classList.add("lock-padding");
    }

    else if (window.innerWidth > 821) {
        headerOther.classList.remove("lock-padding");
    };
    console.log(1)
    block_is_lockingPaddings = document.querySelectorAll(".lock-padding");
};

function clearRightPadding() {
    if (block_is_lockingPaddings.length > 0) {
        for (let index = 0; index < block_is_lockingPaddings.length; index++) {
            const elementLock = block_is_lockingPaddings[index];
            elementLock.style.paddingRight = "0px";
        };
    };

    body.style.paddingRight = "0px";
    body.classList.remove("lock");
};
